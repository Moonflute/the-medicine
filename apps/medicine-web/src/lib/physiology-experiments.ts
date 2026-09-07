import type { LearningExperiment } from "@/components/simulation-workbench";

export const physiologyExperiments: Record<string, LearningExperiment[]> = {
  cardiac: [
    { id: "hemorrhage", title: "출혈과 정맥 환류", situation: "급성 혈액량 감소 상황을 단순화한 모델입니다. 심박수와 수축력의 반응도 함께 적용됩니다.", question: "심실 충만과 EDV는 어느 방향으로 변할까요?", choices: ["감소", "증가", "변화 없음"], answer: 0, mechanism: "정맥 환류가 줄면 전부하와 이완기말 용적이 감소합니다. 빈맥이 있어도 한 번에 내보내는 혈액량이 충분하지 않을 수 있습니다.", clinical: "혈압 한 값만 보지 않고 맥박, 관류와 체액 상태를 함께 보는 이유입니다. 이 모델로 수액량을 결정하지는 않습니다.", observe: "정상과 EDV·SV·CO를 비교하고, 충만 단계에서 판막과 혈류를 멈춰 보세요." },
    { id: "hypertension", title: "후부하를 올리면", situation: "다른 입력은 정상으로 두고 후부하만 높여 원인 하나의 효과를 봅니다.", question: "박출 후 남은 용적 ESV는?", choices: ["감소", "증가", "항상 일정"], answer: 1, mechanism: "같은 수축력에서 더 높은 압력에 맞서 박출하면 남은 용적이 증가하고 일회박출량은 줄어듭니다.", clinical: "혈압 부담과 심실 박출 성능을 연결해 해석할 수 있습니다. 실제 반응에는 반사와 순응도도 관여합니다.", observe: "회색 정상 PV 고리와 청록색 현재 고리의 폭·높이를 비교하세요." },
    { id: "failure", title: "수축력 저하와 울혈", situation: "수축력 감소에 충만 증가가 동반된 예시입니다.", question: "ESV가 증가하면 EF는 어떻게 될까요?", choices: ["증가", "감소", "둘은 무관"], answer: 1, mechanism: "박출 후 남는 혈액이 많아지면 EDV 대비 박출 비율이 줄어듭니다. 충만이 증가해도 수축력 자체가 회복되지는 않습니다.", clinical: "낮은 EF와 높은 충만압을 각각 박출과 울혈이라는 관점으로 구분합니다.", observe: "EF와 LVEDP를 비교하고 수축력만 다시 올려 보세요." },
  ],
  nephron: [
    { id: "loop", title: "Loop 이뇨제의 작용 위치", situation: "굵은 상행각의 NKCC2 차단을 적용합니다.", question: "차단 분절 아래로 전달되는 Na 부하는?", choices: ["증가", "감소", "항상 일정"], answer: 0, mechanism: "상행각에서 회수하지 못한 NaCl이 하류로 더 전달됩니다. 해당 분절의 Ca·Mg 처리와 농축능도 함께 달라집니다.", clinical: "이뇨 효과와 함께 전해질 변화를 관찰하는 이유를 연결하세요. 차단율은 약물 용량이 아닙니다.", observe: "자동 선택된 TAL의 막 수송을 본 뒤 Ca2+·Mg2+·H2O를 바꾸어 추적하세요." },
    { id: "thiazide", title: "분절이 다르면 칼슘도 다르다", situation: "원위세뇨관 NCC 차단을 적용하고 Loop 상황과 비교합니다.", question: "이 모델에서 DCT의 Ca 회수는?", choices: ["감소", "증가", "사라짐"], answer: 1, mechanism: "NCC 차단은 NaCl 회수를 줄이지만 DCT의 Ca 회수는 증가하는 방향입니다. 모든 이뇨제를 같은 전해질 효과로 외우면 놓치는 차이입니다.", clinical: "약물 작용 분절과 전해질 양상을 함께 묶어 기억하세요.", observe: "DCT 확대도에서 Ca2+를 선택하고 정상 대비 처리량을 비교하세요." },
    { id: "siadh", title: "ADH와 자유수", situation: "ADH 작용이 높은 상태를 적용합니다.", question: "소변량과 농축은 어느 조합일까요?", choices: ["소변량 ↑ · 농축 ↓", "소변량 ↓ · 농축 ↑", "둘 다 일정"], answer: 1, mechanism: "집합관의 물 회수가 증가하는 방향을 관찰합니다. 물 이동과 Na 이동은 같은 조절이 아닙니다.", clinical: "소변 삼투질농도와 수분 균형을 연결하되, 이 모델은 혈청 Na를 직접 계산하지 않습니다.", observe: "집합관의 H2O 수송과 소변량·삼투질농도를 함께 보세요." },
  ],
  acid: [
    { id: "hypoventilation", title: "저환기에서 보상까지", situation: "폐포 환기가 감소한 뒤 신장 보상 방향을 관찰합니다.", question: "첫 변화에서 PaCO2와 pH의 방향은?", choices: ["PaCO2 ↑ · pH ↓", "PaCO2 ↓ · pH ↑", "둘 다 증가"], answer: 0, mechanism: "CO2 제거가 줄면 PaCO2가 올라가고 pH는 내려갑니다. 신장 보상은 HCO3-를 올리는 방향이며 환기 장애 자체를 없애지는 않습니다.", clinical: "호흡성 변화와 보상 성분을 분리해서 ABGA를 읽는 연습입니다.", observe: "급성 상태를 저장한 뒤 예상 보상을 실행해 HCO3-와 pH의 차이를 비교하세요." },
    { id: "bicarbonate-loss", title: "중탄산 감소와 호흡 보상", situation: "HCO3- 감소를 적용한 뒤 예상 호흡 보상을 확인합니다.", question: "보상 시 폐가 바꿀 성분은?", choices: ["HCO3- 직접 생성", "환기를 늘려 PaCO2 감소", "CO2 저류 증가"], answer: 1, mechanism: "호흡 보상은 CO2 배출을 늘려 pH를 정상 방향으로 이동시킵니다. 일차 HCO3- 감소는 남습니다.", clinical: "측정 PaCO2와 예상 보상 범위를 비교하는 이유를 이해하세요. 자동 보상은 단순 장애의 예시입니다.", observe: "폐의 이동과 PaCO2를 보고, 정상과 보상 후 상태가 같은지 비교하세요." },
  ],
  oxygen: [
    { id: "anemia", title: "포화도가 정상이면 충분할까", situation: "Hb가 낮은 상태를 적용합니다. 폐의 가스교환 입력은 정상과 같습니다.", question: "정상에 가까운 SaO2에서도 감소할 수 있는 것은?", choices: ["산소함량 CaO2", "흡입 산소 농도", "대기압"], answer: 0, mechanism: "포화도는 Hb의 산소 결합 비율이고, 산소함량은 Hb의 양도 반영합니다. 정상 포화도가 정상 운반량을 뜻하지는 않습니다.", clinical: "SpO2와 Hb를 서로 대체할 수 없는 이유입니다. 조직 전달량에는 심박출량도 필요합니다.", observe: "PaO2·SaO2·CaO2를 정상과 비교하고 Hb만 바꾸어 보세요." },
    { id: "shunt", title: "산소를 올려도 남는 문제", situation: "환기되지 않은 혈류가 혼합되는 shunt 상황을 선택합니다.", question: "흡입 산소를 올리면 shunt 경로 자체가 없어질까요?", choices: ["없어진다", "남아 있다"], answer: 1, mechanism: "산소 공급을 늘려도 비환기 혈류가 정상 폐포를 통과하게 되는 것은 아닙니다. 혼합 경로가 남아 산소화 반응을 제한합니다.", clinical: "산소 투여 전후 수치와 가스교환 기전을 함께 보는 연습입니다.", observe: "현재 상태를 저장하고 FiO2 100% 반응을 적용해 전후 차이를 보세요." },
  ],
  ecg: [
    { id: "mobitz1", title: "점점 길어지는 PR", situation: "Mobitz I 모델에서 심방 활성과 심실 활성의 연결을 관찰합니다.", question: "전도되지 않은 P파 뒤에 이 모델의 QRS는?", choices: ["항상 생김", "탈락함"], answer: 1, mechanism: "PR이 점차 늘다가 한 번 전도가 이루어지지 않는 순서를 확인합니다. P파와 QRS를 각각 세어야 합니다.", clinical: "규칙성만 판단하지 말고 P-QRS 대응과 PR 변화를 함께 확인하세요.", observe: "사건 목록에서 차단된 P를 선택하고 다음 순간을 한 단계씩 보세요." },
    { id: "complete", title: "심방과 심실이 독립적으로", situation: "완전 방실차단에서 독립된 심방 활성과 심실 보충리듬을 봅니다.", question: "P파와 QRS의 시간 간격은 항상 일정할까요?", choices: ["일정", "서로 독립적"], answer: 1, mechanism: "P파가 심실 리듬을 지배하지 않으므로 두 주기를 독립적으로 따라가야 합니다.", clinical: "전기적 QRS와 실제 관류는 구분해야 합니다. 화면의 맥박은 기계적 반응을 가정한 교육 표현입니다.", observe: "천천히 재생하며 P와 QRS의 위치 관계가 바뀌는 것을 확인하세요." },
  ],
  adh: [
    { id: "primary-failure", title: "ADH가 부족한데 혈장은 농축된다", situation: "중추성 요붕증 모델에서 ADH 분비가 부족한 상태를 적용합니다.", question: "소변 삼투질농도는 어느 방향일까요?", choices: ["감소", "증가"], answer: 0, mechanism: "ADH가 부족하면 집합관의 물 회수가 줄어 묽은 소변을 많이 내보내는 방향입니다.", clinical: "혈장과 소변의 삼투질농도를 함께 보는 이유입니다. 다뇨의 모든 원인이 ADH 부족인 것은 아닙니다.", observe: "혈장 자극·ADH·소변 삼투질농도가 같은 방향으로 움직이는지 비교하세요." },
  ],
  pancreatic: [
    { id: "pituitary-failure", title: "인슐린이 높은데 혈당도 높다면", situation: "인슐린 저항성 모델을 적용합니다.", question: "높은 인슐린 농도가 충분한 포도당 이용을 보장할까요?", choices: ["보장한다", "보장하지 않는다"], answer: 1, mechanism: "표적 조직의 반응이 약하면 높은 인슐린에도 포도당 이용이 떨어질 수 있습니다.", clinical: "호르몬의 농도와 표적 조직의 반응을 나누어 해석합니다.", observe: "혈당·인슐린·조직 이용 값을 정상 기준과 비교하세요." },
  ],
  endocrine: [
    { id: "primary-failure", title: "일차 표적기관 기능저하", situation: "선택한 축의 표적기관 기능저하 프리셋을 적용합니다. 축마다 호르몬과 표현은 다릅니다.", question: "전형적인 3단계 축에서 최종 호르몬이 줄면 상위 억제는?", choices: ["약해짐", "강해짐"], answer: 0, mechanism: "최종 산물에 의한 억제가 약해지면서 상위 자극이 증가할 수 있습니다. 실패한 기관과 그에 대한 반응을 나누어 보세요.", clinical: "상위·하위 호르몬을 쌍으로 보는 이유입니다. ADH·인슐린 축은 같은 3단계 구조로 해석하지 않습니다.", observe: "기관 카드의 값과 역방향 억제 경로를 정상 기준과 비교하세요." },
    { id: "exogenous", title: "외부에서 들어오는 최종 작용", situation: "선택한 축에 외인성 호르몬 또는 작용을 적용합니다.", question: "최종 작용이 커지면 내인성 상위 신호는?", choices: ["항상 함께 증가", "억제될 수 있음"], answer: 1, mechanism: "외부에서 들어온 최종 작용도 피드백에 참여합니다. 최종 효과와 기관 자체의 생산량을 구별하세요.", clinical: "검사 해석에서 복용 약물을 함께 확인하는 이유와 연결됩니다.", observe: "외인성 변수와 feedback sensitivity를 바꾸며 선택 축의 설명을 읽어보세요." },
  ],
};
