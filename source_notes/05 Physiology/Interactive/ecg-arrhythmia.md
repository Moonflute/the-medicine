# ECG and arrhythmias
검토 기준일: 2026-10-25
- 기본 화면인 전기생리 모델은 심근 구역의 막전위·회복과 구역 사이 전류를 수치 적분하고, 이동한 전극의 위치에서 전위차를 계산합니다. 상대 전압 a.u.를 사용하며 실제 임상 mV로 보정하지 않았습니다.
- 별도의 리듬 판독 모드는 기존 Lead II 유사 합성 파형입니다. 이 모드의 가로 큰 칸 0.2 s·세로 큰 칸 0.5 mV 표기는 파형 학습용이며, 화면의 물리적 25 mm/s 용지를 의미하지 않습니다. 아래 Sinus rhythm–VT 노트의 고정 PR·QRS 수치는 이 합성 모드에만 해당합니다.
- 두 모드 모두 진단·치료 판단에 사용할 수 없습니다. ST·QT morphology, 12-lead 진단, Ischemia 진단을 검증한 모델이 아니며 QRS가 있다고 실제 맥박·관류가 보장되지는 않습니다.

## forward-model | 심근 전기활동과 ECG 생성
### 기전
- 각 구역에 정규화 막전위 v와 회복 gate h를 둡니다. Mitchell–Schaeffer two-current 식을 기반으로 inward current h·v²·(1−v)/τin, outward current −v/τout, 외부 자극, 인접 구역의 결합 전류를 매 시간 단계 더합니다. ECG의 P·QRS·T 모양이나 시작 시각을 입력하지 않습니다.
- 구역 i에서 j로 흐르는 결합 전류는 g·(vi−vj)로 계산합니다. 한 구역에서 나가는 전류는 상대 구역에 들어가며, 연결을 끊으면 이 경로의 전류도 0이 됩니다. 막전위 변화는 자극 직후의 흥분뿐 아니라 plateau와 repolarization까지 계속 적분합니다.
- 화면의 RA·LA·RV·LV, Septum, Apex는 위치를 이해하기 위한 전면 개념 절개도입니다. 뒤쪽의 LA도 펼쳐 그렸으며 환자 영상이나 실제 조직 경계는 아닙니다. 갈색 선은 계산에 쓰인 전도 연결이고, Atrial myocardium에서는 주변 구역 사이의 연결망으로 흥분이 퍼집니다.
- 초록 화살표는 같은 결합 전류 g·(vi−vj)의 부호와 크기를 표시합니다. 차단된 연결에는 붉은 점선과 ×가 나타나며 전류 화살표는 그리지 않습니다. 깊이가 겹치거나 가까운 심근 연결은 큰 실제 전류를 대표로 골라 최대 40개까지 표시합니다. 혈류·입자 이동 속도·흉곽 전체의 전류 유선을 뜻하지 않습니다.
- 벽의 색은 같은 전면 좌표로 투영된 구역들의 최대 Vm입니다. 주황은 흥분, 보라는 막전위가 내려가는 회복, 옅은 벽색은 낮은 Vm이며 산소포화도를 뜻하지 않습니다. 구조 이름을 누르면 해당 계산 구역과 첫 활성 시각을 확인할 수 있습니다.
- 심근은 0.7 cm 간격의 축약 3D 구역으로 구성하고, SA·AV·His·Bundle branches·Purkinje에 대응하는 전도 연결을 추가합니다. 총 456개 구역은 실제 세포 456개가 아니라 각각 많은 세포를 대표하는 계산 단위입니다. 외부에서 주기적으로 주는 SA 자극을 사용하므로 SA node 자동능의 개별 이온 통로는 재현하지 않습니다.
- 적분 간격은 0.1 ms, 화면에 저장하는 간격은 2 ms입니다. 시작 상태의 영향을 줄이기 위해 2회 선행 자극 후 2.4초 기록을 만듭니다. 입력을 바꾸면 새 기록을 계산하며 전극만 옮기면 저장된 동일 막전위에서 측정 전위만 다시 구합니다.
### 증상·검사 소견
- 실제 ECG는 하나의 세포 Action potential이 아니라 여러 위치의 전기활동을 멀리서 합성한 신호입니다. 전체 심근이 비슷한 막전위를 유지하는 때에는 많은 구역이 depolarized 상태여도 전위 기울기는 작아질 수 있습니다.
- 화면의 색은 v=0–1인 상대 막전위입니다. 수축력·심박출량·조직 관류를 계산한 색이 아니며, ECG가 보이는 것만으로 증상이나 혈역학적 안정성을 추정하지 않습니다.
### 관찰과 해석
- SA node → AV node → His → 각 Ventricular 구역의 활성 시각을 선택해 실제로 어디가 먼저 흥분하는지 확인합니다. 활성 시각은 v가 0.5를 넘어간 때이며 ECG에서 재는 P onset이나 QRS onset과 동일하지 않습니다.
- 고정된 전기생리 입력에서 전극을 옮겨도 구역의 색·전도 시간은 바뀌지 않습니다. 반면 AV 결합이나 Bundle branch 연결을 바꾸면 전기생리 계산 자체가 바뀌어 활성 순서와 파형이 함께 달라집니다.
- 실제 심장 모양·벽 두께·섬유 방향을 반영한 해부학 mesh나 세포별 이온 통로 모델은 아닙니다. Atria·Ventricles·AV 연결부의 시상수와 결합도는 교육용으로 설정했으며 특정 환자나 질환의 ECG를 맞춘 값이 아닙니다.
### 관련 자료
- [전극 위치와 전위차](/interactive/ecg-arrhythmia/notes#forward-electrodes)
- [전도와 회복 조건 비교](/interactive/ecg-arrhythmia/notes#forward-conduction)

## forward-electrodes | 전극 위치·Lead field·전위차
### 기전
- 심근 연결마다 전류 크기와 연결 방향을 가진 작은 current dipole을 만듭니다. 각 전극에서 구하는 전위는 이 dipole과 전극 방향 벡터의 내적을 거리의 세제곱으로 나눈 기여들을 합한 값입니다. 하나의 평균 벡터만으로 모든 파형을 대체하지 않습니다.
- Bipolar 측정값은 φ(+)−φ(−)입니다. 같은 두 위치의 극성을 바꾸면 부호가 반전되고, 두 전극을 같은 위치에 두면 전위차는 0입니다. Lead I·II·III 예시는 각각 LA−RA, LL−RA, LL−LA를 사용합니다.
- Wilson central terminal 모드에서는 이동 가능한 + 전극의 전위에서 고정된 RA·LA·LL 전위의 평균을 뺍니다. 이 기준 전위도 시간에 따라 변하므로 항상 0인 가상 접지로 취급하지 않습니다. V1–V6는 이 기준을 사용하는 위치 예시입니다.
- 흉곽은 전극 위치를 정하기 위한 타원체 표면입니다. 전기장은 균질·무한 volume conductor로 근사하며, 이 타원체의 경계조건을 푼 torso FEM/BEM 해석은 아닙니다. Lung·blood·bone의 서로 다른 전도도, 전극 접촉 저항·잡음·증폭기 회로는 포함하지 않습니다.
### 증상·검사 소견
- 전극 위치가 달라지면 같은 심장에서도 관찰되는 크기와 부호가 달라집니다. 이 모델의 파형 변화는 새로운 질환이 발생했다는 뜻이 아니라 측정 위치가 달라진 결과일 수 있습니다.
- 가슴에 가까운 전극은 위치별 전류원과 거리가 서로 크게 달라집니다. 따라서 합성 dipole 하나와 Lead field의 내적으로 근사한 값이 분포 전류원을 각각 계산한 값과 차이 날 수 있습니다.
### 관찰과 해석
- 초록 실선은 모든 심근 연결의 기여를 합친 전위차입니다. 주황 점선은 심장 중심의 Lead field와 합성 dipole을 내적한 근사이며, 두 선이 항상 일치해야 하는 것은 아닙니다. 표시되는 각도는 이 중심 근사의 3D 각도입니다.
- 전압 배율은 모든 위치와 조건에서 고정합니다. 전극 이동 때 파형을 자동으로 같은 높이로 늘리지 않으므로 실제 계산 크기의 변화를 비교할 수 있습니다. 화면 감도만 바꾸면 그림 크기는 바뀌지만 원래 전위차 수치는 유지됩니다.
- 흉곽을 클릭하거나 전극을 드래그하고, 앞·옆·뒤 보기와 숫자 입력으로 3D 표면을 탐색합니다. 위치 예시는 늑간·Clavicle 등 실제 전극 부착의 해부학적 기준을 표시한 도해가 아니며, 환자의 전극 부착 교육을 대신하지 않습니다.
### 관련 자료
- [심근 전기활동 계산](/interactive/ecg-arrhythmia/notes#forward-model)

## forward-conduction | 전도 연결·자극 위치·Repolarization 비교
### 기전
- AV 전도 저하에서는 AV 연결부의 결합도를 기준의 52%로 낮춥니다. AV 구역의 흥분이 이웃에 전달되는 시간이 달라지며, 심실 활성 시각을 직접 뒤로 옮기는 방식은 아닙니다.
- RBB 또는 LBB 연결 차단에서는 His에서 해당 branch로 가는 한 연결의 결합도를 0으로 만듭니다. 반대쪽 branch와 남아 있는 심근 연결을 통해 해당 Ventricular 구역이 뒤늦게 활성될 수 있습니다. 차단 아래쪽 branch가 역방향으로 활성되는 것도 가능합니다.
- RV 자극은 SA 자극 대신 RV 구역에 전류를 줍니다. 이 모델의 연결은 양방향이므로 Ventricles에서 시작한 활성은 His·AV를 거쳐 Atria로 전달될 수 있습니다. 실제 기기의 pacing spike·전극 접촉·설정 회로는 구현하지 않았습니다.
- Ventricular 회복 시상수는 회복 gate의 닫힘 속도를 바꿉니다. 구역별 기본 시상수에는 공간적 차이를 두어 repolarization의 전위 기울기가 생기도록 했습니다. 별도 T wave를 더하지 않으므로 repolarization과 다음 자극에 대한 반응이 같은 식의 결과로 연결됩니다.
### 증상·검사 소견
- 실제 전도 장애나 pacing에서는 Ventricular 활성 순서가 달라져 QRS·ST-T가 달라질 수 있습니다. 그러나 이 축약 geometry가 만든 파형에 전형적인 RBBB·LBBB 진단 기준을 적용할 수는 없습니다.
- 회복이 늦어지는 조건은 repolarization과 자극 반응의 변화를 관찰하기 위한 것입니다. QTc·약물 효과·전해질 농도·Torsades de pointes 위험을 정량적으로 예측하는 기능은 아닙니다.
### 관찰과 해석
- 기준 전도를 비교 저장한 뒤 같은 전극 위치에서 branch를 차단하세요. 활성 지연이 실제로 생긴 구역과 전위차를 함께 비교하고, 단지 파형이 넓어 보인다는 이유로 임상 진단명을 붙이지 않습니다.
- Atrial→Ventricular 시작 차이, Ventricular 활성 분산, 활성된 구역 비율은 계산 mesh의 내부 지표입니다. 첫 번째는 PR interval, 두 번째는 QRS duration과 다르며 RV 자극의 역방향 전도에서는 첫 값이 음수가 될 수 있습니다.
- 심장 활동을 바꾸는 실험과 전극 위치만 바꾸는 실험을 분리하세요. 회색 저장 파형은 같은 시간축과 전압 배율을 유지하지만 Rate를 바꾸면 박동 위치도 달라지므로 피크가 겹치지 않는 것 자체는 오류가 아닙니다.
### 관련 자료
- [First-degree AV block · 합성 리듬 판독](/interactive/ecg-arrhythmia/notes#av1)
- [심장 혈역학](/interactive/cardiac-hemodynamics)

## sinus | Sinus rhythm
### 기전
- SA node 활성 후 Atrial depolarization, AV delay, His–Purkinje를 통한 Ventricular depolarization이 순서대로 이어집니다.
### 증상·검사 소견
- 일정한 P–QRS 1:1 관계와 고정 PR을 봅니다. 정상 Sinus rhythm도 다른 심장질환이나 Ischemia를 배제하지는 않습니다.
### 관찰과 해석
- 이 모델의 PR은 160 ms, QRS는 90 ms입니다. P onset과 뒤따르는 QRS onset을 선택해 PR을 측정하고 RR과 구분하세요.
예측: PR interval은 어디부터 어디까지인가? | P onset–QRS onset | QRS onset–T end | 두 QRS 사이 | 0

## brady | Sinus bradycardia
### 기전
- SA node의 발생 빈도는 느려지지만 각 P에 대한 AV conduction은 유지됩니다. High vagal tone과 Sinus node dysfunction을 같은 원인으로 단정하지 않습니다.
### 증상·검사 소견
- 무증상일 수 있으며 관류가 부족하면 피로·어지럼·실신이 나타날 수 있습니다. 증상과 리듬의 시간적 연관성, 약물·Thyroid function을 함께 봅니다.
### 관찰과 해석
- RR은 길어지지만 PR과 QRS width는 그대로인 것을 비교합니다. 느린 심실 박동만 보고 AV block으로 부르지 않습니다.
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
- 연속 RR 간격을 측정해 불규칙성을 확인하세요. 이 파형의 평균 Ventricular rate는 짧은 8초 창에서 센 QRS 수×7.5와 정확히 일치하지 않을 수 있습니다.
예측: AF에서 PR interval은? | 항상 160 ms | 일정한 P가 없어 측정 불가 | RR과 같은 값 | 1
### 관련 자료
- [Atrial fibrillation](disease:심방 조동-세동 (Atrial Flutter-Fibrillation))

## flutter | Atrial flutter
### 기전
- 조직화된 Atrial macro-reentry가 빠른 F wave를 만듭니다. 이 모델은 Atrial rate 300/min을 고정하고 2:1·3:1·4:1 AV conduction을 선택합니다.
### 증상·검사 소견
- 두근거림·운동능 감소가 나타날 수 있습니다. 2:1 전도에서는 Ventricular rate 약 150/min의 규칙적 빈맥처럼 보여 F wave를 놓치기 쉽습니다.
### 관찰과 해석
- 전도비 2:1에서 4:1로 바꾸면 심실 반응은 150에서 75/min으로 줄지만 F wave 간격은 유지됩니다. 실제 Flutter는 가변 전도도 가능합니다.
예측: Atrial rate 300/min에서 3:1 전도 시 Ventricular rate는? | 300/min | 150/min | 100/min | 2
### 관련 자료
- [Atrial flutter](disease:심방 조동-세동 (Atrial Flutter-Fibrillation))

## av1 | First-degree AV block
### 기전
- AV conduction이 지연되지만 모든 P가 QRS로 이어집니다. 이 모델은 PR 280 ms의 대표 예시이며 전도 지연 부위가 항상 AV node라고 확정하는 검사는 아닙니다.
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
- 연속 P onset–QRS onset을 재고 비전도 P를 선택하세요. Atrial rate를 올려도 같은 비율의 QRS 탈락 때문에 Ventricular rate가 더 낮습니다.
예측: 이 모델에서 탈락 직전 PR의 변화는? | 점진 연장 | 고정 | 측정할 P가 없음 | 0

## mobitz2 | Mobitz II
### 기전
- 전도된 박동의 PR은 일정한데 갑자기 QRS가 탈락합니다. His–Purkinje 병변과 연결되며 이 모델은 넓은 QRS를 갖는 예시입니다.
### 증상·검사 소견
- 어지럼·실신이 생길 수 있고 더 높은 등급의 AV block으로 진행할 수 있습니다. Narrow QRS만으로 배제하거나 단일 2:1 strip을 무조건 Mobitz II로 분류하지 않습니다.
### 관찰과 해석
- Mobitz I과 달리 탈락 전 PR 연장이 없는지 봅니다. 3개의 P 중 2개가 전도되는 예시이며 모든 Mobitz II의 고정 비율을 뜻하지 않습니다.
예측: Mobitz I과 구분되는 핵심은? | 탈락 전 PR이 일정 | 언제나 정상 Rate | P wave 부재 | 0

## complete | Complete AV block
### 기전
- Atrial rhythm과 Ventricular escape가 독립적으로 발생합니다. P가 QRS를 유발하지 않으므로 겉으로 P 뒤에 QRS가 가까이 있어도 전도라고 단정할 수 없습니다.
### 증상·검사 소견
- 느린 Escape는 피로·저혈압·실신을 유발할 수 있습니다. QRS 폭은 Escape origin에 따라 다르며 이 모델은 넓은 QRS 한 가지 예시입니다.
### 관찰과 해석
- P–P와 R–R을 각각 재면 규칙적이지만 서로의 간격은 계속 바뀝니다. Atrial rate 85/min은 고정, Escape rate만 30–45/min 범위에서 조절합니다.
예측: Complete AV block에서 P와 QRS의 관계는? | 고정 PR | 서로 독립 | P가 사라짐 | 1

## vt | Monomorphic ventricular tachycardia
### 기전
- Ventricular origin의 반복 활성으로 빠르고 넓은 QRS가 발생합니다. Atrial activity와 해리될 수 있으며 이 모델은 독립된 Atrial rhythm을 함께 표시합니다.
### 증상·검사 소견
- 두근거림부터 실신·혈역학적 붕괴까지 다양합니다. Wide-complex tachycardia의 감별에는 SVT with aberrancy도 있지만 불안정한 실제 환자에서 판독 연습 때문에 대응을 늦추면 안 됩니다.
### 관찰과 해석
- QRS width와 Atrial–Ventricular 독립성을 확인합니다. 화면의 수축 애니메이션은 유효 맥박을 보장하지 않으며 Pulseless VT를 감별하는 기능도 아닙니다.
예측: VT의 QRS가 보이면 실제 맥박이 있다고 확신할 수 있는가? | 있다 | 실제 관류를 따로 확인해야 한다 | PaO₂만 확인하면 된다 | 1
### 관련 자료
- [Ventricular tachycardia](disease:심실 빈맥 (Ventricular Tachycardia))

## 출처
- [NHLBI — How the heart beats: cardiac conduction system](https://www.nhlbi.nih.gov/health/heart/heart-beats)
- [Malmivuo & Plonsey — Bioelectromagnetism, Chapter 6: The Heart](https://www.bem.fi/book/06/06.htm)
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
