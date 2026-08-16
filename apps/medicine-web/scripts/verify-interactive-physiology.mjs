import assert from "node:assert/strict";
import { calculateHemodynamics, getCardiacPhase } from "../src/lib/hemodynamics-model.ts";
import { calculateEcgState } from "../src/lib/ecg-model.ts";
import { calculateNephronState, getNephronSegment } from "../src/lib/nephron-model.ts";
import { calculateEndocrineState } from "../src/lib/endocrine-model.ts";

const heartNormal = calculateHemodynamics({ preload: 100, afterload: 100, contractility: 100, heartRate: 70 });
const hemorrhage = calculateHemodynamics({ preload: 55, afterload: 120, contractility: 115, heartRate: 115 });
const hypertension = calculateHemodynamics({ preload: 100, afterload: 155, contractility: 100, heartRate: 70 });
const systolicFailure = calculateHemodynamics({ preload: 135, afterload: 115, contractility: 55, heartRate: 95 });
assert.ok(hemorrhage.edv < heartNormal.edv, "low preload must reduce EDV");
assert.ok(hypertension.esv > heartNormal.esv && hypertension.systolicPressure > heartNormal.systolicPressure, "afterload must increase ESV and pressure");
assert.ok(systolicFailure.ejectionFraction < heartNormal.ejectionFraction && systolicFailure.lvEndDiastolicPressure > heartNormal.lvEndDiastolicPressure, "low contractility must reduce EF and raise filling pressure");
assert.equal(getCardiacPhase(0.14).flow, "none", "isovolumetric contraction must have no transvalvular flow");
assert.equal(getCardiacPhase(0.25).aorticOpen, true, "aortic valve must open during ejection");
assert.equal(getCardiacPhase(0.68).mitralOpen, true, "mitral valve must open during filling");

const sinus = calculateEcgState("sinus", 70); const wenckebach = calculateEcgState("mobitz1", 75); const mobitz2 = calculateEcgState("mobitz2", 70);
const complete = calculateEcgState("complete", 40); const af = calculateEcgState("af", 115); const vt = calculateEcgState("vt", 165);
assert.ok(sinus.events.every((event) => event.type !== "atrial" || event.conducted), "sinus P waves must conduct");
assert.ok(wenckebach.events.some((event) => event.type === "atrial" && !event.conducted), "Wenckebach must drop a P wave");
assert.ok(mobitz2.ventricularRate < mobitz2.atrialRate, "Mobitz II ventricular rate must be below atrial rate");
assert.ok(complete.ventricularRate < complete.atrialRate && complete.pr === "AV dissociation", "complete block must show AV dissociation");
assert.equal(af.pr, "측정 불가", "AF must not report a PR interval");
assert.ok(vt.events.filter((event) => event.type === "ventricular").every((event) => event.width >= 0.18), "VT QRS events must be wide");

const nephronNormalInputs = { gfr: 100, adh: 50, aldosterone: 50, loopBlock: 0, thiazideBlock: 0, enacBlock: 0, carbonicAnhydraseBlock: 0 };
const nephronNormal = calculateNephronState(nephronNormalInputs);
const loop = calculateNephronState({ ...nephronNormalInputs, loopBlock: 90 }); const thiazide = calculateNephronState({ ...nephronNormalInputs, thiazideBlock: 90 });
const enac = calculateNephronState({ ...nephronNormalInputs, enacBlock: 90 }); const caBlock = calculateNephronState({ ...nephronNormalInputs, carbonicAnhydraseBlock: 90 });
const lowAdh = calculateNephronState({ ...nephronNormalInputs, adh: 0 }); const highAdh = calculateNephronState({ ...nephronNormalInputs, adh: 100 });
assert.ok(getNephronSegment(loop, "thick-ascending").handled["Na+"] < getNephronSegment(nephronNormal, "thick-ascending").handled["Na+"], "loop blockade must reduce TAL sodium handling");
assert.ok(getNephronSegment(loop, "thick-ascending").handled["Mg2+"] < getNephronSegment(nephronNormal, "thick-ascending").handled["Mg2+"], "loop blockade must reduce TAL magnesium handling");
assert.ok(getNephronSegment(thiazide, "distal").handled["Na+"] < getNephronSegment(nephronNormal, "distal").handled["Na+"], "thiazide must reduce DCT sodium handling");
assert.ok(getNephronSegment(thiazide, "distal").handled["Ca2+"] > getNephronSegment(nephronNormal, "distal").handled["Ca2+"], "thiazide must increase DCT calcium handling");
assert.ok(Math.abs(getNephronSegment(enac, "collecting").handled["K+"]) < Math.abs(getNephronSegment(nephronNormal, "collecting").handled["K+"]), "ENaC blockade must reduce potassium secretion");
assert.ok(getNephronSegment(caBlock, "proximal").handled["HCO3-"] < getNephronSegment(nephronNormal, "proximal").handled["HCO3-"], "carbonic anhydrase blockade must reduce proximal bicarbonate handling");
assert.ok(lowAdh.urineVolume > highAdh.urineVolume && lowAdh.urineOsmolality < highAdh.urineOsmolality, "ADH must lower urine volume and raise osmolality");
assert.ok(nephronNormal.urineVolume >= 0.8 && nephronNormal.urineVolume <= 3, "normal nephron preset must produce a plausible daily urine volume");
assert.ok(lowAdh.urineVolume > 10 && highAdh.urineVolume < 1, "ADH extremes must separate dilute polyuria from concentrated low volume urine");
assert.ok(getNephronSegment(nephronNormal, "collecting").routes.some((route) => route.solute === "K+" && route.direction === "secrete"), "collecting duct must expose potassium secretion route");
assert.equal(getNephronSegment(nephronNormal, "distal").routes.some((route) => route.solute === "H2O"), false, "DCT must not show a major water route");

const thyroidFailure = calculateEndocrineState("thyroid", "primary-failure"); const thyroidExcess = calculateEndocrineState("thyroid", "primary-excess");
const pituitaryFailure = calculateEndocrineState("thyroid", "pituitary-failure"); const centralDi = calculateEndocrineState("adh", "primary-failure");
const insulinDeficiency = calculateEndocrineState("pancreatic", "primary-failure"); const insulinResistance = calculateEndocrineState("pancreatic", "pituitary-failure");
assert.ok(thyroidFailure.stages[1].status === "high" && thyroidFailure.stages[2].status === "low", "primary thyroid failure must raise TSH and lower free T4");
assert.ok(thyroidExcess.stages[1].status === "low" && thyroidExcess.stages[2].status === "high", "primary thyroid excess must suppress TSH");
assert.ok(pituitaryFailure.stages[1].status === "low" && pituitaryFailure.stages[2].status === "low", "pituitary failure must lower TSH and free T4");
assert.ok(thyroidFailure.edges.filter((edge) => edge.kind === "inhibit").length === 2, "three-stage axes must display feedback to hypothalamus and pituitary");
assert.ok(centralDi.stages[0].status === "high" && centralDi.stages[1].status === "low" && centralDi.stages[2].status === "low", "central DI must show high osmolality with low ADH and urine osmolality");
assert.ok(insulinDeficiency.stages[0].status === "high" && insulinDeficiency.stages[1].status === "low", "insulin deficiency must show hyperglycemia and low insulin");
assert.ok(insulinResistance.stages[0].status === "high" && insulinResistance.stages[1].status === "high" && insulinResistance.stages[2].status === "low", "insulin resistance must show high glucose and insulin with weak uptake");

console.log("Interactive physiology model verification passed.");
