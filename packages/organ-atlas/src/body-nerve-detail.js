import {nerveRegions} from './body-nerve-catalog.js';
import {neuralIdentities} from './body-nerve-identities.js';
import {loadBodySystemDetail} from './body-system-detail.js';
export function loadNeuralDetail(key){const region=nerveRegions.find(r=>r.id===key);if(!region)throw Error('Unknown nerve region: '+key);return loadBodySystemDetail(region,neuralIdentities,'BodyParts3D 4.3 공통 좌표의 신경 원본입니다. 상지 신경은 왼쪽 원본 범위이며 오른쪽 상지·하지 주요 신경은 미포함입니다. 일부 뇌신경과 분지가 누락되어 있고 주행은 검수 중입니다. 척수 중심관은 신경조직이 아닌 공간의 표면으로 구분합니다.');}
