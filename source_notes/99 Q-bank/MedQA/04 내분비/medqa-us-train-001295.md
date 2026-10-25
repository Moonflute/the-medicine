---
type: qbank
schema_version: 1
id: medqa-us-train-001295
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a620f3b0d22c9892a471c082018d627038edb41e03584bff1cc68a747a3b5ffe
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Addison disease"
  - "primary adrenal insufficiency"
  - "autoimmune polyglandular syndrome"
related_disease_slugs:
  - MDQg64K067aE67mEL-ybkOuwnOyEsSDrtoDsi6Ag6riw64ql7KCA7ZWY7KadKFByaW1hcnkgQWRyZW5hbCBJbnN1ZmZpY2llbmN5KS5tZA
  - MDQg64K067aE67mEL-u2gOyLoCDquLDriqXsoIDtlZjspp0gKEFkcmVuYWwgSW5zdWZmaWNpZW5jeSkubWQ
question_type: mechanism
difficulty: complex
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

48세 여성이 3개월 동안 지속된 피로, 어지러움 및 체중 감소로 일차진료의에게 내원했다. 갑상샘기능저하증 병력이 있어 티록신 대체요법을 복용 중이다. 혈압은 누운 자세에서 90/60 mm Hg, 앉은 자세에서 65/40 mm Hg이고 체온은 36.8°C (98.2°F), 맥박은 75회/분이다. 신체검사에서 갑상샘이 약간 커져 있고 고무 같은 질감이다. 피부에 전반적인 과다색소침착이 있으며 구강 점막과 손바닥 주름에서 더 뚜렷하다. 다음 중 이 환자 상태의 병인을 가장 잘 나타내는 것은 무엇인가?

## 선택지

A. 부신의 자가면역성 파괴
B. 뇌하수체에서 부신겉질자극호르몬(ACTH) 분비 감소
C. 시상하부에서 코르티코트로핀 방출호르몬 분비 감소
D. 철 흡수 및 체내 침착 증가

## 해설

피로·체중감소와 심한 기립성 저혈압, 구강점막·손바닥 주름의 색소침착은 원발성 부신부전을 시사한다. 자가면역 갑상샘질환이 의심되는 병력도 있어 보기 중 A, 부신의 자가면역성 파괴가 합당하다. 이차성/삼차성 부신부전에서는 보통 ACTH 증가에 의한 색소침착이 나타나지 않는다. 혈중 칼륨은 제시되지 않았으므로 고칼륨혈증이 확인되었다고 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 본문에 없는 고K를 실제 소견처럼 추가한 해설을 삭제하고 색소침착·기립저혈압·자가면역 갑상샘 질환으로 병인 연결.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001295
