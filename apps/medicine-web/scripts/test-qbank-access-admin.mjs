import test from 'node:test';
import assert from 'node:assert/strict';
import { createQbankAccessHandler } from '../../../supabase/functions/qbank-access-admin/handler.ts';
import { EDITOR_USER_ID } from '../src/lib/document-edit-core.ts';

const otherId = '01234567-89ab-cdef-0123-456789abcdef';
const owner = { id: EDITOR_USER_ID, email: 'owner@example.test', email_confirmed_at: '2026-01-01T00:00:00Z', app_metadata: { providers: ['google'] }, created_at: '2026-01-01T00:00:00Z', last_sign_in_at: '2026-11-15T06:00:00Z' };
const member = { ...owner, id: otherId, email: 'member@example.test', user_metadata: { full_name: 'Member', private_value: 'not-for-client' } };
const json = (data, status = 200, headers = {}) => new Response(JSON.stringify(data), { status, headers });
const request = (body = { action: 'list' }, token = 'owner-token', origin = 'https://moonflute.github.io') => new Request('https://edge.test/qbank-access-admin', {
  method: 'POST', headers: { ...(token ? { Authorization: `Bearer ${token}` } : {}), Origin: origin }, body: JSON.stringify(body),
});
function setup({ caller = owner, onAdmin = () => { throw Error('unexpected privileged request'); } } = {}) {
  const calls = [];
  const handler = createQbankAccessHandler({
    supabaseUrl: 'https://project.example.test/', anonKey: 'public-key', serviceKey: 'server-secret',
    fetcher: async (url, init) => {
      const route = new URL(url);
      calls.push({ route, init });
      if (route.pathname === '/auth/v1/user') {
        assert.equal(init.headers.apikey, 'public-key');
        assert.equal(init.headers.Authorization, 'Bearer owner-token');
        return caller === null ? json({}, 401) : json(caller);
      }
      assert.equal(init.headers.Authorization, 'Bearer server-secret');
      assert.equal(init.headers.apikey, 'server-secret');
      return onAdmin(route, init);
    },
  });
  return { handler, calls };
}

test('missing, invalid and non-owner sessions cannot list or change access', async () => {
  const missing = setup();
  assert.equal((await missing.handler(request(undefined, ''))).status, 401);
  assert.equal(missing.calls.length, 0);
  for (const caller of [null, member, { ...owner, app_metadata: {}, user_metadata: { role: 'admin', providers: ['google'] } }, { ...owner, is_anonymous: true }, { ...owner, banned_until: '2999-01-01T00:00:00Z' }]) {
    for (const input of [{ action: 'list' }, { action: 'set-access', userId: otherId, enabled: true }]) {
      const { handler, calls } = setup({ caller });
      assert.equal((await handler(request(input))).status, caller === null ? 401 : 403);
      assert.equal(calls.length, 1);
      assert.equal(calls[0].route.pathname, '/auth/v1/user');
    }
  }
});

test('list exposes only account labels and access, with server pagination and search', async () => {
  const { handler, calls } = setup({ onAdmin: (url) => {
    if (url.pathname === '/auth/v1/admin/users') {
      assert.equal(url.searchParams.get('page'), '2');
      assert.equal(url.searchParams.get('per_page'), '25');
      assert.equal(url.searchParams.get('filter'), 'member');
      return json({ users: [owner, member] }, 200, { 'X-Total-Count': '52' });
    }
    assert.equal(url.pathname, '/rest/v1/private_qbank_access');
    assert.equal(url.searchParams.get('select'), 'user_id,enabled');
    assert.equal(url.searchParams.get('user_id'), `in.(${EDITOR_USER_ID},${otherId})`);
    return json([{ user_id: EDITOR_USER_ID, enabled: true }, { user_id: otherId, enabled: false }]);
  } });
  const response = await handler(request({ action: 'list', page: 2, search: ' Member ' }));
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.equal(response.headers.get('access-control-allow-origin'), 'https://moonflute.github.io');
  const result = await response.json();
  assert.deepEqual(result, {
    users: [
      { id: EDITOR_USER_ID, email: owner.email, name: '', enabled: true, isOwner: true, canApprove: true,
        accessLevel: 'master', canEditShared: true, canManageAccess: true, createdAt: '2026-01-01T00:00:00.000Z', lastSignInAt: '2026-11-15T06:00:00.000Z' },
      { id: otherId, email: member.email, name: 'Member', enabled: false, isOwner: false, canApprove: true,
        accessLevel: 'basic', canEditShared: false, canManageAccess: false, createdAt: '2026-01-01T00:00:00.000Z', lastSignInAt: '2026-11-15T06:00:00.000Z' },
    ], page: 2, pageSize: 25, total: 52, hasMore: true,
  });
  assert.doesNotMatch(JSON.stringify(result), /server-secret|not-for-client|app_metadata|email_confirmed_at/);
  assert.equal(calls.length, 3);
});

test('approved users stay read-only even when their profile claims admin rights', async () => {
  const { handler } = setup({ onAdmin: url => url.pathname === '/auth/v1/admin/users'
    ? json({ users: [{ ...member, user_metadata: { role: 'master', canEditShared: true, canManageAccess: true } }] })
    : json([{ user_id: otherId, enabled: true }]) });
  const response = await handler(request());
  assert.equal(response.status, 200);
  const user = (await response.json()).users[0];
  assert.equal(user.accessLevel, 'approved');
  assert.equal(user.canEditShared, false);
  assert.equal(user.canManageAccess, false);
  assert.equal(user.isOwner, false);
});

test('missing or invalid Auth dates stay unknown and never imply a live online session', async () => {
  const { handler } = setup({ onAdmin: url => url.pathname === '/auth/v1/admin/users'
    ? json({ users: [{ ...member, created_at: 'invalid', last_sign_in_at: null,
      user_metadata: { last_sign_in_at: '2026-11-15T09:00:00Z', online: true } }] }) : json([]) });
  const user = (await (await handler(request())).json()).users[0];
  assert.equal(user.createdAt, null);
  assert.equal(user.lastSignInAt, null);
  assert.equal(user.online, undefined);
  assert.equal(user.accessLevel, 'basic');
});

test('empty lists need no access lookup and literal wildcard searches stay escaped', async () => {
  const { handler, calls } = setup({ onAdmin: url => {
    assert.equal(url.searchParams.get('filter'), 'user\\_1\\%');
    return json({ users: [] }, 200, { 'X-Total-Count': '0' });
  } });
  const response = await handler(request({ action: 'list', search: 'user_1%' }));
  const result = await response.json();
  assert.deepEqual(result.users, []);
  assert.equal(result.hasMore, false);
  assert.equal(calls.length, 2);
});

test('access lookup failure never presents accounts as unapproved', async () => {
  const { handler } = setup({ onAdmin: url => url.pathname === '/auth/v1/admin/users' ? json({ users: [member] }) : json({ message: 'database secret' }, 503) });
  const response = await handler(request());
  assert.equal(response.status, 502);
  assert.equal((await response.json()).users, undefined);
});

test('grant and revoke only upsert user_id and enabled in the existing approval table', async () => {
  for (const enabled of [true, false]) {
    let writes = 0;
    const { handler } = setup({ onAdmin: (url, init) => {
      if (url.pathname.startsWith('/auth/v1/admin/users/')) {
        assert.equal(url.pathname, `/auth/v1/admin/users/${otherId}`);
        return json(member);
      }
      assert.equal(url.pathname, '/rest/v1/private_qbank_access');
      assert.equal(url.searchParams.get('on_conflict'), 'user_id');
      assert.equal(init.method, 'POST');
      assert.equal(init.headers.Prefer, 'resolution=merge-duplicates,return=representation');
      assert.deepEqual(JSON.parse(init.body), { user_id: otherId, enabled });
      writes++;
      return json([{ user_id: otherId, enabled }], 201);
    } });
    const response = await handler(request({ action: 'set-access', userId: otherId, enabled, role: 'admin', app_metadata: { role: 'owner' } }));
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { userId: otherId, enabled,
      accessLevel: enabled ? 'approved' : 'basic', canEditShared: false, canManageAccess: false });
    assert.equal(writes, 1);
  }
});

test('owner self-revocation and malformed requests never reach privileged APIs', async () => {
  for (const input of [
    { action: 'set-access', userId: EDITOR_USER_ID.toUpperCase(), enabled: false },
    { action: 'set-access', userId: otherId, enabled: 'true' },
    { action: 'set-access', userId: '../users', enabled: true },
    { action: 'list', page: 0 }, { action: 'list', page: 1.5 }, { action: 'list', search: 'a'.repeat(201) },
    { action: 'delete-user', userId: otherId }, null, [],
  ]) {
    const { handler, calls } = setup();
    assert.equal((await handler(request(input))).status, 400);
    assert.equal(calls.length, 1);
  }
});

test('only existing confirmed Google accounts can be approved', async () => {
  for (const target of [null, { ...member, is_anonymous: true }, { ...member, email_confirmed_at: '' }, { ...member, app_metadata: { providers: ['email'] } }, { ...member, banned_until: '2999-01-01T00:00:00Z' }]) {
    const { handler, calls } = setup({ onAdmin: url => {
      assert.equal(url.pathname, `/auth/v1/admin/users/${otherId}`);
      return target ? json(target) : json({}, 404);
    } });
    assert.equal((await handler(request({ action: 'set-access', userId: otherId, enabled: true }))).status, target ? 400 : 404);
    assert.equal(calls.length, 2);
  }
});

test('an ineligible account can still have its existing approval revoked', async () => {
  const { handler } = setup({ onAdmin: url => url.pathname.startsWith('/auth/v1/admin/users/')
    ? json({ ...member, app_metadata: { providers: ['email'] } })
    : json([{ user_id: otherId, enabled: false }]) });
  assert.equal((await handler(request({ action: 'set-access', userId: otherId, enabled: false }))).status, 200);
});

test('uncertain writes are not retried and private errors do not leak', async () => {
  let writes = 0;
  const { handler } = setup({ onAdmin: url => {
    if (url.pathname.startsWith('/auth/v1/admin/users/')) return json(member);
    writes++;
    throw Error('server-secret: timeout after commit');
  } });
  const response = await handler(request({ action: 'set-access', userId: otherId, enabled: true }));
  assert.equal(response.status, 502);
  assert.doesNotMatch(await response.text(), /server-secret/);
  assert.equal(writes, 1);
});

test('CORS preflight and rejected methods make no authentication or privileged calls', async () => {
  const { handler, calls } = setup();
  assert.equal((await handler(request(undefined, 'owner-token', 'https://untrusted.example'))).status, 403);
  assert.equal((await handler(new Request('https://edge.test', { method: 'GET' }))).status, 405);
  const preflight = await handler(new Request('https://edge.test', { method: 'OPTIONS', headers: { Origin: 'https://moonflute.github.io' } }));
  assert.equal(preflight.status, 204);
  assert.equal(preflight.headers.get('access-control-allow-origin'), 'https://moonflute.github.io');
  assert.equal(calls.length, 0);
});
