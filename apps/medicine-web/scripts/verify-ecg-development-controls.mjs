import assert from 'node:assert/strict';
import {createHeartMesh,DEFAULT_FORWARD_INPUTS,ventricularActivationBursts} from '../src/lib/ecg-forward-model.ts';

// Parameter causality before integration: controls alter tissue, not ECG samples.
const mesh=electrophysiology=>createHeartMesh({...DEFAULT_FORWARD_INPUTS,condition:'af',electrophysiology});
const driven=mesh({atrialDrive:1}),off=mesh({atrialDrive:0}),recovered=mesh({atrialRecovery:150});
assert.deepEqual(driven.edges,off.edges);
let foci=0;
driven.cells.forEach((cell,i)=>{
  if(cell.automaticity){foci++;assert.equal(off.cells[i].automaticity,0);}
  if(cell.chamber==='RA'||cell.chamber==='LA')assert.equal(recovered.cells[i].tauOpen,150);
});
assert.ok(foci>0);
for(const value of [200,2000,3500]) {
  const model=createHeartMesh({...DEFAULT_FORWARD_INPUTS,condition:'mobitz2',electrophysiology:{hisRecovery:value}});
  const his=model.landmarks.find(item=>item.label==='His').index;
  assert.equal(model.cells[his].slowRecovery,value);
  assert.equal('refractoryMs' in model.cells[his],false,'no fixed refractory timer');
}

// A weak/absent His marker must not erase real myocardial crossings from the UI.
const cells=[{chamber:'LV',region:'lv-septal'},{chamber:'RV',region:'rv-apical'},{chamber:'LV',bridge:true}],voltage=new Float32Array(80*3);
for(const onset of [5,50])for(let f=onset;f<onset+8;f++) {voltage[f*3]=.7;if(f>onset)voltage[f*3+1]=.7;}
voltage[30*3+2]=.8;
const bursts=ventricularActivationBursts({mesh:{cells},voltage,samples:80,sampleMs:2,events:[]});
assert.deepEqual(bursts,[{start:10,end:12,cells:2,firstRegion:'lv-septal'},{start:100,end:102,cells:2,firstRegion:'lv-septal'}]);
console.log('PASS: AF current/recovery controls, continuous His recovery input, ventricular jumps independent of His events.');
