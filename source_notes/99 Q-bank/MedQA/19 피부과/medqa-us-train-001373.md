---
type: qbank
schema_version: 1
id: medqa-us-train-001373
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6281d15f5829f8c4a75f5a84a46572da62eb8a1f8c528f72edb0b7dce566dd75
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "pigmented lesion"
  - "malignant diagnosis"
question_type: diagnosis
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shoztmZTquLAg7JWULm1k
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

53세 농부가 팔에 생긴 색소성 병변 평가를 위해 병원에 왔다. 그는 작년에 처음 병변을 알아차렸지만 크기가 서서히 커지고 있다고 생각한다. 그 외에는 특별한 불만은 없으며 전반적으로 건강하다. 신체 검진 시 다음 중 어떤 소견이 악성 진단을 시사하겠는가?

## 선택지

A. 병변 전체에 걸쳐 다른 색소 침착
B. 매끄러운 경계를 가진 과색소성 병변
C. 타원형 대칭 병변
D. 촉진 시 압통

## 해설

색소성 병변 안의 불균일한 색조(A)는 흑색종을 의심하는 ABCDE 소견 중 색조 다양성에 해당한다. 비대칭, 불규칙 경계, 크기·형태·색 변화도 함께 평가한다. 대칭적 모양과 매끄러운 경계는 상대적으로 양성에 더 합당하지만 절대적 배제 소견은 아니다. 압통만으로 양성 또는 악성을 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 색조 다양성 A는 맞고 압통 D까지 양성 소견으로 단정한 해설을 교정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001373
