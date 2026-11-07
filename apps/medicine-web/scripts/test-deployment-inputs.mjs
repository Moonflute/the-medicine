import assert from 'node:assert/strict';
import test from 'node:test';
import {dependencyCacheKey,needsPhysiologyVerification,withoutReleaseVersion} from './deployment-inputs.mjs';

test('release numbers reuse dependency cache; resolved dependencies invalidate it', () => {
  const lock={version:'1',packages:{'':{version:'1',dependencies:{next:'16'}},'node_modules/next':{version:'16',integrity:'one'}}};
  const bumped=structuredClone(lock);bumped.version='2';bumped.packages[''].version='2';
  assert.equal(dependencyCacheKey(lock),dependencyCacheKey(bumped));
  bumped.packages['node_modules/next'].integrity='two';
  assert.notEqual(dependencyCacheKey(lock),dependencyCacheKey(bumped));
  assert.equal(lock.version,'1');
});
test('only isolated Atlas edits and version-only bumps skip physiology', () => {
  const packageFile='apps/medicine-web/package.json';
  assert.equal(needsPhysiologyVerification(['packages/organ-atlas/src/journey.js',packageFile],new Set([packageFile])),false);
  for(const file of [packageFile,'.github/workflows/deploy-medicine-web.yml','apps/medicine-web/src/lib/ecg-model.ts','apps/medicine-web/src/app/layout.tsx','source_notes/10 Hubs/physiology.md','unknown-new-file']) {
    assert.equal(needsPhysiologyVerification(['packages/organ-atlas/src/journey.js',file]),true,file);
  }
  assert.equal(needsPhysiologyVerification([]),true);
  assert.notDeepEqual(withoutReleaseVersion({version:'1',scripts:{build:'one'}}),withoutReleaseVersion({version:'2',scripts:{build:'two'}}));
});
