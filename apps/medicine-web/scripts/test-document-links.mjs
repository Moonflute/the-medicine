import assert from 'node:assert/strict';
import test from 'node:test';
import {selectDocumentLinks} from '../src/lib/document-links.ts';

const links = [
  {term:'Heart failure',href:'/disease/heart-failure'},
  {term:'HF',href:'/disease/heart-failure'},
  {term:'심부전',href:'/disease/heart-failure'},
  {term:'Asthma',href:'/disease/asthma'},
  {term:'unused',href:'/disease/unused'},
];
test('keeps wiki targets, display aliases and plain family references in their original priority', () => {
  const note = {sections:[{content:['[[ Heart failure | HF ]]', '[[missing|심부전]]']}],familyMeta:{parentDisease:'Asthma'}};
  assert.deepEqual(selectDocumentLinks(links,note),links.slice(0,4));
  assert.equal(selectDocumentLinks(links,note)[0],links[0]);
});
test('symptom pages retain plain-text differential links and overlapping aliases', () => {
  assert.deepEqual(selectDocumentLinks(links,{sections:['HF or Heart failure; Asthma']},true),[links[0],links[1],links[3]]);
  assert.deepEqual(selectDocumentLinks(links,{sections:['HF or Heart failure; Asthma']}),[]);
});
test('unlinked content and absent metadata do not retain the glossary', () => {
  assert.deepEqual(selectDocumentLinks(links,{sections:['Unrelated text'],familyMeta:null}),[]);
  assert.deepEqual(selectDocumentLinks(links,undefined),[]);
});
