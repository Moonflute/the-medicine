---
type: qbank
schema_version: 1
id: medqa-us-train-004242
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6f64ff05a81b44615bb6f16bddb1226da10c26c68312bf19294c104d32f6a63a
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "수혈 알레르기 반응"
  - "선천성 IgA 결핍"
  - "세척 혈액제제"
  - "IgA deficiency"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shYDrpqzslYXrs5EgKENlbGlhYyBEaXNlYXNlKS5tZA
question_type: prevention
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

이전 두 차례 적혈구 수혈에서 아나필락시스를 겪은 환자가 계획 수술을 앞뒀다. 혈액은행 평가에서 중증 IgA 결핍과 항-IgA 항체가 확인됐다. 다음 적혈구 수혈 전에 혈액은행과 준비할 제제는?

## 선택지

A. 혈장을 충분히 제거하도록 추가 세척한 적혈구
B. ABO가 일치하는 일반 적혈구만
C. 방사선 조사만 한 적혈구
D. 백혈구만 제거한 적혈구

## 해설


항-IgA 관련 중증 반응이 확인된 환자에게는 혈장 IgA를 최소화한 적혈구를 사용한다. 추가 세척 제제 또는 적합한 공혈자의 제제를 혈액은행과 미리 준비하며 모든 IgA 결핍에 일률적으로 적용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004242 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 기도 증상 있는 중증 수혈 알레르기의 예방 D 유지; IgA 결핍을 확정된 사실로 쓰지 않고 기전·응급처치 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://professionaleducation.blood.ca/en/transfusion/publications/anaphylactic-transfusion-reactions-and-iga-deficiency

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004242
- https://www.transfusion.or.kr/KOR/images/file/2022_5.pdf
