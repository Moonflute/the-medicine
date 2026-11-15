---
type: qbank
schema_version: 1
id: medqa-us-train-002728
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d8dbdc6a2fb20610ec029ed2b19d84e0f733bee995d45a359e15458ca05fef83
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "cryptococcal meningitis"
  - "advanced HIV infection"
  - "CD4 lymphocytopenia"
  - "amphotericin B plus flucytosine"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2BrOumve2GoOy9lOy_oOyKpOymnSAoQ3J5cHRvY29jY29zaXMpLm1k
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: management
difficulty: complex
answer: B
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQW1waG90ZXJpY2luQi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
---

# MedQA US 임상문제

## 문제

치료받지 않은 HIV 환자에게 크립토코쿠스 수막염이 확진돼 리포좀 암포테리신 B와 플루시토신을 막 시작했다. 항레트로바이러스 치료 시작 시점으로 가장 적절한 것은?

## 선택지

A. 항진균제를 시작한 당일
B. 항진균제 시작 약 4~6주 뒤
C. 항진균제 시작 48시간 뒤
D. 연간 유지요법을 모두 끝낸 뒤

## 해설


중추신경계 크립토코쿠스증에서는 너무 이른 항레트로바이러스 치료가 면역 재구성 염증 반응과 불량한 결과를 높일 수 있다. 보통 항진균 치료 시작 4~6주 뒤를 목표로 치료 반응에 맞춰 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002728 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 크립토코쿠스 수막염의 유도요법 B 유지;21cmH₂O를 무조건 중증 두개내고혈압이라 단정한 설명과 자원별 요법 구분 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/cryptococcosis/treatment/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002728
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/cryptococcosis
