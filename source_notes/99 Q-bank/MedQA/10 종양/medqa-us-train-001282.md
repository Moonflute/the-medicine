---
type: qbank
schema_version: 1
id: medqa-us-train-001282
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:369bbb026c77b9354e2b05b948ec2a62fcabcb686dec6a5d2622933026c98a10
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "Hodgkin lymphoma"
  - "Reed-Sternberg cells"
  - "B symptoms"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2YuOyngO2CqCDrprztlITsooUgKEhvZGdraW4gTHltcGhvbWEpLm1k
question_type: prognosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

57세 여성이 1개월 동안 양쪽 겨드랑이에 여러 개의 종창이 생겨 내원했다. 대체로 통증이 없지만 주말에는 때때로 아프다고 한다. 피로가 증가했고 미열이 반복되며 전신 가려움증도 있다. 흡연은 하지 않는다. 주말마다 맥주 5–6병을 마신다. 체온은 37°C (98.6°F), 맥박은 80회/분, 호흡수는 12회/분, 혈압은 130/70 mm Hg이다. 신체검사에서 단단하고 압통이 없는 겨드랑이 림프절이 여러 개 만져진다. 림프절 생검에서 핵이 여러 개이고 핵소체가 뚜렷한 거대 림프구가 관찰되며 호산구성 봉입체처럼 보인다. 다음 중 이 환자의 불량한 예후와 관련된 추가 소견은 무엇인가?

## 선택지

A. 흉곽 너비의 7%를 차지하는 종격동 종양
B. 가로 6 cm인 겨드랑이 종양
C. 결절성 림프구 우세형 종양
D. 적혈구 침강속도 65 mm/h

## 해설


생검의 거대 다핵세포와 임상 소견은 고전적 호지킨림프종을 지지한다. 선택지 중 ESR 65 mm/h(D)는 초기 불량위험 분류에 들어갈 수 있다. B증상은 설명되지 않는 발열·뚜렷한 체중감소·흠뻑 젖는 야간발한이며 피로·가려움 자체는 정식 B증상이 아니다. 실제 위험은 병기와 다른 인자를 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001282 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고전 Hodgkin의 불량위험 ESR D 유지. 피로·가려움을 정식 B증상이라고 한 오류와 ESR 기준의 보편화 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/lymphoma/hp/adult-hodgkin-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001282
