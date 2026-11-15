---
type: qbank
schema_version: 1
id: medqa-us-train-000720
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f0a15348f02aaaad8e249d538bdbe35b8fb8c9e6bcf76ac04990108737faf422
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "central cord syndrome"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_spJHsi6wg7LKZ7IiYIOymne2bhOq1sCAoQ2VudHJhbCBjb3JkIHN5bmRyb21lKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
---

# MedQA US 임상문제

## 문제

74세 환자가 넘어지며 목이 뒤로 젖혀진 뒤 손과 팔이 다리보다 훨씬 약해졌다. 경추를 고정했고 CT에서 뚜렷한 골절은 없다. 척수 손상이나 압박을 확인할 다음 영상은?

## 선택지

A. 경추 단순 X선을 반복한다
B. 경추 MRI를 시행한다
C. 목 CT 혈관조영술만 시행한다
D. 조영증강 뇌 MRI를 시행한다

## 해설


경추 과신전 뒤 상지 우세 위약은 중심척수증후군의 단서다. CT에서 골절이 보이지 않아도 신경학적 결손이 있으면 MRI로 척수, 디스크와 인대를 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000720
- https://acsearch.acr.org/docs/69359/Narrative/
