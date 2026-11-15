---
type: qbank
schema_version: 1
id: medqa-us-train-006656
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2bda747cd21c205a785fc0733dc58830f20e38543a5d77e17205599d3ee0369a
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "가드너 증후군"
  - "가족성 선종성 용종증"
  - "대장암 위험"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsIDsobHshLEg7ISg7KKF7ISxIOyaqeyiheymnSAoRkFQKSAoRmFtaWxpYWwgQWRlbm9tYXRvdXMgUG9seXBvc2lzKS5tZA
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rjIDsnqUg7Y-Q7IeEIChMYXJnZSBCb3dlbCBPYnN0cnVjdGlvbikubWQ
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 남성이 혈변으로 내원했다. 아버지는 39세에 대장암으로 사망했다. 대장내시경에서 100개가 넘는 선종이 확인됐고, 진찰에서 하악 골종과 여러 표피낭종이 보인다. 가장 가능성 높은 유전성 질환은?

## 선택지

A. 포이츠–예거스증후군
B. 린치증후군
C. 가족성 선종성 용종증의 가드너 표현형
D. 소아성 용종증후군

## 해설

젊은 나이에 대장 선종이 수백 개 생기고 조기 대장암 가족력이 있으면 APC 관련 가족성 선종성 용종증을 의심한다. 골종과 표피낭종이 함께 나타나는 양상이 가드너 표현형이다. 확인 후 유전상담과 가족 평가로 연결한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Gardner C의 골종·표피낭종·망막색소 병변을 골수계결절로 혼동한 용어 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006656
- https://doi.org/10.1093/bjs/znae070
