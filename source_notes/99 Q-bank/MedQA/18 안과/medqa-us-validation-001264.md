---
type: qbank
schema_version: 1
id: medqa-us-validation-001264
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:81d3968b0c73f43715e946300f0cb7fe15ffdf6c36ceb19167ca8130fba54c3d
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "특발성 두개내 고혈압"
  - "시신경유두 부종"
  - "이소트레티노인"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tirnrsJzshLEg65GQ6rCc64K0IOqzoO2YiOyVlSAoSWRpb3BhdGhpYyBJbnRyYWNyYW5pYWwgSHlwZXJ0ZW5zaW9uKS5tZA
difficulty: complex
answer: B
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

30세 여성이 3주간의 전반적 두통과 구역으로 진료를 받으러 왔다. 양쪽 귀에서 머리를 돌리면 감소하는 윙윙거리는 소리가 들리고, 시야 흐림과 복시, 구토가 있다. 비만, 다낭성난소질환과 결절성 낭성 여드름이 있으며 이소트레티노인을 복용 중이다. 추가 평가에서 예상되는 소견은?

## 선택지

A. 손바닥 주름의 과색소침착
B. 양측 시신경유두 부종
C. 안압 상승
D. 왼쪽 상·하지 근력약화

## 해설

두통·구역·박동성 이명·일과성 시야 흐림과 복시는 두개내압 상승을 의심하게 하며 B, 양측 시신경유두부종이 예상된다. 비만은 관련 위험요인이고 isotretinoin은 두개내고혈압과 연관된 약물이므로 약물 관련 이차성 원인을 평가해야 한다. 원인이 되는 약물 노출을 확인하지 않은 채 단순히 특발성으로 확정해서는 안 된다. 안압 상승과 두개내압 상승은 서로 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 약물 관련 두개내압 상승을 무조건 특발성으로 명명하지 않도록 교정; 원정답 B 유지.
- 공식/학회 근거: https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/021951s013lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001264
