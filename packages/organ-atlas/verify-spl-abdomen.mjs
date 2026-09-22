import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {gunzipSync} from 'node:zlib';
import {NodeIO} from '@gltf-transform/core';
import {OUTPUT_NAMES, parseNrrd, scanInt16Nrrd, sha256} from './prepare-spl-abdomen.mjs';

const IDENTITY_MATRIX = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

function arraysClose(a, b, tolerance = 1e-6) {
  return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((value, index) => Math.abs(value - b[index]) <= tolerance);
}

function assertArrayClose(actual, expected, description, tolerance = 1e-6) {
  assert.ok(arraysClose(actual, expected, tolerance), `${description}: ${JSON.stringify(actual)} != ${JSON.stringify(expected)}`);
}

function safeAssetPath(root, relative) {
  assert.equal(typeof relative, 'string', 'Manifest asset path must be a string');
  const resolved = path.resolve(root, relative);
  const relativeToRoot = path.relative(root, resolved);
  assert.ok(relativeToRoot && !relativeToRoot.startsWith('..') && !path.isAbsolute(relativeToRoot), `Asset escapes output directory: ${relative}`);
  return resolved;
}

function typedArraySha256(array) {
  return sha256(Buffer.from(array.buffer, array.byteOffset, array.byteLength));
}

function sortedNumbers(values) {
  return [...values].sort((a, b) => a - b);
}

async function verify(input) {
  const inputPath = path.resolve(input);
  const stat = await fs.stat(inputPath);
  const manifestPath = stat.isDirectory() ? path.join(inputPath, OUTPUT_NAMES.manifest) : inputPath;
  const root = path.dirname(manifestPath);
  const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
  assert.equal(manifest.schemaVersion, 1, 'Unsupported manifest schemaVersion');
  assert.equal(manifest.atlas?.id, 'spl-abdomen-2016-09', 'Unexpected atlas id');
  assert.equal(manifest.atlas?.coordinateSystem, 'RAS', 'Manifest coordinate system must be RAS');

  const ctPath = safeAssetPath(root, manifest.volume?.ct?.file);
  const segPath = safeAssetPath(root, manifest.volume?.seg?.file);
  const [ctBytes, segBytes] = await Promise.all([fs.readFile(ctPath), fs.readFile(segPath)]);
  assert.equal(sha256(ctBytes), manifest.volume.ct.sha256, 'I.nrrd SHA-256 mismatch');
  assert.equal(sha256(segBytes), manifest.volume.seg.sha256, 'seg.nrrd SHA-256 mismatch');
  assert.equal(ctBytes.length, manifest.volume.ct.bytes, 'I.nrrd byte count mismatch');
  assert.equal(segBytes.length, manifest.volume.seg.bytes, 'seg.nrrd byte count mismatch');

  const ct = parseNrrd(ctBytes, 'prepared I.nrrd');
  const seg = parseNrrd(segBytes, 'prepared seg.nrrd');
  assert.equal(ct.type, 'int16', 'CT storage must be signed int16');
  assert.equal(seg.type, 'int16', 'Segmentation storage must be signed int16');
  assert.deepEqual(seg.dimensions, ct.dimensions, 'CT/seg dimensions differ');
  assertArrayClose(seg.spacing, ct.spacing, 'CT/seg spacing differs');
  assertArrayClose(seg.ijkToRas, ct.ijkToRas, 'CT/seg IJK-to-RAS differs');
  assert.deepEqual(ct.dimensions, manifest.volume.ct.dimensions, 'CT dimensions differ from manifest');
  assert.deepEqual(seg.dimensions, manifest.volume.seg.dimensions, 'Seg dimensions differ from manifest');
  assertArrayClose(ct.spacing, manifest.volume.ct.spacing, 'CT spacing differs from manifest');
  assertArrayClose(seg.spacing, manifest.volume.seg.spacing, 'Seg spacing differs from manifest');
  assertArrayClose(ct.ijkToRas, manifest.volume.ct.ijkToRas, 'CT IJK-to-RAS differs from manifest');
  assertArrayClose(seg.ijkToRas, manifest.volume.seg.ijkToRas, 'Seg IJK-to-RAS differs from manifest');

  const scan = scanInt16Nrrd(segBytes, seg, 'prepared seg.nrrd');
  assert.equal(scan.voxelCount, manifest.segmentation.voxelCount, 'Segmentation voxel count mismatch');
  const observed = sortedNumbers(scan.counts.keys());
  assert.deepEqual(observed, manifest.segmentation.observedLabelValues, 'Observed segmentation labels differ from manifest');
  assert.deepEqual(
    Object.fromEntries([...scan.counts.entries()].sort(([a], [b]) => a - b).map(([value, count]) => [String(value), count])),
    manifest.segmentation.valueCounts,
    'Segmentation label counts differ from manifest',
  );
  const mapped = new Set(manifest.labelMap.map((label) => label.labelValue));
  assert.equal(mapped.size, manifest.labelMap.length, 'labelMap has duplicate values');
  const unmapped = observed.filter((value) => value !== manifest.segmentation.backgroundLabelValue && !mapped.has(value));
  assert.deepEqual(unmapped, manifest.segmentation.unmappedLabelValues, 'Unmapped segmentation labels differ from manifest');
  for (const value of unmapped) assert.ok(!mapped.has(value), `Unmapped label ${value} must remain transparent`);
  if (observed.includes(699)) {
    assert.ok(unmapped.includes(699), 'Official unknown label 699 must remain explicitly unmapped');
    assert.ok(!mapped.has(699), 'Official unknown label 699 must not receive a guessed mapping');
  }

  assert.ok(Array.isArray(manifest.assets) && manifest.assets.length === 1, 'Expected one prepared core GLB asset');
  const asset = manifest.assets[0];
  const assetPath = safeAssetPath(root, asset.file);
  const gzip = await fs.readFile(assetPath);
  assert.equal(gzip.length, asset.bytes, 'Core GLB gzip byte count mismatch');
  assert.equal(sha256(gzip), asset.sha256, 'Core GLB gzip SHA-256 mismatch');
  const glb = gunzipSync(gzip);
  assert.equal(glb.length, asset.glbBytes, 'Core GLB byte count mismatch');
  assert.equal(sha256(glb), asset.glbSha256, 'Core GLB SHA-256 mismatch');
  const document = await new NodeIO().readBinary(glb);
  const nodes = document.getRoot().listNodes().filter((node) => node.getMesh());
  const meshNames = nodes.map((node) => node.getName()).sort();
  const expectedNames = manifest.core.meshes.map((mesh) => mesh.partId).sort();
  assert.deepEqual(meshNames, [...asset.meshNames].sort(), 'GLB mesh names differ from asset manifest');
  assert.deepEqual(meshNames, expectedNames, 'GLB mesh names differ from core manifest');
  assert.equal(new Set(meshNames).size, meshNames.length, 'GLB mesh names are not unique');
  assert.deepEqual(
    sortedNumbers(manifest.core.meshes.map((mesh) => mesh.labelValue)),
    sortedNumbers(manifest.core.configuredLabelValues),
    'Configured core labels differ from emitted meshes',
  );

  const meshByName = new Map(manifest.core.meshes.map((mesh) => [mesh.partId, mesh]));
  for (const node of nodes) {
    const record = meshByName.get(node.getName());
    assert.ok(record, `Unexpected GLB mesh: ${node.getName()}`);
    assert.equal(node.getMesh().getName(), record.partId, `${node.getName()} mesh definition name mismatch`);
    assert.equal(record.partId, `spl-abdomen-label-${record.labelValue}`, `Part id is not aligned to label key ${record.labelValue}`);
    assert.ok(mapped.has(record.labelValue), `Core mesh label ${record.labelValue} is absent from labelMap`);
    assertArrayClose(node.getWorldMatrix(), IDENTITY_MATRIX, `${node.getName()} gained a transform`, 1e-7);
    const primitives = node.getMesh().listPrimitives();
    assert.equal(primitives.length, 1, `${node.getName()} must have one primitive`);
    const primitive = primitives[0];
    const position = primitive.getAttribute('POSITION');
    assert.ok(position, `${node.getName()} has no POSITION accessor`);
    assert.equal(position.getCount(), record.vertices, `${node.getName()} vertex count mismatch`);
    assert.equal(typedArraySha256(position.getArray()), record.positionSha256, `${node.getName()} source coordinates changed`);
    const triangleCount = (primitive.getIndices()?.getCount() ?? position.getCount()) / 3;
    assert.equal(triangleCount, record.triangles, `${node.getName()} triangle count mismatch`);
    const extras = node.getExtras();
    assert.equal(extras.partId, record.partId, `${node.getName()} extras.partId mismatch`);
    assert.equal(extras.labelValue, record.labelValue, `${node.getName()} extras.labelValue mismatch`);
  }

  assert.ok(Number.isFinite(manifest.windowLevel?.window) && manifest.windowLevel.window > 0, 'Invalid CT window');
  assert.ok(Number.isFinite(manifest.windowLevel?.level), 'Invalid CT level');
  return {
    manifest: manifestPath,
    dimensions: ct.dimensions,
    spacing: ct.spacing,
    windowLevel: manifest.windowLevel,
    mappedLabels: manifest.labelMap.length,
    observedLabels: observed.length,
    unmappedLabelValues: unmapped,
    coreMeshes: nodes.length,
    sourceCoordinatesPreserved: true,
  };
}

function usage() {
  return 'Usage: node verify-spl-abdomen.mjs OUTPUT_DIR_OR_MANIFEST\n';
}

async function main() {
  const argument = process.argv[2];
  if (!argument || argument === '--help' || argument === '-h') {
    console.log(usage());
    if (!argument) process.exitCode = 1;
    return;
  }
  try {
    console.log(JSON.stringify(await verify(argument), null, 2));
  } catch (error) {
    console.error(`verify-spl-abdomen: ${error.message}`);
    process.exitCode = 1;
  }
}

const isMain = process.argv[1] && path.resolve(process.argv[1]).toLowerCase() === fileURLToPath(import.meta.url).toLowerCase();
if (isMain) await main();
