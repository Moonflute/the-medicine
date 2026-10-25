---
type: qbank
schema_version: 1
id: medqa-us-train-000618
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:30c78a9b9f163a03a2f1bb1744467f2a7cd2e4a38bb70808e8c3605ebe800ef7
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "osteosarcoma"
  - "septic arthritis"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rOo7Jyh7KKFIChPc3Rlb3NhcmNvbWEpLm1k
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmYXpvbGluLm1k
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강하던 2세 남아가 2일간의 발열과 왼쪽 하지 통증으로 응급실에 내원했다. 어머니는 아이가 지난 이틀 동안 걷기를 거부했고 식욕이 부진했다고 말한다. 아이는 약 한 달 전 주말 캠핑 여행에서 돌아왔다. 외사촌이 12세에 골육종(osteosarcoma)으로 사망했다. 예방접종은 최신 상태이다. 키는 80백분위수, 체중은 70백분위수이다. 아픈 모습이다. 체온은 39.3°C, 맥박은 115회/분, 호흡은 19회/분, 혈압은 95/50 mm Hg이다. 왼쪽 고관절 검사에서 압통이 있고 관절 가동 범위가 제한되어 있다. 고관절을 조금만 회전시키려 해도 심한 불편감을 호소한다. 나머지 검사에서는 이상 소견이 없다. 검사실 검사 결과는 다음과 같다: 혈색소 12 g/dL, 백혈구 수 19,800/mm3, 혈소판 수 254,000/mm3, 적혈구 침강 속도(ESR) 55 mm/h, 혈청 포도당 80 mg/dL, CRP 15 mg/L. 골반 X-선 검사에서 왼쪽 비구 공간(acetabular space)이 넓어진 것이 보인다. 다음 중 가장 적절한 다음 치료 단계는 무엇인가?

## 선택지

A. 반코마이신(Vancomycin) 치료
B. 활액 배액술 및 세파졸린(cefazolin) 치료
C. 고관절 관절경 배액술
D. 독시사이클린(Doxycycline) 치료

## 해설

발열·비체중부하·심한 수동운동 통증·염증수치 상승은 급성 세균성 고관절염을 시사한다. 관절액 채취·배액과 즉각적인 항포도알균 치료가 필요하여 B가 보기 중 적절하다. 세파졸린은 MSSA에 유효하나 지역 MRSA 유행·중증도와 배양에 맞춰 조정한다. 아픈 아이에서 항생제를 배액 완료까지 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 급성 세균성 고관절염의 배액+항생제 B 유지. 배액과 항생제를 불필요하게 순차화하거나 MRSA 위험을 배제하지 않도록 보완.
- https://www.idsociety.org/practice-guideline/acute-bacterial-arthritis-in-pediatrics2/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000618
