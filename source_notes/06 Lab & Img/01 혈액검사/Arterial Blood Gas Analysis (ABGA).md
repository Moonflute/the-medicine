---
유형: lab_test
검사_분류: 혈액검사
검체: arterial blood
aliases:
  - ABGA
  - ABG
  - Arterial Blood Gas
---

# Arterial Blood Gas Analysis (ABGA)

> Arterial Blood Gas Analysis (ABGA) : oxygenation, ventilation, acid-base status를 동시에 평가하는 검사
> 정상범위: `pH` `7.38-7.42`, `PaCO2` `38-42 mmHg`, `PaO2` `75-100 mmHg`

## 1. 개요
- ABGA는 oxygenation, ventilation, acid-base status를 동시에 평가하는 핵심 검사이다.
- 응급실, ICU, respiratory failure 평가에서 특히 중요하다.
- 실제 임상에서는 “산소가 부족한가?”, “이산화탄소를 못 내보내는가?”, “대사성 산-염기 이상이 있는가?”, “보상이 적절한가?”를 한 번에 읽기 위해 사용한다.

## 2. 검사 원리
- ABGA는 arterial blood 속 **gas tension**과 **acid-base balance**를 직접 평가하는 검사이다.
- `PaO2`는 arterial blood에 녹아 있는 oxygen의 partial pressure, `PaCO2`는 carbon dioxide의 partial pressure를 의미한다.
- `pH`는 수소 이온 농도의 로그 척도로 혈액의 산성도/알칼리도를 반영한다.
- `HCO3`는 대개 직접 측정보다는 `pH`와 `PaCO2`를 이용해 Henderson-Hasselbalch 관계식으로 계산되거나 analyzer에서 유도된다.
- 즉 ABGA의 핵심은 “산소가 충분히 들어오고 있는가”, “이산화탄소를 충분히 배출하고 있는가”, “대사와 호흡의 결과로 산-염기 균형이 어떻게 흔들렸는가”를 한 번에 읽는 것이다.
- arterial sample을 쓰는 이유는 venous blood보다 **폐를 통과한 뒤의 최종 oxygenation/ventilation 상태**를 더 정확히 반영하기 때문이다.
- `PaCO2`는 주로 **alveolar ventilation**의 결과를 반영하므로 환기가 떨어지면 올라가고, 과호흡하면 내려간다.
- `PaO2`는 inspired oxygen, alveolar gas exchange, V/Q mismatch, diffusion limitation, shunt의 영향을 받는다.
- 따라서 `PaCO2`는 주로 **ventilation marker**, `PaO2`는 주로 **oxygenation marker**로 읽는 것이 기본이다.

## 3. 검체 및 측정 방법
- 검체는 주로 `radial artery`에서 채혈한다.
- `femoral artery`, `brachial artery`를 사용할 수도 있다.
- 채혈 후 신속 분석이 중요하며, 산소치료 중이라면 동일한 산소 조건에서 해석해야 한다.
- heparinized syringe를 사용하며, 공기 혼입(air bubble)과 지연 분석은 결과를 왜곡할 수 있다.
- 산소투여 중이라면 `FiO2`, oxygen flow, device type을 같이 기록해야 해석 가치가 생긴다.

## 4. 정상범위
- MedlinePlus sea-level 기준 대표 성인 값:
- `PaO2`: `75-100 mmHg`
- `PaCO2`: `38-42 mmHg`
- `pH`: `7.38-7.42`
- `SaO2`: `94-100%`
- `HCO3`: `22-28 mmol/L`
- 실전에서는 `pH 7.35-7.45`, `PaCO2 35-45 mmHg`, `HCO3 22-26 mEq/L` 같은 범위도 널리 사용된다.
- 고지대에서는 `PaO2` 기준이 더 낮아질 수 있다.

## 5. 이상 소견의 해석
- `PaO2 감소`는 hypoxemia를 의미한다.
- `PaCO2 증가`는 hypoventilation 또는 respiratory acidosis를 시사한다.
- `PaCO2 감소`는 hyperventilation 또는 respiratory alkalosis를 시사한다.
- `HCO3 감소`는 metabolic acidosis, `HCO3 증가`는 metabolic alkalosis 또는 chronic respiratory compensation을 시사한다.
- pH를 먼저 보고, 그 다음 primary disorder와 compensation을 판단하는 순서가 안전하다.

## 5-1. 해석 순서
1. `pH`를 먼저 보고 acidemia인지 alkalemia인지 판단한다.
2. `PaCO2`와 `HCO3` 중 어느 쪽 변화가 pH 방향과 맞는지 보고 primary disorder를 찾는다.
3. compensation이 적절한지 확인한다.
4. `PaO2`, 필요 시 `A-a gradient`를 이용해 oxygenation 문제를 평가한다.
5. 임상상과 함께 mixed disorder 가능성을 다시 본다.

## 5-2. 1차 산-염기 장애
- `pH 감소 + PaCO2 증가`는 **respiratory acidosis**
- `pH 증가 + PaCO2 감소`는 **respiratory alkalosis**
- `pH 감소 + HCO3 감소`는 **metabolic acidosis**
- `pH 증가 + HCO3 증가`는 **metabolic alkalosis**

## 5-3. 보상(compensation) 해석
- compensation은 pH를 완전히 정상화하려는 것이 아니라, **예상 범위 안에서 반대 방향으로 움직이는 생리적 반응**이다.
- 예상 보상 범위를 크게 벗어나면 mixed acid-base disorder를 의심한다.

### metabolic acidosis의 예상 보상
- bedside rule로 흔히 `Expected PaCO2 = 1.5 x HCO3 + 8 ± 2`를 사용한다.
- 실제 `PaCO2`가 이보다 높으면 동반된 respiratory acidosis, 더 낮으면 동반된 respiratory alkalosis 가능성이 있다.

### metabolic alkalosis의 예상 보상
- `Expected PaCO2 ≈ 0.7 x (HCO3 - 24) + 40 ± 2` 정도로 추정한다.
- 지나치게 높은 `PaCO2`는 추가적인 hypoventilation disorder를 시사할 수 있다.

### respiratory acidosis의 예상 보상
- **acute**: `PaCO2`가 10 mmHg 증가할 때 `HCO3`는 약 `1 mEq/L` 증가
- **chronic**: `PaCO2`가 10 mmHg 증가할 때 `HCO3`는 약 `3.5-4 mEq/L` 증가

### respiratory alkalosis의 예상 보상
- **acute**: `PaCO2`가 10 mmHg 감소할 때 `HCO3`는 약 `2 mEq/L` 감소
- **chronic**: `PaCO2`가 10 mmHg 감소할 때 `HCO3`는 약 `4-5 mEq/L` 감소

## 5-4. oxygenation 해석
- `PaO2`가 낮으면 먼저 hypoxemia가 있는지 판단한다.
- 다만 `PaO2`는 환자가 room air인지, 산소를 얼마나 받고 있는지에 따라 의미가 달라진다.
- room air에서 `PaO2` 저하가 있으면 V/Q mismatch, diffusion limitation, shunt, hypoventilation 등을 감별해야 한다.
- `PaCO2`가 높으면서 `PaO2`도 낮다면 단순 hypoventilation 가능성이 있고, `PaCO2`가 정상이거나 낮은데도 `PaO2`가 낮으면 V/Q mismatch나 shunt 가능성을 더 본다.

## 5-5. A-a gradient
- `A-a gradient`는 alveolus의 산소와 arterial blood의 산소 차이를 보는 개념이다.
- 임상적으로는 hypoxemia가 단순 저환기 때문인지, 폐 실질/가스교환 문제 때문인지 구분하는 데 도움이 된다.
- 대략적으로 정상 `A-a gradient`는 나이에 따라 증가하며, bedside에서는 `나이/4 + 4` 정도를 대략적 기준으로 쓰기도 한다.
- `A-a gradient`가 정상에 가깝고 `PaO2`만 낮으면 hypoventilation이나 낮은 inspired oxygen를 생각하고, 증가돼 있으면 V/Q mismatch, diffusion limitation, shunt를 더 의심한다.

## 6. 임상적 활용
- respiratory failure 평가
- oxygen therapy, non-invasive ventilation, mechanical ventilation 조정
- shock, sepsis, renal/metabolic disorder에서 acid-base assessment
- COPD exacerbation, asthma, pneumonia, pulmonary edema, DKA, lactic acidosis, poisoning 평가

## 6-1. 자주 보는 패턴
- `PaCO2 상승 + pH 저하`: hypoventilation, COPD exacerbation, CNS depression
- `HCO3 저하 + pH 저하`: DKA, lactic acidosis, renal failure, diarrhea
- `PaCO2 저하 + pH 상승`: pain, anxiety, sepsis early phase, pregnancy, liver disease
- `HCO3 상승 + pH 상승`: vomiting, diuretic use, volume contraction

## 6-2. lactate와 함께 볼 때
- ABGA 자체가 lactate를 포함하지 않는 경우도 있지만, 응급실/중환자실에서는 lactate를 함께 측정하는 경우가 많다.
- lactate는 tissue hypoperfusion과 anaerobic metabolism의 단서를 주므로, metabolic acidosis 해석에서 매우 중요하다.

## 7. 주의점 및 함정
- altitude, supplemental oxygen, 채혈 지연, air bubble contamination이 결과에 영향을 줄 수 있다.
- VBG와 ABGA는 일부 항목에서 대체 가능성이 있지만, `PaO2` 평가는 ABGA가 표준이다.
- pulse oximetry가 정상처럼 보여도 산-염기 이상이나 hypercapnia는 놓칠 수 있다.
- 반대로 severe peripheral hypoperfusion에서는 pulse oximetry 신뢰도가 떨어질 수 있어 ABGA가 더 중요해진다.
- chronic hypercapnia 환자는 baseline `PaCO2`와 `HCO3`가 이미 높을 수 있으므로 이전 결과와 비교해야 한다.
- 채혈 중 정맥혈 혼입, 과도한 heparin dilution, 분석 지연은 잘못된 결과를 만들 수 있다.

## 7-1. ABGA와 VBG의 차이
- `VBG`는 pH와 `PaCO2` 추정에는 어느 정도 도움이 될 수 있지만, `PaO2` 평가에는 적합하지 않다.
- 따라서 oxygenation이 핵심이면 ABGA가 필요하다.

## 8. 관련 검사
- Pulse oximetry
- Lactate
- [[Comprehensive Metabolic Panel (CMP)]]
- [[04 영상검사/X-ray]]
- Capnography
- Serum ketone
- Anion gap 계산

## 9. 참고문헌
- MedlinePlus Medical Encyclopedia: Blood gases
