import { simulateForwardEcg, referenceForwardInputs, type ForwardInputs, type ForwardRecording } from "../lib/ecg-forward-model";

const buffers=(r:ForwardRecording)=>[r.voltage.buffer,r.dipole.buffer,r.activationMs.buffer,r.recoveryMs.buffer];

// One worker per calculation: terminating it cancels obsolete input generations.
self.onmessage = (event:MessageEvent<{inputs:ForwardInputs;needsReference:boolean;needsRecording?:boolean}>) => {
  try {
    const {inputs,needsReference,needsRecording=true}=event.data;
    if(needsReference) {
      const reference=simulateForwardEcg(referenceForwardInputs(inputs),percent=>self.postMessage({type:"progress",percent:needsRecording?percent*.45:percent}));
      self.postMessage({type:"reference",recording:reference},{transfer:buffers(reference)});
    }
    const recording=needsRecording?simulateForwardEcg(inputs,percent=>self.postMessage({type:"progress",percent:needsReference?45+percent*.55:percent})):undefined;
    self.postMessage({type:"result",recording},{transfer:recording?buffers(recording):[]});
  } catch(error) {
    self.postMessage({type:"error",message:error instanceof Error?error.message:"Calculation failed"});
  }
};
