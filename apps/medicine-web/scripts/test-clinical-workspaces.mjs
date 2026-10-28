import assert from "node:assert/strict";
import { ACID_BASE_CASES, assessCompensation, calculateAcidBaseState, calculateAnionGap } from "../src/lib/acid-base-model.ts";
import { NORMAL_NEPHRON, calculateNephronState, nephronExcretionIndex } from "../src/lib/nephron-model.ts";
import { calculateEndocrineState } from "../src/lib/endocrine-model.ts";

const acidCase = id => ACID_BASE_CASES.find(c => c.id === id);
const acidState = c => calculateAcidBaseState(c.values, c.primary, c.duration);
const gap = c => calculateAnionGap(c.sodium, c.chloride, c.values.bicarbonate, c.albumin).corrected;
assert.equal(gap(acidCase("bicarbonate-loss")), 12, "diarrhea example has a normal AG");
assert.ok(gap(acidCase("ketoacidosis")) > 16, "ketoacidosis has elevated AG");
const mixed = acidState(acidCase("mixed"));
assert.ok(mixed.pH > 7.35 && mixed.pH < 7.45);
assert.equal(assessCompensation(mixed).direction, "below", "normal pH can conceal a respiratory alkalosis");
const lowVentilation = calculateAcidBaseState({ ventilation: 100, co2Production: 100, bicarbonate: 14 }, "metabolic-acidosis");
assert.equal(assessCompensation(lowVentilation).direction, "above");
const chronic = acidCase("chronic-retention");
assert.equal(assessCompensation(acidState(chronic)).direction, "within");
assert.ok(calculateAcidBaseState({ ...chronic.values, ventilation: 100 }).pH > 7.45, "persisting renal compensation after ventilation change");

const normal = calculateNephronState(NORMAL_NEPHRON);
const renal = values => calculateNephronState({ ...NORMAL_NEPHRON, ...values });
const solutes = ["Na+", "K+", "Cl-", "HCO3-", "Ca2+", "Mg2+", "H2O"];
for (const solute of solutes) {
  assert.ok(Math.abs(nephronExcretionIndex(normal, solute) - 100) < 1e-8);
  assert.ok(Math.abs(nephronExcretionIndex(renal({ gfr: 25 }), solute) - 25) < 1e-8);
}
assert.ok(nephronExcretionIndex(renal({ gfr: 25, enacBlock: 88 }), "K+") < nephronExcretionIndex(renal({ gfr: 25 }), "K+"));
assert.ok(nephronExcretionIndex(renal({ loopBlock: 88 }), "K+") > 100);
assert.ok(nephronExcretionIndex(renal({ loopBlock: 88 }), "Mg2+") > 100);
assert.ok(nephronExcretionIndex(renal({ thiazideBlock: 88 }), "Mg2+") > 100);
assert.ok(nephronExcretionIndex(renal({ thiazideBlock: 88 }), "Ca2+") < 100);
assert.ok(nephronExcretionIndex(renal({ thiazideBlock: 88 }), "Ca2+") > 0);
assert.ok(nephronExcretionIndex(renal({ carbonicAnhydraseBlock: 88 }), "HCO3-") > 100);
for (const gfr of [15, 50, 100, 160]) for (const block of [0, 50, 100]) {
  const s = renal({ gfr, loopBlock: block, thiazideBlock: block, enacBlock: block, carbonicAnhydraseBlock: block });
  for (const segment of s.segments) for (const solute of solutes) {
    assert.ok(segment.remaining[solute] >= 0);
    assert.ok(Math.abs(segment.delivered[solute] - segment.handled[solute] - segment.remaining[solute]) < 1e-7);
  }
  assert.ok(Number.isFinite(s.urineVolume) && s.urineVolume > 0);
}

const untreated = calculateEndocrineState("thyroid", "primary-failure", 100, 100, 0);
const replaced = calculateEndocrineState("thyroid", "primary-failure", 100, 100, 100);
assert.ok(replaced.stages[2].value > untreated.stages[2].value && replaced.stages[1].value < untreated.stages[1].value);
const central = calculateEndocrineState("adh", "primary-failure", 100, 100, 100);
const renalDi = calculateEndocrineState("adh", "pituitary-failure", 100, 100, 100);
assert.ok(central.stages[2].value > renalDi.stages[2].value * 2, "ADH response distinguishes central from renal resistance in this model");
console.log("Clinical model checks passed.");
