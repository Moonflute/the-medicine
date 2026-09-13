import fs from 'node:fs';import {createHash}from 'node:crypto';import assert from 'node:assert/strict';import{assetRevisions}from './src/asset-revisions.js';
for(const [url,revision]of Object.entries(assetRevisions)){const data=fs.readFileSync('static/'+url.slice(2));assert.equal(revision.bytes,data.length);assert.equal(revision.sha256,createHash('sha256').update(data).digest('hex'))}
console.log(Object.keys(assetRevisions).length,'asset hashes match source files');
