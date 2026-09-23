import test from 'node:test';
import assert from 'node:assert/strict';
import {pathology} from '../src/pathology.js';
import {compilePathologyStates} from '../src/pathology-targets.js';
import {
 normalizePathologyStageState,pathologyStageOrder,pathologyStageProfiles,
 resolvePathologyStage
} from '../src/pathology-stages.js';

test('five representative scenarios expose the four ordered teaching stages',()=>{
 assert.equal(Object.keys(pathologyStageProfiles).length,5);
 for(const key of Object.keys(pathologyStageProfiles)){
  const [organId,scenarioId]=key.split(':');
  const scenario=pathology[organId].find(item=>item.id===scenarioId);
  assert.ok(scenario,`${key}: scenario missing`);
  assert.equal(scenario.stageSchemaVersion,1);
  assert.deepEqual(scenario.stages.map(stage=>stage.id),pathologyStageOrder);
  assert.equal(scenario.defaultStageId,'established');
  assert.ok(scenario.stageCaveat.length>20);
  for(const stage of scenario.stages){
   assert.match(stage.source,/^https:\/\//);
   assert.ok(stage.description.length>15);
   assert.ok(stage.parameters.effectIntensity>=0&&stage.parameters.effectIntensity<=1);
   assert.ok(stage.parameters.deformationScale>=0&&stage.parameters.deformationScale<=1);
   assert.ok(stage.parameters.motionScale>=0&&stage.parameters.motionScale<=1);
  }
 }
});

test('resolving a stage returns a scenario-compatible view without changing the base scenario',()=>{
 const scenario=pathology.heart.find(item=>item.id==='dilated');
 const baseAmount=scenario.amount;
 const early=resolvePathologyStage(scenario,'early');
 assert.equal(early.id,scenario.id);
 assert.equal(early.target,scenario.target);
 assert.equal(early.kind,scenario.kind);
 assert.equal(early.stageId,'early');
 assert.equal(early.amount,baseAmount*early.stageParameters.deformationScale);
 assert.equal(scenario.amount,baseAmount);
 const normal=resolvePathologyStage(scenario,'normal');
 assert.equal(normal.recommendedIntensity,0);
 assert.equal(normal.amount,0);
});

test('legacy single-state callers keep the existing top-level scenario contract',()=>{
 const scenario=pathology.kidneys.find(item=>item.id==='hydronephrosis');
 assert.equal(scenario.target,'renal_pelvis|calyx');
 assert.equal(scenario.kind,'expand');
 assert.equal(scenario.amount,.16);
 const candidates=compilePathologyStates({kidneys:{id:'hydronephrosis',intensity:.65}},false);
 assert.equal(candidates.length,1);
 assert.equal(candidates[0].scenario,scenario);
 assert.equal(candidates[0].target.test('VH_M_renal_pelvis_L'),true);
});

test('stage state normalization accepts saved legacy states and rejects invalid stages',()=>{
 const scenario=pathology.prostate.find(item=>item.id==='bph');
 assert.deepEqual(normalizePathologyStageState(scenario,{id:'bph'}),{id:'bph',stageId:'established',intensity:.68});
 const clamped=normalizePathologyStageState(scenario,{id:'bph',stageId:'advanced',intensity:8});
 assert.equal(clamped.stageId,'advanced');
 assert.equal(clamped.intensity,1);
 const fallback=normalizePathologyStageState(scenario,{id:'bph',stageId:'not-a-stage'});
 assert.equal(fallback.stageId,'established');
});

test('unstaged scenarios remain unchanged when resolved',()=>{
 const scenario=pathology.brain[0];
 assert.equal(resolvePathologyStage(scenario,'early'),scenario);
 assert.deepEqual(normalizePathologyStageState(scenario,{id:scenario.id,intensity:.4}),{id:scenario.id,intensity:.4});
});
