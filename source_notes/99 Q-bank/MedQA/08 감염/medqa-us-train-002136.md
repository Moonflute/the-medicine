---
type: qbank
schema_version: 1
id: medqa-us-train-002136
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7731ec285d5335caca098b271b4b78737a2feba2f4a6bdfa4c35ee102d8aed71
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "infectious mononucleosis"
  - "Epstein-Barr virus"
  - "splenomegaly"
  - "contact sports"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KCE7Je87ISxIOuLqO2Vteq1rOymnSAoSW5mZWN0aW91cyBNb25vbnVjbGVvc2lzKS5tZA
  - MDgg6rCQ7Je8L-yXoeyKpO2DgOyduC3rsJQg67CU7J2065-s7IqkIOqwkOyXvCAoRUJWKSAoRXBzdGVpbi1CYXJyIFZpcnVzIEluZmVjdGlvbiAoRUJWKSkubWQ
question_type: prevention
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
---

# MedQA US 임상문제

## 문제

16세 남자가 4일간의 인후통과 미열로 내원했다. 고등학교 대표 축구팀 선수지만 매우 피곤하고 쉽게 지쳐 최근 며칠간 연습에 참여하지 못했다. 중대한 질환 병력이나 복용 약물은 없다. 어머니는 제2형 당뇨병이 있다. 쇠약하고 기면 상태로 보인다. 체온 38.7°C, 맥박 84회/분, 혈압 116/78 mmHg이다. 편도가 커지고 홍반과 삼출이 있으며 뒤쪽 경부 림프절병증이 있다. 복부검사는 정상이다. 혈색소 14.5 g/dL, 백혈구 11,200/mm³(림프구 48%)이고 이종친화항체검사가 양성이다. 지지요법과 함께 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 축구 경기 참여를 면제하는 진단서를 작성한다
B. 경구 아목시실린을 투여한다
C. 경구 코르티코스테로이드를 투여한다
D. 정맥 아시클로버를 투여한다

## 해설


전염성 단핵구증에 부합하는 임상과 이종친화항체 양성이다. 비장이 복부진찰에서 만져지지 않아도 비장 파열 위험을 배제할 수 없으므로 회복과 의학적 운동 복귀 평가 전 접촉 스포츠인 축구를 피하도록 하는 A가 적절하다. 합병증 없는 경우 지지요법이 기본이며 amoxicillin·정주 acyclovir·일률적인 corticosteroid는 필요하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002136 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: heterophile antibody를 이형성 항체로 번역한 오류를 이종친화항체로 교정; 접촉 스포츠 중단 A 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/epstein-barr/about/mononucleosis.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002136
