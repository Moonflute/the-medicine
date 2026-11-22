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
mocks['@/lib/skin-navigation'] = load('lib/skin-navigation.ts');
mocks['@/components/notebook-ui'] = load('components/notebook-ui.tsx');
mocks['@/components/concept-question'] = load('components/concept-question.tsx');
mocks['@/components/pixel-ui'] = load('components/pixel-ui.tsx');
mocks['@/components/qbank-skip-controls'] = load('components/qbank-skip-controls.tsx');
const skin = load('components/skin-question.tsx');
const { QbankProgressFilters } = load('components/qbank-progress-filters.tsx');
const { QbankQuestionNumbers } = load('components/qbank-question-numbers.tsx');
const { QbankTextSizeButton } = load('components/qbank-text-size-button.tsx');

test('the compact reading-size control exposes four choices and is placed before the info tool', () => {
  const html = renderToStaticMarkup(h(QbankTextSizeButton));
  assert.match(html, /aria-label="글자 크기"[^>]*aria-haspopup="dialog"/);
  assert.match(html, /qbank-text-size-glyph[^>]*>가<\/span>/);
  assert.match(html, />작게<\/button>[^]*aria-pressed="true">기본<\/button>[^]*>크게<\/button>[^]*>아주 크게<\/button>/);
  for (const file of ['qbank-session-client.tsx', 'mock-exam-panel.tsx']) {
    const source = fs.readFileSync(new URL(`../src/components/${file}`, import.meta.url), 'utf8');
    assert.match(source, /<QbankTextSizeButton \/>\s*<details[^>]*><summary[^>]*aria-label="문제 ID 보기"/);
  }
});

test('all numbers opens a labeled native dialog without rendering the closed grid', () => {
  const html = renderToStaticMarkup(h(QbankQuestionNumbers, {
    questionIds: ['q1', 'q2'], currentIndex: 0, answers: new Map([['q1', { correct: true }]]),
    drafts: {}, selected: null, skippedIds: [], onMove() {},
  }));
  const id = html.match(/aria-controls="([^"]+)"/)?.[1];
  assert.ok(id);
  assert.ok(html.includes('aria-haspopup="dialog"'));
  assert.ok(html.includes(`<dialog id="${id}" class="qbank-number-dialog" aria-labelledby="${id}-title"`));
  assert.ok(html.includes(`<h2 id="${id}-title">전체 번호</h2>`));
  assert.match(html, /제출 1\/2/);
  assert.match(html, /aria-label="전체 번호 닫기"/);
  assert.doesNotMatch(html, /qbank-number-cell/);
});

test('compact progress checkboxes switch between unattempted and wrong instead of combining them', () => {
  let value = 'all';
  const controls = () => QbankProgressFilters({ value, onChange: next => { value = next; } }).props.children.map(label => label.props.children[0]);
  controls()[0].props.onChange({ target: { checked: true } });
  assert.equal(value, 'unattempted');
  assert.deepEqual(Array.from(controls(), input => input.props.checked), [true, false]);
  controls()[1].props.onChange({ target: { checked: true } });
  assert.equal(value, 'wrong');
  assert.deepEqual(Array.from(controls(), input => input.props.checked), [false, true]);
  controls()[1].props.onChange({ target: { checked: false } });
  assert.equal(value, 'all');
  const html = renderToStaticMarkup(h(QbankProgressFilters, { value: 'wrong', onChange() {} }));
  assert.match(html, /aria-label="풀이 상태 필터"/);
  assert.match(html, /선택 범위의 미해결 오답만 풀기/);
  assert.match(html, /미풀이만/);
  assert.match(html, /오답만/);
});

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
    for (const content of ['QUESTION_MARKER', 'CHOICES_MARKER']) {
      assert.ok(before.includes(content));
      assert.ok(after.includes(content));
    }
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

  test(`${theme}: the same next action also works below the complete explanation`, () => {
    activeTheme = theme;
    const actions = h(skin.SkinQuestionAction, { submitted: true, unknown: false, last: false, onSubmit() {}, onNext() {} });
    const html = renderToStaticMarkup(h(skin.SkinQuestionWorkspace, {
      question: h('p', null, 'QUESTION_MARKER'), choices: null,
      response: h('div', { className: 'qbank-feedback' }, 'FEEDBACK_END', h('div', { className: 'qbank-feedback-next' }, actions)),
      actions, copy: null, hint: '', answerText: 'B. answer', submitted: true, number: 1, total: 2,
    }));
    assert.equal((html.match(/aria-label="다음 문제"/g) ?? []).length, 2);
    assert.ok(html.indexOf('qbank-feedback-next') > html.indexOf('FEEDBACK_END'));
    assert.match(html, /qbank-feedback-next[^]*aria-label="다음 문제"/);
  });
}

test('unknown answers, the last question and skip review retain their existing actions', () => {
  activeTheme = 'light';
  const props = { submitted: true, unknown: false, last: true, onSubmit() {}, onNext() {} };
  assert.match(renderToStaticMarkup(h(skin.SkinQuestionAction, props)), /결과 보기/);
  assert.match(renderToStaticMarkup(h(skin.SkinQuestionAction, { ...props, nextLabel: '건너뛴 문제 확인' })), /건너뛴 문제 확인/);
  assert.match(renderToStaticMarkup(h(skin.SkinQuestionAction, { ...props, submitted: false, unknown: true })), /모름으로 제출/);
});

test('notebook navigation, persisted theme and grading retain study semantics', () => {
  activeTheme = 'notebook';
  const values = new Map([[themes.THEME_STORAGE_KEY, 'notebook']]);
  const root = { dataset: {}, style: {} };
  vm.runInNewContext(themes.themeInitScript, { document: { documentElement: root }, localStorage: { getItem: key => values.get(key), setItem: (key, value) => values.set(key, value) } });
  assert.equal(root.dataset.theme, 'notebook');
  assert.equal(root.style.colorScheme, 'light');
  const notebook = mocks['@/components/notebook-ui'];
  const home = renderToStaticMarkup(h(notebook.NotebookHomeDirectory));
  for (const item of mocks['@/lib/skin-navigation'].skinDestinations.slice(1)) assert.ok(home.includes(`href="${item.href}"`));
  const nav = renderToStaticMarkup(h(notebook.NotebookNavigation, { currentHref: '/review/qbank', menuOpen: false, onMenu() {} }));
  assert.deepEqual([...nav.matchAll(/href="([^"]+)"/g)].map(match => match[1]), ['/', '/cc', '/specialties', '/review/qbank']);
  assert.match(nav, /href="\/review\/qbank" aria-current="page"/);
  let selected;
  const choices = [{ key: 'B', label: 'B', text: 'ANSWER_MARKER', selected: true, correct: false, wrong: true }];
  skin.SkinQuestionChoices({ choices, disabled: false, onSelect: key => { selected = key; } }).props.children[0].props.onClick();
  assert.equal(selected, 'B');
  const html = renderToStaticMarkup(h(skin.SkinQuestionWorkspace, {
    question: 'QUESTION_MARKER', choices: h(skin.SkinQuestionChoices, { choices, disabled: true, onSelect() {} }),
    response: 'EXPLANATION_MARKER', actions: 'ACTION_MARKER', copy: 'COPY_MARKER',
    hint: '', answerText: 'B. ANSWER_MARKER', submitted: true, correct: false, number: 2, total: 5,
  }));
  assert.match(html, /data-question-skin="notebook"/);
  assert.match(html, /data-result="wrong"/);
  assert.match(html, /disabled=""[^>]*data-selected="true"[^>]*data-wrong="true"/);
  assert.doesNotMatch(html, /<details/);
  for (const content of ['QUESTION_MARKER', 'ANSWER_MARKER', 'EXPLANATION_MARKER', 'ACTION_MARKER', 'COPY_MARKER']) assert.ok(html.includes(content));
});
