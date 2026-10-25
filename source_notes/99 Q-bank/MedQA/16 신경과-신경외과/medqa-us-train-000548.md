---
type: qbank
schema_version: 1
id: medqa-us-train-000548
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:650e38e9434251a90e59fab76482c0333b30664da1938921db9b3035c4b624d0
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "multiple sclerosis"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_ri6TrsJzshLEg6rK97ZmU7KadIChNdWx0aXBsZSBzY2xlcm9zaXMpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 여성이 심한 어지럼증을 주소로 내원하였다. 환자는 또한 여러 차례의 구토와 보행 곤란을 호소한다. 어지럼증은 지속적이며, 자세와 관련이 없고, 이명이나 청력 장애를 동반하지 않는다. 환자는 수년 전 자연적으로 호전된 우측 눈의 급성 시력 상실 과거력이 있다. 또한 3년 전 빠르게 호전된 좌측 신체 저림을 경험한 적이 있다. 최근에야 건강보험에 가입하여 과거 증상이 나타났을 당시 그 원인을 완전히 평가하지 못했다. 환자는 열이 없으며 활력 징후는 정상 범위 내에 있다. 신체 검진상 의식은 명료하고 지남력이 있다. 안과 검진에서 수평 사시가 관찰된다. 안면 비대칭은 없으며 혀를 내밀었을 때 정중앙에 위치한다. 구역 반사와 기침 반사는 정상이다. 근력은 양측 모두 5/5이다. 환자는 보행 시 균형을 유지하는 데 어려움을 겪으며 손으로 반복적인 교대 운동을 수행할 수 없다. 이 환자의 상태에 대한 가장 적절한 치료법은 무엇인가?

## 선택지

A. Acyclovir
B. 고용량 포도당
C. 고용량 코르티코스테로이드
D. 혈장 교환술

## 해설

과거 시신경염 의심 삽화와 감각 증상에 새로운 소뇌·뇌간 증상이 더해져 다발성경화증의 재발을 시사한다. 기능 장애가 큰 급성 재발에는 감염 등 다른 원인을 배제한 뒤 고용량 코르티코스테로이드(C)를 사용한다. 혈장교환은 스테로이드에 충분히 반응하지 않는 중증 탈수초성 재발에서 고려할 수 있으므로 단순히 무관한 치료는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 일상 기능을 크게 떨어뜨린 MS 재발에는 C가 맞으며 혈장교환을 전혀 다른 적응증으로 배제한 오류를 교정한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng220/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000548
