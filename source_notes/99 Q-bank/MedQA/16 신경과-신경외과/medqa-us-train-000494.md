---
type: qbank
schema_version: 1
id: medqa-us-train-000494
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4137b3f2671674287aac6ae0ca96f7cb5a2b8fec91bfd62918b1182af522ff44
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "amyotrophic lateral sclerosis"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qt7zsnITstpXshLEg7Lih7IKtIOqyve2ZlOymnSAoQW15b3Ryb3BoaWMgbGF0ZXJhbCBzY2xlcm9zaXMpLm1k
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

39세 환자에게 진행성 사지 위약과 연하곤란이 있다. 진찰에서 근위축·근섬유다발수축과 반사항진이 함께 보인다. 근위축성 측삭경화증을 평가할 때 여러 부위의 하위운동신경원 이상을 뒷받침할 검사는?

## 선택지

A. 침 근전도검사
B. 뇌파검사
C. 근육 초음파 단독
D. 혈청 크레아틴키나아제 단독

## 해설

침 근전도에서는 여러 분절의 활동성 탈신경과 만성 재신경지배 소견을 평가한다. 진찰 및 다른 원인 배제와 종합하며 근육 생검을 일률적으로 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. ALS의 탈신경 및 재신경지배 C는 맞으나 탈신경을 재신경화·신경절거로 잘못 적은 해설을 교정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000494
- https://pubmed.ncbi.nlm.nih.gov/34992096/
