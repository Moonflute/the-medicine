import assert from 'node:assert/strict';
import {gzipSync} from 'node:zlib';
import test from 'node:test';

import {
  DEFAULT_WINDOW_LEVEL,
  parseNrrdVolume,
  renderWindowLevelRGBA,
} from '../src/imaging/nrrd-volume.js';

const encoder = new TextEncoder();

function joinBytes(...parts) {
  const length = parts.reduce((total, part) => total + part.byteLength, 0);
  const output = new Uint8Array(length);
  let offset = 0;
  for (const part of parts) {
    output.set(part, offset);
    offset += part.byteLength;
  }
  return output;
}

function int16Bytes(values, endian = 'little') {
  const bytes = new Uint8Array(values.length * 2);
  const view = new DataView(bytes.buffer);
  values.forEach((value, index) => view.setInt16(index * 2, value, endian === 'little'));
  return bytes;
}

function nrrdBuffer({
  values,
  dimensions,
  encoding = 'raw',
  endian = 'little',
  lineEnding = '\n',
  space = 'left-posterior-superior',
  directions = '(.9375,0,0) (0,-.9375,0) (0,0,-1.5)',
  origin = '(-119.53,119.53,84)',
}) {
  const rawPayload = int16Bytes(values, endian);
  const payload = encoding === 'gzip' ? gzipSync(rawPayload) : rawPayload;
  const header = [
    'NRRD0005',
    'type: short',
    'dimension: 3',
    `space: ${space}`,
    `sizes: ${dimensions.join(' ')}`,
    `space directions: ${directions}`,
    `space origin: ${origin}`,
    `endian: ${endian}`,
    `encoding: ${encoding}`,
    '',
    '',
  ].join(lineEnding);
  const bytes = joinBytes(encoder.encode(header), payload);
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

test('parses SPL LPS metadata and exposes correctly indexed orthogonal slices', async () => {
  const dimensions = [3, 2, 2];
  const values = [];
  for (let k = 0; k < dimensions[2]; k += 1) {
    for (let j = 0; j < dimensions[1]; j += 1) {
      for (let i = 0; i < dimensions[0]; i += 1) values.push(i + 10 * j + 100 * k);
    }
  }

  const volume = await parseNrrdVolume(nrrdBuffer({values, dimensions, lineEnding: '\r\n'}));
  assert.deepEqual(volume.dimensions, dimensions);
  assert.deepEqual(volume.spacingMm, [0.9375, 0.9375, 1.5]);
  assert.deepEqual(volume.spaceDirections, [[0.9375, 0, 0], [0, -0.9375, 0], [0, 0, -1.5]]);
  assert.deepEqual(volume.spaceOrigin, [-119.53, 119.53, 84]);
  assert.deepEqual(volume.ijkToRas, [
    -0.9375, 0, 0, 119.53,
    0, 0.9375, 0, -119.53,
    0, 0, -1.5, 84,
    0, 0, 0, 1,
  ]);
  assert.deepEqual(volume.storedRange, [0, 112]);

  const axial = volume.getSlice('axial', 1);
  assert.deepEqual([axial.width, axial.height], [3, 2]);
  assert.deepEqual([...axial.data], [100, 101, 102, 110, 111, 112]);

  const coronal = volume.getSlice('coronal', 1);
  assert.deepEqual([coronal.width, coronal.height], [3, 2]);
  assert.deepEqual([...coronal.data], [10, 11, 12, 110, 111, 112]);

  const sagittal = volume.getSlice('sagittal', 2);
  assert.deepEqual([sagittal.width, sagittal.height], [2, 2]);
  assert.deepEqual([...sagittal.data], [2, 12, 102, 112]);
  assert.deepEqual(sagittal.sliceToIJK(1, 1), [2, 1, 1]);
  assert.deepEqual(volume.voxelToRas(2, 1, 1), [117.655, -118.5925, 82.5]);
});

test('decompresses an embedded gzip payload and honors big-endian int16 voxels', async () => {
  const values = [-300, -1, 0, 1, 255, 256, 512, 699];
  const volume = await parseNrrdVolume(nrrdBuffer({
    values,
    dimensions: [2, 2, 2],
    encoding: 'gzip',
    endian: 'big',
  }));

  assert.equal(volume.encoding, 'gzip');
  assert.equal(volume.endian, 'big');
  assert.deepEqual([...volume.data], values);
  assert.deepEqual([...volume.getSlice('axial', 1).data], [255, 256, 512, 699]);
});

test('also accepts a gzip-wrapped complete NRRD file', async () => {
  const raw = nrrdBuffer({values: [7, 8], dimensions: [2, 1, 1]});
  const wrapped = gzipSync(new Uint8Array(raw));
  const volume = await parseNrrdVolume(wrapped);
  assert.deepEqual([...volume.data], [7, 8]);
});

test('uses the bundled fflate fallback when DecompressionStream is unavailable', async () => {
  const nativeDecompressionStream = globalThis.DecompressionStream;
  try {
    globalThis.DecompressionStream = undefined;
    const volume = await parseNrrdVolume(nrrdBuffer({
      values: [-2, 4],
      dimensions: [2, 1, 1],
      encoding: 'gzip',
    }));
    assert.deepEqual([...volume.data], [-2, 4]);
  } finally {
    globalThis.DecompressionStream = nativeDecompressionStream;
  }
});

test('renders deterministic window/level grayscale RGBA', async () => {
  const rgba = renderWindowLevelRGBA(new Int16Array([-1000, 0, 1000]), {center: 0, width: 2000});
  assert.deepEqual([...rgba], [
    0, 0, 0, 255,
    128, 128, 128, 255,
    255, 255, 255, 255,
  ]);
  assert.deepEqual(DEFAULT_WINDOW_LEVEL, {center: 666, width: 1310});

  const volume = await parseNrrdVolume(nrrdBuffer({values: [-1000, 0, 1000], dimensions: [3, 1, 1]}));
  const rendered = volume.renderSliceRGBA('axial', 0, {level: 0, windowWidth: 2000});
  assert.ok(rendered.data instanceof Uint8ClampedArray);
  assert.deepEqual([...rendered.data], [...rgba]);
});

test('keeps int16 label IDs and renders nearest-neighbor RGBA with unknown labels transparent', async () => {
  const labels = await parseNrrdVolume(nrrdBuffer({values: [0, 1, 699, 2], dimensions: [2, 2, 1]}));
  assert.deepEqual([...labels.getSlice('axial', 0).data], [0, 1, 699, 2]);

  const overlay = labels.getLabelSlice('axial', 0, {
    width: 4,
    height: 4,
    colors: new Map([
      [1, [255, 0, 0, 255]],
      [2, [0, 255, 0, 255]],
    ]),
  });
  assert.ok(overlay.data instanceof Uint8ClampedArray);
  assert.equal(overlay.data.length, 4 * 4 * 4);

  const pixel = (x, y) => [...overlay.data.slice((x + 4 * y) * 4, (x + 4 * y + 1) * 4)];
  assert.deepEqual(pixel(0, 0), [0, 0, 0, 0]);
  assert.deepEqual(pixel(3, 0), [255, 0, 0, 255]);
  assert.deepEqual(pixel(0, 3), [0, 0, 0, 0], 'unmapped label 699 remains transparent');
  assert.deepEqual(pixel(3, 3), [0, 255, 0, 255]);
  assert.deepEqual(overlay.sliceToIJK(3, 3), [1, 1, 0]);
});

test('honors an already-aborted signal before parsing', async () => {
  const controller = new AbortController();
  controller.abort();
  await assert.rejects(
    parseNrrdVolume(nrrdBuffer({values: [1], dimensions: [1, 1, 1]}), {signal: controller.signal}),
    (error) => error?.name === 'AbortError',
  );
});
