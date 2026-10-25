---
type: qbank
schema_version: 1
id: medqa-us-train-001571
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0706de74f1cbc722d9d99e0e0da83abc733f2143d87c9689e3441a6e9f4bb8e0
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "prerenal acute kidney injury"
  - "dehydration"
  - "gastroenteritis"
related_disease_slugs:
  - MDUg7Iug7J6lL-y9qe2MpeyghCDquInshLEg7L2p7YylIOyGkOyDgSAoUHJlcmVuYWwgQWN1dGUgS2lkbmV5IEluanVyeSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Iug7IOd7JWEIOydvOyLnOyXtCAoTmVvbmF0YWwgVHJhbnNpZW50IEZldmVyKS5tZA
  - MDgg6rCQ7Je8L-uFuOuhnOuwlOydtOufrOyKpCDqsJDsl7wgKE5vcm92aXJ1cyBJbmZlY3Rpb24pLm1k
question_type: mechanism
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

9세 남아가 2일 동안 설사와 구토로 응급실에 내원했다. 물 같은 무혈변을 약 12회 보고 세 번 구토했다. 3일 전 인도 여행에서 돌아왔고 여행 중 가족과 친척을 방문했다. 증상 시작 후 아무것도 먹지 못했고 어제부터 소변을 보지 않았다. 창백해 보인다. 체온은 38°C (100.4°F), 맥박은 106회/분, 혈압은 96/60 mm Hg이다. 점막이 건조하고 복부는 부드러우며 장기비대는 없다. 장음은 항진되어 있다. 헤모글로빈 13 g/dL, Na+ 148 mEq/L, Cl− 103 mEq/L, K+ 3.7 mEq/L, HCO3− 19 mEq/L, 요소질소 80 mg/dL, 포도당 90 mg/dL, 크레아티닌 2 mg/dL이다. 정맥 수액 소생을 시작했다. 다음 중 신장검사 이상을 일으킨 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 신장 관류 감소
B. IgA 복합체 침착
C. 사구체신염
D. 요로 폐색

## 해설

심한 설사·구토와 섭취 감소, 건조한 점막·소변량 감소 및 BUN/크레아티닌 상승은 저혈량에 따른 신전성 급성 신손상을 시사한다. 기전은 A, 신장 관류 감소다. 수액에 대한 반응과 소변량·전해질을 관찰하며 지속될 경우 다른 손상 기전도 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 전신성 급성 신손상이라는 오기를 신전성 급성 신손상으로 정정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001571
