import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import test from 'node:test';
import ts from 'typescript';

const compiledModule = { exports: {} };
vm.runInNewContext(ts.transpileModule(fs.readFileSync(new URL('../src/lib/qbank-reference.ts', import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, { module: compiledModule, exports: compiledModule.exports, URL });
const { referenceLocation, referenceTarget, referenceNavigationMatches, visitReference, moveReference, isQuestionReferenceRoute, qbankReferenceInitScript, QBANK_REFERENCE_FRAME } = compiledModule.exports;
const origin = 'https://moonflute.github.io';
const base = '/the-medicine';
const plain = value => JSON.parse(JSON.stringify(value));

test('reference navigation preserves the production base path, query and fragment', () => {
  assert.deepEqual(plain(referenceLocation(`${origin}${base}/disease/copd?q=abc#treatment`, origin, base)), {
    href: `${base}/disease/copd/?q=abc#treatment`, route: '/disease/copd/?q=abc#treatment',
  });
  assert.equal(referenceLocation(`${base}/search/`, origin, base).route, '/search/');
  assert.equal(referenceLocation('/search', 'http://localhost:3000').href, '/search/');
});

test('frame navigation rejects foreign, executable and out-of-app targets', () => {
  for (const value of ['javascript:alert(1)', 'data:text/html,hello', 'https://evil.test/the-medicine/', '//evil.test/the-medicine/', '/search/', '/the-medicine-extra/', '/the-medicine/../../other/', 'https://user@moonflute.github.io/the-medicine/', '\\evil.test', null, {}]) {
    assert.equal(referenceLocation(value, origin, base), null, String(value));
  }
});

test('external evidence is isolated from the trusted internal router', () => {
  const target = referenceTarget('https://www.cdc.gov/example', origin, base);
  assert.equal(target.external, true);
  assert.equal(target.href, 'https://www.cdc.gov/example');
  assert.equal(referenceLocation(target.href, origin, base), null);
  assert.equal(referenceTarget(`${base}/disease/copd`, origin, base).external, false);
  for (const value of ['javascript:alert(1)', 'http://example.com/', 'https://user:password@example.com/', '/outside-app/', null]) assert.equal(referenceTarget(value, origin, base), null);
});

test('a related learning session can assign an ID without leaving reference navigation pending', () => {
  const target = `${base}/review/qbank/session/?mode=theory-linked&count=10`;
  assert.equal(referenceNavigationMatches(target, `${target}&session=new-set`, origin, base), true);
  assert.equal(referenceNavigationMatches(`${target}&session=one&resume=1`, `${target}&session=one`, origin, base), true);
  assert.equal(referenceNavigationMatches(`${target}&session=one`, `${target}&session=two`, origin, base), false);
  assert.equal(referenceNavigationMatches(target, `${base}/review/qbank/session/?count=30&mode=theory-linked&session=new-set`, origin, base), false);
  assert.equal(referenceNavigationMatches(`${base}/disease/copd/`, `${base}/search/`, origin, base), false);
});

test('question session and exit links are not hijacked by reference-link interception', () => {
  for (const route of ['/disease/copd/', '/cc/dyspnea/', '/drugs/epinephrine/', '/lab-img/ecg/', '/skills/cpr/', '/interactive/ecg-arrhythmia/', '/search/?q=asthma']) assert.ok(isQuestionReferenceRoute(route), route);
  for (const route of ['/review/qbank/session/?session=one', '/review/qbank/', '/', '/auth/']) assert.equal(isQuestionReferenceRoute(route), false, route);
});

test('reference back and forward are bounded and do not access the browser joint history', () => {
  let history = { entries: ['/search/'], index: 0 };
  history = visitReference(history, '/disease/asthma/');
  history = visitReference(history, '/drugs/salbutamol/');
  const previous = moveReference(history, -1);
  assert.equal(previous.entries[previous.index], '/disease/asthma/');
  assert.equal(moveReference(previous, 1).entries[2], '/drugs/salbutamol/');
  assert.equal(moveReference(history, 100).index, 2);
  assert.equal(moveReference(history, -100).index, 0);
  assert.deepEqual(plain(visitReference(previous, '/disease/copd/')), { entries: ['/search/', '/disease/asthma/', '/disease/copd/'], index: 2 });
});

test('typing a search replaces one history entry so returning to search restores the query', () => {
  let history = { entries: ['/search/'], index: 0 };
  history = visitReference(history, '/search/?q=asthma', true);
  history = visitReference(history, '/disease/asthma/');
  const previous = moveReference(history, -1);
  assert.equal(previous.entries[previous.index], '/search/?q=asthma');
  assert.equal(visitReference(previous, '/search/?q=asthma'), previous);
});

test('embedded chrome is limited to our named child frame', () => {
  for (const embedded of [false, true]) {
    const document = { documentElement: { dataset: {} } };
    const window = { name: QBANK_REFERENCE_FRAME };
    window.parent = embedded ? {} : window;
    vm.runInNewContext(qbankReferenceInitScript, { window, document });
    assert.equal(document.documentElement.dataset.qbankReference, embedded ? 'true' : undefined);
  }
});

test('split controls leave the question player mounted and keep its key independent of layout', () => {
  const route = fs.readFileSync(new URL('../src/components/qbank-session-route.tsx', import.meta.url), 'utf8');
  const workspace = fs.readFileSync(new URL('../src/components/qbank-reference-workspace.tsx', import.meta.url), 'utf8');
  const css = fs.readFileSync(new URL('../src/app/qbank-reference.css', import.meta.url), 'utf8');
  assert.match(route, /<QbankReferenceToolbar \/><QbankSessionClient key=\{selection\.toString\(\)\}/);
  assert.match(workspace, /className="qbank-primary-pane"[^>]+>\{children\}<\/div>/);
  assert.doesNotMatch(workspace, /history\.(back|forward|go)\(/);
  assert.match(workspace, /event\.source !== frame\.current\?\.contentWindow/);
  assert.match(workspace, /event\.origin !== window\.location\.origin/);
  assert.match(css, /\.app-bottom-nav:not\(\.sheet-document-tabs\)/);
  assert.match(css, /\.chat-room-composer,\.pixel-navigation/);
  assert.match(workspace, /<header className="qbank-reference-header qbank-shared-header"/);
  const pane = workspace.slice(workspace.indexOf('<aside id="qbank-reference-pane"'), workspace.indexOf('</aside>'));
  assert.doesNotMatch(pane, /qbank-reference-header/);
  assert.match(css, /inset:var\(--qbank-shared-header-height\) 0 0 auto/);
  assert.match(workspace, /anchor\.closest\("\[data-qbank-reference-links\]"\)/);
  assert.match(workspace, /sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"/);
});
