import {muscleRegions} from './body-muscle-catalog.js';
import {musculoskeletalIdentities} from './body-muscle-identities.js';
import {loadBodySystemDetail} from './body-system-detail.js';
export function loadMusculoskeletalDetail(key){const region=muscleRegions.find(r=>r.id===key);if(!region)throw Error('Unknown muscle region: '+key);return loadBodySystemDetail(region,musculoskeletalIdentities,'BodyParts3D 4.3의 공통 좌표로 골격과 선택 부위 근육을 표시합니다. 기시·정지의 세부 정합은 검수 중이며 얼굴 근육은 포함하지 않습니다. 좌우 식별이 불일치한 짧은엄지굽힘근 원본 2개는 제외했습니다.');}
