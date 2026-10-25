import assert from "node:assert/strict";
import { createAnatomyLayout, conductionEvents, pointOnRoute } from "../src/lib/ecg-forward-anatomy.ts";
import { partCellIndices } from "../src/lib/ecg-forward-display.ts";
import { DEFAULT_FORWARD_INPUTS, FORWARD_CONDITIONS, simulateForwardEcg } from "../src/lib/ecg-forward-model.ts";

for (const { id: condition } of FORWARD_CONDITIONS) {
  const recording = simulateForwardEcg({ ...DEFAULT_FORWARD_INPUTS, condition });
  const { mesh } = recording, before = recording.voltage.slice();
  const layout = createAnatomyLayout(mesh), events = conductionEvents(recording, layout.paths);
  const tissue = layout.bands.flatMap(band => band.cells);
  assert.equal(tissue.length, mesh.cells.filter(cell => cell.chamber !== "node").length);
  assert.equal(new Set(tissue).size, tissue.length, "Every myocardial cell is represented exactly once");
  assert.equal(layout.bands.length, 142);
  assert.equal(layout.interatrial.length, 4);
  assert.deepEqual(layout.interatrial, partCellIndices(mesh, "Bachmann"));
  assert.ok(layout.paths.filter(path => path.kind === "terminal").length >= 81, "Actual distal junctions form the arbor");
  const pathIds = new Set(layout.paths.map(path => path.index));
  assert.equal(pathIds.size, layout.paths.length);
  for (const [index, edge] of mesh.edges.entries()) if (!edge.source) assert.ok(pathIds.has(index), `Missing conduction edge ${index}`);
  for (const path of layout.paths) {
    const edge = mesh.edges[path.index], actual = events.get(path.index);
    assert.equal(edge.source, false);
    assert.ok(path.points.every(point => Number.isFinite(point.x) && Number.isFinite(point.y)));
    assert.deepEqual(pointOnRoute(path.points, 0), path.points[0]);
    const end = pointOnRoute(path.points, 1), expected = path.points.at(-1);
    assert.ok(Math.hypot(end.x - expected.x, end.y - expected.y) < 1e-7);
    if (edge.conductance === 0) assert.equal(actual.length, 0, "A blocked branch cannot display a traveling front");
    for (const event of actual) {
      assert.ok(event.start >= 0 && event.end > event.start && event.end <= recording.durationMs);
      for (const [cell, time] of [[event.forward ? edge.a : edge.b, event.start], [event.forward ? edge.b : edge.a, event.end]]) {
        const frame = Math.floor(time / recording.sampleMs), t = time / recording.sampleMs - frame;
        const value = recording.voltage[frame * mesh.cells.length + cell] * (1 - t) + recording.voltage[(frame + 1) * mesh.cells.length + cell] * t;
        assert.ok(Math.abs(value - .5) < 1e-6, "A front must use a recorded, interpolated upstroke");
      }
    }
  }
  const allEvents = [...events.values()].flat();
  assert.ok(allEvents.some(event => event.start > 60000 / recording.inputs.rate), "Animate later recorded beats, not a first-beat loop");
  if (condition === "rv-pacing") assert.ok(allEvents.some(event => !event.forward), "Reverse conduction follows the recording");
  const quiet = { ...recording, voltage: new Float32Array(recording.voltage.length).fill(.4) };
  assert.equal([...conductionEvents(quiet, layout.paths).values()].flat().length, 0, "No fabricated motion at uniform voltage");
  assert.deepEqual(recording.voltage, before, "Drawing does not mutate the electrophysiological solution");
  console.log(`${condition}: ${tissue.length} tissue cells, ${layout.paths.length} conduction paths, ${allEvents.length} recorded propagation intervals ✓`);
}
