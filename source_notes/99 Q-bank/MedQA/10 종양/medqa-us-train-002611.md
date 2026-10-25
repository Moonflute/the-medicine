---
type: qbank
schema_version: 1
id: medqa-us-train-002611
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1e9fd6f1b9af16b127784343652455734292206222336c27de9de7b4a56d769e
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "fibroadenoma"
  - "benign breast mass"
  - "mobile rubbery breast lesion"
related_disease_slugs:
  - MTMg67aA7J246rO8L-yErOycoOyEoOyihSAoRmlicm9hZGVub21hKS5tZA
question_type: diagnosis
difficulty: standard
answer: C
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

29세 여성이 2주 전 발견한 왼쪽 유방 종괴로 내원했다. 3개월 전 왼쪽 가슴을 옷장 문에 부딪힌 뒤 하루 동안 아팠다. 발견 이후 종괴 크기는 변하지 않았고 통증은 없다. 월경은 규칙적인 28일 주기로 5일간 중등도 양이며 마지막 월경은3주 전이었다. 유방은 치밀하고 왼쪽 상외측 종괴는 2.5 cm 크기로 경계가 뚜렷하며 고무처럼 단단하고 잘 움직이며 압통이 없다. 액와 림프절병증은 없다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 엽상종양
B. 유방 섬유낭성 변화
C. 섬유선종
D. 지방 괴사

## 해설


경계가 뚜렷하고 고무처럼 단단하며 움직이는 2.5 cm 크기의 종괴는 섬유선종의 전형적인 임상양상이다. 섬유선종은 젊은 여성에게 흔히 나타나는 양성 유방 종양이다. 따라서 가장 가능성 높은 진단은 섬유선종이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002611 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 섬유선종 진단은 유지하며 지방괴사 감별에 중요한 원문 외상력과 종괴 위치·안정성을 복원했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002611
