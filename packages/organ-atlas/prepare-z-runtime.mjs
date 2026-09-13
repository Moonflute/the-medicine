import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import {createHash} from 'node:crypto';
const source=path.resolve('../../tmp/atlas-qa/z-system-evaluated'),destination=path.resolve('static/models/current');
const manifest=JSON.parse(fs.readFileSync(path.join(source,'runtime-manifest.json')));
assert.equal(manifest.assets.length,6,'Build complete manifest with --central first');
for(const asset of manifest.assets){assert.equal(path.basename(asset.file),asset.file);const bytes=fs.readFileSync(path.join(source,asset.file));assert.equal(createHash('sha256').update(bytes).digest('hex'),asset.sha256);fs.writeFileSync(path.join(destination,asset.file),bytes);}
manifest.status='Z-Anatomy 공통 좌표 원본입니다. 해부학적 세부 주행·척수 끝 높이는 검수 중입니다. 출처 Z-Anatomy CC BY-SA 4.0, 기반 BodyParts3D CC BY-SA 2.1 Japan. 개별 출처 검토 기록을 함께 유지합니다.';
fs.writeFileSync(path.join(destination,'z-whole-manifest.json'),JSON.stringify(manifest));
console.log('Prepared six runtime assets with verified hashes; no deployment');
