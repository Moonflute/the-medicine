---
type: qbank
schema_version: 1
id: medqa-us-train-009989
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0b379130d120ccd283b564c16f72f703794f7bc96636bac79600bd27f2ca7530
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 위치 미확인"
  - "임신 초기"
  - "혈청 hCG 추적"
  - "Pregnancy of unknown location"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geyZuCDsnoTsi6AgKEVjdG9waWMgUHJlZ25hbmN5KS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신반응이 양성인 32세 여성이 소량의 질출혈로 왔다. 혈압·맥박은 정상이고 심한 통증은 없다. 혈청 β-hCG는 1,000 mIU/mL다. 질식 초음파에서 자궁 안팎 모두 임신낭이나 복강 내 출혈이 보이지 않는다. 다음 계획은?

## 선택지

A. 자궁외임신으로 단정하고 메토트렉세이트를 투여한다
B. 정상 자궁내임신으로 확정하고 추가 추적을 하지 않는다
C. 약 48시간 뒤 β-hCG를 재검하고 결과에 따라 질식 초음파를 추적한다
D. 자궁 내 임신낭이 없으므로 바로 난관절제술을 한다

## 해설

임신 위치를 아직 확인하지 못했다. 안정적으로 추적할 수 있으면 약 48시간 간격으로 β-hCG를 비교하고 경과에 맞춰 질식 초음파를 반복한다. 통증·출혈이 심해지거나 어지러움이 생기면 재검 시간을 기다리지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 체온 화씨 오역 및 PUL을 정상 초기 임신으로 확정한 해설 수정.
- https://www.nice.org.uk/guidance/NG126/chapter/diagnosis-of-viable-intrauterine-pregnancy-and-of-tubal-ectopic-pregnancy

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009989
- https://www.nice.org.uk/guidance/ng126/chapter/diagnosis-of-viable-intrauterine-pregnancy-and-of-tubal-ectopic-pregnancy
