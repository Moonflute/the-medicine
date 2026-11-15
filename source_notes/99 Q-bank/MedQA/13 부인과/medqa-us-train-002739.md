---
type: qbank
schema_version: 1
id: medqa-us-train-002739
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0c4f1757d1d676e58c7ac31eb133d2a6d98f95f612dc30c5bfd4038e4893d03b
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "early pregnancy loss"
  - "missed abortion"
  - "absent embryonic cardiac activity"
  - "misoprostol"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-qzhOulmCDsnKDsgrAgKE1pc3NlZCBBYm9ydGlvbikubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvTWlzb3Byb3N0b2wubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 7주로 추정되는 산모의 첫 질식 초음파에 자궁내 배아가 보인다. 머리엉덩길이(CRL)는 6 mm이고 심박은 확인되지 않았다. 통증·출혈이 없고 활력징후는 안정적이다. 다음 조치는?

## 선택지

A. 최소 7일 뒤 질식 초음파를 반복한다
B. 이 한 번의 결과로 계류유산을 확진하고 약물 치료
C. 혈청 hCG를 한 번 측정해 정상 임신 여부를 확정
D. 임신력이 확인됐으므로 곧바로 자궁강 흡인술

## 해설

CRL 7 mm 미만에서 심박이 없다는 단회 소견은 임신 소실을 확정하기 부족하다. 적절한 간격을 두고 초음파를 반복해 성급한 치료를 피한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: CRL6mm무심박만으로소실확진하지말고3주전초음파와시간기준확인.
- https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/11/early-pregnancy-loss
- https://acsearch.acr.org/docs/69460/Narrative/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002739
- https://www.nice.org.uk/guidance/ng126/chapter/recommendations
