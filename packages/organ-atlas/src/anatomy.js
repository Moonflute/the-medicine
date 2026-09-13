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

anatomy.nose={source:'BodyParts3D · CC BY-SA 2.1 JP',reference:'https://dbarchive.biosciencedbc.jp/en/bodyparts3d/download.html',landmarks:['원본 코뼈·보습뼈·벌집뼈·아래코선반·연골과 양쪽 위턱뼈·입천장뼈를 포함한 15개 구조','중간·위코선반은 벌집뼈와 통합된 원본 구조이며 독립 분할은 미구현. 부비동 공간·점막·후각신경은 미포함']};anatomy.ears={source:'OpenEar · ZETA · CC BY 4.0',reference:'https://doi.org/10.1038/sdata.2018.297',landmarks:['같은 표본의 외이도·고막·이소골 3개·내이 액체 공간·안면신경·고실끈·전정달팽이신경·혈관 12개 구조','Scala vestibuli 원본 메시에는 전정·반고리관 공간이 함께 포함되어 있습니다.','귓바퀴는 별도 BodyParts3D 표본으로 좌우를 탐색하며 OpenEar 표본에 합성하지 않습니다. 귀인두관·막미로·코르티기관은 미포함입니다.']};delete anatomy.placenta;

anatomy.gallbladder={source:'HRA united male v1.10',reference:'https://purl.humanatlas.io/ref-organ/united-male/v1.10',landmarks:['담낭·담낭관·좌우 간관·총간관·총담관','간내 미세 담관과 십이지장 유두는 미포함']};anatomy.larynx={source:'HRA united male v1.10',reference:'https://purl.humanatlas.io/ref-organ/united-male/v1.10',landmarks:['갑상·윤상·후두개·피열·소각연골과 후두 내재근','기본 HRA 모델과 별도로 BodyParts3D 후두 골격·인대 39개 구조 및 같은 자료의 인두를 함께 탐색할 수 있습니다. 성대 점막·전정주름·기도 내강과 실제 발성 운동은 미포함입니다.']};

anatomy.thyroid={source:'BodyParts3D · CC BY-SA 2.1 JP',reference:'https://lifesciencedb.jp/bp3d/',landmarks:['갑상선·부갑상선 7개, 혈관 10개, 좌우 되돌이후두신경 줄기 2개의 원본 상대 위치를 유지한 19개 구조','좌우 갑상선엽·잘록·4개 부갑상선과 원본 혈관을 포함합니다. 왼쪽 위갑상혈관과 일부 말단 연결은 불완전하며 되돌이후두신경의 말단 분지·위후두신경·여포·콜로이드는 미포함입니다.']};
anatomy.adrenals={source:'BodyParts3D · CC BY-SA 2.1 JP',reference:'https://lifesciencedb.jp/bp3d/',landmarks:['좌우 부신과 혈관 6개의 원본 상대 위치를 유지한 8개 구조','좌우 부신·중간 및 아래부신동맥·부신정맥을 포함합니다. 위부신동맥은 미포함입니다. 별도 모식 단면에서 피막·사구대·속상대·망상대·수질을 선택하며 원본 내부 조직 분할은 아닙니다.']};
anatomy.testes={source:'BodyParts3D · CC BY-SA 2.1 JP',reference:'https://lifesciencedb.jp/bp3d/',landmarks:['원본의 상대 위치를 유지한 4개 구조','좌우 고환·부고환의 저밀도 원본 외형으로, 부고환 머리·몸통·꼬리는 기본 모델에서 별도 선택되지 않습니다. 별도의 모식 단면에서 백막·대표 소엽·정세관·직세관·고환그물·수출소관·부고환·정관의 연결을 탐색합니다. 원본 조직 분할·세포층·혈관은 미구현입니다.']};
anatomy.pharynx={source:'BodyParts3D · CC BY-SA 2.1 JP',reference:'https://lifesciencedb.jp/bp3d/',landmarks:['원본의 상대 위치를 유지한 13개 구조','인두 수축근·세로근·인두솔기의 원본 구조. 비인두·구인두·후두인두의 점막 공간과 삼킴 운동은 미구현입니다.']};