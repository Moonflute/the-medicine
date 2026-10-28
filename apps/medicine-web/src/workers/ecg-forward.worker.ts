import { simulateForwardEcg, referenceForwardInputs, type ForwardInputs } from "../lib/ecg-forward-model";

// One worker per calculation: terminating it cancels obsolete input generations.
self.onmessage = (event:MessageEvent<{inputs:ForwardInputs;needsReference:boolean}>) => {
  try {
    const {inputs,needsReference}=event.data;
    const reference=needsReference?simulateForwardEcg(referenceForwardInputs(inputs),percent=>self.postMessage({type:"progress",percent:percent*.45})):undefined;
    const recording=simulateForwardEcg(inputs,percent=>self.postMessage({type:"progress",percent:needsReference?45+percent*.55:percent}));
    const transfer=[recording,...(reference?[reference]:[])].flatMap(r=>[r.voltage.buffer,r.dipole.buffer,r.activationMs.buffer,r.recoveryMs.buffer]);
    self.postMessage({type:"result",recording,reference},{transfer});
  } catch(error) {
    self.postMessage({type:"error",message:error instanceof Error?error.message:"Calculation failed"});
  }
};
