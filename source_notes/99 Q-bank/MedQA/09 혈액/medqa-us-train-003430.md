---
type: qbank
schema_version: 1
id: medqa-us-train-003430
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6dad8759440291022f96c52ac0ca69d32185a3c8c8219ab5c796ea691f2f38e2
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "alpha-thalassemia"
  - "hemoglobin H disease"
  - "hemoglobin Barts"
  - "alpha-globin gene deletion"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yngOykke2VtCDruYjtmIggKFRoYWxhc3NlbWlhKS5tZA
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

체중 3080 g의 남아가 27세 여성의 2번째 임신에서 만삭으로 태어났다. 아기는 창백하고 피부와 결막에 황달이 있었다. 간은 오른쪽 늑골연 아래 2~3 cm, 비장은 왼쪽 늑골연 아래 1~2 cm에서 만져졌다. 혈색소는 10.6 g/dL, MCV는 73 μm3였고 헤모글로빈 DNA 검사에서 3개의 대립유전자 결실이 확인되었다. 다음 중 가장 가능성 높은 검사 소견은?

## 선택지

A. HbF 상승
B. 혈청 페리틴 감소
C. 헤모글로빈 Barts 농도 증가
D. HbA2 상승

## 해설


α-globin 유전자 3개 결실은 HbH 질환을 일으킨다. 태아·신생아기에는 남는 γ사슬이 γ4 tetramer인 Hb Bart를 만들어 C처럼 증가할 수 있다. 출생 후 γ에서 β 사슬 생성으로 전환되면 β4 tetramer인 HbH가 특징적으로 나타난다. 모든 시기의 HbH 질환을 단지 Hb Bart 증가로만 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003430 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 3개 α-globin 유전자 결실의 신생아 Hb Bart와 이후 HbH를 연령에 맞게 구분.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003430
