---
type: qbank
schema_version: 1
id: medqa-us-train-002047
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fd8f6301dcf7b1d1eed535f5be25e8d99b98c2516a9bd002255ccd265042b118
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "meningococcal meningitis"
  - "Neisseria meningitidis"
  - "bacterial meningitis"
  - "rifampin prophylaxis"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IS46reg7ISxIOuHjOyImOunieyXvCAoQmFjdGVyaWFsIE1lbmluZ2l0aXMpLm1k
  - MDgg6rCQ7Je8L-yImOunieyVjOq3oCAoTWVuaW5nb2NvY2N1cykubWQ
question_type: management
difficulty: complex
answer: D
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2Vmb3RheGltZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvUmlmYW1waW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

이전에 건강했던 1세 남아가 2일간의 보챔과 발열로 응급실에 왔다. 증상은 가족과 캐나다 여행을 다녀온 직후 시작되었다. 만삭으로 태어났고 예방접종은 최신 상태이다. 6세 형은 건강하며 중대한 질환의 가족력은 없다. 아이는 쇠약하고 기면 상태로 보인다. 키는 50백분위수, 체중은 75백분위수이다. 체온 39.2°C, 맥박 110회/분, 호흡 28회/분, 혈압 92/55 mmHg이다. 신체검사에서 몸통과 사지에 지름 1 mm의 자주색 반점이 여러 개 보인다. 모세혈관 재충만 시간은 4초이다. 나머지 신체검사는 정상이다. 혈색소 12 g/dL, 백혈구 19,000/mm³, 혈소판 225,000/mm³이다. 요추천자를 시행했더니 뇌척수액에서 분절 호중구가 다량 보이고 포도당은 감소했으며 단백질은 증가했다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 환자에게 암피실린을 투여하고 밀접 접촉자에게 시프로플록사신 예방요법을 시행한다
B. 환자에게 세포탁심과 반코마이신을 투여하고 밀접 접촉자에게 독시사이클린 예방요법을 시행한다
C. 환자에게 반코마이신을 투여하고 밀접 접촉자에게 리팜핀 예방요법을 시행한다
D. 환자에게 세프트리악손과 반코마이신을 투여하고 밀접 접촉자에게 리팜핀 예방요법을 시행한다

## 해설


점상자반·세균성 뇌척수액과 관류 지연이 있어 수막구균 감염을 강하게 의심하며 세균성 수막염·패혈증을 신속히 치료한다. D의 ceftriaxone과 vancomycin은 원인 미확정 세균성 수막염의 경험적 치료 맥락에서 적절하고, 수막구균의 밀접 접촉자는 예방약이 필요하다. 수막구균으로 확정되고 감수성이 확인되면 ceftriaxone 등으로 좁힐 수 있어 vancomycin을 끝까지 일률 병용하는 것은 아니다. Rifampin 예방요법은 1회가 아니라 통상 2일간이며 접촉 범위·금기·지역 내성에 맞춰 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002047 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수막구균 의심의 접촉자 rifampin 및 세균성 수막염 경험적 ceftriaxone/vancomycin D 유지; 확정 수막구균에도 vancomycin이 항상 필요하다는 설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/surv-manual/php/table-of-contents/chapter-8-meningococcal-disease.html
- https://www.ncbi.nlm.nih.gov/books/NBK614844/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002047
