import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..", "..");
const hub = fs.readFileSync(path.join(root, "apps", "medicine-web", "src", "components", "nervous-system-hub.tsx"), "utf8");
const notePage = fs.readFileSync(path.join(root, "apps", "medicine-web", "src", "components", "neuro-note-page.tsx"), "utf8");
const route = fs.readFileSync(path.join(root, "apps", "medicine-web", "src", "app", "nervous-system-hub", "notes", "[kind]", "[id]", "page.tsx"), "utf8");

test("Atlas uses independent structure, pathway, and NEx notes", () => {
  assert.match(hub, /neuroNoteHref\(selectedPathway \? "pathway" : "structure"/);
  assert.match(hub, /neuroNoteHref\("reflex", item.id\)/);
  assert.match(hub, /neuroNoteHref\(item.kind, item.id\)/);
  assert.doesNotMatch(hub, /const LAYERS/);
  assert.match(hub, /보기 또는 경로 선택/);
});

test("independent notes include the requested medical relationships", () => {
  for (const heading of ["해부학 정보", "담당 혹은 관련 기능", "관련 질환", "연관 구조"]) assert.match(notePage, new RegExp(heading));
  assert.match(notePage, /병변과 측성/);
  assert.match(notePage, /정상 반응과 위치추정/);
  assert.match(notePage, /diseasesForReflex/);
});

test("every note type has a static detail route", () => {
  assert.match(route, /generateStaticParams/);
  assert.match(route, /neuroNoteKinds/);
  assert.match(route, /getNeuroNoteItem/);
});
