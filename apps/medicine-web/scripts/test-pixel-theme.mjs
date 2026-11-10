import fs from "node:fs";
import vm from "node:vm";
import test from "node:test";
import assert from "node:assert/strict";
import ts from "typescript";
import React from "react";
import * as jsxRuntime from "react/jsx-runtime";
import * as lucide from "lucide-react";
import { renderToStaticMarkup } from "react-dom/server";

const compile = (file, deps = {}) => {
  const compiledModule = { exports: {} };
  const output = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
  }).outputText;
  vm.runInNewContext(output, { module: compiledModule, exports: compiledModule.exports, require: name => {
    assert.ok(name in deps, `Unmocked dependency: ${name}`);
    return deps[name];
  } });
  return compiledModule.exports;
};
const themes = compile("src/lib/themes.ts");
const deps = {
  react: React, "react/jsx-runtime": jsxRuntime, "lucide-react": lucide,
  "next/link": ({ children, ...props }) => React.createElement("a", props, children),
  "@/lib/themes": themes,
  "@/components/theme-provider": { useSkinTheme: () => ({ theme: "pixel" }) },
};
const pixel = compile("src/components/pixel-ui.tsx", deps);
const question = compile("src/components/skin-question.tsx", {
  ...deps, "@/components/pixel-ui": pixel,
  "@/components/chat-contact": { useChatSenderName: value => value },
  "@/components/chat-room": {}, "@/components/concept-question": {},
});
const render = (Component, props) => renderToStaticMarkup(React.createElement(Component, props));

test("saved pixel theme is restored before first paint without changing chat preferences", () => {
  const values = new Map([[themes.THEME_STORAGE_KEY, "pixel"], [themes.CHAT_SKIN_STORAGE_KEY, "con"]]);
  const root = { dataset: {}, style: {} };
  vm.runInNewContext(themes.themeInitScript, { document: { documentElement: root }, localStorage: { getItem: key => values.get(key), setItem: (key, value) => values.set(key, value) } });
  assert.equal(root.dataset.theme, "pixel");
  assert.equal(root.dataset.chatSkin, "con");
  assert.equal(themes.themeLayout("pixel"), "pixel");
  assert.equal(root.style.colorScheme, "light");
});

test("game menus retain every original study destination", () => {
  const home = render(pixel.PixelHomeDirectory);
  for (const href of Object.keys(pixel.pixelDestinations).filter(href => href !== "/")) assert.ok(home.includes(`href="${href}"`), href);
  const nav = render(pixel.PixelNavigation, { currentHref: "/review/qbank", menuOpen: false, onMenu() {} });
  assert.deepEqual([...nav.matchAll(/href="([^"]+)"/g)].map(match => match[1]), ["/", "/cc", "/specialties", "/review/qbank"]);
  assert.match(nav, /href="\/review\/qbank" aria-current="page"/);
  assert.match(nav, /aria-controls="skin-app-menu"/);
});

test("battle keeps answer callbacks and grading state, then shows the existing explanation", () => {
  let selected;
  const choices = [{ key: "A", label: "A", text: "답안 내용", selected: true, correct: true, wrong: false }];
  const tree = question.SkinQuestionChoices({ choices, disabled: false, onSelect: key => { selected = key; } });
  tree.props.children[0].props.onClick();
  assert.equal(selected, "A");
  const choicesHtml = render(question.SkinQuestionChoices, { choices, disabled: true, onSelect() {} });
  assert.match(choicesHtml, /disabled=""/);
  assert.match(choicesHtml, /data-correct="true"/);
  const props = { question: "문제 원문", choices: "선택지 원문", response: "해설 원문", actions: "이동 버튼", copy: "복사 버튼", hint: "복수 선택 가능", answerText: "A. 답안 내용", number: 2, total: 10, submitted: false, sourceTitle: "순환기" };
  const before = render(question.SkinQuestionWorkspace, { ...props, correct: true });
  assert.match(before, /data-question-skin="pixel"/);
  assert.match(before, /data-outcome="idle"/);
  assert.match(before, /aria-label="현재 문제 위치" value="2" max="10"/);
  assert.ok(!before.includes("해설 원문"));
  const after = render(question.SkinQuestionWorkspace, { ...props, submitted: true });
  for (const text of ["문제 원문", "선택지 원문", "해설 원문", "이동 버튼", "복사 버튼", "복수 선택 가능", "A. 답안 내용"]) assert.ok(after.includes(text), text);
  assert.match(after, /<details class="pixel-choice-history">/);
  assert.match(after, /data-outcome="ungraded"/);
  assert.match(render(question.SkinQuestionWorkspace, { ...props, submitted: true, correct: true }), /data-outcome="correct"/);
  assert.match(render(question.SkinQuestionWorkspace, { ...props, submitted: true, correct: false }), /data-outcome="wrong"/);
});

test("codex has one active page while retaining hidden content and real links", () => {
  const skin = compile("src/components/skin-document.tsx", {
    ...deps, "@/components/pixel-ui": pixel,
    "@/components/chat-contact": { useChatSenderName: () => "순환기" },
    "@/components/sheet-workbook": { useInSheetCell: () => false, useSheetWorkbook: () => null },
    "@/components/concept-document": {}, "@/components/concept-workspace": { useConceptWorkspace: () => null },
  });
  const html = render(skin.SkinDocumentSections, { sections: [
    { id: "overview", title: "개요", content: React.createElement("a", { href: "/disease/linked" }, "연결 자료") },
    { id: "treatment", title: "치료", content: "두 번째 문단" },
  ] });
  assert.match(html, /id="overview-tab" role="tab" aria-selected="true"/);
  assert.match(html, /id="treatment" tabindex="-1" hidden="" role="tabpanel"/);
  assert.match(html, /href="\/disease\/linked"/);
  assert.ok(html.includes("두 번째 문단"));
});
