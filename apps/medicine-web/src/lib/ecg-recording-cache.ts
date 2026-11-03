import type {ForwardRecording} from "./ecg-forward-model";

/** Page-local LRU. Buffers are reused by identity, not copied or persisted.
 * Account conservatively for graph/event objects as well as typed arrays.
 * Oversized long-rhythm recordings remain viewable but are not retained here. */
export function createEcgRecordingCache(maxBytes=48*1024*1024,maxEntries=4) {
  const entries=new Map<string,{recording:ForwardRecording;bytes:number}>();
  let bytes=0;
  const remove=(key:string)=>{const previous=entries.get(key);if(previous){bytes-=previous.bytes;entries.delete(key);}};
  return {
    get(key:string):ForwardRecording|undefined {
      const entry=entries.get(key);if(!entry)return;
      if(!entry.recording.voltage.byteLength){remove(key);return;}
      entries.delete(key);entries.set(key,entry);return entry.recording;
    },
    set(key:string,recording:ForwardRecording) {
      remove(key);
      const arrays=recording.voltage.byteLength+recording.dipole.byteLength+recording.activationMs.byteLength+recording.recoveryMs.byteLength;
      const size=arrays+recording.mesh.cells.length*512+recording.mesh.edges.length*64+(recording.events?.length??0)*48+(recording.stimuli?.length??0)*96;
      if(!recording.voltage.byteLength||size>maxBytes||maxEntries<1)return false;
      while(entries.size&&(bytes+size>maxBytes||entries.size>=maxEntries))remove(entries.keys().next().value!);
      entries.set(key,{recording,bytes:size});bytes+=size;return true;
    },
    get size(){return entries.size;},
    get bytes(){return bytes;},
  };
}
