const HOST_IS_LITTLE_ENDIAN = (() => {
  const bytes = new Uint8Array(new Uint16Array([0x00ff]).buffer);
  return bytes[0] === 0xff;
})();

export const DEFAULT_WINDOW_LEVEL = Object.freeze({center: 666, width: 1310});
export const SLICE_PLANES = Object.freeze(['axial', 'coronal', 'sagittal']);

const PLANE_AXES = Object.freeze({
  axial: Object.freeze({fixed: 2, horizontal: 0, vertical: 1}),
  coronal: Object.freeze({fixed: 1, horizontal: 0, vertical: 2}),
  sagittal: Object.freeze({fixed: 0, horizontal: 1, vertical: 2}),
});

const TYPE_ALIASES = new Map([
  ['signed char', 'int8'],
  ['int8', 'int8'],
  ['int8_t', 'int8'],
  ['uchar', 'uint8'],
  ['unsigned char', 'uint8'],
  ['uint8', 'uint8'],
  ['uint8_t', 'uint8'],
  ['short', 'int16'],
  ['short int', 'int16'],
  ['signed short', 'int16'],
  ['signed short int', 'int16'],
  ['int16', 'int16'],
  ['int16_t', 'int16'],
  ['ushort', 'uint16'],
  ['unsigned short', 'uint16'],
  ['unsigned short int', 'uint16'],
  ['uint16', 'uint16'],
  ['uint16_t', 'uint16'],
  ['int', 'int32'],
  ['signed int', 'int32'],
  ['int32', 'int32'],
  ['int32_t', 'int32'],
  ['uint', 'uint32'],
  ['unsigned int', 'uint32'],
  ['uint32', 'uint32'],
  ['uint32_t', 'uint32'],
  ['float', 'float32'],
  ['double', 'float64'],
]);

const DATA_TYPES = Object.freeze({
  int8: {ArrayType: Int8Array, bytes: 1, read: (view, offset) => view.getInt8(offset)},
  uint8: {ArrayType: Uint8Array, bytes: 1, read: (view, offset) => view.getUint8(offset)},
  int16: {ArrayType: Int16Array, bytes: 2, read: (view, offset, little) => view.getInt16(offset, little)},
  uint16: {ArrayType: Uint16Array, bytes: 2, read: (view, offset, little) => view.getUint16(offset, little)},
  int32: {ArrayType: Int32Array, bytes: 4, read: (view, offset, little) => view.getInt32(offset, little)},
  uint32: {ArrayType: Uint32Array, bytes: 4, read: (view, offset, little) => view.getUint32(offset, little)},
  float32: {ArrayType: Float32Array, bytes: 4, read: (view, offset, little) => view.getFloat32(offset, little)},
  float64: {ArrayType: Float64Array, bytes: 8, read: (view, offset, little) => view.getFloat64(offset, little)},
});

function asBytes(source) {
  if (source instanceof ArrayBuffer) return new Uint8Array(source);
  if (ArrayBuffer.isView(source)) {
    return new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
  }
  throw new TypeError('NRRD source must be an ArrayBuffer or ArrayBuffer view');
}

function throwIfAborted(signal) {
  if (!signal?.aborted) return;
  if (typeof signal.throwIfAborted === 'function') signal.throwIfAborted();
  const error = typeof DOMException === 'function'
    ? new DOMException('The NRRD load was aborted', 'AbortError')
    : Object.assign(new Error('The NRRD load was aborted'), {name: 'AbortError'});
  throw error;
}

function isGzip(bytes) {
  return bytes.byteLength >= 2 && bytes[0] === 0x1f && bytes[1] === 0x8b;
}

async function gunzip(bytes, signal) {
  throwIfAborted(signal);
  let nativeError = null;

  if (typeof DecompressionStream === 'function' && typeof Response === 'function') {
    try {
      const body = new Response(bytes).body;
      if (body) {
        const stream = body.pipeThrough(new DecompressionStream('gzip'));
        const result = new Uint8Array(await new Response(stream).arrayBuffer());
        throwIfAborted(signal);
        return result;
      }
    } catch (error) {
      throwIfAborted(signal);
      nativeError = error;
    }
  }

  try {
    // Three.js already ships this browser-safe fflate build, so no new runtime
    // package is needed on browsers without DecompressionStream.
    const {gunzipSync} = await import('three/addons/libs/fflate.module.js');
    throwIfAborted(signal);
    const result = gunzipSync(bytes);
    throwIfAborted(signal);
    return result;
  } catch (fallbackError) {
    throwIfAborted(signal);
    const error = new Error('Unable to decompress the gzip-encoded NRRD');
    error.cause = fallbackError;
    if (nativeError) error.nativeCause = nativeError;
    throw error;
  }
}

function findHeader(bytes) {
  let headerLength = -1;
  let dataOffset = -1;

  for (let index = 0; index < bytes.length - 1; index += 1) {
    if (bytes[index] === 0x0a && bytes[index + 1] === 0x0a) {
      headerLength = index;
      dataOffset = index + 2;
      break;
    }
    if (
      index + 3 < bytes.length
      && bytes[index] === 0x0d
      && bytes[index + 1] === 0x0a
      && bytes[index + 2] === 0x0d
      && bytes[index + 3] === 0x0a
    ) {
      headerLength = index;
      dataOffset = index + 4;
      break;
    }
  }

  if (dataOffset < 0) throw new Error('Invalid NRRD: the header terminator is missing');

  const text = new TextDecoder('ascii').decode(bytes.subarray(0, headerLength));
  const lines = text.split(/\r?\n/);
  const magic = lines.shift()?.trim();
  if (!/^NRRD\d{4}$/.test(magic || '')) {
    throw new Error('Invalid NRRD: missing NRRD magic/version line');
  }

  const fields = Object.create(null);
  const customFields = Object.create(null);
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;

    const customSeparator = line.indexOf(':=');
    if (customSeparator > 0) {
      customFields[line.slice(0, customSeparator).trim()] = line.slice(customSeparator + 2).trim();
      continue;
    }

    const separator = line.indexOf(':');
    if (separator <= 0) throw new Error(`Invalid NRRD header line: ${rawLine}`);
    fields[line.slice(0, separator).trim().toLowerCase()] = line.slice(separator + 1).trim();
  }

  return {magic, fields, customFields, dataOffset};
}

function requiredField(fields, name) {
  const value = fields[name];
  if (value == null || value === '') throw new Error(`Invalid NRRD: missing ${name} field`);
  return value;
}

function parsePositiveIntegers(value, name) {
  const values = value.trim().split(/\s+/).map(Number);
  if (!values.length || values.some((item) => !Number.isSafeInteger(item) || item <= 0)) {
    throw new Error(`Invalid NRRD ${name}: ${value}`);
  }
  return values;
}

function parseVector(value, name) {
  const match = /^\(\s*([^)]*?)\s*\)$/.exec(value.trim());
  if (!match) throw new Error(`Invalid NRRD ${name}: ${value}`);
  const vector = match[1].split(',').map((component) => Number(component.trim()));
  if (vector.length !== 3 || vector.some((component) => !Number.isFinite(component))) {
    throw new Error(`Invalid NRRD ${name}: ${value}`);
  }
  return vector;
}

function parseSpaceDirections(value, dimension) {
  const tokens = value.match(/none|\([^)]*\)/gi) || [];
  if (tokens.length !== dimension) {
    throw new Error(`Invalid NRRD space directions: expected ${dimension} vectors`);
  }
  return tokens.map((token) => token.toLowerCase() === 'none' ? null : parseVector(token, 'space directions'));
}

function vectorLength(vector) {
  return Math.hypot(vector[0], vector[1], vector[2]);
}

function parseSpaceAxisNames(space) {
  const words = (space || '').toLowerCase().match(/right|left|anterior|posterior|superior|inferior/g);
  if (words?.length === 3) return words.map((word) => word[0].toUpperCase());

  const code = (space || '').toUpperCase().replace(/[^RLAPSI]/g, '');
  return code.length === 3 ? [...code] : null;
}

function spaceToRasBasis(space) {
  const axes = parseSpaceAxisNames(space);
  if (!axes) return [[1, 0, 0], [0, 1, 0], [0, 0, 1]];

  const basis = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  const used = new Set();
  for (let sourceAxis = 0; sourceAxis < 3; sourceAxis += 1) {
    const name = axes[sourceAxis];
    const targetAxis = name === 'R' || name === 'L' ? 0 : name === 'A' || name === 'P' ? 1 : 2;
    if (used.has(targetAxis)) return [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    used.add(targetAxis);
    basis[targetAxis][sourceAxis] = name === 'L' || name === 'P' || name === 'I' ? -1 : 1;
  }
  return basis;
}

function transformVector(matrix, vector) {
  return matrix.map((row) => row[0] * vector[0] + row[1] * vector[1] + row[2] * vector[2]);
}

function spatialMetadata(fields, dimensions) {
  const space = fields.space || 'right-anterior-superior';
  const spacings = fields.spacings
    ? fields.spacings.trim().split(/\s+/).map(Number)
    : dimensions.map(() => 1);
  if (spacings.length !== 3 || spacings.some((value) => !Number.isFinite(value) || value <= 0)) {
    throw new Error(`Invalid NRRD spacings: ${fields.spacings}`);
  }

  const spaceDirections = fields['space directions']
    ? parseSpaceDirections(fields['space directions'], 3)
    : [
        [spacings[0], 0, 0],
        [0, spacings[1], 0],
        [0, 0, spacings[2]],
      ];

  if (spaceDirections.some((direction) => direction == null)) {
    throw new Error('NRRD volumes with non-spatial axes are not supported');
  }

  const spaceOrigin = fields['space origin']
    ? parseVector(fields['space origin'], 'space origin')
    : [0, 0, 0];
  const spacingMm = spaceDirections.map(vectorLength);
  const toRas = spaceToRasBasis(space);
  const rasDirections = spaceDirections.map((direction) => transformVector(toRas, direction));
  const rasOrigin = transformVector(toRas, spaceOrigin);
  const ijkToRas = [
    rasDirections[0][0], rasDirections[1][0], rasDirections[2][0], rasOrigin[0],
    rasDirections[0][1], rasDirections[1][1], rasDirections[2][1], rasOrigin[1],
    rasDirections[0][2], rasDirections[1][2], rasDirections[2][2], rasOrigin[2],
    0, 0, 0, 1,
  ];

  return {space, spaceDirections, spaceOrigin, spacingMm, ijkToRas};
}

function parseDataType(typeName) {
  const alias = TYPE_ALIASES.get(typeName.toLowerCase().replace(/\s+/g, ' ').trim());
  if (!alias) throw new Error(`Unsupported NRRD scalar type: ${typeName}`);
  return {name: alias, ...DATA_TYPES[alias]};
}

function decodeData(payload, voxelCount, descriptor, endian, byteSkip) {
  if (!Number.isSafeInteger(byteSkip) || byteSkip < 0) {
    throw new Error('NRRD byte skip must be a non-negative integer');
  }

  const byteLength = voxelCount * descriptor.bytes;
  if (!Number.isSafeInteger(byteLength) || payload.byteLength - byteSkip < byteLength) {
    throw new Error(`Invalid NRRD payload: expected ${byteLength} bytes, received ${Math.max(0, payload.byteLength - byteSkip)}`);
  }

  const bytes = payload.subarray(byteSkip, byteSkip + byteLength);
  const buffer = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
  if (descriptor.bytes === 1 || (endian === 'little') === HOST_IS_LITTLE_ENDIAN) {
    return new descriptor.ArrayType(buffer);
  }

  const output = new descriptor.ArrayType(voxelCount);
  const view = new DataView(buffer);
  const littleEndian = endian === 'little';
  for (let index = 0; index < voxelCount; index += 1) {
    output[index] = descriptor.read(view, index * descriptor.bytes, littleEndian);
  }
  return output;
}

function storedRange(data) {
  let minimum = Infinity;
  let maximum = -Infinity;
  for (let index = 0; index < data.length; index += 1) {
    const value = data[index];
    if (!Number.isFinite(value)) continue;
    if (value < minimum) minimum = value;
    if (value > maximum) maximum = value;
  }
  return minimum === Infinity ? [0, 0] : [minimum, maximum];
}

function finiteNumber(value, fallback, name) {
  const resolved = value ?? fallback;
  if (!Number.isFinite(resolved)) throw new TypeError(`${name} must be a finite number`);
  return resolved;
}

function resolveWindow(options = {}) {
  const nested = options.window && typeof options.window === 'object'
    ? options.window
    : options.windowLevel && typeof options.windowLevel === 'object'
      ? options.windowLevel
      : null;
  const center = finiteNumber(
    options.center ?? options.level ?? options.windowCenter
      ?? (typeof options.windowLevel === 'number' ? options.windowLevel : null)
      ?? nested?.center ?? nested?.level,
    DEFAULT_WINDOW_LEVEL.center,
    'window center',
  );
  const width = finiteNumber(options.width ?? options.windowWidth ?? nested?.width, DEFAULT_WINDOW_LEVEL.width, 'window width');
  if (width <= 0) throw new RangeError('window width must be greater than zero');
  return {center, width};
}

export function renderWindowLevelRGBA(values, options = {}) {
  if (!ArrayBuffer.isView(values)) throw new TypeError('Window/level input must be a typed array');
  const {center, width} = resolveWindow(options);
  const lower = center - width / 2;
  const scale = 255 / width;
  const rgba = new Uint8ClampedArray(values.length * 4);

  for (let index = 0; index < values.length; index += 1) {
    const value = Math.round((values[index] - lower) * scale);
    const gray = value <= 0 ? 0 : value >= 255 ? 255 : value;
    const target = index * 4;
    rgba[target] = gray;
    rgba[target + 1] = gray;
    rgba[target + 2] = gray;
    rgba[target + 3] = 255;
  }
  return rgba;
}

function normalizeChannel(value, normalized) {
  const scaled = normalized ? Number(value) * 255 : Number(value);
  return Math.max(0, Math.min(255, Math.round(scaled)));
}

function normalizeColor(color) {
  if (typeof color === 'string') {
    const match = /^#([\da-f]{6}|[\da-f]{8})$/i.exec(color.trim());
    if (!match) return null;
    return [
      Number.parseInt(match[1].slice(0, 2), 16),
      Number.parseInt(match[1].slice(2, 4), 16),
      Number.parseInt(match[1].slice(4, 6), 16),
      match[1].length === 8 ? Number.parseInt(match[1].slice(6, 8), 16) : 255,
    ];
  }

  const values = Array.isArray(color) || ArrayBuffer.isView(color)
    ? [...color]
    : color && typeof color === 'object'
      ? [color.r, color.g, color.b, color.a ?? 255]
      : null;
  if (!values || values.length < 3 || values.slice(0, 3).some((value) => !Number.isFinite(Number(value)))) return null;
  const normalized = values.slice(0, 3).every((value) => Number(value) >= 0 && Number(value) <= 1);
  const alphaNormalized = values[3] != null && Number(values[3]) >= 0 && Number(values[3]) <= 1;
  return [
    normalizeChannel(values[0], normalized),
    normalizeChannel(values[1], normalized),
    normalizeChannel(values[2], normalized),
    values[3] == null ? 255 : normalizeChannel(values[3], alphaNormalized),
  ];
}

function labelColorLookup(colors) {
  if (typeof colors === 'function') return (label) => normalizeColor(colors(label));
  const lookup = new Map();

  if (colors instanceof Map) {
    for (const [label, color] of colors) lookup.set(Number(label), normalizeColor(color));
  } else if (Array.isArray(colors)) {
    for (let index = 0; index < colors.length; index += 1) {
      const entry = colors[index];
      if (entry == null) continue;
      if (entry && typeof entry === 'object' && !Array.isArray(entry) && !ArrayBuffer.isView(entry)) {
        const label = entry.labelValue ?? entry.value ?? entry.id;
        const color = entry.rgba ?? entry.color ?? entry.rgb;
        if (label != null && color != null) lookup.set(Number(label), normalizeColor(color));
      } else {
        lookup.set(index, normalizeColor(entry));
      }
    }
  } else if (colors && typeof colors === 'object') {
    for (const [label, color] of Object.entries(colors)) lookup.set(Number(label), normalizeColor(color));
  }

  return (label) => lookup.get(label) || null;
}

function nearestSourceCoordinate(target, targetLength, sourceLength) {
  return Math.min(sourceLength - 1, Math.floor(((target + 0.5) * sourceLength) / targetLength));
}

function assertPlane(plane) {
  const axes = PLANE_AXES[plane];
  if (!axes) throw new RangeError(`Unknown slice plane: ${plane}`);
  return axes;
}

function assertIntegerInRange(value, length, name) {
  if (!Number.isInteger(value) || value < 0 || value >= length) {
    throw new RangeError(`${name} must be an integer from 0 through ${length - 1}`);
  }
}

export class NrrdVolume {
  constructor({
    data,
    dimensions,
    type,
    nrrdType,
    endian,
    encoding,
    space,
    spaceDirections,
    spaceOrigin,
    spacingMm,
    ijkToRas,
    range,
    header,
  }) {
    this.data = data;
    this.dimensions = Object.freeze([...dimensions]);
    this.type = type;
    this.nrrdType = nrrdType;
    this.endian = endian;
    this.encoding = encoding;
    this.space = space;
    this.spaceDirections = Object.freeze(spaceDirections.map((direction) => Object.freeze([...direction])));
    this.spaceOrigin = Object.freeze([...spaceOrigin]);
    this.spacingMm = Object.freeze([...spacingMm]);
    this.ijkToRas = Object.freeze([...ijkToRas]);
    this.storedRange = Object.freeze([...range]);
    this.header = Object.freeze({...header});
  }

  get disposed() {
    return this.data == null;
  }

  dispose() {
    this.data = null;
  }

  getPlaneLength(plane) {
    return this.dimensions[assertPlane(plane).fixed];
  }

  getPlaneShape(plane) {
    const axes = assertPlane(plane);
    return Object.freeze({
      width: this.dimensions[axes.horizontal],
      height: this.dimensions[axes.vertical],
    });
  }

  sliceToIJK(plane, sliceIndex, x, y) {
    const axes = assertPlane(plane);
    const {width, height} = this.getPlaneShape(plane);
    assertIntegerInRange(sliceIndex, this.dimensions[axes.fixed], 'slice index');
    assertIntegerInRange(x, width, 'slice x');
    assertIntegerInRange(y, height, 'slice y');
    const ijk = [0, 0, 0];
    ijk[axes.fixed] = sliceIndex;
    ijk[axes.horizontal] = x;
    ijk[axes.vertical] = y;
    return ijk;
  }

  getIJK(plane, sliceIndex, x, y) {
    return this.sliceToIJK(plane, sliceIndex, x, y);
  }

  getValueAtIJK(i, j, k) {
    if (this.disposed) throw new Error('The NRRD volume has been disposed');
    assertIntegerInRange(i, this.dimensions[0], 'i');
    assertIntegerInRange(j, this.dimensions[1], 'j');
    assertIntegerInRange(k, this.dimensions[2], 'k');
    return this.data[i + this.dimensions[0] * (j + this.dimensions[1] * k)];
  }

  voxelToRas(i, j, k) {
    const matrix = this.ijkToRas;
    return [
      matrix[0] * i + matrix[1] * j + matrix[2] * k + matrix[3],
      matrix[4] * i + matrix[5] * j + matrix[6] * k + matrix[7],
      matrix[8] * i + matrix[9] * j + matrix[10] * k + matrix[11],
    ];
  }

  getSlice(plane, sliceIndex) {
    if (this.disposed) throw new Error('The NRRD volume has been disposed');
    const axes = assertPlane(plane);
    const {width, height} = this.getPlaneShape(plane);
    assertIntegerInRange(sliceIndex, this.dimensions[axes.fixed], 'slice index');
    const values = new Int16Array(width * height);
    const strides = [1, this.dimensions[0], this.dimensions[0] * this.dimensions[1]];
    const baseOffset = sliceIndex * strides[axes.fixed];
    const horizontalStride = strides[axes.horizontal];
    const verticalStride = strides[axes.vertical];

    for (let y = 0; y < height; y += 1) {
      const rowOffset = baseOffset + y * verticalStride;
      for (let x = 0; x < width; x += 1) {
        const value = this.data[rowOffset + x * horizontalStride];
        values[x + width * y] = Math.max(-32768, Math.min(32767, Math.round(value)));
      }
    }

    return {
      plane,
      index: sliceIndex,
      width,
      height,
      data: values,
      originRas: this.voxelToRas(...this.sliceToIJK(plane, sliceIndex, 0, 0)),
      sliceToIJK: (x, y) => this.sliceToIJK(plane, sliceIndex, x, y),
    };
  }

  renderLabelSliceRGBA(plane, sliceIndex, options = {}) {
    const slice = this.getSlice(plane, sliceIndex);
    const width = options.width ?? slice.width;
    const height = options.height ?? slice.height;
    if (!Number.isInteger(width) || width <= 0 || !Number.isInteger(height) || height <= 0) {
      throw new RangeError('Label output width and height must be positive integers');
    }

    const colors = labelColorLookup(options.colors ?? options.colorMap ?? options.labelColors);
    const unknownColor = normalizeColor(options.unknownColor);
    const opacity = Math.max(0, Math.min(1, finiteNumber(options.opacity, 1, 'label opacity')));
    const rgba = new Uint8ClampedArray(width * height * 4);

    for (let y = 0; y < height; y += 1) {
      const sourceY = nearestSourceCoordinate(y, height, slice.height);
      for (let x = 0; x < width; x += 1) {
        const sourceX = nearestSourceCoordinate(x, width, slice.width);
        const label = slice.data[sourceX + slice.width * sourceY];
        const color = colors(label) || unknownColor;
        if (!color) continue;
        const target = (x + width * y) * 4;
        rgba[target] = color[0];
        rgba[target + 1] = color[1];
        rgba[target + 2] = color[2];
        rgba[target + 3] = Math.round(color[3] * opacity);
      }
    }

    return {
      plane,
      index: sliceIndex,
      width,
      height,
      data: rgba,
      rgba,
      format: 'rgba8',
      sliceToIJK: (x, y) => this.sliceToIJK(
        plane,
        sliceIndex,
        nearestSourceCoordinate(x, width, slice.width),
        nearestSourceCoordinate(y, height, slice.height),
      ),
    };
  }

  getLabelSlice(plane, sliceIndex, options = {}) {
    return this.renderLabelSliceRGBA(plane, sliceIndex, options);
  }

  renderSliceRGBA(plane, sliceIndex, options = {}) {
    const slice = this.getSlice(plane, sliceIndex);
    const rgba = renderWindowLevelRGBA(slice.data, options);
    const labelVolume = options.labelVolume ?? options.labels;

    if (labelVolume) {
      if (!(labelVolume instanceof NrrdVolume)) throw new TypeError('labelVolume must be an NrrdVolume');
      const overlay = labelVolume.renderLabelSliceRGBA(plane, options.labelIndex ?? sliceIndex, {
        width: slice.width,
        height: slice.height,
        colors: options.labelColors ?? options.colorMap,
        opacity: options.labelOpacity,
        unknownColor: options.unknownLabelColor,
      }).data;
      for (let index = 0; index < slice.width * slice.height; index += 1) {
        const offset = index * 4;
        const alpha = overlay[offset + 3] / 255;
        if (alpha === 0) continue;
        rgba[offset] = Math.round(overlay[offset] * alpha + rgba[offset] * (1 - alpha));
        rgba[offset + 1] = Math.round(overlay[offset + 1] * alpha + rgba[offset + 1] * (1 - alpha));
        rgba[offset + 2] = Math.round(overlay[offset + 2] * alpha + rgba[offset + 2] * (1 - alpha));
      }
    }

    return {
      ...slice,
      scalarData: slice.data,
      data: rgba,
      rgba,
      format: 'rgba8',
    };
  }
}

export async function parseNrrdVolume(source, {signal} = {}) {
  throwIfAborted(signal);
  let bytes = asBytes(source);
  if (isGzip(bytes)) bytes = await gunzip(bytes, signal);
  throwIfAborted(signal);

  const {magic, fields, customFields, dataOffset} = findHeader(bytes);
  const dimension = Number(requiredField(fields, 'dimension'));
  if (dimension !== 3) throw new Error(`Only 3D NRRD volumes are supported; received dimension ${dimension}`);

  const dimensions = parsePositiveIntegers(requiredField(fields, 'sizes'), 'sizes');
  if (dimensions.length !== dimension) {
    throw new Error(`Invalid NRRD sizes: expected ${dimension} dimensions, received ${dimensions.length}`);
  }
  const voxelCount = dimensions.reduce((count, size) => count * size, 1);
  if (!Number.isSafeInteger(voxelCount)) throw new Error('NRRD voxel count exceeds the safe integer range');

  const nrrdType = requiredField(fields, 'type');
  const descriptor = parseDataType(nrrdType);
  const encodingField = (fields.encoding || 'raw').toLowerCase().replace(/\s+/g, '');
  const encoding = encodingField === 'gz' || encodingField === 'gzip' ? 'gzip' : encodingField;
  if (encoding !== 'raw' && encoding !== 'gzip') {
    throw new Error(`Unsupported NRRD encoding: ${fields.encoding}`);
  }
  if (fields['data file']) throw new Error('Detached NRRD data files are not supported');

  let endian = (fields.endian || 'little').toLowerCase();
  if (descriptor.bytes === 1) endian = fields.endian?.toLowerCase() || null;
  if (descriptor.bytes > 1 && endian !== 'little' && endian !== 'big') {
    throw new Error(`Unsupported NRRD endian value: ${fields.endian}`);
  }

  let payload = bytes.subarray(dataOffset);
  if (encoding === 'gzip') payload = await gunzip(payload, signal);
  throwIfAborted(signal);

  const byteSkip = Number(fields['byte skip'] || 0);
  const data = decodeData(payload, voxelCount, descriptor, endian, byteSkip);
  const spatial = spatialMetadata(fields, dimensions);
  throwIfAborted(signal);

  return new NrrdVolume({
    data,
    dimensions,
    type: descriptor.name,
    nrrdType,
    endian,
    encoding,
    ...spatial,
    range: storedRange(data),
    header: {magic, ...fields, customFields},
  });
}

export default parseNrrdVolume;
