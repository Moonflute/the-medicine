---
type: qbank
schema_version: 1
id: medqa-us-train-000990
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a2dfdeac340eb3fd6ea3da1e3d16ac6814f33521b6c3d6b679f03e8ed5941a45
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "ectopic pregnancy"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geyZuCDsnoTsi6AgKEVjdG9waWMgUHJlZ25hbmN5KS5tZA
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
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

23세 여성이 1시간 전 갑자기 시작된 우측 하복부 통증으로 응급실에 내원하였다. 환자는 통증으로 몸부림치고 있으며 내원 후 두 차례 구토를 하였다. 만성 질환은 없으나 과거에 클라미디아(chlamydia) 감염이 두세 번 있었다고 한다. 복부는 단단하고 방어근 긴장(guarding)이 관찰된다. 골반 검사상 질 내 혈액 고임과 우측 부속기 압통이 확인된다. 마지막 월경은 7주 전이었다. 임신 검사 결과는 양성이다. 다음 중 적절한 다음 진단 단계는 무엇인가?

## 선택지

A. 복부 초음파(Transabdominal ultrasound).
B. 자궁경관 확장 및 소파술(Dilation and curettage)
C. 질 초음파(Transvaginal ultrasound)
D. 메토트렉세이트(Methotrexate) 투여 및 엄격한 추적 관찰 지침과 함께 퇴원.

## 해설

무월경·양성 임신검사, 우측 하복부/부속기 통증, 질출혈과 과거 클라미디아 감염은 자궁외임신을 의심하게 한다. 진단 선택지 중 질식 초음파(C)가 적절하다. 복부 방어는 파열 가능성을 우려하게 하므로 혈역학 평가·소생 및 산부인과 응급 평가를 병행하며, 불안정하면 영상 때문에 수술을 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 우측 통증을 양측으로 바꾼 오류 수정 및 파열 응급성 보강.
- https://www.rcog.org.uk/for-the-public/browse-our-patient-information/ectopic-pregnancy/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000990
