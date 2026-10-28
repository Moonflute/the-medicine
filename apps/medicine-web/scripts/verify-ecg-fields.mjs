import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { DEFAULT_FORWARD_INPUTS, DEFAULT_ISCHEMIA, FORWARD_SOURCE_GAIN, electricFieldWeights, potentialWeights, sampleElectricField, sampleNetDipole, simulateForwardEcg } from '../src/lib/ecg-forward-model.ts';
import { createAnatomyFieldProbes, projectAnatomyField, projectAnatomyDipole, NET_DIPOLE_ORIGIN } from '../src/lib/ecg-forward-anatomy.ts';

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
  const before = hash(recording.voltage), beforeDipole = hash(recording.dipole), probes = createAnatomyFieldProbes(recording.mesh);
  assert.equal(probes.length, 22, 'Two fixed observation points in each of the eleven regions');
  assert.equal(new Set(probes.map(probe => probe.id)).size, 22, 'Every probe has its own stable key');
  assert.equal(new Set(probes.map(probe => probe.region)).size, 11);
  assert.equal(new Set(probes.map(probe => probe.position.join(','))).size, 22, 'Sample 22 distinct model locations, not copied region-center arrows');
  for (const region of new Set(probes.map(probe => probe.region))) {
    const pair = probes.filter(probe => probe.region === region);
    assert.equal(pair.length, 2, `${region}: paired observation points`);
    assert.ok(Math.hypot(pair[0].x - pair[1].x, pair[0].y - pair[1].y) > 10, `${region}: avoid overlapping origins`);
  }
  if (anchors) assert.deepEqual(probes, anchors, 'Injury changes field values, never observation points');
  else anchors = probes;
  const sampleTimes = [60, 160, 330, 420, 550];
  for (const time of sampleTimes) {
    // Independently sum actual source edges; do not derive the arrow from a lead
    // waveform, arbitrary local observation points, or prescribed ECG phases.
    const sum = [0, 0, 0], n = recording.mesh.cells.length, frame = Math.round(time / recording.sampleMs);
    for (const edge of recording.mesh.edges) if (edge.source) {
      const current = FORWARD_SOURCE_GAIN * edge.conductance * (recording.voltage[frame * n + edge.a] - recording.voltage[frame * n + edge.b]);
      for (let d = 0; d < 3; d++) sum[d] += current * (recording.mesh.cells[edge.b].position[d] - recording.mesh.cells[edge.a].position[d]);
    }
    const dipole = sampleNetDipole(recording, time), arrow = projectAnatomyDipole(dipole);
    dipole.forEach((value, d) => close(value, sum[d], 'Net dipole equals distributed source sum', 3e-4));
    assert.deepEqual({ x: arrow.x, y: arrow.y }, NET_DIPOLE_ORIGIN, 'Net vector has one fixed diagram origin in normal and injured tissue');
    const half = sampleNetDipole(recording, time + recording.sampleMs / 2), right = sampleNetDipole(recording, time + recording.sampleMs);
    half.forEach((value, d) => close(value, (dipole[d] + right[d]) / 2, 'Net dipole interpolates signed components'));
  }
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
    report.push({ probe: probe.id, anchor: [probe.x, probe.y], magnitudes: fields.map(field => +Math.hypot(...field).toFixed(3)) });
  }
  assert.equal(hash(recording.voltage), before, 'Field visualization never mutates the ECG solution');
  assert.equal(hash(recording.dipole), beforeDipole, 'Net vector visualization never mutates the source solution');
  console.log(JSON.stringify({ condition: ischemia ? 'Anterior ischemia' : 'Normal', times: sampleTimes, probes: report }));
}
const zero = projectAnatomyField([0, 0, 0]);
assert.equal(zero.length, 0, 'No minimum-length fabricated resting arrow');
const forward = projectAnatomyField([.1, .2, .3]), reverse = projectAnatomyField([-.1, -.2, -.3]);
for (const field of [[0, 0, 0], [.1, .2, .3], [10, -30, 5], [800, 600, 0]]) {
  const formerLength = 32 * Math.tanh(Math.log1p(Math.hypot(field[0], field[1]) / 3) / 3);
  close(projectAnatomyField(field).length, formerLength / 2, 'Local arrows use exactly half the former display length');
}
close(forward.dx, -reverse.dx, 'Frontal projection reverses x');
close(forward.dy, -reverse.dy, 'Frontal projection reverses y');
assert.equal(forward.length, reverse.length);
assert.equal(projectAnatomyField([0, 0, 1]).length, 0, 'Depth-only field has no made-up in-plane arrow');
assert.equal(projectAnatomyField([0, 0, -1]).length, 0, 'Either depth direction has zero frontal length');
const dipoleRecording = { samples: 2, sampleMs: 1, dipole: new Float32Array([4, -6, 2, -4, 6, -2]) };
assert.deepEqual(sampleNetDipole(dipoleRecording, .5), [0, 0, 0], 'Opposing vectors cancel, rather than rotate at a fixed length');
assert.deepEqual(sampleNetDipole(dipoleRecording, -20), [4, -6, 2], 'Clamp seeks before recording');
assert.deepEqual(sampleNetDipole(dipoleRecording, 20), [-4, 6, -2], 'Clamp seeks after recording');
assert.equal(projectAnatomyDipole([0, 0, 0]).length, 0, 'No fabricated resting net arrow');
assert.equal(projectAnatomyDipole([0, 0, 50]).length, 0, 'No invented frontal direction for a depth-only net vector');
const net = projectAnatomyDipole([40, -30, 10]), opposite = projectAnatomyDipole([-40, 30, -10]);
close(net.dx, -opposite.dx, 'Net vector polarity x'); close(net.dy, -opposite.dy, 'Net vector polarity y');
close(projectAnatomyDipole([80, -60, 20]).length, net.length * 2, 'Fixed linear display gain, not frame-normalized length');
assert.equal(projectAnatomyDipole([10000, 0, 0]).length, 135, 'Large source vector stays within the diagram');
assert.equal(projectAnatomyDipole([10000, 0, 0]).limited, true, 'Length cap is disclosed');
const scene = await readFile(new URL('../src/components/ecg-forward-scene.tsx', import.meta.url), 'utf8');
const fieldStart = scene.indexOf('className="ecg-local-field-layer"'), netStart = scene.indexOf('className="ecg-net-dipole-layer"'), insetStart = scene.indexOf('className="ecg-vector-inset"');
assert.ok(fieldStart >= 0 && netStart > fieldStart && insetStart > netStart, 'Locate independent field, net and lead-direction layers');
const fieldLayer = scene.slice(fieldStart, netStart);
assert.ok(fieldLayer.includes('data-field-arrow="true"'), 'Render field arrow shafts');
assert.ok(fieldLayer.includes('x1={arrow.x} y1={arrow.y}'), 'Arrow tails remain at fixed probe coordinates');
assert.ok(!/<circle\b|<ellipse\b|data-field-anchor|⊙|⊗/.test(fieldLayer), 'No origin circles or depth symbols on field arrows');
const netLayer = scene.slice(netStart, insetStart);
assert.ok(netLayer.includes('stroke="#111111"') && netLayer.includes('data-net-dipole-arrow="true"'), 'Render an independent black net arrow');
assert.ok(netLayer.includes('x1={netArrow.x} y1={netArrow.y}'), 'Net arrow starts at the fixed central anchor');
assert.ok(!/deformation|yaw|<circle\b|<ellipse\b/.test(netLayer), 'Net anchor stays fixed during contraction and torso rotation, without an origin circle');
assert.ok(scene.includes('checked={showNetVector}') && scene.includes('onNetVector(event.target.checked)'), 'Accessible checkbox controls only the net vector');
console.log('Fixed field probes: gradient, polarity, fixed origins, interpolation, quiet tissue and unchanged Vm passed.');
console.log('Net dipole: independent source sum, fixed center, interpolation, cancellation, display gain and unchanged solution passed.');
