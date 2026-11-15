---
type: qbank
schema_version: 1
id: medqa-us-test-000303
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:6aa1125789db4c7baf769610fb5ecc7c0d9a988c40516dd61aba09d2575c2ce9
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "알포트증후군"
  - "유전성 신염"
  - "감각신경성 난청"
related_disease_slugs:
  - MDUg7Iug7J6lL-yVjO2PrO2KuCDspp3tm4TqtbAgKEFscG9ydCBTeW5kcm9tZSkubWQ
question_type: investigation
difficulty: complex
answer: A
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

14세 남아가 반복되는 사구체성 혈뇨와 양측 고주파 감각신경성 난청으로 내원했다. 안과에서 전방 원추수정체가 확인됐고 아버지는 젊은 나이에 신장이식을 받았다. 의심 질환을 확인하기 위해 시행할 검사는?

## 선택지

A. COL4A3·COL4A4·COL4A5 유전자 검사
B. PKD1·PKD2 유전자 검사
C. 혈청 항사구체기저막 항체
D. 소변 배양

## 해설

사구체성 혈뇨, 감각신경성 난청, 전방 원추수정체는 알포트 증후군의 단서다. 임상 양상과 함께 4형 콜라겐 관련 유전자를 평가한다. 가족력만으로 유전 방식을 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 모든 Alport를 X연관 COL4A5로 단정한 설명을 COL4A3/4/5 및 상염색체형 가능성으로 교정.
- https://academic.oup.com/ndt/article/40/6/1091/7915083

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000303
- https://doi.org/10.1093/ndt/gfae265
