# ECG and arrhythmias
검토 기준일: 2026-10-21
- 화면은 Lead II 유사 단일 유도의 합성 파형입니다. 가로 큰 칸 0.2 s, 세로 큰 칸 0.5 mV를 사용하지만 화면 확대·디스플레이 크기와 관계없이 물리적 25 mm/s 용지를 의미하지는 않습니다.
- P onset, QRS onset·폭, RR 간격을 수치로 측정합니다. ST·QT morphology, 12-lead axis, Ischemia 진단은 구현 범위 밖입니다. QRS가 있다고 유효 맥박이 보장되지는 않습니다.
- 학습 순서는 Rate → Regularity → P/F wave → P–QRS 관계 → PR → QRS width입니다. 실제 급성 흉통·실신·저혈압은 합성 ECG 학습보다 임상 평가가 우선입니다.

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
- [Merck Manual Professional — Overview of Arrhythmias](https://www.merckmanuals.com/professional/cardiovascular-disorders/overview-of-arrhythmias-and-conduction-disorders/overview-of-arrhythmias)
- [Merck Manual Professional — Atrioventricular Block](https://www.merckmanuals.com/professional/cardiovascular-disorders/specific-cardiac-arrhythmias/atrioventricular-block)
- [ACC/AHA/HRS — Bradycardia and conduction delay guideline](https://www.acc.org/Guidelines/Guidelines/2018/11/05/06/18/Bradycardia-and-Cardiac-Conduction-Delay)
- [Merck Manual Professional — Atrial Fibrillation](https://www.merckmanuals.com/professional/cardiovascular-disorders/specific-cardiac-arrhythmias/atrial-fibrillation)
- [Merck Manual Professional — Atrial Flutter](https://www.merckmanuals.com/professional/cardiovascular-disorders/specific-cardiac-arrhythmias/atrial-flutter)
- [Merck Manual Professional — Ventricular Tachycardia](https://www.merckmanuals.com/professional/cardiovascular-disorders/specific-cardiac-arrhythmias/ventricular-tachycardia-vt)
