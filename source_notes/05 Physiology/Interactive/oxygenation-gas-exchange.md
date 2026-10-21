# Oxygenation and gas exchange
검토 기준일: 2026-10-21
- Sea level, Patm 760 mmHg, PH₂O 47 mmHg, RQ 0.8을 가정합니다. 고도·체온·Mixed venous oxygen·실제 Ventilator mechanics는 재현하지 않습니다.
- V/Q 불균형은 0–100의 교육용 강도 지수이며 병든 폐의 비율이 아닙니다. Shunt fraction은 별도 변수입니다. A–a gradient의 연령·FiO₂ 보정 상한도 근사 기준이지 진단 절단값이 아닙니다.
- CaO₂ = 1.34×Hb×SaO₂ + 0.0031×PaO₂, DO₂ = CaO₂×CO×10입니다. DO₂는 전신 공급량 추정이며 조직별 추출·관류·소모를 계산하지 않습니다.

## normal | 정상 Oxygen transport
### 기전
- Alveolar ventilation이 CO₂를 제거하고 PAO₂를 유지합니다. 산소는 Alveolus에서 Pulmonary capillary로 확산되어 주로 Hemoglobin에 결합합니다.
### 증상·검사 소견
- PaO₂는 용해된 산소의 분압, SaO₂는 Hb 결합 자리의 포화율, CaO₂는 혈액 부피당 산소량입니다. 세 값은 같은 뜻이 아닙니다.
### 관찰과 해석
- FiO₂를 올리면 PAO₂·PaO₂가 증가하지만 이미 포화된 Hb의 추가 산소 운반량은 제한됩니다. 높은 FiO₂의 A–a gradient를 Room air의 고정 20 mmHg와 비교하지 않습니다.
예측: Hb와 CO가 고정되고 SaO₂가 이미 높을 때 FiO₂를 더 올리면? | CaO₂가 FiO₂와 항상 비례 | PaO₂ 증가에 비해 CaO₂ 증가는 작음 | Hb가 자동 증가 | 1
### 관련 자료
- [ABGA](lab:Arterial Blood Gas Analysis (ABGA))

## hypoventilation | Alveolar hypoventilation
### 기전
- 유효 환기 감소로 PaCO₂가 올라가고 Alveolar gas equation의 CO₂ 항이 커져 PAO₂가 내려갑니다. 확산·혈류 혼합에 추가 이상이 없다면 A–a gradient 증가는 크지 않습니다.
### 증상·검사 소견
- 졸림, 두통, 호흡 얕아짐은 Hypercapnia와 연결할 수 있습니다. Oxygen 투여로 SaO₂가 좋아져도 CO₂ 저류와 환기 장애가 해결된 것은 아닙니다.
### 관찰과 해석
- Respiratory rate를 낮춘 뒤 FiO₂만 올려보세요. 산소화는 회복되어도 PaCO₂가 유지되는 차이를 봅니다. 이 모델은 Tidal volume·Dead space가 고정되어 실제 호흡수만으로 환기를 판단하는 도구는 아닙니다.
예측: 저환기에서 FiO₂만 올려도 직접 교정되지 않는 값은? | PaO₂ | PAO₂ | PaCO₂ | 2
### 관련 자료
- [Acid–base balance]( /interactive/acid-base-balance)
- [COPD](disease:만성 폐쇄성 폐질환 (COPD) (Chronic Obstructive Pulmonary Disease))

## vq-mismatch | V/Q mismatch
### 기전
- 환기와 관류의 분포가 맞지 않으면 Low V/Q 영역을 지난 혈액이 충분히 산소화되지 않습니다. High V/Q 영역에서 Hb 포화도를 더 높여 보상하는 데에는 한계가 있습니다.
### 증상·검사 소견
- Dyspnea와 Hypoxemia가 생길 수 있고 A–a gradient가 증가합니다. COPD·폐렴 등에서 환기 분포의 불균일성을 생각하되 이 지수로 질환 중증도를 등급화하지 않습니다.
### 관찰과 해석
- V/Q 지수를 높인 상태에서 FiO₂를 올리면 산소화가 상당 부분 개선되는 경향을 봅니다. Shunt와 비교할 때 다른 입력을 같게 맞춰야 합니다.
예측: V/Q mismatch에서 순수 Shunt보다 일반적으로 더 좋은 반응은? | FiO₂ 증가에 대한 PaO₂ 상승 | Hb 소실 | CO₂ 생성 중단 | 0
### 관련 자료
- [COPD](disease:만성 폐쇄성 폐질환 (COPD) (Chronic Obstructive Pulmonary Disease))

## shunt | Right-to-left shunt
### 기전
- 환기되지 않는 영역을 통과한 혈액이 산소화된 혈액과 섞입니다. 혼합은 PaO₂의 단순 평균이 아니라 Oxygen content를 기준으로 계산해야 합니다.
### 증상·검사 소견
- 높은 FiO₂에도 Hypoxemia가 남을 수 있습니다. ARDS의 폐포 허탈·충만이 대표 연결이며, 실제 반응에는 Recruitment·혈류 재분포·Mixed venous saturation도 관여합니다.
### 관찰과 해석
- 같은 FiO₂에서 Shunt fraction을 늘려 PaO₂와 CaO₂ 변화를 비교합니다. ‘산소에 전혀 반응하지 않는다’가 아니라 V/Q mismatch에 비해 반응이 제한되는 것으로 읽습니다.
예측: Shunt 혈액을 섞을 때 보존하여 계산할 양은? | PaO₂ 단순 평균 | Oxygen content | Respiratory rate | 1
### 관련 자료
- [ARDS](disease:급성 호흡곤란 증후군 (ARDS) (Acute Respiratory Distress Syndrome))

## anemia | Anemia와 Oxygen delivery
### 기전
- Hb가 줄면 산소를 실을 자리가 감소합니다. 폐의 산소화 기능이 보존되어 PaO₂와 SaO₂가 정상이어도 CaO₂는 낮아집니다.
### 증상·검사 소견
- 피로, 운동 시 호흡곤란, Tachycardia가 나타날 수 있습니다. 낮은 CO가 겹치면 DO₂가 더 감소하지만 SpO₂만으로 이를 알아낼 수 없습니다.
### 관찰과 해석
- Hb 14와 7 g/dL을 같은 CO에서 비교하고, 다시 CO를 낮추세요. CaO₂는 Hb, DO₂는 Hb와 CO의 영향을 모두 받습니다. CO 증가가 실제 보상으로 자동 발생하도록 모델링하지는 않습니다.
예측: Anemia에서 정상 SaO₂만으로 충분한 전신 산소 공급을 확신할 수 있는가? | 그렇다 | Hb·CO를 함께 봐야 한다 | PaO₂만 더 알면 충분하다 | 1
### 관련 자료
- [Anemia](disease:빈혈 (Anemia))
- [Cardiac hemodynamics]( /interactive/cardiac-hemodynamics)

## 출처
- [NCBI Bookshelf — Alveolar Gas Equation](https://www.ncbi.nlm.nih.gov/books/NBK482268/)
- [NCBI Bookshelf — Alveolar to Arterial Oxygen Gradient](https://www.ncbi.nlm.nih.gov/books/NBK545153/)
- [CV Physiology — Oxygen Transport and Diffusion](https://cvphysiology.com/microcirculation/m002)
- [Merck Manual Professional — Respiratory failure overview](https://www.merckmanuals.com/professional/critical-care-medicine/respiratory-failure-and-mechanical-ventilation/overview-of-respiratory-failure)
