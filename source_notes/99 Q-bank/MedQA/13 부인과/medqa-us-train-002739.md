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

임신 10주인 26세 초임부가 산전 진료를 받으러 왔다. 3주 전 심한 오심과 구토로 내원한 뒤 초음파로 임신이 확인되었다. 오심과 구토는 약물 없이 호전되었다. 질 출혈이나 분비물은 없다. 활력징후는 정상이다. 골반검사에서 자궁 크기는 임신 10주에 해당했다. 질식 초음파에서 평균 직경 23 mm인 임신낭과 길이 6 mm인 배아가 보이지만 심장 활동은 관찰되지 않는다. 다음 중 가장 적절한 관리 단계는?

## 선택지

A. 미소프로스톨 치료
B. 자궁경부봉합술
C. 혈전성향증 검사
D. 메토트렉세이트 치료

## 해설

단회 CRL 6 mm·무심박은 소실 확진 기준인 CRL ≥7 mm에 미달한다. 다만 3주 전 초음파에 자궁내 임신낭이 확인되었다면 14일 이상 지난 지속 무심박은 시간 기준에 따라 소실로 진단할 수 있어 A가 가능하다. 이전 영상을 확인하고 불확실하면 반복 초음파 후 치료한다. 확진된 초기 소실에서는 미페프리스톤 병용 등도 상담한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: CRL6mm무심박만으로소실확진하지말고3주전초음파와시간기준확인.
- https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/11/early-pregnancy-loss
- https://acsearch.acr.org/docs/69460/Narrative/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002739
