import assert from 'node:assert/strict';
import test from 'node:test';
import {createSelectionHistory,normalizeSelectionState,selectionStatesEqual} from '../src/selection-history.js';

test('normalizes immutable snapshots while preserving first-seen order',()=>{
 const source={
  selectedParts:['left-kidney','right-kidney','left-kidney',''],
  hiddenParts:['spleen','spleen',null],
  fadedParts:['liver',7,'liver'],
 };
 const snapshot=normalizeSelectionState(source);
 source.selectedParts.push('heart');

 assert.deepEqual(snapshot,{
  selectedParts:['left-kidney','right-kidney'],
  hiddenParts:['spleen'],
  fadedParts:['liver','7'],
 });
 assert.ok(Object.isFrozen(snapshot));
 assert.ok(Object.isFrozen(snapshot.selectedParts));
 assert.throws(()=>snapshot.hiddenParts.push('heart'),TypeError);
});

test('push skips equal state and undo/redo return immutable snapshots',()=>{
 const history=createSelectionHistory({selectedParts:['heart']});
 const initial=history.current();

 assert.equal(history.push({selectedParts:['heart','heart']}),initial);
 assert.equal(history.length,1);
 assert.equal(history.canUndo(),false);

 const hidden=history.push({selectedParts:['heart'],hiddenParts:['aorta']});
 const faded=history.push({selectedParts:['heart'],hiddenParts:['aorta'],fadedParts:['lung']});
 assert.equal(history.canUndo(),true);
 assert.equal(history.canRedo(),false);
 assert.equal(history.undo(),hidden);
 assert.equal(history.canRedo(),true);
 assert.equal(history.undo(),initial);
 assert.equal(history.undo(),initial);
 assert.equal(history.redo(),hidden);
 assert.equal(history.redo(),faded);
 assert.equal(history.redo(),faded);
});

test('a new change after undo discards the redo branch but an equal push does not',()=>{
 const history=createSelectionHistory();
 history.push({hiddenParts:['one']});
 history.push({hiddenParts:['one','two']});
 const prior=history.undo();

 assert.equal(history.push({hiddenParts:['one']}),prior);
 assert.equal(history.canRedo(),true);
 history.push({fadedParts:['three']});
 assert.equal(history.canRedo(),false);
 assert.deepEqual(history.current(),{
  selectedParts:[],
  hiddenParts:[],
  fadedParts:['three'],
 });
});

test('bounds history length and reset starts a fresh baseline',()=>{
 const history=createSelectionHistory({}, {limit:3});
 history.push({selectedParts:['one']});
 history.push({selectedParts:['two']});
 history.push({selectedParts:['three']});
 history.push({selectedParts:['four']});

 assert.equal(history.length,3);
 assert.deepEqual(history.undo().selectedParts,['three']);
 assert.deepEqual(history.undo().selectedParts,['two']);
 assert.deepEqual(history.undo().selectedParts,['two']);

 const reset=history.reset({hiddenParts:['fresh','fresh']});
 assert.deepEqual(reset.hiddenParts,['fresh']);
 assert.equal(history.length,1);
 assert.equal(history.canUndo(),false);
 assert.equal(history.canRedo(),false);
});

test('state equality includes array order and all three channels',()=>{
 assert.equal(selectionStatesEqual(
  {selectedParts:['a','b'],hiddenParts:['c']},
  {selectedParts:['a','a','b'],hiddenParts:['c'],fadedParts:[]},
 ),true);
 assert.equal(selectionStatesEqual({selectedParts:['a','b']},{selectedParts:['b','a']}),false);
 assert.equal(selectionStatesEqual({hiddenParts:['a']},{fadedParts:['a']}),false);
});
