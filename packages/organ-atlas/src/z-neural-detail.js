import {zNeuralRegions} from './z-neural-catalog.js';
import {zNeuralIdentities} from './z-neural-identities.js';
import {loadBodySystemDetail} from './body-system-detail.js';
export function loadZNeuralDetail(key){const region=zNeuralRegions.find(r=>r.id===key);if(!region)throw Error('Unknown supplemental region');return loadBodySystemDetail(region,zNeuralIdentities,'보충 원본 Z-Anatomy의 뼈·근육·인대·주요 하지 신경을 같은 좌표로 표시합니다. 기존 BodyParts3D 전신 좌표에 정합한 모델은 아닙니다. 발·말단 분지·혈관은 미포함이며 신경의 세부 주행은 검수 중입니다. 출처: Z-Anatomy — CC BY-SA 4.0; 기반 자료 BodyParts3D — CC BY-SA 2.1 Japan.');}
