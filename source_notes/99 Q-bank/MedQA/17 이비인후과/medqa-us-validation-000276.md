---
type: qbank
schema_version: 1
id: medqa-us-validation-000276
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:1e59e9c14b47e831fec9a787c3efe07be04bab818978580c1df7bbee4db3ca13
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "노인성 난청"
  - "감각신경성 난청"
  - "Rinne 검사"
question_type: diagnosis
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-uFuOyduOyEsSDrgpzssq0gKFByZXNieWN1c2lzKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

78세 남성이 지난 1년 동안 양쪽 귀의 점진적인 청력저하를 평가받으러 왔다. 사람이 많은 곳이나 여러 사람이 동시에 말할 때 대화를 이해하기 어렵다. 어지럼, 귀 분비물, 이명, 귀 통증은 없다. 이경검사에서 진주빛 회색의 반투명 고막과 정상적인 광반사가 보인다. 512 Hz 진동 음차를 왼쪽 유양돌기에 대고 소리가 들리지 않게 된 뒤 같은 쪽 귀 앞에 가져가자 다시 소리가 들린다고 했다. 오른쪽에서도 같은 결과였고, 이마 중앙에 음차를 대도 편위가 없었다. 가장 가능성 높은 진단은?

## 선택지

A. 귀지 매복
B. 이독성
C. 전정달팽이신경 손상
D. 노인성 난청

## 해설

정답은 D, 노인성 난청이다. 고령에서 서서히 진행한 양측 청력저하와 소음 속 대화 이해의 어려움이 진단을 지지한다. Rinne 검사에서 공기전도가 골전도보다 큰 양성 결과와 Weber의 비편위는 대칭성 감각신경성 난청에 부합하지만, 이 음차검사 결과는 정상 청력에서도 가능하여 단독 확진은 아니다. 본문의 정상 광반사는 이경검사상 고막 소견이며 청각학적 등골근반사를 검사한 것이 아니다. 순음청력검사 등으로 정도와 양상을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 해설의 음차를 뚜껑으로 부르는 오역, 음향반사와 광반사 혼동, Rinne 양성을 감각신경성 확진으로 오해시키는 표현 교정. 점진적 양측 난청에 원정답 D 유지.
- 공식/학회 근거: https://www.nidcd.nih.gov/health/age-related-hearing-loss

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000276
