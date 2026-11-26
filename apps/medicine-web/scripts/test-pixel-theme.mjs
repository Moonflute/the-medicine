import fs from "node:fs";
import vm from "node:vm";
import test from "node:test";
import assert from "node:assert/strict";
import ts from "typescript";
import React from "react";
import * as jsxRuntime from "react/jsx-runtime";
import * as lucide from "lucide-react";
import { renderToStaticMarkup } from "react-dom/server";
import { createPortal } from "react-dom";
import sharp from "sharp";

const compile = (file, deps = {}) => {
  const compiledModule = { exports: {} };
  const output = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
  }).outputText;
  vm.runInNewContext(output, { module: compiledModule, exports: compiledModule.exports, require: name => {
    assert.ok(name in deps, `Unmocked dependency: ${name}`);
    return deps[name];
  }, process: { env: { NEXT_PUBLIC_BASE_PATH: "/the-medicine" } } });
  return compiledModule.exports;
};
const themes = compile("src/lib/themes.ts");
const encounters = compile("src/lib/pixel-encounter.ts");
const deps = {
  react: React, "react/jsx-runtime": jsxRuntime, "lucide-react": lucide,
  "next/link": ({ children, ...props }) => React.createElement("a", props, children),
  "@/lib/themes": themes,
  "@/lib/pixel-encounter": encounters,
  "@/lib/qbank-store": { loadQbankState: () => ({ progress: {} }) },
  "@/components/theme-provider": { useSkinTheme: () => ({ theme: "pixel" }) },
};
const pixel = compile("src/components/pixel-ui.tsx", deps);
const question = compile("src/components/skin-question.tsx", {
  ...deps, "@/components/pixel-ui": pixel,
  "@/components/notebook-ui": {},
  "@/components/chat-contact": { useChatSenderName: value => value },
  "@/components/chat-room": {}, "@/components/concept-question": {}, "@/components/qbank-skip-controls": {},
});

test("enemy cels include every mood and motion, with unchanged original slime pixels", async () => {
  for (const name of [...encounters.PIXEL_ENEMIES.filter(name => name !== "slime"), "slime-moods"]) {
    const sheet = sharp(`public/themes/pixel/${name}.png`);
    const meta = await sheet.metadata();
    assert.equal(meta.width, 256, name);
    assert.equal(meta.height, 288, name);
    assert.ok(meta.hasAlpha, name);
    for (let row = 0; row < 9; row++) {
      const cels = await Promise.all(Array.from({ length: 8 }, (_, frame) => sheet.clone().extract({ left: frame * 32, top: row * 32, width: 32, height: 32 }).raw().toBuffer()));
      assert.ok(new Set(cels.map(cel => cel.toString("base64"))).size >= 6, `${name} row ${row} needs articulated poses`);
      for (const cel of cels) assert.ok(cel.some((value, index) => index % 4 === 3 && value === 255), `${name} has an empty cel`);
    }
    const ase = fs.readFileSync(`art/pixel-rpg/${name}.ase`);
    assert.equal(ase.readUInt16LE(6), 72, `${name} editable source frame count`);
  }
  const original = await sharp("public/themes/pixel/slime.png").raw().toBuffer();
  const extended = await sharp("public/themes/pixel/slime-moods.png").extract({ left: 0, top: 0, width: 256, height: 96 }).raw().toBuffer();
  assert.deepEqual(extended, original, "new moods preserve the complete original silhouette and animation");
});

test("opponents stay tied to question identity; repeated misses only change subtle threat", () => {
  const seenEnemies = new Set(), seenColors = new Set();
  for (let i = 0; i < 300; i++) {
    const id = `QB-2026-${i}`;
    const initial = encounters.pixelEncounter(id);
    const repeat = encounters.pixelEncounter(id, { attempts: 8, correctAttempts: 2, consecutiveCorrect: 0 });
    assert.equal(initial.enemy, repeat.enemy);
    assert.equal(initial.color, repeat.color);
    seenEnemies.add(initial.enemy); seenColors.add(initial.color);
  }
  assert.equal(seenEnemies.size, 7);
  assert.equal(seenColors.size, 4);
  const threat = (attempts, correctAttempts = 0, consecutiveCorrect = 0) => encounters.pixelThreat({ attempts, correctAttempts, consecutiveCorrect });
  assert.equal(threat(0), "calm");
  assert.equal(threat(1), "calm");
  assert.equal(threat(2), "alert");
  assert.equal(threat(4), "danger");
  assert.equal(threat(5, 1, 1), "alert");
  assert.equal(threat(6, 2, 2), "calm");
  assert.equal(threat(NaN, Infinity, -2), "calm");
});

test("every enemy uses full mood rows and both session modes pass stable IDs", () => {
  for (const name of encounters.PIXEL_ENEMIES) {
    const html = render(pixel.PixelDancer, { name, threat: "danger", pose: "hit" });
    assert.match(html, /background-size:800% 900%/);
    assert.match(html, /--pixel-mood-row:6/);
    assert.match(html, new RegExp(`/themes/pixel/${name === "slime" ? "slime-moods" : name}\\.png`));
  }
  for (const file of ["qbank-session-client", "mock-exam-panel"]) {
    assert.match(fs.readFileSync(`src/components/${file}.tsx`, "utf8"), /<SkinQuestionWorkspace questionId=\{current\.id\}/);
  }
});
const render = (Component, props) => renderToStaticMarkup(React.createElement(Component, props));

test("sprite sheets keep eight full poses per state and planted feet during the dance", async () => {
  for (const name of ["medic", "slime"]) {
    const sheet = sharp(`public/themes/pixel/${name}.png`);
    const metadata = await sheet.metadata();
    assert.equal(metadata.width, 256);
    assert.equal(metadata.height, 96);
    const poses = await Promise.all(Array.from({ length: 8 }, (_, frame) => sheet.clone().extract({ left: frame * 32, top: 0, width: 32, height: 32 }).ensureAlpha().raw().toBuffer()));
    assert.ok(new Set(poses.map(frame => frame.toString("base64"))).size >= 6, `${name} changes pose, not just position`);
    if (name === "medic") for (const frame of poses) assert.deepEqual(frame.subarray(29 * 32 * 4, 30 * 32 * 4), poses[0].subarray(29 * 32 * 4, 30 * 32 * 4));
  }
});

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
  assert.equal([...before.matchAll(/data-pose="dance"/g)].length, 2);
  assert.match(before, /\/the-medicine\/themes\/pixel\/medic\.png/);
  assert.match(before, /aria-label="현재 문제 위치" value="2" max="10"/);
  assert.ok(!before.includes("해설 원문"));
  const after = render(question.SkinQuestionWorkspace, { ...props, submitted: true });
  for (const text of ["문제 원문", "선택지 원문", "해설 원문", "이동 버튼", "복사 버튼", "복수 선택 가능", "A. 답안 내용"]) assert.ok(after.includes(text), text);
  assert.match(after, /data-outcome="ungraded"/);
  assert.equal([...after.matchAll(/data-pose="still"/g)].length, 2);
  const right = render(question.SkinQuestionWorkspace, { ...props, submitted: true, correct: true });
  const wrong = render(question.SkinQuestionWorkspace, { ...props, submitted: true, correct: false });
  assert.match(right, /data-outcome="correct"/);
  assert.match(right, /pixel-hero" data-pose="cheer"/);
  assert.match(right, /pixel-opponent" data-pose="hit"/);
  assert.match(wrong, /data-outcome="wrong"/);
  assert.match(wrong, /pixel-hero" data-pose="hit"/);
  assert.match(wrong, /pixel-opponent" data-pose="cheer"/);
});

const sheet = compile("src/components/sheet-workbook.tsx", { ...deps, "react-dom": { createPortal } });
for (const theme of themes.THEME_IDS) test(`${theme} keeps every document section visible in reading order`, () => {
  const skin = compile("src/components/skin-document.tsx", {
    ...deps, "@/components/pixel-ui": pixel,
    "@/components/theme-provider": { useSkinTheme: () => ({ theme: themes.themeLayout(theme) }) },
    "@/components/chat-contact": { useChatSenderName: () => "순환기" },
    "@/components/sheet-workbook": sheet,
    "@/components/concept-document": {}, "@/components/concept-workspace": { useConceptWorkspace: () => null },
  });
  const html = render(skin.SkinDocumentSections, { sections: [
    { id: "overview", title: "개요", content: React.createElement("a", { href: "/disease/linked" }, "연결 자료") },
    { id: "treatment", title: "치료", content: "두 번째 문단" },
    { id: "prognosis", title: "예후", content: "마지막 문단" },
  ] });
  assert.equal([...html.matchAll(/<section\b/g)].length, 3);
  assert.doesNotMatch(html, /<section\b[^>]*\shidden(?:[=\s>])/);
  assert.doesNotMatch(html, /role="(?:tab|tabpanel|tablist)"/);
  for (const id of ["overview", "treatment", "prognosis"]) {
    assert.ok(html.includes(`aria-labelledby="${id}-heading"`));
    assert.ok(html.includes(`<h3 id="${id}-heading"`));
    if (theme === "pixel" || theme === "sheet") assert.ok(html.includes(`href="#${id}"`));
  }
  assert.match(html, /href="\/disease\/linked"/);
  assert.match(html, /연결 자료[\s\S]*두 번째 문단[\s\S]*마지막 문단/);
  if (theme === "editor") assert.equal([...html.matchAll(/<details class="concept-code-section" open=""/g)].length, 3);
});
