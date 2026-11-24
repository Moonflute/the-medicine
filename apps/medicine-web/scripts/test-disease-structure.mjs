import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import test from 'node:test';
import assert from 'node:assert/strict';
import ts from 'typescript';
import React from 'react';
import * as jsxRuntime from 'react/jsx-runtime';
import * as lucide from 'lucide-react';
import {renderToStaticMarkup} from 'react-dom/server';
import {createPortal} from 'react-dom';
import * as api from './sync-generated-data.mjs';
import { separateDiseaseReferences, isDiseaseReferenceSection } from './disease-references.mjs';
const plain=x=>JSON.parse(JSON.stringify(x));
const diseases=api.buildDiseases();
const hierarchy=api.buildDiseaseHierarchy(diseases);
test('references are separated only at explicit section headings and retain text-only citations',()=>{
 const clinical={title:'예후 및 합병증',content:['- 참고: 요산석은 단순 촬영에서 보이지 않을 수 있음','- 재발 추적']};
 const result=separateDiseaseReferences([clinical,{title:'출처',content:[
  '출처: StatPearls (Von Willebrand Disease, 2026)',
  '- [진단 지침](https://doi.org/10.1182/bloodadvances.2020003265)',
  'Last updated :','2026-11-21 — 편집 기록',
 ]}],[{label:'같은 진단 지침',url:'https://doi.org/10.1182/bloodadvances.2020003265/'},{label:'책으로 된 자료',url:''}]);
 assert.deepEqual(result.sections,[clinical]);
 assert.deepEqual(result.references,[
  '- StatPearls (Von Willebrand Disease, 2026)',
  '- [진단 지침](https://doi.org/10.1182/bloodadvances.2020003265)',
  '- 책으로 된 자료',
 ]);
 assert.ok(!isDiseaseReferenceSection('참고할 임상 소견'));
});
test('source deduplication preserves citation context and distinct anchors',()=>{
 const result=separateDiseaseReferences([{title:'참고 자료',content:[
  '- 삼성서울병원 메뉴얼','보완 출처: 삼성서울병원 메뉴얼.',
  '- [APL 권고](https://pmc.ncbi.nlm.nih.gov/articles/PMC6509567/)',
  '- [APL 같은 원문](https://pmc.ncbi.nlm.nih.gov/articles/6509567/)',
  '- [APL 권고](https://pmc.ncbi.nlm.nih.gov/articles/PMC6509567/)의 수술 전 평가 범위, 10쪽.',
  '- [표 1](https://example.org/guideline#table-1)',
  '- [표 2](https://example.org/guideline#table-2)',
 ]}],[{label:'APL 메타데이터',url:'https://pmc.ncbi.nlm.nih.gov/articles/PMC6509567/'}]);
 assert.equal(result.references.length,5);
 assert.ok(result.references.some(line=>line.includes('수술 전 평가 범위, 10쪽')));
 const linked=separateDiseaseReferences([{title:'출처',content:['- 기존 문헌명.']}],[{label:'기존 문헌명',url:'https://example.org/reference'}]);
 assert.deepEqual(linked.references,['- [기존 문헌명.](https://example.org/reference)']);
});
test('disease source sections are absent from clinical content and vWD citations are complete',()=>{
 for(const disease of diseases){
  assert.ok(disease.sections.every(section=>!isDiseaseReferenceSection(section.title)),disease.title);
  for(const section of disease.sections) for(const line of section.content) {
   assert.ok(!/^(?:[-*]\s*)?(?:(?:보완|추가|통합|OCR)\s*)?출처(?:\s*보완)?\s*[:：]/.test(line.trim()),disease.title+': '+line);
  }
 }
 const vwd=diseases.find(d=>d.title==='폰 빌레브란트병 (von Willebrand Disease, vWD)');
 assert.ok(vwd.references.some(line=>line.includes('StatPearls')));
 assert.ok(vwd.references.some(line=>line.includes('서울대학교병원 내과 매뉴얼 6판')));
 for(const url of ['https://doi.org/10.1182/bloodadvances.2020003265','https://doi.org/10.1182/bloodadvances.2025016485','https://pmc.ncbi.nlm.nih.gov/articles/PMC7805326/','https://doi.org/10.1182/bloodadvances.2020003264'])assert.ok(vwd.references.some(line=>line.includes(url)),url);
 assert.equal(vwd.sections.find(s=>s.title.includes('예후')).content.filter(line=>line.startsWith('- ')).length,3);
 const urinary=diseases.find(d=>d.title==='요로감염');
 assert.deepEqual(urinary.sections.find(s=>s.title==='포함 질환').content,[
  '- [[급성 방광염 (Acute Cystitis)]]','- [[급성 신우신염 (Acute Pyelonephritis)]]',
  '- [[기종성 신우신염 (Emphysematous Pyelonephritis)]]','- [[무증상 세균뇨 (Asymptomatic Bacteriuria)]]','- [[콩팥 농양 (Renal Abscess)]]',
 ]);
 assert.ok(urinary.references.some(line=>line.includes('삼성서울병원')));
 const stone=diseases.find(d=>d.title==='요석 (Urinary tract stone)');
 assert.ok(stone.sections.some(s=>s.content.some(line=>line.includes('요산석(uric acid stone)은 방사선 투과성'))));
});
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
test('reference footer renders named links and text citations without raw Markdown URLs',()=>{
 const card=compile('src/components/disease-card.tsx',{'react':React,'react/jsx-runtime':jsxRuntime});
 const html=renderToStaticMarkup(React.createElement(card.DiseaseReferences,{lines:[
  '- StatPearls (*Von Willebrand Disease*, 2026)',
  '- [**진단 지침**](https://doi.org/10.1182/bloodadvances.2020003265)',
  '- [괄호가 있는 문헌](https://example.org/article(2026)) — 10쪽 참고',
  ...separateDiseaseReferences([],[{label:'[Guideline title].',url:'https://example.org/brackets'}]).references,
 ]}));
 assert.match(html,/<details[^>]*aria-label="출처"/);
 assert.match(html,/<summary[^>]*>출처<\/summary>/);
 assert.match(html,/<em>Von Willebrand Disease<\/em>/);
 assert.match(html,/<a[^>]*href="https:\/\/doi.org\/10.1182\/bloodadvances.2020003265"[^>]*><strong>진단 지침<\/strong><\/a>/);
 assert.ok(html.includes('href="https://example.org/article(2026)"'));
 assert.ok(html.includes('10쪽 참고'));
 assert.match(html,/<a[^>]*href="https:\/\/example.org\/brackets"[^>]*>\[Guideline title\]\.<\/a>/);
 assert.ok(!html.includes('](https://'));
 assert.ok(!html.includes('**'));
 assert.equal(renderToStaticMarkup(React.createElement(card.DiseaseReferences,{lines:[]})),'');
});
test('section normalization preserves emphasis, separators, and negative values',()=>{
 const body='## 치료\n**간이식 선택**:\n- **대상**: 기준 충족\n* **추적:** 설명\n**본문 전체 강조**\n-2.5\n---';
 assert.deepEqual(plain(api.splitSections(body)[0].content),[
  '**간이식 선택**:', '• **대상**: 기준 충족', '• **추적:** 설명', '**본문 전체 강조**', '-2.5', '---',
 ]);
});

test('ordinary disease notes retain authored nested clinical criteria',()=>{
 const crisis=diseases.find(d=>d.title==='고혈압성 위기 (Hypertensive Crisis)');
 const treatment=crisis.sections.find(s=>s.title==='처치 원칙');
 assert.ok(treatment.content.some(line=>/^  - \*\*첫 1시간\*\*/.test(line)));
 assert.ok(treatment.content.some(line=>/^  - \*\*대동맥박리\*\*/.test(line)));
 const rich=compile('src/components/rich-text-lines.tsx',{
  'react':React,'react/jsx-runtime':jsxRuntime,
  'next/link':({children,...props})=>React.createElement('a',props,children),
  '@/components/skin-document':{},
 });
 const lines=api.splitSections('## 치료\n- **검사 선택**:\n  - **조건**: A\n    - 예외 B\n- **다음 항목**: C',true)[0].content;
 const html=renderToStaticMarkup(React.createElement(rich.RichTextLines,{lines,bulletStyle:'plain',presentation:'embedded'}));
 assert.deepEqual([...html.matchAll(/data-outline-depth="(\d+)"/g)].map(m=>m[1]),['0','1','2','0']);
 assert.match(html,/<strong[^>]*>검사 선택<\/strong>/);
 assert.ok(!html.includes('border-l border-slate-200 pl-4'),'sibling criteria must not be swallowed into a preceding label group');
 assert.ok(!html.includes('**'));
});

test('emphasis renders intact in raw and generated bullets with either colon placement',()=>{
 const rich=compile('src/components/rich-text-lines.tsx',{
  'react':React,'react/jsx-runtime':jsxRuntime,
  'next/link':({children,...props})=>React.createElement('a',props,children),
  '@/components/skin-document':{},
 });
 for(const prefix of ['', '- ', '* ', '1. ', '• ']){
  for(const label of ['**치료:**', '**치료**:']){
   const line=prefix+label+' **기준값**에 따라 선택한다.';
   for(const lines of [[line],api.splitSections('## 치료\n'+line)[0].content]){
    const html=renderToStaticMarkup(React.createElement(rich.RichTextLines,{lines,bulletStyle:'plain',presentation:'embedded'}));
    assert.match(html,/<strong[^>]*>치료:?<\/strong>/,line);
    assert.match(html,/<strong[^>]*>기준값<\/strong>/,line);
    assert.ok(!html.includes('*'),line+' leaves an emphasis delimiter visible');
   }
  }
  const caution=prefix+'**주의: 수치만으로 판단하지 않음**';
  for(const lines of [[caution],api.splitSections('## 치료\n'+caution)[0].content]){
   const html=renderToStaticMarkup(React.createElement(rich.RichTextLines,{lines,bulletStyle:'plain',presentation:'embedded'}));
   assert.match(html,/<strong[^>]*>주의: 수치만으로 판단하지 않음<\/strong>/,caution);
   assert.ok(!html.includes('*'),caution);
  }
 }
 const hcc=diseases.find(d=>d.title==='간세포암 (Hepatocellular Carcinoma)');
 const transplant=hcc.sections.find(s=>s.title.includes('치료')).content.find(line=>line.includes('간이식 선택'));
 const html=renderToStaticMarkup(React.createElement(rich.RichTextLines,{lines:[transplant],presentation:'embedded'}));
 assert.match(html,/<strong[^>]*>간이식 선택<\/strong>/);
 assert.ok(!html.includes('*'));
});

test('diagnostic staging tables survive source normalization and rendering',()=>{
 const rich=compile('src/components/rich-text-lines.tsx',{
  'react':React,'react/jsx-runtime':jsxRuntime,
  'next/link':({children,...props})=>React.createElement('a',props,children),
  '@/components/skin-document':{},
 });
 for(const [title,criterion] of [
  ['자궁경부암 (Cervical Cancer)','IIIC1 / IIIC2'],
  ['폐암 (Lung Cancer)','N2a / N2b'],
  ['만성 콩팥병 (CKD) (Chronic Kidney Disease (CKD))','G3b'],
 ]){
  const disease=diseases.find(d=>d.title===title);
  assert.ok(disease,title);
  const diagnosis=disease.sections.find(s=>s.title.includes('진단'));
  assert.ok(diagnosis,title+' diagnosis');
  const html=renderToStaticMarkup(React.createElement(rich.RichTextLines,{lines:diagnosis.content,presentation:'embedded'}));
  assert.match(html,/<table[\s>]/,title);
  assert.ok(html.includes(criterion),title+' missing criterion');
  assert.ok(!html.includes('**'),title+' unrendered emphasis');
  assert.ok(!html.includes('| ---'),title+' unrendered table divider');
 }
});

test('rendered overview links retain their indentation',()=>{
 for(const theme of ['light','chat','messenger','sheet','terminal','mail','social','editor','pixel','notebook']) {
  const contact=compile('src/components/chat-contact.tsx',{'react':React,'react/jsx-runtime':jsxRuntime});
  const sheet=compile('src/components/sheet-workbook.tsx',{'react':React,'react/jsx-runtime':jsxRuntime,'react-dom':{createPortal}});
  const themes=compile('src/lib/themes.ts',{});
  const navigation=compile('src/lib/skin-navigation.ts',{});
  const link=({children,...props})=>React.createElement('a',props,children);
  const deps={'react':React,'react/jsx-runtime':jsxRuntime,'lucide-react':lucide,'next/link':link,'@/lib/themes':themes,'@/lib/skin-navigation':navigation,'@/components/theme-provider':{useAppTheme:()=>({theme}),useSkinTheme:()=>({theme:themes.themeLayout(theme)})}};
  const conceptDocument=compile('src/components/concept-document.tsx',deps);
  const conceptWorkspace=compile('src/components/concept-workspace.tsx',deps);
  const skin=compile('src/components/skin-document.tsx',{...deps,'@/components/pixel-ui':compile('src/components/pixel-ui.tsx',deps),'@/components/chat-contact':contact,'@/components/sheet-workbook':sheet,'@/components/concept-document':conceptDocument,'@/components/concept-workspace':conceptWorkspace});
  const rich=compile('src/components/rich-text-lines.tsx',{'react':React,'react/jsx-runtime':jsxRuntime,'next/link':({children,...props})=>React.createElement('a',props,children),'@/components/skin-document':skin});
  const html=renderToStaticMarkup(React.createElement(rich.RichTextLines,{lines:['- [[Parent]]','  - [[Child]]'],bulletStyle:'plain',wikiLinks:[{term:'Child',href:'/disease/child'}]}));
  assert.match(html,/data-outline-depth="1"/,theme);assert.match(html,/margin-inline-start:16px/,theme);assert.match(html,/href="\/disease\/child"/,theme);
 }
});
test('same-named disease links favor the current specialty',()=>{
 const db=compile('src/lib/webdb.ts',{'node:fs':fs,'node:path':path,'@/lib/interactive-concepts':{interactiveConcepts:[]}});
 const all=db.getAllDiseases();const repeated=all.filter(d=>d.documentRole!=='compatibility'&&all.some(other=>other.title===d.title&&other.specialty!==d.specialty&&other.documentRole!=='compatibility'));
 assert.ok(repeated.length>0);
 for(const d of repeated)assert.equal(db.getDiseaseLinks(d.specialty).find(link=>link.term===d.title)?.href,'/disease/'+d.slug,d.specialty+': '+d.title);
});
