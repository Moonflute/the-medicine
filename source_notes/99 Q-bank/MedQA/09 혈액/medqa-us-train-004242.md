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
question_type: 임상증례 객관식
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
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


수혈 후 가려움과 호흡곤란은 알레르기 반응이며, 세척 혈액제제(혈장 감소) 사용으로 IgA 함량을 낮추면 예방할 수 있다. 따라서 세척 혈액제제 투여가 예방 방법이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004242
