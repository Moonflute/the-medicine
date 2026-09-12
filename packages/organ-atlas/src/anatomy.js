import {additions} from './additions.js';
export const anatomy = {
 heart:{reference:'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-1-heart-anatomy',source:'OpenStax · Heart Anatomy',landmarks:['심첨은 좌심실이 형성하며 왼쪽 아래로 향합니다.','앞면에는 우심실이, 뒤쪽에는 좌심방이 주로 보입니다.','폐정맥은 좌심방으로, 대정맥은 우심방으로 연결됩니다.']},
 lungs:{reference:'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-2-the-lungs',source:'OpenStax · The Lungs',landmarks:['우폐는 3엽, 좌폐는 2엽으로 나뉩니다.','좌폐의 앞쪽 안쪽 경계에는 심장패임이 있습니다.','우주기관지는 좌측보다 짧고 굵으며 더 수직입니다.']},
 brain:{reference:'https://openstax.org/books/anatomy-and-physiology-2e/pages/13-2-the-central-nervous-system',source:'OpenStax · Central Nervous System',landmarks:['대뇌세로틈새가 양쪽 대뇌반구를 구분합니다.','중심고랑은 전두엽과 두정엽 사이에 있습니다.','소뇌는 뒤아래쪽, 다리뇌와 숨뇌의 뒤쪽에 있습니다.']},
 liver:{reference:'https://training.seer.cancer.gov/biliary/anatomy/liver.html',source:'NCI SEER · Liver & Gallbladder',landmarks:['우엽이 크고, 좌엽은 더 얇게 뻗습니다.','꼬리엽과 네모엽은 간의 아래쪽 면에서 구분합니다.','아래 보기에서 간문과 인대를 확인할 수 있습니다.']}
};

for(const o of additions)anatomy[o.id]={reference:'https://github.com/hubmapconsortium/ccf-releases/tree/main/v1.2/models',source:'HuBMAP HRA · 3D reference',landmarks:o.landmarks};

anatomy.stomach={reference:'https://openstax.org/books/anatomy-and-physiology/pages/23-4-the-stomach',source:'OpenStax · The Stomach',landmarks:['분문·저부·체부·유문으로 구분합니다.','현재 외형 모델은 이 구획과 위벽 층을 별도 메시로 나누지 않습니다.']};anatomy.esophagus={reference:'https://dbarchive.biosciencedbc.jp/en/bodyparts3d/download.html',source:'BodyParts3D · FMA7131',landmarks:['원본 외형 메시를 표시합니다. 점막·근육층·괄약근의 별도 모델은 없습니다.']};
anatomy.mouth={landmarks:['좌우 귀밑샘·턱밑샘·혀밑샘','혀의 등쪽·아래쪽·뒤쪽 구획과 버섯유두·성곽유두','위·아래 치아 묶음, 잇몸, 볼점막, 입바닥과 입천장','원본 소속을 보존한 조합으로 임상 암 분류의 구강 경계와 동일하지 않습니다.'],source:'NCI SEER · Mouth',reference:'https://training.seer.cancer.gov/anatomy/digestive/regions/mouth.html'};
anatomy.tonsils={landmarks:['좌우 구개편도 외형을 원본 좌표로 표시','구강·침샘 함께 보기에서 혀·입천장과의 상대 위치 탐색','인두편도·혀편도·편도음와·림프소포·편도 기둥은 별도 모델로 포함하지 않습니다.'],source:'NCI SEER · Tonsils',reference:'https://training.seer.cancer.gov/anatomy/lymphatic/components/tonsils.html'};
