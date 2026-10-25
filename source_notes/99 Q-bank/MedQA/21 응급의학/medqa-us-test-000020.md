---
type: qbank
schema_version: 1
id: medqa-us-test-000020
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:5741305390bde0695660d26f01a9d0f30151a43a647e9affee34b03762ae18db
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "벤조디아제핀 중독"
  - "의식 변화"
  - "운동실조"
question_type: diagnosis
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-uypOyhsOuUlOyVhOygnO2VgCDspJHrj4UgKEJlbnpvZGlhemVwaW5lIFBvaXNvbmluZykubWQ
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

46세 남성이 의식 변화로 응급실에 내원했다. 아파트 앞 바닥에서 발견되었고 졸리지만 깨우면 반응한다. 맥박 분당 64회, 호흡수 분당 15회, 혈압 120/75 mmHg이다. 알코올 냄새와 불분명한 말투가 있고 양측 심부건반사가 감소하며 보행은 운동실조성이다. 동공은 정상이다. 혈중 알코올 농도는 0.04%이고 심전도는 정상이다. 다음 중 증상의 가장 가능성 높은 원인은?

## 선택지

A. 저혈당
B. 에탄올 중독
C. 대마 중독
D. 벤조디아제핀 중독

## 해설

졸음·구음장애·운동실조·반사저하와 비교적 보존된 활력·동공 반응은 진정수면제 중독에 합당하다. 혈중 ethanol 0.04%에 비해 뚜렷한 의식·운동 억제가 있어 선지 중 benzodiazepine 중독(D)을 우선 고려한다. Ethanol도 운동실조와 반사 억제를 일으킬 수 있으므로 증상 자체만으로 배제하지 않으며 동시 섭취 가능성도 있다. 실제 평가에서는 혈당·외상·다른 원인도 확인해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. BZD 중독 D의 출제 의도는 유지하되 ethanol이 운동실조·반사저하를 유발하지 않는다는 잘못된 배제와 측정되지 않은 BZD 농도 주장을 제거한다.
- 공식/학회 근거: https://www.niaaa.nih.gov/publications/brochures-and-fact-sheets/understanding-dangers-of-alcohol-overdose

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000020
