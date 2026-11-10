import assert from 'node:assert/strict';
import test from 'node:test';
import { deployPages } from './deploy-pages.mjs';

function fixture(readStatus, { cancelError, createError } = {}) {
  let elapsed = 0;
  let reads = 0;
  const calls = [];
  const outputs = {};
  const logs = [];
  const context = { repo: { owner: 'example', repo: 'site' }, sha: 'current-commit', runId: 456 };
  const options = {
    context, artifactId: '123', runAttempt: '1', now: () => elapsed, wait: async ms => { elapsed += ms; },
    core: { getIDToken: async () => 'test-oidc', setSecret() {}, info: text => logs.push(text), warning: text => logs.push(text), setOutput: (key, value) => { outputs[key] = value; } },
    github: { request: async (route, input) => {
      calls.push({ route, input, elapsed });
      if (route.endsWith('/cancel')) {
        if (cancelError) throw cancelError;
        return { status: 204 };
      }
      if (route.startsWith('POST ')) {
        if (createError) throw createError;
        return { data: { id: input.pages_build_version, page_url: 'https://example.github.io/site/' } };
      }
      return { status: 200, headers: { 'x-github-request-id': 'test-request' }, data: await readStatus(elapsed, ++reads, input) };
    } },
  };
  return { options, calls, outputs, logs, elapsed: () => elapsed,
    creates: () => calls.filter(call => call.route.startsWith('POST ') && !call.route.endsWith('/cancel')) };
}

test('file sync can finish after ten minutes without cancellation or another upload', async () => {
  const f = fixture(ms => ({ status: ms >= 11 * 60_000 ? 'succeed' : 'syncing_files' }));
  await deployPages(f.options);
  assert.equal(f.elapsed(), 11 * 60_000);
  assert.equal(f.outputs.status, 'succeed');
  assert.equal(f.calls.filter(call => call.route.startsWith('POST ')).length, 1);
  assert.equal(f.calls[0].input.artifact_id, 123);
  assert.notEqual(f.calls[0].input.pages_build_version, 'current-commit');
  assert.equal(f.calls[1].elapsed, 15_000);
  assert.equal(f.calls[0].input.oidc_token, 'test-oidc');
});

test('real Pages failure stops immediately instead of waiting or reporting success', async () => {
  const f = fixture(() => ({ status: 'deployment_content_failed' }));
  await assert.rejects(deployPages(f.options), /deployment_content_failed/);
  assert.equal(f.elapsed(), 15_000);
  assert.equal(f.outputs.status, undefined);
  assert.equal(f.calls.filter(call => call.route.endsWith('/cancel')).length, 0);
});

test('twenty empty responses and temporary API errors can recover without failing or republishing', async () => {
  const recovered = fixture((_ms, read) => {
    if (read === 1) throw Object.assign(new Error('service unavailable'), { status: 503 });
    return read <= 20 ? {} : { status: 'succeed' };
  });
  await deployPages(recovered.options);
  assert.equal(recovered.outputs.status, 'succeed');
  assert.equal(recovered.creates().length, 1);
  assert.ok(recovered.logs.some(line => line.includes('keys (empty); request test-request')));
});

test('the actual deadline cancels only this unfinished deployment', async () => {
  const f = fixture(() => ({ status: 'syncing_files' }));
  await assert.rejects(deployPages({ ...f.options, timeoutMs: 60_000 }), /exceeded 1 minutes/);
  assert.equal(f.elapsed(), 60_000);
  assert.equal(f.outputs.status, undefined);
  assert.ok(f.calls.at(-1).route.endsWith('/cancel'));
  assert.equal(f.calls.at(-1).input.pages_deployment_id, f.outputs.deployment_id);
});

test('a workflow rerun never reads the previous commit-keyed cancellation or success', async () => {
  const original = fixture(() => ({ status: 'succeed' }));
  await deployPages(original.options);
  const rerun = fixture((_ms, _read, input) => ({
    status: [original.outputs.deployment_id, 'current-commit'].includes(input.pages_deployment_id)
      ? 'deployment_cancelled' : 'succeed',
  }));
  await deployPages({ ...rerun.options, runAttempt: '2' });
  assert.equal(rerun.outputs.status, 'succeed');
  assert.notEqual(rerun.outputs.deployment_id, original.outputs.deployment_id);
});

test('sustained missing status recovers once with the same artifact after cancelling only its own attempt', async () => {
  const f = fixture(() => f.creates().length === 1 ? {} : { status: 'succeed' });
  await deployPages(f.options);
  const [first, second] = f.creates();
  assert.equal(f.creates().length, 2);
  assert.notEqual(first.input.pages_build_version, second.input.pages_build_version);
  assert.equal(first.input.artifact_id, second.input.artifact_id);
  const cancellation = f.calls.find(call => call.route.endsWith('/cancel'));
  assert.equal(cancellation.input.pages_deployment_id, first.input.pages_build_version);
  assert.ok(second.elapsed >= cancellation.elapsed + 30_000);
  assert.equal(f.outputs.deployment_id, second.input.pages_build_version);
  assert.equal(f.outputs.status, 'succeed');
});

test('unknown status never counts as success and recovery respects the shared deadline', async () => {
  const f = fixture(() => ({ status: 'unknown_status' }));
  await assert.rejects(deployPages({ ...f.options, timeoutMs: 120_000, unavailableTimeoutMs: 30_000, retryDelayMs: 1_000 }), /exceeded 2 minutes/);
  assert.equal(f.elapsed(), 120_000);
  assert.equal(f.creates().length, 2);
  assert.equal(f.calls.filter(call => call.route.endsWith('/cancel')).length, 2);
  assert.equal(f.outputs.status, undefined);
});

test('failed cancellation prevents overlapping publication', async () => {
  const f = fixture(() => ({}), { cancelError: new Error('service unavailable') });
  await assert.rejects(deployPages({ ...f.options, unavailableTimeoutMs: 30_000 }), /refusing an overlapping publication/);
  assert.equal(f.creates().length, 1);
  assert.equal(f.outputs.status, undefined);
});

test('ambiguous creation errors and permission errors are not retried as new deployments', async () => {
  const creation = fixture(() => ({}), { createError: new Error('connection reset') });
  await assert.rejects(deployPages(creation.options), /connection reset/);
  assert.equal(creation.calls.length, 1);
  const permission = fixture(() => { throw Object.assign(new Error('forbidden'), { status: 403 }); });
  await assert.rejects(deployPages(permission.options), /forbidden/);
  assert.equal(permission.creates().length, 1);
  assert.ok(permission.calls.at(-1).route.endsWith('/cancel'));
  assert.equal(permission.outputs.status, undefined);
});
