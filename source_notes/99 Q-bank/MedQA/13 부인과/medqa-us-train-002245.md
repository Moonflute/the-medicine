---
type: qbank
schema_version: 1
id: medqa-us-train-002245
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:68bbc2206060e7f32acf607b68eb5afc5349957e5f00405c4020cbd769dda7d2
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "ruptured ectopic pregnancy"
  - "hemoperitoneum"
  - "emergency laparotomy"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geyZuCDsnoTsi6AgKEVjdG9waWMgUHJlZ25hbmN5KS5tZA
difficulty: complex
answer: D
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
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 여성이 심한 오른쪽 아래배 통증으로 응급실에 왔다. 3년 전 난관결찰술을 받았고 15년 전 클라미디아 치료를 받은 병력이 있다. 평소 월경은 매우 규칙적이지만 마지막 월경은 10주 전이었다. 열은 없고 맥박 117회/분, 혈압 88/56 mmHg이며 반발통을 포함한 복막 자극 징후가 있다. 소변 베타-hCG는 양성이고 혈색소는 9.9 g/dL이다. 적절한 치료는?

## 선택지

A. 베타-hCG를 연속 측정한다
B. 아지스로마이신
C. 메토트렉세이트
D. 개복술

## 해설

양성 임신검사·무월경·급성 통증과 저혈압·빈맥·복막 자극은 파열 자궁외임신에 의한 복강내 출혈(혈복강)을 강하게 시사한다. 소생·혈액 준비와 응급수술(D)이 필요하다. 혈흉은 흉강 내 출혈로 다른 상태이며 난관결찰력도 자궁외임신을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: hemoperitoneum을혈흉으로오역한오류수정.
- https://www.rcog.org.uk/for-the-public/browse-our-patient-information/ectopic-pregnancy/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002245
