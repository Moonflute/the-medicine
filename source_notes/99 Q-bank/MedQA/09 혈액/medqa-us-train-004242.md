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
question_type: 임상증례 객관식
difficulty: standard
answer: D
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

16세 남자가 여러 외상을 입은 교통사고 후 어머니와 함께 응급실에 왔다. 어린 시절 재발성 부비동염과 중이염 외에는 병력이 없다. 사고로 많은 출혈이 있어 도착 즉시 O형 음성 혈액 2단위를 수혈받았다. 얼마 지나지 않아 가려움과 호흡곤란이 생기고 협착음이 발생했다. 이 반응을 예방할 수 있었던 방법은 무엇인가?

## 선택지

A. 수혈 전 아세트아미노펜 투여
B. 수혈 전 디펜히드라민 투여
C. 환자 혈액형에 맞는 혈액 투여
D. 세척 혈액제제 투여

## 해설


수혈 직후 소양감과 호흡곤란·stridor는 중증 알레르기/아나필락시스 반응을 시사한다. 반복 부비동염은 IgA 결핍의 단서일 수 있으나 실제 IgA 및 anti-IgA 검사가 필요하고 모든 수혈 아나필락시스가 이 원인은 아니다. 선택지 D의 세척 적혈구는 혈장 단백·IgA 노출을 줄여 해당 환자의 재발 예방에 사용할 수 있다. ABO 형별 일치나 antihistamine 전처치가 이런 중증 반응을 확실히 예방하는 것은 아니다. 이미 발생한 반응에는 수혈 중단과 신속한 아나필락시스 처치가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004242 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 기도 증상 있는 중증 수혈 알레르기의 예방 D 유지; IgA 결핍을 확정된 사실로 쓰지 않고 기전·응급처치 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://professionaleducation.blood.ca/en/transfusion/publications/anaphylactic-transfusion-reactions-and-iga-deficiency

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004242
