# Cardiac hemodynamics
검토 기준일: 2026-10-21
- Preload・Afterload・Contractility는 정상 모델을 100으로 둔 상대값입니다. Preload는 EDV와 관련되지만 LVEDP와 같은 값이 아니며, Afterload는 실제 SVR·Wall stress 전체를 대신하지 못합니다.
- SV = EDV−ESV, EF = SV/EDV, CO = SV×HR입니다. BP는 CO와 Afterload 기반 저항 대리변수에 연동합니다. CVP와 Arterial compliance를 고정한 교육식이므로 실제 BP 예측·수액량·약물 용량 결정에 사용하지 않습니다.
- 프리셋은 여러 변수를 함께 바꾸는 임상 상황 예시입니다. 단일 변수 효과는 정상으로 초기화한 뒤 하나씩 바꿔 비교해야 합니다. Valvular disease, HFpEF, Shunt, RV failure는 계산 범위 밖입니다.

## normal | 정상 Cardiac cycle
### 기전
- Ventricular filling → Isovolumetric contraction → Ejection → Isovolumetric relaxation이 반복됩니다. 압력 차가 판막을 열고 닫으며 ECG는 전기적 사건, 수축은 뒤따르는 기계적 사건입니다.
### 증상·검사 소견
- EDV 120 mL 안팎의 모델 기준값은 보편적 정상 범위가 아닙니다. 체격, 연령, 측정 방법에 따라 실제 용적이 달라집니다.
### 관찰과 해석
- 정지한 뒤 심주기 단계를 선택해 Mitral valve와 Aortic valve의 개폐, 심실 용적, PV loop 위치를 함께 확인합니다. 저장한 기준은 입력 조건까지 복원할 수 있습니다.
### 관련 자료
- [ECG와 부정맥]( /interactive/ecg-arrhythmia)

## hemorrhage | Hemorrhage와 저관류
### 기전
- 순환 혈액량 감소는 Venous return·Preload를 줄입니다. Baroreflex에 의한 Tachycardia·Vasoconstriction·Contractility 증가는 손실을 일부 보상하지만 SV 감소를 항상 상쇄하지는 못합니다.
### 증상·검사 소견
- 차고 축축한 피부, 어지럼, Oliguria, 의식 변화는 저관류 단서입니다. 보상 중에는 BP가 아직 유지될 수 있어 BP만으로 출혈의 영향을 판단하지 않습니다.
### 관찰과 해석
- 출혈 프리셋은 Preload 감소와 보상 반응을 함께 바꿉니다. 정상에서 Preload만 55로 낮춘 경우와 저장·복원해 비교하면 ‘순수 변수 조작’과 임상 상태의 차이를 볼 수 있습니다.
예측: 다른 조건을 고정하고 Preload만 감소시키면 일반적으로? | EDV·SV 감소 | EDV 증가 | EF만으로 관류가 항상 보장 | 0
### 관련 자료
- [Anemia](disease:빈혈 (Anemia))

## hypertension | Afterload 증가
### 기전
- 같은 Contractility에서 박출에 맞서는 부담이 커지면 ESV가 증가하고 SV가 줄어드는 경향이 있습니다. 만성 Hypertension의 Hypertrophy·Remodeling은 이 즉각 반응 모델에 포함되지 않습니다.
### 증상·검사 소견
- Hypertension은 무증상일 수 있습니다. 장기간의 부담은 LV hypertrophy와 Diastolic dysfunction으로 이어질 수 있지만 높은 BP를 보인다는 사실과 Congestion이 있다는 사실은 구분합니다.
### 관찰과 해석
- PV loop의 높이와 폭, ESV의 우측 이동을 함께 봅니다. BP는 저항 증가와 CO 감소가 함께 반영되므로 Afterload 슬라이더 값 자체를 mmHg로 읽지 않습니다.
예측: Contractility를 고정한 채 Afterload를 높이면 ESV는? | 감소 | 증가하는 경향 | 반드시 0 | 1
### 관련 자료
- [Hypertension](disease:고혈압 (Hypertension))
- [HFpEF](disease:만성 심부전 (박출률 보존) (Chronic Heart Failure with Preserved Ejection Fraction (HFpEF)))

## failure | HFrEF: 저박출과 울혈
### 기전
- Contractility 저하는 ESV 증가와 EF 감소로 연결됩니다. 잔여 용적과 신경호르몬 반응으로 충만압이 높아질 수 있으나 Low output과 Congestion은 동일한 축이 아닙니다.
### 증상·검사 소견
- Low output은 피로·운동능 감소·차가운 말초와, Pulmonary congestion은 Dyspnea·Orthopnea와 연결합니다. 환자에 따라 한쪽이 더 두드러질 수 있습니다.
- EF가 보존된 HFpEF는 높은 충만압이 있어도 이 수축력 저하 프리셋으로 표현되지 않습니다. LVEDP가 높다는 것과 Preload가 적절하다는 것도 동의어가 아닙니다.
### 관찰과 해석
- CO·EF와 LVEDP를 따로 읽으세요. Preload를 더 올려도 SV 개선이 제한되거나 충만압이 상승할 수 있다는 점을 관찰하되, 실제 Fluid responsiveness 검사로 사용하지 않습니다.
예측: HFrEF에서 EF와 별도로 울혈 방향을 볼 모델 지표는? | LVEDP | QRS 개수만 | FiO₂ | 0
### 관련 자료
- [HFrEF](disease:만성 심부전 (박출률 감소) (Chronic Heart Failure with Reduced Ejection Fraction (HFrEF)))
- [Acute heart failure](disease:급성 심부전 (Acute Heart Failure))

## exercise | Exercise response
### 기전
- Venous return과 Contractility가 증가하고 활동 근육의 Vasodilation이 동반되면 CO가 증가합니다. HR 상승은 분당 박동 수를 늘리지만 Diastolic filling time을 줄입니다.
### 증상·검사 소견
- 운동 중 빈맥 자체가 병적인 Arrhythmia를 의미하지는 않습니다. 과도한 흉통·실신·호흡곤란은 정상 적응으로 단정할 수 없습니다.
### 관찰과 해석
- 운동 프리셋과 HR만 올린 상태를 비교하세요. 높은 HR이 언제나 CO 증가를 보장하지 않는 이유를 충만 시간과 SV에서 찾습니다.
예측: HR를 계속 높이면 CO도 제한 없이 증가하는가? | 그렇다 | Diastolic filling 감소가 제한할 수 있다 | SV는 항상 일정하다 | 1
### 관련 자료
- [Oxygenation and gas exchange]( /interactive/oxygenation-gas-exchange)

## 출처
- [CV Physiology — Mean Arterial Pressure](https://cvphysiology.com/blood-pressure/bp006)
- [CV Physiology — Cardiac Function Curves](https://cvphysiology.com/cardiac-function/cf027)
- [CV Physiology — Ventricular Pressure-Volume Relationship](https://cvphysiology.com/cardiac-function/cf024)
- [CV Physiology — Regulation of Cardiac Output](https://cvphysiology.com/blood-pressure/bp022)
