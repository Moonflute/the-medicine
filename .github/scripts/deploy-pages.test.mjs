import assert from 'node:assert/strict';
import test from 'node:test';
import { deployPages } from './deploy-pages.mjs';

function fixture(readStatus) {
  let elapsed = 0;
  let reads = 0;
  const calls = [];
  const outputs = {};
  const context = { repo: { owner: 'example', repo: 'site' }, sha: 'current-commit' };
  const options = {
    context, artifactId: '123', now: () => elapsed, wait: async ms => { elapsed += ms; },
    core: { getIDToken: async () => 'test-oidc', setSecret() {}, info() {}, warning() {}, setOutput: (key, value) => { outputs[key] = value; } },
    github: { request: async (route, input) => {
      calls.push({ route, input });
      if (route.endsWith('/cancel')) return { status: 204 };
      if (route.startsWith('POST ')) return { data: { id: 'current-commit', page_url: 'https://example.github.io/site/' } };
      return { data: await readStatus(elapsed, ++reads) };
    } },
  };
  return { options, calls, outputs, elapsed: () => elapsed };
}

test('file sync can finish after ten minutes without cancellation or another upload', async () => {
  const f = fixture(ms => ({ status: ms >= 11 * 60_000 ? 'succeed' : 'syncing_files' }));
  await deployPages(f.options);
  assert.equal(f.elapsed(), 11 * 60_000);
  assert.equal(f.outputs.status, 'succeed');
  assert.equal(f.calls.filter(call => call.route.startsWith('POST ')).length, 1);
  assert.equal(f.calls[0].input.artifact_id, 123);
  assert.equal(f.calls[0].input.pages_build_version, 'current-commit');
  assert.equal(f.calls[0].input.oidc_token, 'test-oidc');
});

test('real Pages failure stops immediately instead of waiting or reporting success', async () => {
  const f = fixture(() => ({ status: 'deployment_content_failed' }));
  await assert.rejects(deployPages(f.options), /deployment_content_failed/);
  assert.equal(f.elapsed(), 0);
  assert.equal(f.outputs.status, undefined);
  assert.equal(f.calls.filter(call => call.route.endsWith('/cancel')).length, 0);
});

test('empty responses and temporary API errors can recover, but never count as success', async () => {
  const recovered = fixture((_ms, read) => {
    if (read === 1) throw Object.assign(new Error('service unavailable'), { status: 503 });
    return read === 2 ? {} : { status: 'succeed' };
  });
  await deployPages(recovered.options);
  assert.equal(recovered.outputs.status, 'succeed');
  const empty = fixture(() => ({}));
  await assert.rejects(deployPages(empty.options), /no usable status/);
  assert.equal(empty.outputs.status, undefined);
  assert.equal(empty.calls.at(-1).input.pages_deployment_id, 'current-commit');
  assert.ok(empty.calls.at(-1).route.endsWith('/cancel'));
});

test('the actual deadline cancels only this unfinished deployment', async () => {
  const f = fixture(() => ({ status: 'syncing_files' }));
  await assert.rejects(deployPages({ ...f.options, timeoutMs: 60_000 }), /exceeded 1 minutes/);
  assert.equal(f.elapsed(), 60_000);
  assert.equal(f.outputs.status, undefined);
  assert.ok(f.calls.at(-1).route.endsWith('/cancel'));
  assert.equal(f.calls.at(-1).input.pages_deployment_id, 'current-commit');
});
