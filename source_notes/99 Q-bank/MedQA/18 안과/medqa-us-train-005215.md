---
type: qbank
schema_version: 1
id: medqa-us-train-005215
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ced03c8b130fea39b7fc811cd94c2c2f9f63f57f7119fdebdf76f4b3fcde06ad
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "눈물주머니염"
  - "비루관 감염"
  - "눈물주머니 농양"
question_type: diagnosis
related_disease_slugs:
  - MTgg7JWI6rO8L-qyieuLpOuemOuBvCAoZXh0ZXJuYWwgaG9yZGVvbHVtKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

17세 남자가 3일 동안 점점 심해지는 눈 통증으로 내원했다. 최근 헬멧 없이 미식축구를 하다가 안와상벽 골절을 입었고 오른쪽 눈 아래 눈물관 근처에 통증과 부종이 있다. 해당 부위를 누르면 고름이 배출된다. 가장 가능성 높은 진단은?

## 선택지

A. 눈물주머니염
B. 다래끼
C. 안와봉와직염
D. 안와주위 봉와직염

## 해설

눈 안쪽 아래의 눈물주머니 부위 통증·부종과 압박 시 농 배출은 A, 눈물주머니염(누낭염)에 합당하다. 흔히 비루관 배출 장애와 눈물 정체에 세균 감염이 더해지는 기전으로 설명한다. 이 문항의 골절력만으로 누공이 실제 존재하거나 골절 틈을 통해 세균이 들어갔다고 확정할 수 없다. 안구운동·신경 기능이 정상이고 국소 눈물주머니 소견이 핵심이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 외상 후 누공으로 세균이 들어간다는 근거 없는 기전을 비루관 폐쇄·눈물 정체에 따른 누낭 감염으로 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005215
