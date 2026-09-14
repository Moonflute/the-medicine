// Isolated browser harness: uses the actual components, fake Supabase settings,
// and no application routes. Install esbuild under tmp/document-editor-harness.
/* eslint-disable @typescript-eslint/no-require-imports -- Standalone CommonJS harness with a locally installed test runtime. */
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { build } = require('../tmp/document-editor-harness/node_modules/esbuild');
(async () => {
  const dir = path.resolve('tmp/document-editor-harness');
  fs.mkdirSync(dir, { recursive: true });
  const entry = path.join(dir, 'entry.tsx');
  fs.writeFileSync(entry, `import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import Editor from '@/components/document-editor-dialog';
import {PILOT_PATHS} from '@/lib/document-edit-core';
function App(){const [open,setOpen]=useState(false);return <main><h1>문서 편집 검증</h1><button onClick={()=>setOpen(true)}>편집기 열기</button>{open&&<Editor path={PILOT_PATHS[0]} title="가슴통증" onClose={()=>setOpen(false)}/>}</main>}
createRoot(document.getElementById('root')!).render(<App/>);`);
  await build({ entryPoints: [entry], bundle: true, outfile: path.join(dir, 'bundle.js'), jsx: 'automatic', alias: { '@': path.resolve('src') }, define: { 'process.env.NODE_ENV': '"development"', 'process.env.NEXT_PUBLIC_SUPABASE_URL': '"https://editor-test.invalid"', 'process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY': '"test-key-not-a-secret"', 'process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY': 'undefined' } });
  if (process.argv.includes('--build-only')) return;
  const css = path.resolve('.next-editor-pilot/dev/static/css/app/layout.css');
  const server = http.createServer((req, res) => {
    if (req.url === '/bundle.js') { res.setHeader('Content-Type', 'application/javascript'); return res.end(fs.readFileSync(path.join(dir, 'bundle.js'))); }
    if (req.url === '/style.css') { res.setHeader('Content-Type', 'text/css'); return res.end(fs.existsSync(css) ? fs.readFileSync(css) : 'body{font-family:sans-serif}'); }
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<!doctype html><html lang="ko"><head><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="/style.css"></head><body><div id="root"></div><script src="/bundle.js"></script></body></html>');
  });
  server.listen(3018, '127.0.0.1', () => console.log('Editor harness: http://127.0.0.1:3018'));
})().catch(error => { console.error(error); process.exitCode = 1; });
