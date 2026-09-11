import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import test from 'node:test';
import assert from 'node:assert/strict';
import ts from 'typescript';
import React from 'react';
import * as jsxRuntime from 'react/jsx-runtime';
import {renderToStaticMarkup} from 'react-dom/server';
const context=vm.createContext({fs,path,process,Buffer,console});
const generator=fs.readFileSync('scripts/sync-generated-data.mjs','utf8').replace(/^import .*;\r?$/gm,'').replace(/\nmain\(\);\s*$/,'');
vm.runInContext(generator,context);
const api=vm.runInContext('({readList,splitSections,buildDiseases,buildDiseaseHierarchy,parseSpecialtyTocMarkdown})',context);
const plain=x=>JSON.parse(JSON.stringify(x));
const diseases=api.buildDiseases();
const hierarchy=api.buildDiseaseHierarchy(diseases);
test('block and flow metadata lists preserve levels and quoted commas',()=>{
 for(const raw of ['[간 질환, 간암]','["간 질환", "간암"]','\n- 간 질환\n- 간암'])assert.deepEqual(plain(api.readList(raw)),['간 질환','간암']);
 assert.deepEqual(plain(api.readList("['a, b', c]")),['a, b','c']);assert.deepEqual(plain(api.readList('[]')),[]);
});
test('overview generation retains nested links without changing ordinary prose normalization',()=>{
 const body='## A\n- [[Parent]]\n\t- [[Child]]\n-\n';
 assert.deepEqual(plain(api.splitSections(body,true)[0].content),['- [[Parent]]','  - [[Child]]']);
 assert.equal(api.splitSections(body)[0].content[0],'• [[Parent]]');
});
test('all group references resolve uniquely without repeated memberships or self links',()=>{
 assert.equal(hierarchy.unresolvedGroupMembers.length,0);
 for(const d of diseases){if(!d.groupOverview)continue;const titles=d.groupOverview.memberTitles;assert.equal(titles.length,new Set(titles).size,d.title);const ids=hierarchy.groupMemberSlugsBySlug[d.slug];assert.equal(ids.length,new Set(ids).size);assert.ok(!ids.includes(d.slug));}
});
test('repeated disease builds have identical hierarchy and no malformed classification labels',()=>{
 assert.deepEqual(plain(api.buildDiseaseHierarchy(api.buildDiseases())),plain(hierarchy));
 for(const d of diseases)assert.ok(d.classification.every(x=>!x.startsWith('[')),d.title);
});
test('all 22 specialty outlines have valid disease links, no duplicate bullets per section, and no depth jumps',()=>{
 const titles=new Set(diseases.flatMap(d=>[d.title,...d.aliases]));let count=0;
 for(const d of diseases){if(d.title!==d.specialty.replace(/^\d+\s*/,''))continue;count++;
  for(const section of d.sections){const seen=new Set();let previous=0;
   for(const line of section.content){for(const m of line.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g))assert.ok(titles.has(m[1]),d.title+': '+m[1]);
    if(/^\s*- /.test(line)){const depth=Math.floor((line.match(/^ */)?.[0].length??0)/2);assert.ok(depth<=previous+1,d.title+': '+line);previous=depth;const key=line.trim();assert.ok(!seen.has(key),d.title+': duplicate '+key);seen.add(key);}else if(/^#{3,}/.test(line))seen.clear();
   }
  }
 }
 assert.equal(count,22);
});
const compile=(file,deps)=>{const compiledModule={exports:{}};vm.runInNewContext(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,{exports:compiledModule.exports,module:compiledModule,require:n=>deps[n],process,Buffer});return compiledModule.exports;};
test('rendered overview links retain their indentation',()=>{
 const rich=compile('src/components/rich-text-lines.tsx',{'react':React,'react/jsx-runtime':jsxRuntime,'next/link':({children,...props})=>React.createElement('a',props,children)});
 const html=renderToStaticMarkup(React.createElement(rich.RichTextLines,{lines:['- [[Parent]]','  - [[Child]]'],bulletStyle:'plain',wikiLinks:[{term:'Child',href:'/disease/child'}]}));
 assert.match(html,/data-outline-depth="1"/);assert.match(html,/margin-inline-start:16px/);assert.match(html,/href="\/disease\/child"/);
});
test('same-named disease links favor the current specialty',()=>{
 const db=compile('src/lib/webdb.ts',{'node:fs':fs,'node:path':path,'@/lib/interactive-concepts':{interactiveConcepts:[]}});
 const all=db.getAllDiseases();const repeated=all.filter(d=>d.documentRole!=='compatibility'&&all.some(other=>other.title===d.title&&other.specialty!==d.specialty&&other.documentRole!=='compatibility'));
 assert.ok(repeated.length>0);
 for(const d of repeated)assert.equal(db.getDiseaseLinks(d.specialty).find(link=>link.term===d.title)?.href,'/disease/'+d.slug,d.specialty+': '+d.title);
});
