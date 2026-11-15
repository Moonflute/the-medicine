---
type: qbank
schema_version: 1
id: medqa-us-train-000807
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0708db5766afe3a94db4bd5def0d47c3976626b753b9c093fa5e572a975f48fc
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "polycythemia vera"
  - "essential thrombocythemia"
related_disease_slugs:
  - MDkg7ZiI7JWhL-ynhOyEsSDsoIHtmIjqtazspp3qsIDspp0gKFBWKSAoUG9seWN5dGhlbWlhIFZlcmEgKFBWKSkubWQ
  - MDkg7ZiI7JWhL-uzuO2DnOyEsSDtmIjshoztjJDspp3qsIDspp0gKEVUKSAoRXNzZW50aWFsIFRocm9tYm9jeXRoZW1pYSAoRVQpKS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9BbGVuZHJvbmF0ZS5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0ZlYnV4b3N0YXQubWQ
---

# MedQA US 임상문제

## 문제

진성 적혈구증가증이 확진된 64세 환자에게 이전 심부정맥혈전증이 있었다. 사혈과 항혈전 치료를 조정 중이다. 금기가 없다면 혈전 고위험을 고려해 추가할 혈구감소 약제는?

## 선택지

A. 하이드록시우레아
B. 이마티닙
C. 트리메토프림/설파메톡사졸
D. 전트랜스 레티노산

## 해설


나이가 많거나 과거 혈전이 있으면 진성 적혈구증가증의 고위험 환자다. 사혈만으로 관리하지 않고 하이드록시우레아 또는 적절한 대체 혈구감소 치료를 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000807 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 진성적혈구증가증을 본태성혈소판증으로 오진한 해설을 교체하고 고위험 PV 치료 범위를 보완했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/myeloproliferative/hp/myeloproliferative-neoplasms-treatment

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000807
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7820646/
