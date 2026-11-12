import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
import test from 'node:test';
import ts from 'typescript';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const require = createRequire(import.meta.url);
const h = React.createElement;
let activeTheme = 'light';
const mocks = {
  '@/components/theme-provider': { useSkinTheme: () => ({ theme: activeTheme === 'messenger' ? 'chat' : activeTheme, chatSkin: activeTheme === 'messenger' ? 'clear-blue' : 'classic' }) },
  '@/components/chat-contact': { useChatSenderName: name => name },
  '@/components/chat-room': { ChatComposerContent: ({ area, children }) => h('div', { 'data-composer-area': area }, children) },
  '@/components/concept-document': { ConceptProfile: ({ children }) => h('div', null, children) },
  'next/link': ({ children, ...props }) => h('a', props, children),
};
function load(relativePath) {
  const compiledModule = { exports: {} };
  const source = fs.readFileSync(new URL(`../src/${relativePath}`, import.meta.url), 'utf8');
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText;
  vm.runInNewContext(compiled, { module: compiledModule, exports: compiledModule.exports, require: name => mocks[name] ?? require(name), process: { env: {} } });
  return compiledModule.exports;
}
const themes = mocks['@/lib/themes'] = load('lib/themes.ts');
mocks['@/components/concept-question'] = load('components/concept-question.tsx');
mocks['@/components/pixel-ui'] = load('components/pixel-ui.tsx');
mocks['@/components/qbank-skip-controls'] = load('components/qbank-skip-controls.tsx');
const skin = load('components/skin-question.tsx');

for (const theme of themes.THEME_IDS) {
  test(`${theme}: reference resources start expanded and carry reference-link scope`, () => {
    activeTheme = theme;
    const html = renderToStaticMarkup(h(skin.SkinQuestionReferences, { available: true }, h('a', { href: '/disease/copd/' }, 'COPD')));
    assert.match(html, /data-qbank-reference-links/);
    if (themes.isSpecialTheme(theme)) assert.match(html, /<details[^>]*open=""/);
    assert.match(html, /COPD/);
  });

  test(`${theme}: submitting changes the action in place, before the explanation or in the fixed chat composer`, () => {
    activeTheme = theme;
    const render = submitted => renderToStaticMarkup(h(skin.SkinQuestionWorkspace, {
      question: h('p', null, 'QUESTION_MARKER'), choices: h('div', null, 'CHOICES_MARKER'),
      response: submitted ? h('div', null, 'FEEDBACK_MARKER') : null,
      actions: h('button', null, 'ACTION_MARKER'), copy: null, hint: '', answerText: 'B. answer',
      submitted, number: 1, total: 2,
    }));
    const before = render(false), after = render(true);
    assert.equal((before.match(/ACTION_MARKER/g) ?? []).length, 1);
    assert.equal((after.match(/ACTION_MARKER/g) ?? []).length, 1);
    assert.doesNotMatch(before, /FEEDBACK_MARKER/);
    if (themes.themeLayout(theme) === 'chat') {
      assert.match(before, /data-composer-area="action"[^]*ACTION_MARKER/);
      assert.match(after, /data-composer-area="action"[^]*ACTION_MARKER/);
    } else {
      assert.ok(after.indexOf('ACTION_MARKER') < after.indexOf('FEEDBACK_MARKER'));
    }
    if (theme === 'pixel') assert.ok(after.indexOf('ACTION_MARKER') < after.indexOf('pixel-answer-log'));

    let submittedCount = 0, nextCount = 0;
    const actionProps = { unknown: false, last: false, onSubmit: () => submittedCount++, onNext: () => nextCount++ };
    const first = skin.SkinQuestionAction({ ...actionProps, submitted: false }).props.children.at(-1);
    const next = skin.SkinQuestionAction({ ...actionProps, submitted: true }).props.children.at(-1);
    assert.equal(first.props['aria-label'], '답안 제출');
    assert.equal(next.props['aria-label'], '다음 문제');
    first.props.onClick(); next.props.onClick();
    assert.equal(submittedCount, 1); assert.equal(nextCount, 1);
  });
}

test('unknown answers, the last question and skip review retain their existing actions', () => {
  activeTheme = 'light';
  const props = { submitted: true, unknown: false, last: true, onSubmit() {}, onNext() {} };
  assert.match(renderToStaticMarkup(h(skin.SkinQuestionAction, props)), /결과 보기/);
  assert.match(renderToStaticMarkup(h(skin.SkinQuestionAction, { ...props, nextLabel: '건너뛴 문제 확인' })), /건너뛴 문제 확인/);
  assert.match(renderToStaticMarkup(h(skin.SkinQuestionAction, { ...props, submitted: false, unknown: true })), /모름으로 제출/);
});
