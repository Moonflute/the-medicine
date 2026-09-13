import {combinedRegions} from './body-combined-catalog.js';
import {musculoskeletalIdentities} from './body-muscle-identities.js';
import {vascularIdentities} from './body-vessel-identities.js';
import {neuralIdentities} from './body-nerve-identities.js';
import {loadBodySystemDetail} from './body-system-detail.js';
export function loadCombinedDetail(key){const region=combinedRegions.find(r=>r.id===key);if(!region)throw Error('Unknown combined region');return loadBodySystemDetail(region,{...musculoskeletalIdentities,...vascularIdentities,...neuralIdentities},'동일한 BodyParts3D 4.3 좌표로 골격·근육·동맥·정맥을 함께 표시합니다. '+(region.hasNerves?'왼쪽 경부·상지 신경 원본도 포함합니다.':'이 부위 신경 원본은 아직 미포함입니다.')+' 계통을 켜고 끄며 비교할 수 있습니다. 기시·정지 및 혈관·신경의 세부 주행은 검수 중입니다.');}
