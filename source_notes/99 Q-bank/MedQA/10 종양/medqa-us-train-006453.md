---
type: qbank
schema_version: 1
id: medqa-us-train-006453
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2797281d6da4b0643b37998132b848eb4882b458d89083e4ac853a73622fdc49
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "신세포암"
  - "흡연"
  - "신장 종괴"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-y9qe2MpeyVlCAoUmVuYWwgQ2VsbCBDYXJjaW5vbWEpLm1k
question_type: prevention
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

61세 남성이 등 통증과 혈뇨로 내원했다. 등 통증은 6개월 전 서서히 시작되어 점점 악화되었다. 중등도의 둔하고 쑤시는 통증으로 허리와 오른쪽 옆구리에 국한된다고 한다. 2주 전부터 간헐적인 혈뇨도 있었다. 최근 발열, 오한, 실신, 야간 발한, 배뇨통이나 소변을 볼 때 통증은 부인한다. 3년 전 심근경색으로 경피적 관상동맥성형술을 받았고, 하지 말초혈관질환이 있으며 오금동맥이 가장 심하게 침범되어 발목-상완지수는 1.4이다. 지난 1년 동안 옥살산칼슘 결석에 의한 폐쇄성 신결석이 두 차례 있었고 칼륨 시트레이트를 복용한다. 아버지는 55세에 신혈관성 고혈압으로 사망했다. 20갑년의 흡연력과 중등도에서 중증의 매일 음주력이 있다. 지난 2개월 동안 의도하지 않게 6.8kg(15lb) 체중이 감소했다. 혈압은 145/95 mm Hg, 맥박은 분당 71회, 체온은 37.2℃(98.9℉), 호흡수는 분당 18회이다. 오른쪽 늑골척추각에 중등도 압통이 있다. 조영증강 복부·골반 CT에서 오른쪽 신장 상극에 조영증강 종괴가 보이고, 경피적 신장 생검에서 신세포암이 확인되었다. 다음 중 이 환자에서 신세포암 발생에 가장 중요한 위험인자는?

## 선택지

A. 폐쇄성 신결석 병력
B. 신혈관성 고혈압 가족력
C. 말초혈관질환
D. 20갑년의 흡연력

## 해설


제시한 보기 중 RCC와 가장 확립된 연관이 있는 위험요인은 흡연 D이다. 신혈관성 고혈압 가족력은 유전성 RCC 증후군 가족력과 같지 않고, 옥살산칼슘 결석이나 말초혈관질환이 이 보기에서 더 직접적인 위험은 아니다. 비만·고혈압·특정 유전증후군도 RCC 위험요인이므로 모든 상황에서 흡연만이 가장 강하다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006453 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 흡연이 보기 중 가장 확립된 RCC 위험이라는 한정으로 고침; 모든 RCC의 유일·최강 위험이라는 과장 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006453
