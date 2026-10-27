import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { DEFAULT_FORWARD_INPUTS, DEFAULT_ISCHEMIA, FORWARD_SOURCE_GAIN, electricFieldWeights, potentialWeights, sampleElectricField, simulateForwardEcg } from '../src/lib/ecg-forward-model.ts';
import { createAnatomyFieldProbes, projectAnatomyField } from '../src/lib/ecg-forward-anatomy.ts';

const hash = array => createHash('sha256').update(new Uint8Array(array.buffer, array.byteOffset, array.byteLength)).digest('hex');
const close = (a, b, message, tolerance = 2e-5) => assert.ok(Math.abs(a - b) < tolerance * Math.max(1, Math.abs(a), Math.abs(b)), `${message}: ${a} vs ${b}`);
const simple = { cells: [{ position: [-.5, 0, 0] }, { position: [.5, 0, 0] }], edges: [{ a: 0, b: 1, conductance: 1, source: true }] };
const axial = electricFieldWeights(simple, [2, 0, 0]), equatorial = electricFieldWeights(simple, [0, 2, 0]), near = electricFieldWeights(simple, [0, 0, 0]);
close(axial[0][0], FORWARD_SOURCE_GAIN * 2 / 8, 'Dipole axial field points along p');
close(equatorial[0][0], -FORWARD_SOURCE_GAIN / 8, 'Dipole equatorial field opposes p');
close(near[0][0], -FORWARD_SOURCE_GAIN / .25 ** 3, 'Differentiate the same bounded near-source kernel');

let anchors;
for (const ischemia of [undefined, DEFAULT_ISCHEMIA]) {
  const recording = simulateForwardEcg({ ...DEFAULT_FORWARD_INPUTS, ischemia });
  const before = hash(recording.voltage), probes = createAnatomyFieldProbes(recording.mesh);
  assert.equal(probes.length, 11, 'Two atrial and nine ventricular fixed observation points');
  assert.equal(new Set(probes.map(probe => probe.region)).size, 11);
  if (anchors) assert.deepEqual(probes, anchors, 'Injury changes field values, never observation points');
  else anchors = probes;
  const sampleTimes = [60, 160, 330, 420, 550];
  const report = [];
  const epsilon = 1e-5;
  for (const probe of probes) {
    const weights = electricFieldWeights(recording.mesh, probe.position);
    // Independently differentiate scalar potential weights, including near-field terms.
    for (let d = 0; d < 3; d++) {
      const plus = [...probe.position], minus = [...probe.position];
      plus[d] += epsilon; minus[d] -= epsilon;
      const p = potentialWeights(recording.mesh, plus), m = potentialWeights(recording.mesh, minus);
      for (let cell = 0; cell < p.length; cell++) close(weights[d][cell], -(p[cell] - m[cell]) / (2 * epsilon), `${probe.region}: E = -grad(phi)`);
      close(weights[d].reduce((sum, value) => sum + value, 0), 0, 'Uniform potential adds no field');
    }
    const fields = sampleTimes.map(time => sampleElectricField(recording, weights, time));
    assert.ok(fields.flat().every(Number.isFinite));
    const half = sampleElectricField(recording, weights, 330.5);
    const left = sampleElectricField(recording, weights, 330), right = sampleElectricField(recording, weights, 331);
    half.forEach((value, d) => close(value, (left[d] + right[d]) / 2, 'Interpolate field components, not angles'));
    const synthetic = { ...recording, samples: 1, voltage: new Float32Array(recording.mesh.cells.length).fill(.4) };
    sampleElectricField(synthetic, weights, 0).forEach(value => close(value, 0, 'No field at uniform Vm'));
    synthetic.voltage = recording.voltage.slice(330 * recording.mesh.cells.length, 331 * recording.mesh.cells.length);
    const original = sampleElectricField(synthetic, weights, 0);
    synthetic.voltage = Float32Array.from(synthetic.voltage, value => -value);
    sampleElectricField(synthetic, weights, 0).forEach((value, d) => close(value, -original[d], 'Reversing Vm reverses E'));
    report.push({ region: probe.region, anchor: [probe.x, probe.y], magnitudes: fields.map(field => +Math.hypot(...field).toFixed(3)) });
  }
  assert.equal(hash(recording.voltage), before, 'Field visualization never mutates the ECG solution');
  console.log(JSON.stringify({ condition: ischemia ? 'Anterior ischemia' : 'Normal', times: sampleTimes, probes: report }));
}
const zero = projectAnatomyField([0, 0, 0]);
assert.equal(zero.length, 0, 'No minimum-length fabricated resting arrow');
const forward = projectAnatomyField([.1, .2, .3]), reverse = projectAnatomyField([-.1, -.2, -.3]);
close(forward.dx, -reverse.dx, 'Frontal projection reverses x');
close(forward.dy, -reverse.dy, 'Frontal projection reverses y');
assert.equal(forward.length, reverse.length);
assert.equal(projectAnatomyField([0, 0, 1]).length, 0, 'Depth-only field has no made-up in-plane arrow');
assert.equal(projectAnatomyField([0, 0, -1]).length, 0, 'Either depth direction has zero frontal length');
const scene = await readFile(new URL('../src/components/ecg-forward-scene.tsx', import.meta.url), 'utf8');
const fieldLayer = scene.slice(scene.indexOf('className="ecg-local-field-layer"'), scene.indexOf('{showVectors ?'));
assert.ok(fieldLayer.includes('data-field-arrow="true"'), 'Render field arrow shafts');
assert.ok(fieldLayer.includes('x1={arrow.x} y1={arrow.y}'), 'Arrow tails remain at fixed probe coordinates');
assert.ok(!/<circle\b|<ellipse\b|data-field-anchor|⊙|⊗/.test(fieldLayer), 'No origin circles or depth symbols on field arrows');
console.log('Fixed field probes: gradient, polarity, fixed origins, interpolation, quiet tissue and unchanged Vm passed.');
