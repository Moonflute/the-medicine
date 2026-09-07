export type SimulationClock = {
  seconds: number; playing: boolean; speed: number; period: number; reducedMotion: boolean;
};

export function advanceSimulation(clock: SimulationClock, deltaSeconds: number) {
  if (clock.playing && Number.isFinite(deltaSeconds)) clock.seconds += Math.min(0.1, Math.max(0, deltaSeconds)) * clock.speed;
}

export function simulationPhase(clock: SimulationClock) {
  return ((clock.seconds % clock.period) + clock.period) % clock.period / clock.period;
}

/** All UI writes enter here; canvas consumers only read the shared clock. */
export function updateSimulationClock(ref: { current: SimulationClock }, patch: Partial<SimulationClock>) {
  Object.assign(ref.current, patch);
}
