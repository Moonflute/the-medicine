---
type: qbank
schema_version: 1
id: medqa-us-train-000226
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1c65e39004b91173dd209ffcbd699ef9e7624d898d9ae3ce8f0745a8e7adacc0
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "ectopic pregnancy"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geyZuCDsnoTsi6AgKEVjdG9waWMgUHJlZ25hbmN5KS5tZA
difficulty: complex
answer: C
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

구리 자궁내장치를 사용 중인 27세 여성의 질식 초음파에서 자궁내 배아와 심박이 확인됐다. 임신을 유지하고 싶고 질경검사에서 장치 실이 자궁경부 밖으로 보인다. 관리는?

## 선택지

A. 임신 중 장치를 항상 그대로 둔다
B. 자궁강을 소파해 장치를 제거한다
C. 위험과 이득을 설명하고 보이는 실을 이용해 장치를 제거한다
D. 장치가 있으면 정상 자궁내 임신이라도 메토트렉세이트를 투여한다

## 해설

장치를 두면 유산, 감염, 조산 위험이 높다. 임신을 유지할 때 실이 보이거나 경부에서 안전하게 잡히면 의료진이 제거하며, 실이 보이지 않으면 맹목적으로 자궁강을 탐색하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 외부임신용어수정,소변양성인데혈중으로잘못서술한검체혼동제거. B는자궁외임신의심단서이지단독확진아님.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000226
- https://www.cdc.gov/contraception/hcp/usspr/intrauterine-contraception.html
