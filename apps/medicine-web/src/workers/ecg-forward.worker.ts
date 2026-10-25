import { simulateForwardEcg, type ForwardInputs } from "../lib/ecg-forward-model";

// One worker per calculation: terminating it cancels obsolete input generations.
self.onmessage = (event:MessageEvent<ForwardInputs>) => {
  try {
    const recording=simulateForwardEcg(event.data,percent=>self.postMessage({type:"progress",percent}));
    self.postMessage({type:"result",recording},{transfer:[recording.voltage.buffer,recording.dipole.buffer,recording.activationMs.buffer,recording.recoveryMs.buffer]});
  } catch(error) {
    self.postMessage({type:"error",message:error instanceof Error?error.message:"Calculation failed"});
  }
};
