import {vesselRegions} from './body-vessel-catalog.js';
import {vascularIdentities} from './body-vessel-identities.js';
import {loadBodySystemDetail} from './body-system-detail.js';
export function loadVascularDetail(key){const region=vesselRegions.find(r=>r.id===key);if(!region)throw Error('Unknown vessel region: '+key);return loadBodySystemDetail(region,vascularIdentities,'BodyParts3D 4.3 공통 좌표의 선택 부위 혈관입니다. 두경부 혈관과 일부 분지는 아직 포함하지 않으며 주행·연결은 검수 중입니다. 좌우·부위 명칭이 불일치하는 원본은 검수가 끝날 때까지 제외했습니다.');}
