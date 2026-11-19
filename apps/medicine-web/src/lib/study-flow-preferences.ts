export const STUDY_FLOW_BUTTON_STORAGE_KEY = "medicine-study-flow-button-v1";
export const STUDY_FLOW_BUTTON_POSITION_PROPERTY = "--flow-button-position";
const POSITION_STORAGE_KEY = "medicine-study-flow-button-position-v1";

export const studyFlowButtonInitScript = `(function(){
  var root=document.documentElement,v="shown";
  try{
    if(localStorage.getItem(${JSON.stringify(STUDY_FLOW_BUTTON_STORAGE_KEY)})==="hidden")v="hidden";
    var saved=localStorage.getItem(${JSON.stringify(POSITION_STORAGE_KEY)}),position=Number(saved);
    if(saved&&Number.isFinite(position)&&position>=0&&position<=1)root.style.setProperty(${JSON.stringify(STUDY_FLOW_BUTTON_POSITION_PROPERTY)},position*100+"%");
  }catch(e){}
  root.dataset.studyFlowButton=v;
})();`;

const listeners = new Set<() => void>();

function notify() {
  for (const listener of listeners) listener();
}

function onStorage(event: StorageEvent) {
  if (event.key !== STUDY_FLOW_BUTTON_STORAGE_KEY && event.key !== null) return;
  document.documentElement.dataset.studyFlowButton = event.newValue === "hidden" ? "hidden" : "shown";
  notify();
}

export function getStudyFlowButtonVisible(): boolean {
  if (typeof document === "undefined") return true;
  const current = document.documentElement.dataset.studyFlowButton;
  if (current === "hidden" || current === "shown") return current === "shown";
  try { return window.localStorage.getItem(STUDY_FLOW_BUTTON_STORAGE_KEY) !== "hidden"; }
  catch { return true; }
}

export function getStudyFlowButtonServerSnapshot(): boolean {
  return true;
}

export function subscribeStudyFlowButton(listener: () => void) {
  if (typeof window === "undefined") return () => {};
  listeners.add(listener);
  if (listeners.size === 1) window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) window.removeEventListener("storage", onStorage);
  };
}

export function setStudyFlowButtonVisible(visible: boolean): boolean {
  if (typeof document === "undefined" || typeof window === "undefined") return false;
  const value = visible ? "shown" : "hidden";
  document.documentElement.dataset.studyFlowButton = value;
  let saved = true;
  try { window.localStorage.setItem(STUDY_FLOW_BUTTON_STORAGE_KEY, value); }
  catch { saved = false; }
  notify();
  return saved;
}

export function setStudyFlowButtonPosition(position: number) {
  document.documentElement.style.setProperty(STUDY_FLOW_BUTTON_POSITION_PROPERTY, `${position * 100}%`);
  try { window.localStorage.setItem(POSITION_STORAGE_KEY, String(position)); }
  catch {}
}
