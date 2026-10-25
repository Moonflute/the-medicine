---
type: qbank
schema_version: 1
id: medqa-us-validation-000980
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:9441f232bf8ee26f24b31bde7fcca0bdab3853d182671afd21a530bd878269bd
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "파상풍"
  - "불완전 예방접종"
  - "파상풍 면역글로불린"
question_type: prevention
related_disease_slugs:
  - MDgg6rCQ7Je8L-2MjOyDge2SjSAoVGV0YW51cykubWQ
difficulty: standard
answer: C
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

32세 여성이 애팔래치아산맥에서 하이킹 중 8시간 전에 입은 깊은 열상으로 진료를 받으러 왔다. 응급처치 키트의 생리식염수로 상처의 흙을 씻어냈다. 20세에 미국으로 이주할 당시 예방접종을 받지 않았고, 이후 Tdap 1회와 3년 전 Td 추가접종 1회를 받았다. 열이 없고 전신 상태가 좋으며 상처는 깨끗하고 감염 소견이 없다. 가장 적절한 다음 처치는?

## 선택지

A. 파상풍 면역글로불린만 투여
B. 파상풍 항체가를 측정하고 음성이면 48시간 이내 파상풍 톡소이드와 면역글로불린 투여
C. 파상풍 톡소이드와 파상풍 면역글로불린 투여
D. 오늘 파상풍 톡소이드와 면역글로불린을 투여하고 노출 후 3일, 7일, 14일에 톡소이드를 다시 투여

## 해설

이 환자는 Tdap 1회와 Td 1회만 기록되어 파상풍 기초접종이 완료되지 않았다. 처음 흙에 오염된 깊은 상처는 세척 뒤 겉보기에 깨끗해도 위험 평가에서 오염 상처로 보므로 파상풍 함유 백신과 TIG를 함께 투여하는 C가 적절하다. TIG는 파상풍균 자체가 아니라 아직 신경에 결합하지 않은 독소를 중화하여 수동 면역을 제공한다. 백신은 능동 면역을 형성하므로 불완전 접종을 마무리해야 하며, 오랜 간격 때문에 전체 접종을 처음부터 다시 시작하지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 불완전 기초접종과 흙에 오염된 깊은 상처에서 백신·TIG C를 유지한다. TIG가 균 자체를 중화한다는 오류를 독소 중화로 교정한다.
- 공식/학회 근거: https://www.cdc.gov/tetanus/hcp/clinical-guidance/
- 공식/학회 근거: https://www.cdc.gov/tetanus/hcp/clinical-care/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000980
