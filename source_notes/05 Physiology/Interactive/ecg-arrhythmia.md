# ECG and arrhythmias
검토 기준일: 2026-10-28
- ECG 화면의 전기생리 모델은 심근 구역의 막전위·회복과 구역 사이 전류를 수치 적분하고, I·II·III·aVR·aVL·aVF·V1–V6를 같은 심장 상태에서 계산합니다. 상대 전압 a.u.를 사용하며 실제 임상 mV로 보정하지 않았습니다.
- 아래 Sinus rhythm–VT 노트는 리듬을 이해하기 위한 이론 자료입니다. 현재 전기생리 모델에서 이 리듬들을 모두 재현하는 것은 아니며, 노트의 수치 예시를 모델의 고정 PR·QRS·Rate 설정으로 해석하지 않습니다.
- 진단·치료 판단에 사용할 수 없습니다. ST·QT morphology, 12-lead 진단, Ischemia 진단을 검증한 모델이 아니며 QRS가 있다고 실제 맥박·관류가 보장되지는 않습니다.

## forward-model | 심근 전기활동과 ECG 생성
### 기전
- 각 구역에 정규화 막전위 v와 회복 gate h를 둡니다. Mitchell–Schaeffer two-current 식을 기반으로 inward current h·v²·(1−v)/τin, outward current −v/τout, 외부 자극, 인접 구역의 결합 전류를 매 시간 단계 더합니다. ECG의 P·QRS·T 모양이나 시작 시각을 입력하지 않습니다.
- 구역 i에서 j로 흐르는 결합 전류는 g·(vi−vj)로 계산합니다. 한 구역에서 나가는 전류는 상대 구역에 들어가며, 연결을 끊으면 이 경로의 전류도 0이 됩니다. 막전위 변화는 자극 직후의 흥분뿐 아니라 plateau와 repolarization까지 계속 적분합니다.
- 화면은 하나의 Epicardial 외곽선 안에 RA·LA·RV·LV, Septum, AV valves와 Chordae를 배치한 전면 개념 절개도입니다. 뒤쪽의 LA와 앞·뒤 심근 구역을 펼쳐 배치했으며 환자 영상, 실제 단면이나 위치 비례를 재현하지 않습니다. 청록색 전도 경로의 세부 좌표는 계산 좌표와 별개입니다.
- 심방 사이의 개별 전도 경로·명칭은 도해에서 생략하고, 계산에서는 Atrial myocardium 사이의 분산된 결합으로 축약합니다. SA node는 SVC–RA 접합부, AV node는 RA 하부 Septal 영역에 표시합니다. His·Bundle branches는 Septum을 따르고 Purkinje 말단은 Endocardial 경계에서 분지합니다. 실제 환자의 전체 Network나 세부 Fascicle을 재구성한 것은 아닙니다.
- 황금색 이동점은 각 연결의 양 끝 구역에서 Vm이 0.5를 통과한 기록 시각 사이를 보간합니다. 매 박동의 실제 기록을 사용하며 RV 자극에서는 역방향 활성도 표시합니다. 연속 조직의 Wavefront 위치나 물리적 전도 속도를 따로 계산하는 것은 아닙니다. 차단된 연결은 붉은 점선과 ×로 표시하고 이동점을 그리지 않습니다.
- 파란 화살표는 전극이 아니라 고정 관찰점에서의 Electric field E = −∇φ입니다. RA·LA와 Ventricles 9개 구역마다 2개씩, 총 22개 관찰점을 둡니다. Atria는 전파 방향으로, Ventricles는 절개도의 벽을 따라 펼친 조직 열을 두 부분으로 나누어 각각의 조직 중심에서 계산합니다. 시작점은 시간·손상 설정에 따라 이동하지 않으며 동일 화살표를 복제하지 않습니다. ECG와 동일한 분포 Dipole의 Extracellular potential φ를 관찰 위치에 대해 미분합니다. 따라서 결합 전류 자체나 흥분 파면의 이동 방향과 같다고 해석하면 안 됩니다.
- 화살표의 시작점은 고정하며 동그라미 등 별도 표식은 그리지 않습니다. 화살표는 전기장의 정면 투영 방향·크기이며 모든 지점·시각에 같은 길이 압축 배율을 사용합니다. 정면 성분이 작으면 화살표를 생략하므로, 표시가 없다고 3D 전기장 전체가 0이라는 뜻은 아닙니다. 관찰 위치는 펼친 절개도에 대응하고 방향은 공통 정면 좌표계입니다. 심장 절개도와 전극 배치는 정면 보기로 표시합니다. ECG 원 파형·막전위 계산은 바꾸지 않습니다.
- 전기장은 기존 Infinite homogeneous conductor와 거리 하한 0.25 model unit을 적용한 전위식에서 계산한 교육용 값입니다. V/m로 보정하지 않았으며 실제 심근의 Intracellular/Extracellular field를 분리한 Bidomain 해가 아닙니다. Lead field는 선택한 유도의 측정 민감도이고, 고정 관찰점의 E와는 다른 양입니다.
- 심근 벽의 옅은 황금색은 흥분, 청회색은 막전위가 내려가는 회복, 원래 벽색은 낮은 Vm입니다. 구역·층의 평균 Vm을 저장 샘플 사이에서 보간합니다. Atria는 전파 방향으로, Ventricles는 벽 두께 방향으로 배열하며 산소포화도는 아닙니다. 이름에 마우스를 올리거나 초점을 맞추면 짧은 설명이 나오고, 클릭 또는 Enter로 상세 설명과 첫 활성 시각을 확인합니다.
- 심근은 RA·LA와 9개 Ventricular 구역으로 나눕니다. Atrial 구역은 전파 방향 33개 계산 층, 각 Ventricular 구역은 Endocardium–Epicardium 방향 18개 계산 층을 가지며 가로 연결도 포함합니다. 구역별 방향·유효 단면적·회복 특성을 다르게 두고 Basal 부위는 상대적으로 늦게 활성되도록 축약합니다. 격자 세분화 시 Capacitance·조직 결합도·Purkinje junction 면적을 함께 고려합니다. 화면의 17개 Atrial·12개 Ventricular 색 띠는 이 계산값을 묶어 표시한 것입니다.
- 인접한 Ventricular 구역 사이에도 여러 계산 구역으로 이루어진 Myocardial cable을 연결합니다. 이 연결 조직은 자체 막전위와 회복을 계산하며 양방향으로 전류를 전달합니다. 따라서 차단된 쪽의 심근이 역방향 Purkinje 활성만 기다리는 것이 아니라, 남아 있는 심근 경로를 통해 순차적으로 흥분할 수 있습니다. 실제 환자의 섬유 배치를 재구성한 것은 아닙니다.
- 총 1,873개 계산 구역 중 1,848개는 Myocardial 구역, 25개는 SA·AV·His·Bundle branches·Purkinje에 대응합니다. 각 구역은 많은 세포를 대표합니다. 외부 자극은 짧은 Conductance로 Vm을 1 쪽으로 유도하며 SA node 자동능의 이온 통로는 재현하지 않습니다. RV 자극은 작은 Endocardial 구역에 적용합니다.
- Epicardial 쪽은 Endocardial 쪽보다 Action potential duration이 짧고, Ventricular 부위별 회복에도 차이를 둡니다. Transmural gradient는 Posterior 구역에서 더 작게 설정해 모든 부위가 같은 방향·시각으로 회복되지 않게 합니다. 이 차이가 Depolarization과 다른 Repolarization의 전위 기울기를 만들며 T wave에 기여합니다. 파형의 높이·부호·폭을 유도마다 별도 함수로 정하지 않습니다.
- 적분 간격은 0.1 ms, 저장 간격은 2 ms입니다. 2회 선행 자극 후 2.4초 기록을 계산하며, 재생할 때 현재 시각까지의 파형만 순차적으로 그립니다. 아직 기록되지 않은 부분은 빈 화면이고 다음 시간창에서는 새로 시작합니다. 입력을 바꾸면 새 기록을 계산하며 전극만 옮기면 동일 막전위에서 측정 전위만 다시 구합니다.
- ‘Ischemia / MI’에서는 9개 Ventricular 구역 중 허혈 위치만 복수 선택합니다. 새 손상의 기본 계산 조건은 Acute ischemia·침범 깊이 100%·허혈 스트레스 70%이며, 적용 중인 손상의 위치를 바꾸면 나머지 조직 매개변수는 유지합니다. 깊이·스트레스·Scar의 계산 기능은 모델 내부에 남아 있으나 위치 선택 화면에는 해당 조절기를 표시하지 않습니다. 매개변수는 정규화 실험값이며 실제 mV·K⁺ 농도·괴사율·발병 시간에 대응하지 않습니다.
- ST shift는 파형 일부를 위로 이동시키는 기능으로 구현하지 않습니다. 조직의 휴지기·Plateau 전위 차이에서 전류가 만들어져야 하며, 원 전위의 DC 성분과 TP 기준선을 보존한 채 ST−TP 차이를 평가해야 합니다. Acute ischemia와 비흥분성 Scar는 다른 상태입니다. 현재의 축약 막전위·무한 균질 도체 모델만으로 임상 ST elevation의 부위·크기를 검증했다고 볼 수 없습니다.
### 증상·검사 소견
- 실제 ECG는 하나의 세포 Action potential이 아니라 여러 위치의 전기활동을 멀리서 합성한 신호입니다. 전체 심근이 비슷한 막전위를 유지하는 때에는 많은 구역이 depolarized 상태여도 전위 기울기는 작아질 수 있습니다.
- 화면의 색은 v=0–1인 상대 막전위입니다. 수축력·심박출량·조직 관류를 계산한 색이 아니며, ECG가 보이는 것만으로 증상이나 혈역학적 안정성을 추정하지 않습니다.
### 관찰과 해석
- SA node → AV node → His → 각 Ventricular 구역의 활성 시각을 선택해 실제로 어디가 먼저 흥분하는지 확인합니다. 활성 시각은 v가 0.5를 넘어간 때이며 ECG에서 재는 P onset이나 QRS onset과 동일하지 않습니다.
- 고정된 전기생리 입력에서 전극을 옮겨도 구역의 색·전도 시간은 바뀌지 않습니다. 반면 AV 결합이나 Bundle branch 연결을 바꾸면 전기생리 계산 자체가 바뀌어 활성 순서와 파형이 함께 달라집니다.
- 실제 심장 모양·벽 두께·섬유 방향을 반영한 해부학 mesh나 세포별 이온 통로 모델은 아닙니다. Atria·Ventricles·AV 연결부의 시상수와 결합도는 교육용으로 설정했으며 특정 환자나 질환의 ECG를 맞춘 값이 아닙니다.
- 기준 전극·기준 전도에서는 V1–V2의 S 우세, V3 부근의 R/S 전환, V1에서 V5까지의 R-wave 증가와 V6에서의 감소를 관찰합니다. I·II·V3–V6에서는 QRS보다 작은 T wave와 ST·TP의 기저선 복귀를 비교합니다. 이는 이 모델의 대표 성인형 설정이지 모든 정상 ECG의 필수 모양을 정의하는 것은 아닙니다. 전극을 옮긴 경우에도 이 순서를 강제로 유지하도록 파형을 보정하지 않습니다.
### 관련 자료
- [전극 위치와 전위차](/interactive/ecg-arrhythmia/notes#forward-electrodes)
- [전도와 회복 조건 비교](/interactive/ecg-arrhythmia/notes#forward-conduction)

## forward-mechanics | 전기적 활성화와 심방·심실 수축

### 기전

- 실제 Excitation–contraction coupling에서는 Action potential에 뒤따르는 Calcium transient와 Crossbridge 반응이 수축으로 이어집니다. ECG나 Electric field의 방향이 곧 심근의 수축 방향인 것은 아닙니다. 이 앱의 기존 막전위 모델은 Calcium을 계산하지 않으므로, 실제 수축력 모델을 완성한 것으로 해석하면 안 됩니다.
- 화면의 수축은 각 Myocardial 구역의 기록된 Vm 상승을 입력으로 받는 단방향 교육용 반응입니다. 전도 조건마다 별도 수축 애니메이션을 재생하거나 ECG의 P·QRS·T 모양을 읽어서 움직이지 않습니다. 구역별 조직량으로 가중한 Upstroke가 짧은 지연 뒤에 반응을 만들고, 두 단계의 감쇠·지연을 거쳐 부드럽게 수축했다가 이완합니다. 일정하게 높은 Resting Vm만으로는 수축하지 않습니다.
- Atria는 지연 18 ms·반응 감쇠 48 ms·추종 시상수 32 ms, Ventricles는 각각 26·90·52 ms를 사용합니다. 상대 반응은 1−exp(−s)로 제한합니다. 이 값과 그림의 이동 거리는 관찰을 위한 설정이며 환자에서 측정한 수축 시간·Strain·Calcium 농도에 맞춘 매개변수가 아닙니다. 기록 앞의 정상상태를 첫 박동으로 준비하므로 빠른 자극에서도 매번 수축 반응을 0으로 초기화하지 않습니다.
- 심장 전체를 확대·축소하지 않습니다. Atrial wall은 국소적으로 안쪽으로 움직이고, Ventricular endocardium은 Epicardium보다 더 안쪽으로 이동해 내강이 좁아지며 벽이 두꺼워집니다. Longitudinal shortening은 AV plane이 Apex 쪽으로 내려오는 변형으로 표시합니다. 심장 외곽·내강·벽의 색·전도계·Papillary muscle·Chordae에 같은 변형을 적용합니다. 이름표와 전극, 파란 Electric field 화살표의 시작점은 고정합니다.

### 증상·검사 소견

- 기준 전도에서는 Atrial contraction이 Ventricular contraction보다 먼저 나타납니다. AV 전도가 느려지거나 Bundle branch가 차단되면, 바뀐 활성 기록에 따라 해당 부위의 수축 시점도 달라집니다. 이는 교육용 수축 반응이며 Echocardiography의 임상 Dyssynchrony 지표는 아닙니다.
- Acute ischemia에서는 계산된 Upstroke의 변화 외에 1−0.7×injury의 상대 수축 반응 감소를 적용합니다. Scar에는 능동 수축을 주지 않습니다. 다만 주변 조직과 이어진 그림이므로 Scar도 수동적으로 끌려 움직일 수 있습니다. 이 감소 계수는 실험용 가정이며 Infarct size·실제 Strain·벽운동 점수에 대한 검증값이 아닙니다.

### 관찰과 해석

- ‘재생’으로 흥분과 뒤따르는 수축을 함께 보거나, 시간 슬라이더를 이동해 같은 시각의 형태를 비교합니다. 정지 상태에서 재생 버튼 양옆의 화살표 또는 ←·→ 키로 10 ms씩 이동할 수 있습니다. 설정 입력과 전극 위치 지도의 방향키는 해당 항목의 조작에 사용합니다. 부위별 반응은 계산 기록에 저장해 보간하므로 역방향으로 이동하거나 재생 속도를 바꿔도 같은 시각에는 같은 형태가 나옵니다. ‘설정 → 모델 → 심방·심실 수축 표시’에서 끌 수 있으며 기기의 동작 줄이기 설정을 존중합니다.
- 기본 재생은 한 자극 주기(60,000 ÷ 자극 빈도 ms)의 끝에서 멈추고 완성된 파형을 그대로 남깁니다. 중간에 정지했다면 남은 구간을 이어 재생하고, 끝에서 다시 재생하면 처음으로 돌아갑니다. ‘전체 2.4 s’에서는 전체 기록 끝에서 멈춥니다. 반복 재생하지 않으며 이 조작은 Vm이나 ECG 배열을 변경하지 않습니다.
- 전기생리 계산과 형태 변형은 분리되어 있습니다. 표시를 켜거나 꺼도 ECG와 전극·Electric field의 계산 좌표는 바뀌지 않습니다. 움직이는 심장에서의 전류원 위치 변화나 Mechanoelectric feedback을 다시 푸는 것은 아닙니다.
- 2D 절개도의 국소 변형이며 조직 부피 보존, 실제 Fiber 방향·Torsion, Calcium–Crossbridge, 심근 탄성, 압력·Preload·Afterload, 혈류와 Valve 개폐 역학은 포함하지 않습니다. 따라서 EF·Stroke volume·임상 Strain·혈역학적 안정성을 추정할 수 없습니다. 완전한 Electromechanical 모델로 확장하려면 실제 해부학 mesh, Calcium 또는 Active tension, 재료 법칙과 순환계 경계조건이 추가로 필요합니다.

### 관련 자료

- [심근 전기활동 계산](/interactive/ecg-arrhythmia/notes#forward-model)
- [부위별 Ischemia](/interactive/ecg-arrhythmia/notes#regional-ischemia)
- [Asgeirsson et al. — Longitudinal shortening·AV plane displacement, 2017](https://pubmed.ncbi.nlm.nih.gov/28754098/)
- [Land et al. — Human cardiomyocyte contraction model, 2017](https://pubmed.ncbi.nlm.nih.gov/28392437/)

## forward-electrodes | 전극 위치·Lead field·전위차
### 기전
- 심근 연결마다 전류 크기와 연결 방향을 가진 작은 current dipole을 만듭니다. 각 전극에서 구하는 전위는 이 dipole과 전극 방향 벡터의 내적을 거리의 세제곱으로 나눈 기여들을 합한 값입니다. 하나의 평균 벡터만으로 모든 파형을 대체하지 않습니다.
- Bipolar 측정값은 φ(+)−φ(−)입니다. 같은 두 위치의 극성을 바꾸면 부호가 반전되고, 두 전극을 같은 위치에 두면 전위차는 0입니다. Lead I·II·III 예시는 각각 LA−RA, LL−RA, LL−LA를 사용합니다.
- Augmented limb lead는 aVR = RA−(LA+LL)/2, aVL = LA−(RA+LL)/2, aVF = LL−(RA+LA)/2로 계산합니다. I·II·III와 같은 세 Limb electrode의 전위를 사용하며 별도 파형을 합성하지 않습니다.
- V1–V6는 각 Chest electrode 전위에서 Wilson central terminal인 (RA+LA+LL)/3을 뺍니다. 기준 전위도 시간에 따라 변하므로 항상 0인 가상 접지로 취급하지 않습니다. RA·LA·LL을 이동하면 이 전극이 기준에 포함된 다른 유도도 다시 계산합니다. RL 접지의 접촉·장비 회로는 포함하지 않습니다.
- 흉곽은 전극 위치를 정하기 위한 타원체 표면입니다. 전기장은 균질·무한 volume conductor로 근사하며, 이 타원체의 경계조건을 푼 torso FEM/BEM 해석은 아닙니다. Lung·blood·bone의 서로 다른 전도도, 전극 접촉 저항·잡음·증폭기 회로는 포함하지 않습니다.
### 증상·검사 소견
- 전극 위치가 달라지면 같은 심장에서도 관찰되는 크기와 부호가 달라집니다. 이 모델의 파형 변화는 새로운 질환이 발생했다는 뜻이 아니라 측정 위치가 달라진 결과일 수 있습니다.
- 가슴에 가까운 전극은 위치별 전류원과 거리가 서로 크게 달라집니다. 따라서 합성 dipole 하나와 Lead field의 내적으로 근사한 값이 분포 전류원을 각각 계산한 값과 차이 날 수 있습니다.
### 관찰과 해석
- 초록 실선은 모든 심근 연결의 기여를 합친 전위차입니다. 주황 점선은 심장 중심의 Lead field와 합성 dipole을 내적한 근사이며, 두 선이 항상 일치해야 하는 것은 아닙니다. 표시되는 각도는 이 중심 근사의 3D 각도입니다.
- 전압 배율은 모든 위치와 조건에서 고정합니다. 전극 이동 때 파형을 자동으로 같은 높이로 늘리지 않으므로 실제 계산 크기의 변화를 비교할 수 있습니다. 화면 감도만 바꾸면 그림 크기는 바뀌지만 원래 전위차 수치는 유지됩니다.
- 왼쪽은 확대 심장 절개도와 전극 지도를 합친 화면이고 오른쪽은 같은 시간축·감도의 12유도입니다. 전도 조건 선택과 모델 초기화는 오른쪽 패널 상단에 있습니다. 기본 시간축은 한 박동이며 전체 2.4초로 바꿀 수 있습니다. 유도를 선택하고 확대하면 한 파형을 오른쪽 전체 높이로 확인합니다. ‘구간 이동’ 목록에서 P·QRS·T를 고르면 선택 유도의 해당 구간 최대 진폭 시점으로 이동합니다. P·QRS·T 배경은 계산된 활성·회복에 대응하는 관찰 구간이며 임상 자동 판독 결과는 아닙니다.
- ‘설정’ 또는 ‘Ischemia / MI’를 누르면 심장 그림은 그대로 두고 오른쪽 파형 영역이 넓은 설정 패널로 바뀝니다. ‘ECG로 돌아가기’ 또는 Escape로 닫으면 기존 유도·전극·시간 설정을 유지한 파형으로 돌아갑니다. 허혈 위치를 체크하면 적용 전에도 왼쪽 모델의 같은 번호가 강조됩니다. 적용 후 ‘구간 이동’ 목록의 TP·ST로 관찰 시점을 고릅니다. 출처와 관련 자료는 이론 노트에서 확인합니다.
- 왼쪽의 ‘전도 경로’에서는 심장 구조와 전도 연결이 강조되고, ‘전극 위치’에서는 흉곽과 9개 측정 전극이 강조됩니다. 정면 보기에서 흉곽을 클릭하거나 전극을 드래그하며, 설정의 둘레·위아래 각도로 3D 표면의 위치를 바꿀 수 있습니다. 뒤쪽 전극은 점선으로 구분합니다. 심장 그림의 확대나 경로 배치가 계산 좌표의 거리를 바꾸지 않습니다. 전극 위치 예시는 실제 늑간·Clavicle에 따른 부착 도해가 아닙니다. RA↔LA 위치 교환으로 Lead reversal의 영향을 비교할 수 있습니다.
- Dipole·Lead field 방향은 설정에서 켤 수 있으며 작은 별도 도해에 표시합니다. 청회색은 합성 dipole, 청록 점선은 선택한 유도의 Lead field이고, 화살표 길이는 방향을 읽기 위한 고정 배율입니다.
- 심장 그림의 큰 검은 화살표는 전체 전류원의 벡터 합인 **Net dipole p(t)**입니다. 각 Source edge에서 계산한 `SOURCE_GAIN × conductance × (Vm[a]−Vm[b]) × (position[b]−position[a])`를 합산합니다. 특정 위치의 Electric field E나 서로 다른 관찰점에 있는 파란 화살표들의 합은 아닙니다.
- 시작점은 절개도 중심에 고정하고, 방향·길이는 Net dipole의 정면 성분으로 표시합니다. 시간·손상 조건마다 바뀌지 않는 선형 배율을 사용하되 화면을 벗어날 정도의 길이만 제한합니다. 정면 성분이 작으면 생략하므로 화살표가 없다고 3D 벡터 전체가 0은 아닙니다. 저장 시점 사이는 벡터 성분을 보간해 상쇄·방향 반전을 표현합니다.
- 그림 아래 **합성 벡터** 체크로 검은 화살표만 켜고 끕니다. 표시 여부·심장 수축 표시·전극 이동·유도 선택은 이 벡터의 계산값을 바꾸지 않습니다. ECG는 계속 분포 전류원을 각각 측정하며, 이 합성 벡터 하나로 원 파형을 대체하지 않습니다.
### 관련 자료
- [심근 전기활동 계산](/interactive/ecg-arrhythmia/notes#forward-model)

## regional-ischemia | 부위별 Ischemia와 Injury current

### 기전

- Acute ischemia에서는 허혈 조직과 주변 조직의 Resting potential·Plateau가 달라져 휴지기와 수축기의 Injury current가 달라질 수 있습니다. 따라서 ST elevation은 ST의 절대 높이만이 아니라 TP와의 차이로 읽어야 합니다.
- Subendocardial 손상과 Transmural 손상은 서로 다른 전위 분포를 만들며, Epicardial 조직의 상대적인 취약성도 영향을 줄 수 있습니다. Okada 등의 모델 연구를 참고했지만 해당 논문의 ORd ionic model·환자 geometry·Bidomain 계산을 재현한 것은 아닙니다.

- 이 앱은 기존 Mitchell–Schaeffer 계열의 축약 식에 조직 특성 변화를 적용합니다. 먼저 조직의 Vm을 다시 적분하고, 동일한 전극 전위 계산식으로 12유도를 생성합니다. 유도별 ST offset, P·QRS·T 템플릿, 특정 유도의 목표 진폭은 입력하지 않습니다.
- Resting potential을 높이면서 Action potential 전체를 같은 양만큼 올리지 않습니다. Álvarez 등의 수정 식처럼 Inward current의 Driving force는 1−v, Resting potential으로부터의 전압은 v−vrest로 분리합니다. 따라서 휴지기와 Plateau의 변화는 같은 상수 이동이 아니라 막전류의 결과입니다.

### 증상·검사 소견

- 모델에서는 조직의 침범 깊이와 전극 방향에 따라 ST−TP가 양수 또는 음수가 될 수 있습니다. 이는 계산된 전위 분포의 차이이며 특정 환자의 STEMI·NSTEMI 진단 기준으로 사용할 수 없습니다.
- 흥분 실패·전도 지연이 커지면 QRS와 회복 구간이 겹칠 수 있습니다. 이때 자동 ST 수치는 보류하지만 원 파형은 그대로 표시합니다. Chest pain·혈역학·관류·Troponin은 계산하지 않으므로 이 화면만으로 실제 증상이나 조직 괴사를 추정하지 않습니다.

### 실제로 바꾸는 조직 특성

- 깊이 좌표 z는 Endocardium 0 → Epicardium 1입니다. s는 허혈 스트레스 0–1과 Border zone 가중치의 곱, q는 층별 감수성 0.4 + 0.6z입니다. 아래 계수는 방향성 관찰을 위한 교육용 선택값이며 임상 데이터에 보정한 상수가 아닙니다.

- Resting potential: +0.12s. 실제 적분 전압의 휴지기 차이를 만듭니다.
- Inward current 가용성: ×(1−0.65sq). 흥분성·Upstroke·Plateau가 변합니다.
- Outward current: ×(1+0.6sq). Plateau 저하·Repolarization 촉진을 축약합니다. ATP-sensitive current의 정밀한 이온식은 아닙니다.
- Recovery gate 시상수를 허혈 스트레스로 다시 줄이지 않습니다. Inward/Outward current의 변화만으로 APD가 짧아지므로 중복 단축을 제거했습니다. 정상 조직의 식과 기존 부위·층별 회복 특성은 유지합니다.
- 조직 간 Coupling: ×(1−0.3s). 확산·전도를 바꾸며 양 끝 조직 값의 조화평균을 적용합니다.
- 기본 Amplitude=1일 때 Inward current는 e·h·(v−vrest)²·(1−v)/τin, Outward current는 −(v−vrest)/τout입니다. h는 실제 정규화 전압 v의 0.13 기준으로 회복·불활성화됩니다. 스트레스 계수는 교육용 범위이며 특정 유도의 ST 크기를 보장하는 보정값이 아닙니다.

- Partial-wall 손상의 깊이 경계는 벽 두께 12% 범위에서 부드럽게 연결합니다. 심방·전도계와 구역 사이의 연결 cable은 직접 손상시키지 않습니다. 기존 구역들은 정밀한 Coronary territory나 AHA 17-segment 모델이 아닙니다. LV inferior는 독립 구역으로 구현하지 않았고 LV apical·basal을 임의로 Inferior infarction이라고 바꾸어 표시하지 않습니다.

- Scar에서는 선택 구역의 흥분성과 연결 Conductance를 0으로 둡니다. 이 구역에 RV stimulus를 직접 주지도 않습니다. 이는 비흥분성·절연 조직의 단순화이며 Fibrosis 미세구조, 생존 섬유, 만성 Aneurysm이나 재진입 회로를 재현하지 않습니다. Acute ischemia와 Scar 사이의 진행 시간도 계산하지 않습니다.

### 관찰과 해석

- ‘Ischemia / MI’에서 허혈 위치를 체크하고 ‘허혈 적용’을 누릅니다. 선택 중에는 같은 번호의 심근 구역을 자주색으로 강조하며 ‘적용 전’과 ‘적용됨’을 구분합니다. 체크만으로는 계산이 바뀌지 않습니다. 위치 지도는 앞·뒤 구역을 펼친 개념도이며 실제 단면이나 Coronary territory를 재현하지 않습니다.
- 기본 회색 점선은 손상만 제거한 별도 계산입니다. 같은 자극 빈도·전도 조건·회복 설정·전극을 사용합니다. 전극을 옮기면 두 기록의 전위도 같은 위치에서 다시 측정합니다.
- 적용 후 ‘ECG로 돌아가기’에서 파형을 보고, ‘구간 이동’ 목록의 TP와 ST로 휴지기·Plateau의 전류 방향을 비교합니다. ECG의 실선은 현재 조직, 회색 점선은 무손상 조건이며, 위치 선택 패널에는 전위 수치표나 Vm 그래프를 표시하지 않습니다.
- 위치 비교에는 같은 기본 조직 조건을 사용합니다. 모든 부위에서 같은 크기·부호의 ST 변화가 나올 것이라고 가정하지 않습니다. 조직 스트레스가 높으면 흥분 실패·전도 지연·ST–T 중첩이 생길 수 있습니다.
- ‘허혈 해제’는 선택과 적용된 손상 매개변수를 제거하며 전도 조건과 전극 위치는 유지합니다. 모델 내부 검사에서는 깊이 0 또는 Acute 스트레스 0도 동일한 무손상 Vm을 회복해야 합니다.

### ST 측정과 한계

- 기본 표시는 원 전위이며 DC 성분을 보존합니다. TP는 첫 박동의 20–80 ms 평균입니다. ST는 조직 Upstroke 종료 이후 35–65 ms 평균으로, 임상 ECG의 J-point 자동 검출과 같지 않습니다. Upstroke 종료는 마지막 50% 활성 시각과 각 심근 활성 후 30 ms 안의 dU/dt > 0.015/ms 구간 끝 중 늦은 값입니다.
- 회복 시작은 살아 있는 심근의 첫 50% 재분극 또는 심근 질량의 2% 이상에서 dU/dt < −0.005/ms가 확인되는 시점 중 이른 값입니다. 질량은 모델의 Capacitance로 가중합니다. 이 수치는 교육용 조직 단계 구분이며 실제 ECG의 T onset 진단 기준이 아닙니다. 화면의 QRS 종료선·ST 측정창·T 배경은 이 계산 결과에 맞춥니다.
- ST−TP는 두 원 전위 평균의 차이입니다. ECG는 원 전위 그대로 표시하며 TP나 ST 구간을 따로 이동하거나 원 데이터에 덮어쓰지 않습니다. 12유도에 표시되는 ST 값은 이 차이의 계산값입니다.
- 살아 있는 심근 질량의 98% 미만에서 흥분이 확인되거나, 활성 분산이 140 ms를 넘거나, 회복이 측정창과 겹치거나, TP가 불안정하면 ST 수치를 보류합니다. 손상 조직의 이른 회복도 포함합니다. Injury current가 있다는 사실과 QRS·ST·T를 독립적으로 측정할 수 있다는 사실은 다릅니다. 보류 시에도 원 파형은 숨기거나 교정하지 않습니다.
- 9개 구역의 서로 다른 전류 방향을 비교하되 모든 선택에서 ST elevation이 크게 나오는 것은 아닙니다. 구역 사이 연결은 Endocardial cable로 축약되어 있고 외벽 전체의 연속적인 경계면은 재구성하지 않았습니다. 따라서 Posterior·작은 RV 병변 등에서 변화가 작을 수 있으며 임상적인 Territory별 감도나 Reciprocal change를 검증했다고 해석하지 않습니다.
- 단위는 a.u.입니다. 1 mm·0.1 mV 등의 임상 ST 기준을 적용할 수 없습니다. 무한 균질 도체에서 전위를 복원하므로 실제 흉곽·폐·혈액의 전도도와 경계 효과를 풀지 않습니다. openCARP의 전위 복원 설명처럼 이 방식은 완전한 Bidomain/Torso 모델과 구분해야 합니다.
- Hyperkalemia 확장에는 전신적인 Extracellular K⁺ 변화와 이에 따른 Reversal potential·채널 가용성·Repolarization을 따로 모델링해야 합니다. 허혈 스트레스 매개변수를 혈중 K⁺ 값으로 해석할 수 없으며 Hyperkalemia 모드는 아직 제공하지 않습니다.

### 계산 검증

- 9개 구역·Partial-wall·Scar·복수 구역을 비교하고, 저장된 Vm에서 전극 전위를 독립적으로 재계산합니다. 손상 라벨만 바꾸어도 파형은 그대로여야 하고, Vm을 모두 0으로 만들면 ECG도 0이어야 합니다.
- 모든 Vm에 같은 상수를 더해도 전위차는 변하지 않아야 합니다. Einthoven·Augmented lead 항등식, 무손상 복원, 더 촘촘한 격자에서의 ST 차이도 검사합니다. 이는 내부 계산의 일관성 검증이며 환자·실험 측정값에 대한 임상 검증을 대신하지 않습니다.
- 정상 전도·BBB·RV 자극의 전파를 함께 검사합니다. 허혈 조건에서는 Upstroke 종료부터 회복까지의 간격, ST 창의 회복 중첩, 같은 구간의 변화율을 확인합니다. ST 진폭이 커졌더라도 조기 재분극과 섞이면 개선으로 판정하지 않습니다.

### 관련 자료

- [Okada · ST elevation 기전 연구](https://doi.org/10.1186/s12576-020-00760-3)
- [Álvarez · 수정 Mitchell–Schaeffer 허혈 모델](https://tsc.urjc.es/~falonso/papers/MathModelComput2012.pdf)
- [Shaw & Rudy · Acute ischemia의 막전류 변화](https://pubmed.ncbi.nlm.nih.gov/9349389/)
- [openCARP · ECG recovery](https://opencarp.org/documentation/examples/02_ep_tissue/07_extracellular)
- [심근 전기활동과 ECG 생성](/interactive/ecg-arrhythmia/notes#forward-model)

## forward-conduction | 전도 연결·자극 위치·Repolarization 비교
### 기전
- AV 전도 저하에서는 AV 연결부의 결합도를 기준의 52%로 낮춥니다. AV 구역의 흥분이 이웃에 전달되는 시간이 달라지며, 심실 활성 시각을 직접 뒤로 옮기는 방식은 아닙니다.
- RBB 또는 LBB 연결 차단에서는 His에서 해당 branch로 가는 연결의 결합도를 0으로 만들고, 같은 branch의 Distal 결합도는 0.085에서 0.03으로 낮춥니다. 단일 Proximal cut만이 아니라 해당 branch의 분산된 전도 저하를 함께 가정한 교육용 조건입니다. 반대쪽 branch와 남은 Septal·Regional myocardial 경로로 해당 Ventricular 구역이 늦게 활성되고, 차단 아래쪽 branch도 역방향으로 활성될 수 있습니다. 이를 특정 환자의 병변 위치·중증도와 대응시키지 않습니다.
- RV 자극은 SA 자극 대신 RV 구역에 전류를 줍니다. 이 모델의 연결은 양방향이므로 Ventricles에서 시작한 활성은 His·AV를 거쳐 Atria로 전달될 수 있습니다. 실제 기기의 pacing spike·전극 접촉·설정 회로는 구현하지 않았습니다.
- Ventricular 회복 시상수는 회복 gate의 닫힘 속도를 바꿉니다. 구역별 기본 시상수에는 공간적 차이를 두어 repolarization의 전위 기울기가 생기도록 했습니다. 별도 T wave를 더하지 않으므로 repolarization과 다음 자극에 대한 반응이 같은 식의 결과로 연결됩니다.
### 증상·검사 소견
- 실제 전도 장애나 pacing에서는 Ventricular 활성 순서가 달라져 QRS·ST-T가 달라질 수 있습니다. 그러나 이 축약 geometry가 만든 파형에 전형적인 RBBB·LBBB 진단 기준을 적용할 수는 없습니다.
- 기준 전도에서는 초기 Septal r과 V1–V6의 우세 방향 변화, Anterior T wave를 확인합니다. 차단 조건에서는 지연된 Right precordial 기여와 넓어진 Lateral 파형을 비교하지만 임상적인 Notching·ST-T discordance·절대 전압까지 검증한 것은 아닙니다.
- 회복이 늦어지는 조건은 repolarization과 자극 반응의 변화를 관찰하기 위한 것입니다. QTc·약물 효과·전해질 농도·Torsades de pointes 위험을 정량적으로 예측하는 기능은 아닙니다.
### 관찰과 해석
- 기준 전도를 비교 저장한 뒤 같은 전극 위치에서 branch를 차단하세요. 활성 지연이 실제로 생긴 구역과 전위차를 함께 비교하고, 단지 파형이 넓어 보인다는 이유로 임상 진단명을 붙이지 않습니다.
- Atrial→Ventricular 시작 차이, Ventricular 활성 분산, 활성된 구역 비율은 계산 mesh의 내부 지표입니다. 첫 번째는 PR interval, 두 번째는 QRS duration과 다르며 RV 자극의 역방향 전도에서는 첫 값이 음수가 될 수 있습니다.
- 심장 활동을 바꾸는 실험과 전극 위치만 바꾸는 실험을 분리하세요. 회색 저장 파형은 같은 시간축과 전압 배율을 유지하지만 Rate를 바꾸면 박동 위치도 달라지므로 피크가 겹치지 않는 것 자체는 오류가 아닙니다.
### 관련 자료
- [First-degree AV block · 이론](/interactive/ecg-arrhythmia/notes#av1)
- [심장 혈역학](/interactive/cardiac-hemodynamics)

## sinus | Sinus rhythm
### 기전
- SA node 활성 후 Atrial depolarization, AV delay, His–Purkinje를 통한 Ventricular depolarization이 순서대로 이어집니다.
### 증상·검사 소견
- 일정한 P–QRS 1:1 관계와 고정 PR을 봅니다. 정상 Sinus rhythm도 다른 심장질환이나 Ischemia를 배제하지는 않습니다.
### 관찰과 해석
- ECG 기록에서 P onset과 뒤따르는 QRS onset 사이의 PR을 측정하고 RR과 구분합니다. 여기서 설명하는 관계는 리듬 해석 원리이며 현재 모델에 고정 PR·QRS 값을 지정하는 것은 아닙니다.
예측: PR interval은 어디부터 어디까지인가? | P onset–QRS onset | QRS onset–T end | 두 QRS 사이 | 0

## brady | Sinus bradycardia
### 기전
- SA node의 발생 빈도는 느려지지만 각 P에 대한 AV conduction은 유지됩니다. High vagal tone과 Sinus node dysfunction을 같은 원인으로 단정하지 않습니다.
### 증상·검사 소견
- 무증상일 수 있으며 관류가 부족하면 피로·어지럼·실신이 나타날 수 있습니다. 증상과 리듬의 시간적 연관성, 약물·Thyroid function을 함께 봅니다.
### 관찰과 해석
- RR 연장과 함께 P–QRS 대응, PR과 QRS width를 비교합니다. 느린 심실 박동만 보고 AV block으로 부르지 않습니다.
예측: Sinus bradycardia를 AV block과 구분할 때 먼저 볼 것은? | P–QRS 대응 | 파형 색 | T wave 높이만 | 0
### 관련 자료
- [Hypothyroidism](disease:갑상샘 기능저하증 (Hypothyroidism))

## tachy | Sinus tachycardia
### 기전
- 자율신경·생리적 자극으로 SA node가 빨라집니다. 운동·통증·발열·Hypovolemia 등에 대한 반응일 수 있으며 원인을 다루는 것이 중요합니다.
### 증상·검사 소견
- 두근거림이 생길 수 있고 빈맥이 심하면 충만 시간과 관류에 영향이 있습니다. 규칙적 Narrow QRS tachycardia를 모두 Sinus로 분류하지 않습니다.
### 관찰과 해석
- 각 QRS 앞의 P와 일정한 PR을 확인합니다. 갑작스러운 시작·종료와 P 관계가 다른 PSVT는 별도 감별입니다.
예측: 규칙적인 빠른 QRS만으로 Sinus tachycardia를 확정하는가? | 그렇다 | P wave와 전도 관계도 필요하다 | Rate는 필요 없다 | 1
### 관련 자료
- [PSVT](disease:발작성 상심실성 빈맥 (Paroxysmal Supraventricular Tachycardia (PSVT))

## af | Atrial fibrillation
### 기전
- 조직화되지 않은 Atrial activation과 가변적인 AV conduction 때문에 일정한 P wave가 없고 RR이 Irregularly irregular해집니다.
### 증상·검사 소견
- 두근거림·호흡곤란·피로가 있거나 무증상일 수 있습니다. Atrial mechanical function 저하와 Thromboembolism 위험은 단순한 빠른 Rate와 별개의 문제입니다.
### 관찰과 해석
- 연속 RR 간격을 측정해 불규칙성을 확인합니다. 평균 Ventricular rate와 개별 RR 간격을 구분하고, 짧은 기록의 한두 간격만으로 전체 리듬을 판단하지 않습니다.
예측: AF에서 PR interval은? | 항상 160 ms | 일정한 P가 없어 측정 불가 | RR과 같은 값 | 1
### 관련 자료
- [Atrial fibrillation](disease:심방 조동-세동 (Atrial Flutter-Fibrillation))

## flutter | Atrial flutter
### 기전
- 조직화된 Atrial macro-reentry가 빠른 F wave를 만듭니다. Atrial rate 300/min과 2:1·3:1·4:1 AV conduction은 전도비를 이해하기 위한 수치 예시입니다.
### 증상·검사 소견
- 두근거림·운동능 감소가 나타날 수 있습니다. 2:1 전도에서는 Ventricular rate 약 150/min의 규칙적 빈맥처럼 보여 F wave를 놓치기 쉽습니다.
### 관찰과 해석
- Atrial rate가 300/min으로 일정하다면 전도비 2:1과 4:1의 Ventricular rate는 각각 150/min과 75/min입니다. 같은 Atrial rate에서도 AV conduction에 따라 심실 반응이 달라지며 실제 Flutter는 가변 전도도 가능합니다.
예측: Atrial rate 300/min에서 3:1 전도 시 Ventricular rate는? | 300/min | 150/min | 100/min | 2
### 관련 자료
- [Atrial flutter](disease:심방 조동-세동 (Atrial Flutter-Fibrillation))

## av1 | First-degree AV block
### 기전
- AV conduction이 지연되지만 모든 P가 QRS로 이어집니다. PR 연장만으로 전도 지연 부위가 항상 AV node라고 확정할 수는 없습니다.
### 증상·검사 소견
- 대개 증상이 없지만 매우 긴 PR에서는 AV synchrony 저하와 운동 불편감이 생길 수 있습니다. 약물·구조적 심장질환을 함께 확인합니다.
### 관찰과 해석
- PR 200 ms 초과와 1:1 전도를 동시에 확인합니다. ‘Block’이라는 이름 때문에 QRS 탈락을 찾으려 하면 이 패턴을 놓칩니다.
예측: First-degree AV block의 대표 관계는? | PR 연장, P–QRS 1:1 | 모든 P 비전도 | PR 정상, QRS 주기적 탈락 | 0

## mobitz1 | Mobitz I / Wenckebach
### 기전
- PR이 점차 길어진 뒤 한 P가 전도되지 않고 다음 전도 박동에서 PR이 짧아집니다. 대표적으로 AV nodal conduction의 점진 지연을 보여줍니다.
### 증상·검사 소견
- 무증상 또는 느린 Ventricular response에 따른 어지럼이 가능합니다. 증상과 원인, QRS 폭 등 임상 맥락을 빼고 안전성을 단정하지 않습니다.
### 관찰과 해석
- 연속 P onset–QRS onset을 재고 비전도 P를 찾습니다. 탈락 전후의 PR 변화를 한 주기로 비교하며, 단일 박동만 보고 전도 양상을 판단하지 않습니다.
예측: 전형적인 Wenckebach에서 탈락 직전 PR의 변화는? | 점진 연장 | 고정 | 측정할 P가 없음 | 0

## mobitz2 | Mobitz II
### 기전
- 전도된 박동의 PR은 일정한데 갑자기 QRS가 탈락합니다. His–Purkinje 병변과 연결되며 PR 변화, 비전도 P와 QRS 폭을 함께 살펴봅니다.
### 증상·검사 소견
- 어지럼·실신이 생길 수 있고 더 높은 등급의 AV block으로 진행할 수 있습니다. Narrow QRS만으로 배제하거나 단일 2:1 strip을 무조건 Mobitz II로 분류하지 않습니다.
### 관찰과 해석
- Mobitz I과 달리 탈락 전 PR 연장이 없는지 봅니다. 전도된 박동의 PR과 비전도 P를 비교하며, 특정한 전도비 하나를 모든 Mobitz II의 고정 비율로 해석하지 않습니다.
예측: Mobitz I과 구분되는 핵심은? | 탈락 전 PR이 일정 | 언제나 정상 Rate | P wave 부재 | 0

## complete | Complete AV block
### 기전
- Atrial rhythm과 Ventricular escape가 독립적으로 발생합니다. P가 QRS를 유발하지 않으므로 겉으로 P 뒤에 QRS가 가까이 있어도 전도라고 단정할 수 없습니다.
### 증상·검사 소견
- 느린 Escape는 피로·저혈압·실신을 유발할 수 있습니다. QRS 폭은 Escape origin에 따라 다르므로 하나의 QRS 형태만을 기준으로 해석하지 않습니다.
### 관찰과 해석
- P–P와 R–R을 각각 재고 P와 QRS 사이의 간격이 고정되어 있는지 비교합니다. Atrial rhythm과 Ventricular escape를 별도로 추적하며 우연히 가까워진 P와 QRS를 전도로 오해하지 않습니다.
예측: Complete AV block에서 P와 QRS의 관계는? | 고정 PR | 서로 독립 | P가 사라짐 | 1

## vt | Monomorphic ventricular tachycardia
### 기전
- Ventricular origin의 반복 활성으로 빠르고 넓은 QRS가 발생합니다. Atrial activity와 해리될 수 있으므로 Atrial rhythm과 Ventricular rhythm의 관계를 함께 살펴봅니다.
### 증상·검사 소견
- 두근거림부터 실신·혈역학적 붕괴까지 다양합니다. Wide-complex tachycardia의 감별에는 SVT with aberrancy도 있지만 불안정한 실제 환자에서 판독 연습 때문에 대응을 늦추면 안 됩니다.
### 관찰과 해석
- QRS width와 Atrial–Ventricular 관계를 확인합니다. ECG의 전기활동만으로 유효 맥박을 확인하거나 Pulseless VT를 감별할 수는 없습니다.
예측: VT의 QRS가 보이면 실제 맥박이 있다고 확신할 수 있는가? | 있다 | 실제 관류를 따로 확인해야 한다 | PaO₂만 확인하면 된다 | 1
### 관련 자료
- [Ventricular tachycardia](disease:심실 빈맥 (Ventricular Tachycardia))

## 출처
- [OpenStax — Heart Anatomy](https://openstax.org/books/anatomy-and-physiology-2e/pages/19-1-heart-anatomy)
- [OpenStax — Cardiac Muscle and Electrical Activity: Conduction System of the Heart](https://openstax.org/books/anatomy-and-physiology-2e/pages/19-2-cardiac-muscle-and-electrical-activity)
- [AHA/ACCF/HRS — ECG standardization, Part III: Intraventricular conduction disturbances (2009)](https://pubmed.ncbi.nlm.nih.gov/19281930/)
- [Whole-heart model — APD gradients and T-wave concordance (2016)](https://pubmed.ncbi.nlm.nih.gov/27034121/)
- [NHLBI — How the heart beats: cardiac conduction system](https://www.nhlbi.nih.gov/health/heart/heart-beats)
- [Malmivuo & Plonsey — Bioelectromagnetism, Chapter 6: The Heart](https://www.bem.fi/book/06/06.htm)
- [Asgeirsson et al. — Longitudinal shortening·AV plane displacement (2017)](https://pubmed.ncbi.nlm.nih.gov/28754098/)
- [Land et al. — Human cardiomyocyte contraction model (2017)](https://pubmed.ncbi.nlm.nih.gov/28392437/)
- [Durrer et al. — Total excitation of the isolated human heart (1970)](https://doi.org/10.1161/01.CIR.41.6.899)
- [openCARP — Extracellular potentials, ECG recovery and bidomain comparison](https://opencarp.org/documentation/examples/02_ep_tissue/07_extracellular)
- [Okada et al. — Ionic mechanisms of ST segment elevation (2020)](https://doi.org/10.1186/s12576-020-00760-3)
- [MacLachlan et al. — Regional ischemia, resting potential and TP shift (2007)](https://pubmed.ncbi.nlm.nih.gov/17544454/)
- [Malmivuo & Plonsey — Bioelectromagnetism, Chapter 11: Distributed sources and Lead vector](https://www.bem.fi/book/11/11.htm)
- [Malmivuo & Plonsey — Bioelectromagnetism, Chapter 8: Source-field models, E = −∇φ](https://www.bem.fi/book/08/08.htm)
- [Babbs — Quantitative prediction of body surface potentials using a summed dipole model](https://pubmed.ncbi.nlm.nih.gov/19543975/)
- [Malmivuo & Plonsey — Bioelectromagnetism, Chapter 15: 12-Lead ECG system](https://www.bem.fi/book/15/15.htm)
- [AHA/ACCF/HRS — ECG standardization, Part I: Technology and multilead measurement (2007)](https://www.jacc.org/doi/10.1016/j.jacc.2007.01.024)
- [Mitchell & Schaeffer — A two-current model for the dynamics of cardiac membrane (2003)](https://pubmed.ncbi.nlm.nih.gov/12909250/)
- [Physiome Model Repository — Mitchell–Schaeffer model equations and parameters](https://models.physiomeproject.org/exposure/9efc295a6f3360044b4712c28b8314e7/mitchell_schaeffer_2003.cellml/view)
- [CARPentry — Tissue-scale electrophysiology and extracellular potential recovery](https://grav.medunigraz.at/en/basics/modeling-cardiac-electrophysiology/tissue-scale-ep)
- [Chaste — Pseudo-ECG calculation from spatial voltage gradients](https://chaste.github.io/doxygen-releases/release_2.1/classPseudoEcgCalculator.html)
- [WCTECGdb — Measured electrode potentials and Wilson central terminal (2020)](https://pubmed.ncbi.nlm.nih.gov/32521818/)
- [Merck Manual Professional — Overview of Arrhythmias](https://www.merckmanuals.com/professional/cardiovascular-disorders/overview-of-arrhythmias-and-conduction-disorders/overview-of-arrhythmias)
- [Merck Manual Professional — Atrioventricular Block](https://www.merckmanuals.com/professional/cardiovascular-disorders/specific-cardiac-arrhythmias/atrioventricular-block)
- [ACC/AHA/HRS — Bradycardia and conduction delay guideline](https://www.acc.org/Guidelines/Guidelines/2018/11/05/06/18/Bradycardia-and-Cardiac-Conduction-Delay)
- [Merck Manual Professional — Atrial Fibrillation](https://www.merckmanuals.com/professional/cardiovascular-disorders/specific-cardiac-arrhythmias/atrial-fibrillation)
- [Merck Manual Professional — Atrial Flutter](https://www.merckmanuals.com/professional/cardiovascular-disorders/specific-cardiac-arrhythmias/atrial-flutter)
- [Merck Manual Professional — Ventricular Tachycardia](https://www.merckmanuals.com/professional/cardiovascular-disorders/specific-cardiac-arrhythmias/ventricular-tachycardia-vt)
