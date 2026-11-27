// Local, read-only review of the actual battle component, stylesheet and sprite assets.
// Run from the app directory; the printed loopback URL is never part of the deployed app.
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import React from "react";
import * as jsxRuntime from "react/jsx-runtime";
import { renderToStaticMarkup } from "react-dom/server";

const app = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const compile = (file, deps = {}) => {
  const compiledModule = { exports: {} };
  const output = ts.transpileModule(fs.readFileSync(path.join(app, file), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
  }).outputText;
  vm.runInNewContext(output, { module: compiledModule, exports: compiledModule.exports, process: { env: { NEXT_PUBLIC_BASE_PATH: "" } }, require: name => {
    if (!(name in deps)) throw new Error(`Missing preview dependency: ${name}`);
    return deps[name];
  } });
  return compiledModule.exports;
};

function page(threat) {
  const encounters = compile("src/lib/pixel-encounter.ts");
  const ids = Object.fromEntries(encounters.PIXEL_ENEMIES.map(enemy => {
    let index = 0;
    while (encounters.pixelEncounter(`rhythm-${index}`).enemy !== enemy) index++;
    return [enemy, `rhythm-${index}`];
  }));
  const progress = Object.fromEntries(Object.values(ids).map(id => [id, { attempts: threat === "danger" ? 4 : 0, correctAttempts: 0, consecutiveCorrect: 0 }]));
  const { PixelQuestionWorkspace } = compile("src/components/pixel-ui.tsx", {
    react: React, "react/jsx-runtime": jsxRuntime,
    "next/link": ({ children, ...props }) => React.createElement("a", props, children),
    "@/lib/pixel-encounter": encounters, "@/lib/qbank-store": { loadQbankState: () => ({ progress }) },
  });
  const boards = Object.entries(ids).map(([enemy, id]) => `<article><h2>${enemy}</h2>${renderToStaticMarkup(React.createElement(PixelQuestionWorkspace, {
    questionId: id, question: "Rhythm review", choices: null, response: null, actions: null, copy: null, hint: "", answerText: "", submitted: false, number: 1, total: 8, mode: "study", sourceTitle: enemy,
  }))}</article>`).join("");
  return `<!doctype html><html lang="ko" data-theme="pixel"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Pixel rhythm review</title><link rel="stylesheet" href="/pixel-skins.css"><style>
    *{box-sizing:border-box}body{margin:0;padding:20px;font:14px/1.4 system-ui,sans-serif}main{max-width:1040px;margin:auto}h1{font-size:20px;margin:0 0 6px}p{margin:0 0 10px}.controls{display:flex;gap:6px;flex-wrap:wrap;margin:10px 0}button,a{font:inherit}button{padding:6px 10px;border:1px solid #75806b;background:#fff9e7;color:#243149;cursor:pointer}button[aria-pressed=true]{background:#243149;color:#fff9e7}.boards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 20px}article h2{font:14px monospace;margin:4px 0}.pixel-battle-panels,.pixel-battle-actions{display:none}.pixel-battle-scene{margin:0;box-shadow:2px 2px #a9b29b}#status{font-family:monospace}a{color:#264d3b}@media(max-width:620px){body{padding:12px}.boards{grid-template-columns:1fr;gap:8px}.pixel-battle-scene{margin:0}}
    </style></head><body><main><h1>캐릭터 · 몬스터 박자 확인</h1><p>실제 문제풀이 컴포넌트 / 120ms × 8프레임 / ${threat}</p><div class="controls"><button id="play" disabled>함께 재생</button><button id="pause" disabled>일시정지</button>${Array.from({ length: 8 }, (_, i) => `<button data-frame="${i}" disabled>${i * 120}ms</button>`).join("")}</div><p id="status">이미지 준비 중</p><p><a href="/?threat=calm">기본 표정</a> · <a href="/?threat=danger">위험 표정</a></p><div class="boards">${boards}</div></main><script>
    const status=document.getElementById('status'), buttons=[...document.querySelectorAll('button')];
    let paused=false;
    function seek(frame){paused=true;for(const a of document.getAnimations()){a.pause();a.currentTime=960+frame*120+1;}status.textContent='정지 · '+frame*120+'ms · frame '+frame;for(const b of buttons)b.setAttribute('aria-pressed',String(b.dataset.frame===String(frame)));}
    for(const button of document.querySelectorAll('[data-frame]'))button.addEventListener('click',()=>seek(Number(button.dataset.frame)));
    document.getElementById('play').addEventListener('click',()=>{paused=false;for(const a of document.getAnimations()){a.currentTime=0;a.play();}for(const b of buttons)b.setAttribute('aria-pressed','false');});
    document.getElementById('pause').addEventListener('click',()=>{paused=true;for(const a of document.getAnimations())a.pause();status.textContent='일시정지';});
    const urls=[...new Set([...document.querySelectorAll('.pixel-dancer')].map(el=>el.style.backgroundImage.slice(5,-2)))];
    Promise.all(urls.map(src=>{const img=new Image();img.src=src;return img.decode();})).then(()=>{for(const b of buttons)b.disabled=false;seek(0);}).catch(error=>status.textContent=String(error));
    function tick(){if(!paused){const a=document.querySelector('.pixel-battle-party').getAnimations({subtree:true}).find(a=>a.animationName==='pixel-party-beat'||a.animationName==='pixel-dance-cels');status.textContent='재생 · frame '+Math.floor((Number(a?.currentTime||0)%960)/120);}requestAnimationFrame(tick);}tick();
    </script></body></html>`;
}

const server = http.createServer((request, response) => {
  try {
    const url = new URL(request.url, "http://localhost");
    response.setHeader("Cache-Control", "no-store");
    if (url.pathname === "/") {
      response.setHeader("Content-Type", "text/html; charset=utf-8");
      response.end(page(url.searchParams.get("threat") === "danger" ? "danger" : "calm"));
    } else if (url.pathname === "/pixel-skins.css") {
      response.setHeader("Content-Type", "text/css; charset=utf-8");
      response.end(fs.readFileSync(path.join(app, "src/app/pixel-skins.css")));
    } else if (/^\/themes\/pixel\/[a-z0-9-]+\.(png|webp)$/.test(url.pathname)) {
      response.setHeader("Content-Type", url.pathname.endsWith("webp") ? "image/webp" : "image/png");
      response.end(fs.readFileSync(path.join(app, "public", url.pathname)));
    } else { response.writeHead(404).end(); }
  } catch (error) { response.writeHead(500).end(String(error)); }
});
server.listen(0, "127.0.0.1", () => console.log(`Pixel rhythm preview: http://127.0.0.1:${server.address().port}`));
