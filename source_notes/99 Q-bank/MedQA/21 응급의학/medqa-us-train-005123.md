---
type: qbank
schema_version: 1
id: medqa-us-train-005123
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7e1fafaeac77a7318abbf05bba742996868a1b175c861a595086f7787f4acc87
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "와파린 복용 중 낙상"
  - "두개내 출혈"
  - "외상 후 두부 CT"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_stpztmIjshLEg64eM7KG47KSRIChIZW1vcnJoYWdpYyBTdHJva2UpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
---

# MedQA US 임상문제

## 문제

와파린을 복용하는 72세 남성이 넘어져 머리를 부딪쳤다. 작은 두피 타박상 외에 외상 소견은 없고 의식과 신경학적 진찰은 정상이지만, 항응고 치료 중이다. 두개내 출혈을 확인할 초기 검사는?

## 선택지

A. 비조영 두부 CT
B. 두개골 단순촬영
C. 경동맥 초음파
D. 요추천자

## 해설


항응고제를 복용하는 환자에서 두부 외상이 있으면 정상 신경학적 진찰만으로 출혈을 배제하기 어렵다. 비조영 CT로 급성 두개내 출혈을 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005123
- https://www.nice.org.uk/guidance/ng232/chapter/Recommendations
