---
type: qbank
schema_version: 1
id: medqa-us-train-008530
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:96d0aeaee82284bd70d4005a3a358b640c51ff9c59eeeda68e51582105cd5f57
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "acute gout"
  - "monosodium urate crystals"
  - "gouty arthritis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-2Gte2SjSAoR291dCkubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

45세 남성에게 오른쪽 셋째 손가락 관절의 급성 통증·열감·부종이 생겼다. 관절액에서 음성 복굴절을 보이는 바늘 모양 결정이 관찰됐다. 가장 가능성 높은 진단은?

## 선택지

A. 피로인산칼슘 결정관절염
B. 화농성 관절염
C. 급성 통풍
D. 반응성 관절염

## 해설


바늘 모양의 음성 복굴절 결정은 요산나트륨 결정으로, 급성 통풍을 시사한다. 다만 결정이 발견돼도 감염이 함께 있을 수 있으므로 의심될 때는 관절액 배양을 포함해 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008530 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 요산결정을 단핵결정이라 부르고 모든 급성 관절염에서 통풍이 최다라는 과장 제거. 실제 결정 형태가 본문에 있어 사진 없이C 선택 가능.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008530
