---
type: qbank
schema_version: 1
id: medqa-us-train-000284
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cc262a8a0950d3702a7dbbff118eda5d5423063b3043b7c6fbceeeb61a76b6d5
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "infectious mononucleosis"
  - "scarlet fever"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KCE7Je87ISxIOuLqO2Vteq1rOymnSAoSW5mZWN0aW91cyBNb25vbnVjbGVvc2lzKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISx7ZmN7Je0IChTY2FybGV0IEZldmVyKS5tZA
question_type: management
difficulty: complex
answer: C
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2VwaGFsZXhpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
---

# MedQA US 임상문제

## 문제

7세 남아가 3일간 지속된 전신 발진으로 내원하였다. 지난 5일 동안 고열과 인후통도 있었다. 16세 누나는 2주 전 감염단핵구증(infectious mononucleosis)으로 치료받았다. 환아는 1주일 전 여름 캠프에서 돌아왔다. 예방접종은 최신 상태이다. 3년 전 디클록사실린(dicloxacillin)에 대한 알레르기 반응으로 삽관이 필요했던 적이 있다. 환아는 아파 보인다. 체온은 38.2°C이다. 진찰상 입 주위 창백(circumferential oral pallor)이 관찰된다. 경부 림프절병증이 있다. 편도 발적과 삼출물이 있다. 몸통과 사지에 거칠고 융합되며 압박 시 창백해지는 점상 홍반성 발진이 퍼져 있다. 혈색소 농도는 13.3 g/dL, 백혈구 수는 12,000/mm3, 적혈구 침강 속도(ESR)는 43 mm/h이다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 아시클로버(Acyclovir) 치료
B. 아목시실린(Amoxicillin) 치료
C. 아지스로마이신(Azithromycin) 치료
D. 세팔렉신(Cephalexin) 치료

## 해설


인후편도염, 입 주위 창백과 거친 모래종이 같은 미만성 발진은 A군 연쇄구균 성홍열을 시사한다. 과거 dicloxacillin 반응으로 삽관까지 필요했으므로 즉시형 중증 penicillin 알레르기를 고려한다. 감염이 확인되면 선택지 중 azithromycin(C)이 적절한 대안이며 amoxicillin과 cephalexin은 피한다. 현행 CDC는 RADT·NAAT·배양 등으로 GAS를 확인해 치료하도록 권고하며 macrolide 내성은 지역별로 확인한다. EBV 노출이나 갑상선염이 이 전형적 발진을 설명하는 핵심은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000284 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 갑상선염·결절성 발진 등 잘못 연결된 설명을 성홍열과 중증 즉시형 penicillin 알레르기 맥락으로 교체했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/scarlet-fever.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000284
