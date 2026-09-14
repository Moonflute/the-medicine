import test from 'node:test';
import assert from 'node:assert/strict';
import { createHandler } from '../../../supabase/functions/document-editor/handler.ts';
import { EDITOR_USER_ID, PILOT_PATHS } from '../src/lib/document-edit-core.ts';
const owner = { id: EDITOR_USER_ID, app_metadata: { providers: ['google'] } };
const sha = 'a'.repeat(40);
const commit = 'b'.repeat(40);
const payload = { action: 'save', path: PILOT_PATHS[0], sha, changes: [{ index: 0, markdown: 'new text' }], requestId: '12345678-1234-1234-1234-123456789abc' };
const req = (body = payload, token = 'valid') => new Request('https://local/editor', { method: 'POST', headers: { Authorization: `Bearer ${token}`, Origin: 'https://moonflute.github.io' }, body: JSON.stringify(body) });
const json = (value, status = 200) => new Response(JSON.stringify(value), { status });
const file = (version = sha) => json({ type: 'file', encoding: 'base64', content: btoa('old text\n'), sha: version });
test('owner restriction runs before GitHub calls', async () => {
  const handler = createHandler({ token: 'server-only', authenticate: async () => ({ id: 'other' }), fetcher: async () => { throw Error('must not call'); } });
  assert.equal((await handler(req())).status, 403);
});
test('path allowlist rejects repository code writes', async () => {
  const handler = createHandler({ token: 'server-only', authenticate: async () => owner, fetcher: async () => { throw Error('must not call'); } });
  assert.equal((await handler(req({ ...payload, path: '.github/workflows/deploy.yml' }))).status, 403);
});
test('stale editor is rejected before PUT', async () => {
  let writes = 0;
  const handler = createHandler({ token: 'server-only', authenticate: async () => owner, fetcher: async (_url, init) => { if (init.method === 'PUT') writes++; return file('c'.repeat(40)); } });
  assert.equal((await handler(req())).status, 409);
  assert.equal(writes, 0);
});
test('save sends original SHA and encoded Markdown; one commit', async () => {
  let writes = 0;
  const handler = createHandler({ token: 'server-only', authenticate: async () => owner, fetcher: async (_url, init) => {
    if (init.method !== 'PUT') return file();
    writes++;
    const body = JSON.parse(init.body);
    assert.equal(body.sha, sha); assert.equal(body.branch, 'master');
    assert.equal(atob(body.content), 'new text\n');
    assert.ok(body.message.includes(payload.requestId));
    return json({ content: { sha: 'c'.repeat(40) }, commit: { sha: commit, html_url: 'https://github.com/Moonflute/the-medicine/commit/' + commit } });
  } });
  const response = await handler(req());
  assert.equal(response.status, 200); assert.equal((await response.json()).commit, commit); assert.equal(writes, 1);
});
test('GitHub atomic race conflict is surfaced and never retried', async () => {
  let writes = 0;
  const handler = createHandler({ token: 'server-only', authenticate: async () => owner, fetcher: async (_url, init) => {
    if (init.method !== 'PUT') return file(); writes++; return json({}, 409);
  } });
  assert.equal((await handler(req())).status, 409); assert.equal(writes, 1);
});
test('no-op never creates a commit', async () => {
  const handler = createHandler({ token: 'server-only', authenticate: async () => owner, fetcher: async (_url, init) => { assert.notEqual(init.method, 'PUT'); return file(); } });
  assert.equal((await (await handler(req({ ...payload, changes: [] }))).json()).unchanged, true);
});
test('timeout after write stays uncertain, no automatic write retry', async () => {
  let writes = 0;
  const handler = createHandler({ token: 'server-only', authenticate: async () => owner, fetcher: async (_url, init) => {
    if (init.method !== 'PUT') return file(); writes++; throw Error('timeout after commit');
  } });
  assert.equal((await handler(req())).status, 502); assert.equal(writes, 1);
});
test('a successor deployment can include a save whose run was cancelled', async () => {
  const handler = createHandler({ token: 'server-only', authenticate: async () => owner, fetcher: async (url) => url.includes('/compare/') ? json({ status: 'ahead' }) : json({ workflow_runs: [{ head_sha: 'c'.repeat(40), conclusion: 'success', html_url: 'https://github.com/run' }] }) });
  const result = await (await handler(req({ action: 'status', path: PILOT_PATHS[0], commit }))).json();
  assert.equal(result.state, 'deployed');
});
