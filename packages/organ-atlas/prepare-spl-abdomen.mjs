import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {gunzipSync, gzipSync, inflateRawSync} from 'node:zlib';

export const OFFICIAL_ATLAS_PAGE = 'https://www.openanatomy.org/atlas-pages/atlas-spl-abdomen.html';
export const OFFICIAL_ARCHIVE_URL = 'https://www.openanatomy.org/atlases/nac/abdomen-2016-09.zip';
export const DEFAULT_CORE_LABEL_VALUES = Object.freeze([3, 4, 6, 7, 8, 9, 10, 12, 13, 51, 52]);
export const OUTPUT_NAMES = Object.freeze({
  ct: 'I.nrrd',
  segmentation: 'seg.nrrd',
  surfaces: 'spl-abdomen-core.glb.gz',
  manifest: 'spl-abdomen-manifest.json',
});

const RELEVANT_SOURCE_FILE = /(?:\.nrrd|\.mrml|\.ctbl|\.vtk|atlasStructure\.json)$/i;
const IDENTITY_MATRIX = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

export function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

function arraysClose(a, b, tolerance = 1e-6) {
  return a.length === b.length && a.every((value, index) => Math.abs(value - b[index]) <= tolerance);
}

function normalizeArchivePath(value) {
  const normalized = value.replaceAll('\\', '/').replace(/^\.\//, '');
  if (!normalized || normalized.startsWith('/') || normalized.split('/').some((part) => part === '..')) {
    throw new Error(`Unsafe archive path: ${value}`);
  }
  return normalized;
}

function decodedPath(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function findEndOfCentralDirectory(bytes) {
  const minimumOffset = Math.max(0, bytes.length - 65_557);
  for (let offset = bytes.length - 22; offset >= minimumOffset; offset -= 1) {
    if (bytes.readUInt32LE(offset) === 0x06054b50) return offset;
  }
  throw new Error('ZIP end-of-central-directory record was not found');
}

function zipEntries(bytes) {
  const eocd = findEndOfCentralDirectory(bytes);
  const disk = bytes.readUInt16LE(eocd + 4);
  const centralDisk = bytes.readUInt16LE(eocd + 6);
  const entryCount = bytes.readUInt16LE(eocd + 10);
  const centralOffset = bytes.readUInt32LE(eocd + 16);
  if (disk !== 0 || centralDisk !== 0) throw new Error('Multi-disk ZIP archives are not supported');
  if (entryCount === 0xffff || centralOffset === 0xffffffff) {
    throw new Error('ZIP64 archives are not supported; extract the atlas first and pass its directory');
  }

  const entries = [];
  let offset = centralOffset;
  for (let index = 0; index < entryCount; index += 1) {
    if (bytes.readUInt32LE(offset) !== 0x02014b50) throw new Error(`Invalid ZIP central-directory entry ${index}`);
    const flags = bytes.readUInt16LE(offset + 8);
    const method = bytes.readUInt16LE(offset + 10);
    const compressedSize = bytes.readUInt32LE(offset + 20);
    const uncompressedSize = bytes.readUInt32LE(offset + 24);
    const nameLength = bytes.readUInt16LE(offset + 28);
    const extraLength = bytes.readUInt16LE(offset + 30);
    const commentLength = bytes.readUInt16LE(offset + 32);
    const localOffset = bytes.readUInt32LE(offset + 42);
    const encoding = flags & 0x0800 ? 'utf8' : 'latin1';
    const name = normalizeArchivePath(bytes.subarray(offset + 46, offset + 46 + nameLength).toString(encoding));
    offset += 46 + nameLength + extraLength + commentLength;
    if (name.endsWith('/') || !RELEVANT_SOURCE_FILE.test(decodedPath(name))) continue;

    entries.push({
      name,
      size: uncompressedSize,
      async read() {
        if (flags & 1) throw new Error(`Encrypted ZIP entry is not supported: ${name}`);
        if (bytes.readUInt32LE(localOffset) !== 0x04034b50) throw new Error(`Invalid ZIP local header: ${name}`);
        const localNameLength = bytes.readUInt16LE(localOffset + 26);
        const localExtraLength = bytes.readUInt16LE(localOffset + 28);
        const dataOffset = localOffset + 30 + localNameLength + localExtraLength;
        const compressed = bytes.subarray(dataOffset, dataOffset + compressedSize);
        let result;
        if (method === 0) result = Buffer.from(compressed);
        else if (method === 8) result = inflateRawSync(compressed);
        else throw new Error(`Unsupported ZIP compression method ${method}: ${name}`);
        if (result.length !== uncompressedSize) {
          throw new Error(`ZIP size mismatch for ${name}: expected ${uncompressedSize}, got ${result.length}`);
        }
        return result;
      },
    });
  }
  return entries;
}

async function walkRelevantFiles(root, directory = root, result = []) {
  for (const dirent of await fs.readdir(directory, {withFileTypes: true})) {
    const absolute = path.join(directory, dirent.name);
    if (dirent.isDirectory()) await walkRelevantFiles(root, absolute, result);
    else if (dirent.isFile()) {
      const relative = path.relative(root, absolute).replaceAll(path.sep, '/');
      if (RELEVANT_SOURCE_FILE.test(decodedPath(relative))) {
        const stat = await fs.stat(absolute);
        result.push({name: relative, size: stat.size, read: () => fs.readFile(absolute)});
      }
    }
  }
  return result;
}

async function loadSource(input) {
  if (/^https?:\/\//i.test(input)) {
    let response;
    try {
      response = await fetch(input, {redirect: 'follow'});
    } catch (cause) {
      throw new Error(`Could not download source ZIP: ${input}`, {cause});
    }
    if (!response.ok) throw new Error(`Source ZIP request failed (${response.status} ${response.statusText})`);
    const declaredLength = Number(response.headers.get('content-length'));
    if (Number.isFinite(declaredLength) && declaredLength > 1_000_000_000) {
      throw new Error(`Refusing unexpectedly large source ZIP (${declaredLength} bytes)`);
    }
    const archive = Buffer.from(await response.arrayBuffer());
    return {
      kind: 'url-zip',
      input,
      resolvedUrl: response.url,
      archiveSha256: sha256(archive),
      archiveBytes: archive.length,
      entries: zipEntries(archive),
    };
  }

  const absolute = path.resolve(input);
  let stat;
  try {
    stat = await fs.stat(absolute);
  } catch (cause) {
    throw new Error(`Source does not exist: ${absolute}`, {cause});
  }
  if (stat.isDirectory()) {
    return {kind: 'directory', input: absolute, entries: await walkRelevantFiles(absolute)};
  }
  if (!stat.isFile() || path.extname(absolute).toLowerCase() !== '.zip') {
    throw new Error('Source must be an extracted atlas directory or a .zip file/URL');
  }
  const archive = await fs.readFile(absolute);
  return {
    kind: 'local-zip',
    input: absolute,
    archiveSha256: sha256(archive),
    archiveBytes: archive.length,
    entries: zipEntries(archive),
  };
}

function findEntry(source, requested, {basenameFallback = false} = {}) {
  const wanted = requested.replaceAll('\\', '/').replace(/^\.\//, '').toLowerCase();
  const matches = source.entries.filter((entry) => {
    const candidate = decodedPath(entry.name).replaceAll('\\', '/').toLowerCase();
    return candidate === wanted || candidate.endsWith(`/${wanted}`);
  });
  if (!matches.length && basenameFallback) {
    const wantedBase = path.posix.basename(wanted);
    matches.push(...source.entries.filter((entry) => path.posix.basename(decodedPath(entry.name)).toLowerCase() === wantedBase));
  }
  if (!matches.length) throw new Error(`Required source file was not found: ${requested}`);
  matches.sort((a, b) => a.name.length - b.name.length || a.name.localeCompare(b.name));
  if (matches.length > 1 && matches[0].name.length === matches[1].name.length) {
    throw new Error(`Ambiguous source file ${requested}: ${matches.map((entry) => entry.name).join(', ')}`);
  }
  return matches[0];
}

function splitNrrdHeader(bytes) {
  for (let index = 0; index < bytes.length - 3; index += 1) {
    if (bytes[index] === 13 && bytes[index + 1] === 10 && bytes[index + 2] === 13 && bytes[index + 3] === 10) {
      return {header: bytes.subarray(0, index).toString('utf8'), dataOffset: index + 4};
    }
  }
  for (let index = 0; index < bytes.length - 1; index += 1) {
    if (bytes[index] === 10 && bytes[index + 1] === 10) {
      return {header: bytes.subarray(0, index).toString('utf8'), dataOffset: index + 2};
    }
  }
  throw new Error('NRRD header terminator was not found');
}

function parseNumberList(value, expected, field) {
  const numbers = value.trim().split(/\s+/).map(Number);
  if (numbers.length !== expected || numbers.some((number) => !Number.isFinite(number))) {
    throw new Error(`Invalid NRRD ${field}: ${value}`);
  }
  return numbers;
}

function parseNrrdVectors(value, expected) {
  const vectors = [];
  const token = /\(([^)]*)\)|\bnone\b/gi;
  for (const match of value.matchAll(token)) {
    if (match[0].toLowerCase() === 'none') vectors.push(null);
    else {
      const vector = match[1].split(',').map((component) => Number(component.trim()));
      if (vector.length !== 3 || vector.some((component) => !Number.isFinite(component))) {
        throw new Error(`Invalid NRRD space direction: ${match[0]}`);
      }
      vectors.push(vector);
    }
  }
  if (vectors.length !== expected || vectors.some((vector) => vector === null)) {
    throw new Error(`Expected ${expected} spatial NRRD directions, got: ${value}`);
  }
  return vectors;
}

function rasSignsForSpace(space) {
  const words = space.toLowerCase().replace(/^3d[-_]/, '').split(/[-_]/);
  if (words.length !== 3 || !['left', 'right'].includes(words[0]) || !['anterior', 'posterior'].includes(words[1]) || !['inferior', 'superior'].includes(words[2])) {
    throw new Error(`Cannot derive IJK-to-RAS from unsupported NRRD space: ${space}`);
  }
  return [words[0] === 'right' ? 1 : -1, words[1] === 'anterior' ? 1 : -1, words[2] === 'superior' ? 1 : -1];
}

function normalizedNrrdType(type) {
  const normalized = type.toLowerCase().replaceAll(' ', '');
  if (['short', 'shortint', 'signedshort', 'int16', 'int16_t'].includes(normalized)) return 'int16';
  if (['ushort', 'unsignedshort', 'uint16', 'uint16_t'].includes(normalized)) return 'uint16';
  if (['char', 'signedchar', 'int8', 'int8_t'].includes(normalized)) return 'int8';
  if (['uchar', 'unsignedchar', 'uint8', 'uint8_t'].includes(normalized)) return 'uint8';
  return normalized;
}

export function parseNrrd(bytes, description = 'NRRD') {
  const {header, dataOffset} = splitNrrdHeader(bytes);
  const lines = header.replaceAll('\r', '').split('\n');
  if (!/^NRRD\d{4}$/.test(lines[0])) throw new Error(`${description} does not have a valid NRRD magic line`);
  const fields = new Map();
  for (const line of lines.slice(1)) {
    if (!line || line.startsWith('#')) continue;
    const match = /^([^:]+):=?\s*(.*)$/.exec(line);
    if (match) fields.set(match[1].trim().toLowerCase(), match[2].trim());
  }
  const required = (name) => {
    const value = fields.get(name);
    if (value === undefined) throw new Error(`${description} is missing NRRD field: ${name}`);
    return value;
  };
  const dimension = Number(required('dimension'));
  if (dimension !== 3) throw new Error(`${description} must be three-dimensional, got ${dimension}`);
  const dimensions = parseNumberList(required('sizes'), dimension, 'sizes');
  if (dimensions.some((value) => !Number.isInteger(value) || value <= 0)) throw new Error(`${description} has invalid dimensions`);
  const space = required('space');
  const signs = rasSignsForSpace(space);
  const sourceDirections = parseNrrdVectors(required('space directions'), dimension);
  const sourceOrigin = parseNumberList(required('space origin').replace(/[()]/g, '').replaceAll(',', ' '), 3, 'space origin');
  const directions = sourceDirections.map((vector) => vector.map((component, axis) => component * signs[axis]));
  const origin = sourceOrigin.map((component, axis) => component * signs[axis]);
  const spacing = directions.map((vector) => Math.hypot(...vector));
  const ijkToRas = [
    directions[0][0], directions[1][0], directions[2][0], origin[0],
    directions[0][1], directions[1][1], directions[2][1], origin[1],
    directions[0][2], directions[1][2], directions[2][2], origin[2],
    0, 0, 0, 1,
  ];
  return {
    magic: lines[0],
    sourceType: required('type'),
    type: normalizedNrrdType(required('type')),
    dimension,
    dimensions,
    space,
    spacing,
    ijkToRas,
    encoding: required('encoding').toLowerCase(),
    endian: fields.get('endian')?.toLowerCase() ?? null,
    dataFile: fields.get('data file') ?? fields.get('datafile') ?? null,
    dataOffset,
  };
}

function nrrdMetadata(parsed, file, bytes) {
  return {
    file,
    bytes: bytes.length,
    sha256: sha256(bytes),
    type: parsed.type,
    sourceType: parsed.sourceType,
    dimensions: parsed.dimensions,
    spacing: parsed.spacing,
    ijkToRas: parsed.ijkToRas,
    space: parsed.space,
    encoding: parsed.encoding,
    endian: parsed.endian,
  };
}

function decodedNrrdPayload(bytes, parsed, description) {
  if (parsed.dataFile) throw new Error(`${description} uses a detached data file, which is not supported`);
  const payload = bytes.subarray(parsed.dataOffset);
  if (['gzip', 'gz'].includes(parsed.encoding)) return gunzipSync(payload);
  if (['raw'].includes(parsed.encoding)) return Buffer.from(payload);
  throw new Error(`${description} uses unsupported NRRD encoding: ${parsed.encoding}`);
}

export function scanInt16Nrrd(bytes, parsed, description = 'label NRRD') {
  if (parsed.type !== 'int16') throw new Error(`${description} must retain signed int16 labels, got ${parsed.sourceType}`);
  const payload = decodedNrrdPayload(bytes, parsed, description);
  const voxelCount = parsed.dimensions.reduce((product, value) => product * value, 1);
  if (payload.length !== voxelCount * 2) {
    throw new Error(`${description} payload size mismatch: expected ${voxelCount * 2}, got ${payload.length}`);
  }
  const littleEndian = parsed.endian !== 'big';
  const counts = new Map();
  for (let offset = 0; offset < payload.length; offset += 2) {
    const value = littleEndian ? payload.readInt16LE(offset) : payload.readInt16BE(offset);
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  return {voxelCount, counts};
}

function xmlDecode(value) {
  return value.replaceAll('&quot;', '"').replaceAll('&apos;', "'").replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&amp;', '&');
}

function parseXmlAttributes(text) {
  const attributes = {};
  for (const match of text.matchAll(/([\w:.-]+)\s*=\s*"([^"]*)"/g)) attributes[match[1]] = xmlDecode(match[2]);
  return attributes;
}

function mrmlGeometry(attributes, description) {
  const spacing = parseNumberList(attributes.spacing ?? '', 3, `${description} spacing`);
  const origin = parseNumberList(attributes.origin ?? '', 3, `${description} origin`);
  const directions = parseNumberList(attributes.ijkToRASDirections ?? '', 9, `${description} ijkToRASDirections`);
  return {
    spacing,
    ijkToRas: [
      directions[0] * spacing[0], directions[1] * spacing[1], directions[2] * spacing[2], origin[0],
      directions[3] * spacing[0], directions[4] * spacing[1], directions[5] * spacing[2], origin[1],
      directions[6] * spacing[0], directions[7] * spacing[1], directions[8] * spacing[2], origin[2],
      0, 0, 0, 1,
    ],
  };
}

function parseMrml(bytes, ctNrrd, segNrrd) {
  const xml = bytes.toString('utf8');
  const nodes = [...xml.matchAll(/<([A-Za-z][\w]*)\b([^>]*)>/g)].map((match) => ({tag: match[1], attributes: parseXmlAttributes(match[2])}));
  const root = nodes.find((node) => node.tag === 'MRML');
  const byId = new Map(nodes.filter((node) => node.attributes.id).map((node) => [node.attributes.id, node]));
  const findVolume = (fileName, tag) => {
    const storage = nodes.find((node) => node.attributes.fileName && path.posix.basename(node.attributes.fileName.replaceAll('\\', '/')).toLowerCase() === fileName.toLowerCase());
    if (!storage) throw new Error(`MRML storage node for ${fileName} was not found`);
    const volume = nodes.find((node) => node.tag === tag && node.attributes.storageNodeRef === storage.attributes.id);
    if (!volume) throw new Error(`MRML ${tag} node for ${fileName} was not found`);
    const display = byId.get(volume.attributes.displayNodeRef);
    return {storage, volume, display, geometry: mrmlGeometry(volume.attributes, `MRML ${fileName}`)};
  };
  const ct = findVolume('I.nrrd', 'Volume');
  const seg = findVolume('seg.nrrd', 'LabelMapVolume');
  if (!arraysClose(ct.geometry.spacing, ctNrrd.spacing) || !arraysClose(ct.geometry.ijkToRas, ctNrrd.ijkToRas)) {
    throw new Error('MRML and I.nrrd geometry disagree');
  }
  if (!arraysClose(seg.geometry.spacing, segNrrd.spacing) || !arraysClose(seg.geometry.ijkToRas, segNrrd.ijkToRas)) {
    throw new Error('MRML and seg.nrrd geometry disagree');
  }
  const window = Number(ct.display?.attributes.window);
  const level = Number(ct.display?.attributes.level);
  if (!Number.isFinite(window) || !Number.isFinite(level)) throw new Error('MRML CT window/level was not found');
  return {
    version: root?.attributes.version ?? null,
    ctNodeId: ct.volume.attributes.id,
    segmentationNodeId: seg.volume.attributes.id,
    windowLevel: {window, level, source: 'MRML VolumeDisplay'},
  };
}

function hasJsonLdType(node, type) {
  const types = Array.isArray(node?.['@type']) ? node['@type'] : [node?.['@type']];
  return types.includes(type);
}

function parseRgb(value) {
  const match = /^rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\)$/i.exec(value ?? '');
  if (!match) return null;
  return [Number(match[1]), Number(match[2]), Number(match[3]), match[4] === undefined ? 255 : Math.round(Number(match[4]) * 255)];
}

function parseAtlasStructure(bytes) {
  let atlas;
  try {
    atlas = JSON.parse(bytes.toString('utf8'));
  } catch (cause) {
    throw new Error('atlasStructure.json is not valid JSON', {cause});
  }
  if (!Array.isArray(atlas)) throw new Error('atlasStructure.json must contain an array');
  const dataSources = new Map(atlas.filter((node) => hasJsonLdType(node, 'DataSource') && node['@id']).map((node) => [node['@id'], node.source]));
  const structures = [];
  for (const node of atlas.filter((candidate) => hasJsonLdType(candidate, 'Structure'))) {
    const selectors = Array.isArray(node.sourceSelector) ? node.sourceSelector : [node.sourceSelector].filter(Boolean);
    const labelSelector = selectors.find((selector) => hasJsonLdType(selector, 'LabelMapSelector'));
    if (!labelSelector || !Number.isInteger(Number(labelSelector.dataKey))) continue;
    const geometrySelector = selectors.find((selector) => hasJsonLdType(selector, 'GeometrySelector'));
    structures.push({
      labelValue: Number(labelSelector.dataKey),
      sourceId: String(node['@id'] ?? '').replace(/^#/, ''),
      name: node.annotation?.name ?? null,
      rgba: parseRgb(node.renderOption?.color),
      geometrySource: geometrySelector ? dataSources.get(geometrySelector.dataSource) ?? null : null,
    });
  }
  const duplicate = structures.find((structure, index) => structures.findIndex((other) => other.labelValue === structure.labelValue) !== index);
  if (duplicate) throw new Error(`atlasStructure.json has duplicate label key ${duplicate.labelValue}`);
  return structures;
}

function parseColorTable(bytes) {
  const labels = [];
  for (const line of bytes.toString('utf8').replaceAll('\r', '').split('\n')) {
    if (!line.trim() || line.trimStart().startsWith('#')) continue;
    const match = /^\s*(-?\d+)\s+(\S+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s*$/.exec(line);
    if (!match) throw new Error(`Invalid color-table line: ${line}`);
    labels.push({
      labelValue: Number(match[1]),
      ctblName: match[2],
      rgba: match.slice(3, 7).map(Number),
    });
  }
  return labels;
}

function mergeOfficialLabels(colorTable, structures, counts) {
  const byValue = new Map();
  for (const label of colorTable) byValue.set(label.labelValue, {...label, sources: ['AbdominalAtlasColors.ctbl']});
  for (const structure of structures) {
    const existing = byValue.get(structure.labelValue) ?? {labelValue: structure.labelValue, sources: []};
    byValue.set(structure.labelValue, {
      ...existing,
      name: structure.name,
      sourceId: structure.sourceId,
      geometrySource: structure.geometrySource,
      atlasRgba: structure.rgba,
      rgba: existing.rgba ?? structure.rgba,
      sources: [...existing.sources, 'atlasStructure.json'],
    });
  }
  return [...byValue.values()].sort((a, b) => a.labelValue - b.labelValue).map((label) => ({
    ...label,
    voxelCount: counts.get(label.labelValue) ?? 0,
  }));
}

function positionBytes(attribute) {
  return Buffer.from(attribute.array.buffer, attribute.array.byteOffset, attribute.array.byteLength);
}

function boundsForAttribute(attribute) {
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  for (let index = 0; index < attribute.count; index += 1) {
    const point = [attribute.getX(index), attribute.getY(index), attribute.getZ(index)];
    for (let axis = 0; axis < 3; axis += 1) {
      min[axis] = Math.min(min[axis], point[axis]);
      max[axis] = Math.max(max[axis], point[axis]);
    }
  }
  return [min, max];
}

function installNodeFileReader() {
  if (globalThis.FileReader) return;
  globalThis.FileReader = class {
    readAsArrayBuffer(blob) {
      blob.arrayBuffer().then((result) => {
        this.result = result;
        this.onloadend?.({target: this});
      }, (error) => {
        this.error = error;
        this.onerror?.(error);
        this.onloadend?.({target: this});
      });
    }

    readAsDataURL(blob) {
      blob.arrayBuffer().then((result) => {
        this.result = `data:${blob.type || 'application/octet-stream'};base64,${Buffer.from(result).toString('base64')}`;
        this.onloadend?.({target: this});
      }, (error) => {
        this.error = error;
        this.onerror?.(error);
        this.onloadend?.({target: this});
      });
    }
  };
}

async function convertCoreSurfaces(source, labels, coreLabelValues) {
  let T;
  let VTKLoader;
  let GLTFExporter;
  let NodeIO;
  try {
    [T, {VTKLoader}, {GLTFExporter}, {NodeIO}] = await Promise.all([
      import('three'),
      import('three/addons/loaders/VTKLoader.js'),
      import('three/addons/exporters/GLTFExporter.js'),
      import('@gltf-transform/core'),
    ]);
  } catch (cause) {
    throw new Error('VTK conversion requires the package\'s installed three and @gltf-transform/core dependencies', {cause});
  }
  installNodeFileReader();
  const byValue = new Map(labels.map((label) => [label.labelValue, label]));
  const group = new T.Group();
  group.name = 'SPL_Abdomen_Core';
  const meshes = [];
  const sourcePositions = new Map();
  const vtkLoader = new VTKLoader();

  for (const labelValue of coreLabelValues) {
    const label = byValue.get(labelValue);
    if (!label) throw new Error(`Core label ${labelValue} has no official label mapping`);
    if (!label.geometrySource) throw new Error(`Core label ${labelValue} has no GeometrySelector in atlasStructure.json`);
    const sourceEntry = findEntry(source, label.geometrySource);
    const vtk = await sourceEntry.read();
    let geometry;
    try {
      geometry = vtkLoader.parse(vtk.buffer.slice(vtk.byteOffset, vtk.byteOffset + vtk.byteLength));
    } catch (cause) {
      throw new Error(`Three.js VTKLoader could not parse ${sourceEntry.name}`, {cause});
    }
    const position = geometry.getAttribute('position');
    if (!position || position.itemSize !== 3 || !position.count) throw new Error(`VTK has no usable points: ${sourceEntry.name}`);
    if (!geometry.getAttribute('normal')) geometry.computeVertexNormals();
    const rgba = label.rgba ?? [180, 180, 180, 255];
    const color = new T.Color().setRGB(rgba[0] / 255, rgba[1] / 255, rgba[2] / 255, T.SRGBColorSpace);
    const material = new T.MeshStandardMaterial({color, roughness: 0.86, metalness: 0, opacity: rgba[3] / 255, transparent: rgba[3] < 255});
    const partId = `spl-abdomen-label-${labelValue}`;
    const mesh = new T.Mesh(geometry, material);
    mesh.name = partId;
    mesh.userData = {partId, labelValue, sourceId: label.sourceId, sourceName: label.name ?? label.ctblName};
    group.add(mesh);
    const triangleCount = geometry.index ? geometry.index.count / 3 : position.count / 3;
    if (!Number.isInteger(triangleCount) || triangleCount <= 0) throw new Error(`VTK is not a triangle surface: ${sourceEntry.name}`);
    sourcePositions.set(partId, new Float32Array(position.array));
    meshes.push({
      partId,
      labelValue,
      sourceId: label.sourceId,
      sourceName: label.name ?? label.ctblName,
      sourceFile: label.geometrySource,
      sourceBytes: vtk.length,
      sourceSha256: sha256(vtk),
      positionSha256: sha256(positionBytes(position)),
      vertices: position.count,
      triangles: triangleCount,
      bounds: boundsForAttribute(position),
      coordinates: 'source RAS coordinates; no per-part transform',
    });
  }

  group.updateMatrixWorld(true);
  const exporter = new GLTFExporter().register(() => ({
    writeMesh(mesh, meshDefinition) {
      if (mesh.name) meshDefinition.name = mesh.name;
    },
  }));
  const exported = await exporter.parseAsync(group, {binary: true, onlyVisible: true, trs: false});
  const glb = Buffer.from(exported);

  // Read back the actual GLB and prove that exporter serialization did not move source vertices.
  const document = await new NodeIO().readBinary(glb);
  const nodes = document.getRoot().listNodes().filter((node) => node.getMesh());
  const names = nodes.map((node) => node.getName()).sort();
  const expectedNames = meshes.map((mesh) => mesh.partId).sort();
  if (JSON.stringify(names) !== JSON.stringify(expectedNames)) throw new Error('GLB mesh names changed during export');
  for (const node of nodes) {
    if (node.getMesh().getName() !== node.getName()) throw new Error(`GLB mesh definition lost its part id: ${node.getName()}`);
    if (!arraysClose(node.getWorldMatrix(), IDENTITY_MATRIX, 1e-7)) throw new Error(`GLB gained a transform: ${node.getName()}`);
    const primitives = node.getMesh().listPrimitives();
    if (primitives.length !== 1) throw new Error(`GLB part has ${primitives.length} primitives: ${node.getName()}`);
    const restored = primitives[0].getAttribute('POSITION')?.getArray();
    const original = sourcePositions.get(node.getName());
    if (!restored || !original || restored.length !== original.length) throw new Error(`GLB position count changed: ${node.getName()}`);
    for (let index = 0; index < original.length; index += 1) {
      if (restored[index] !== original[index]) throw new Error(`GLB source coordinate changed: ${node.getName()}[${index}]`);
    }
  }

  return {glb, gzip: gzipSync(glb, {level: 9}), meshes, meshNames: expectedNames};
}

function parseCoreLabels(value) {
  const labels = value.split(',').map((item) => Number(item.trim()));
  if (!labels.length || labels.some((item) => !Number.isInteger(item) || item < 0)) {
    throw new Error(`Invalid --core-labels value: ${value}`);
  }
  if (new Set(labels).size !== labels.length) throw new Error('--core-labels contains duplicates');
  return labels;
}

function parseArguments(argv) {
  const positional = [];
  let output = null;
  let coreLabelValues = [...DEFAULT_CORE_LABEL_VALUES];
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value === '--help' || value === '-h') return {help: true};
    if (value === '--output') {
      output = argv[++index];
      if (!output) throw new Error('--output requires a directory');
    } else if (value === '--core-labels') {
      const labels = argv[++index];
      if (!labels) throw new Error('--core-labels requires a comma-separated list');
      coreLabelValues = parseCoreLabels(labels);
    } else if (value.startsWith('-')) throw new Error(`Unknown option: ${value}`);
    else positional.push(value);
  }
  if (!positional.length) throw new Error('A source ZIP path/URL or extracted directory is required');
  if (positional.length > 2) throw new Error('Too many positional arguments');
  output ??= positional[1] ?? path.resolve('../../tmp/spl-abdomen-prepared');
  return {source: positional[0], output: path.resolve(output), coreLabelValues};
}

function usage() {
  return `Usage: node prepare-spl-abdomen.mjs SOURCE [OUTPUT_DIR] [options]\n\n` +
    `SOURCE may be the official ZIP path/URL or an extracted directory.\n` +
    `Options:\n` +
    `  --output DIR           Output directory (alternative to OUTPUT_DIR)\n` +
    `  --core-labels LIST     Comma-separated official label keys\n` +
    `                         (default: ${DEFAULT_CORE_LABEL_VALUES.join(',')})\n`;
}

async function prepare({source: sourceArgument, output, coreLabelValues}) {
  const source = await loadSource(sourceArgument);
  const ctEntry = findEntry(source, 'Data/I.nrrd', {basenameFallback: true});
  const segEntry = findEntry(source, 'Data/seg.nrrd', {basenameFallback: true});
  const mrmlEntry = findEntry(source, 'AbdominalAtlas-2015Sept-Slicer4-4Version.mrml', {basenameFallback: true});
  const atlasEntry = findEntry(source, 'atlasStructure.json', {basenameFallback: true});
  const colorEntry = findEntry(source, 'Data/AbdominalAtlasColors.ctbl', {basenameFallback: true});
  const [ctBytes, segBytes, mrmlBytes, atlasBytes, colorBytes] = await Promise.all([
    ctEntry.read(), segEntry.read(), mrmlEntry.read(), atlasEntry.read(), colorEntry.read(),
  ]);

  const ctNrrd = parseNrrd(ctBytes, 'I.nrrd');
  const segNrrd = parseNrrd(segBytes, 'seg.nrrd');
  if (ctNrrd.type !== 'int16') throw new Error(`I.nrrd must be int16, got ${ctNrrd.sourceType}`);
  if (segNrrd.type !== 'int16') throw new Error(`seg.nrrd must retain int16 labels, got ${segNrrd.sourceType}`);
  if (JSON.stringify(ctNrrd.dimensions) !== JSON.stringify(segNrrd.dimensions) || !arraysClose(ctNrrd.spacing, segNrrd.spacing) || !arraysClose(ctNrrd.ijkToRas, segNrrd.ijkToRas)) {
    throw new Error('I.nrrd and seg.nrrd geometry do not match');
  }
  const mrml = parseMrml(mrmlBytes, ctNrrd, segNrrd);
  const scan = scanInt16Nrrd(segBytes, segNrrd, 'seg.nrrd');
  const structures = parseAtlasStructure(atlasBytes);
  const colorTable = parseColorTable(colorBytes);
  const labelMap = mergeOfficialLabels(colorTable, structures, scan.counts);
  const mappedValues = new Set(labelMap.map((label) => label.labelValue));
  const observedLabelValues = [...scan.counts.keys()].sort((a, b) => a - b);
  const unmappedLabelValues = observedLabelValues.filter((value) => value !== 0 && !mappedValues.has(value));
  const core = await convertCoreSurfaces(source, labelMap, coreLabelValues);

  await fs.mkdir(output, {recursive: true});
  await Promise.all([
    fs.writeFile(path.join(output, OUTPUT_NAMES.ct), ctBytes),
    fs.writeFile(path.join(output, OUTPUT_NAMES.segmentation), segBytes),
    fs.writeFile(path.join(output, OUTPUT_NAMES.surfaces), core.gzip),
  ]);

  const coreAsset = {
    kind: 'core-surface-model',
    file: OUTPUT_NAMES.surfaces,
    mediaType: 'model/gltf-binary',
    contentEncoding: 'gzip',
    bytes: core.gzip.length,
    sha256: sha256(core.gzip),
    glbBytes: core.glb.length,
    glbSha256: sha256(core.glb),
    meshNames: core.meshNames,
  };
  const manifest = {
    schemaVersion: 1,
    atlas: {
      id: 'spl-abdomen-2016-09',
      title: 'SPL Abdominal Atlas',
      coordinateSystem: 'RAS',
      officialPage: OFFICIAL_ATLAS_PAGE,
      officialArchive: OFFICIAL_ARCHIVE_URL,
    },
    source: {
      providedAs: source.kind,
      ...(source.resolvedUrl ? {resolvedUrl: source.resolvedUrl} : {}),
      ...(source.archiveSha256 ? {archiveSha256: source.archiveSha256, archiveBytes: source.archiveBytes} : {}),
      files: {
        mrml: {path: mrmlEntry.name, bytes: mrmlBytes.length, sha256: sha256(mrmlBytes), version: mrml.version},
        atlasStructure: {path: atlasEntry.name, bytes: atlasBytes.length, sha256: sha256(atlasBytes)},
        colorTable: {path: colorEntry.name, bytes: colorBytes.length, sha256: sha256(colorBytes)},
      },
    },
    volume: {
      ct: nrrdMetadata(ctNrrd, OUTPUT_NAMES.ct, ctBytes),
      seg: nrrdMetadata(segNrrd, OUTPUT_NAMES.segmentation, segBytes),
    },
    windowLevel: mrml.windowLevel,
    labelMap,
    segmentation: {
      storageType: 'int16',
      voxelCount: scan.voxelCount,
      backgroundLabelValue: 0,
      observedLabelValues,
      unmappedLabelValues,
      valueCounts: Object.fromEntries([...scan.counts.entries()].sort(([a], [b]) => a - b).map(([value, count]) => [String(value), count])),
      unmappedBehavior: 'transparent',
    },
    core: {
      configuredLabelValues: coreLabelValues,
      partIdPattern: 'spl-abdomen-label-{labelValue}',
      coordinatesPreserved: true,
      meshes: core.meshes,
    },
    assets: [coreAsset],
  };
  await fs.writeFile(path.join(output, OUTPUT_NAMES.manifest), `${JSON.stringify(manifest, null, 2)}\n`);
  return {output, manifest};
}

async function main() {
  try {
    const options = parseArguments(process.argv.slice(2));
    if (options.help) {
      console.log(usage());
      return;
    }
    const {output, manifest} = await prepare(options);
    console.log(JSON.stringify({
      output,
      dimensions: manifest.volume.ct.dimensions,
      spacing: manifest.volume.ct.spacing,
      labels: manifest.labelMap.length,
      observedLabels: manifest.segmentation.observedLabelValues.length,
      unmappedLabelValues: manifest.segmentation.unmappedLabelValues,
      coreMeshes: manifest.core.meshes.length,
      assetBytes: manifest.assets[0].bytes,
    }, null, 2));
  } catch (error) {
    console.error(`prepare-spl-abdomen: ${error.message}`);
    if (error.cause?.message) console.error(`caused by: ${error.cause.message}`);
    process.exitCode = 1;
  }
}

const isMain = process.argv[1] && path.resolve(process.argv[1]).toLowerCase() === fileURLToPath(import.meta.url).toLowerCase();
if (isMain) await main();
