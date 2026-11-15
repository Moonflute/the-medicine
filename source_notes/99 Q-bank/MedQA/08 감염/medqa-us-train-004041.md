---
type: qbank
schema_version: 1
id: medqa-us-train-004041
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c9d950b7220f7dc8f17ced8e85bc018b2935c30b675f17b27719befd95423da7
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "여행자 설사"
  - "장독소형 대장균"
  - "급성 감염성 설사"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yEpOyCrCAo7Je87Kad7ISxKSAoRGlhcnJoZWEgKEluZmxhbW1hdG9yeSkpLm1k
question_type: management
difficulty: complex
answer: C
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQWxiZW5kYXpvbGUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
---

# MedQA US 임상문제

## 문제

동남아에서 귀국한 환자가 39.3°C의 열과 하루 여러 차례의 설사로 일상 활동을 할 수 없다. 혈변은 없으며 소생 뒤 경구약을 복용할 수 있다. 검체를 채취했고 평가 결과 경험적 경구 항생제가 필요하다. 지역 내성까지 고려할 때 우선 선택은?

## 선택지

A. 시프로플록사신
B. 리팍시민
C. 아지트로마이신
D. 메트로니다졸

## 해설


동남아 여행 뒤 발생한 열성 여행자 설사에서 경험적 항생제가 필요하다면 아지트로마이신을 우선 고려한다. 이 지역은 일부 원인균의 플루오로퀴놀론 내성이 높고, 리팍시민은 침습성 감염이 의심될 때 적절하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004041 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 39.4°C 고열을 경미한 무열성 설사로 오독하고 정답 A가 필요없다고 한 해설 교정; FQ의 제한을 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/travelers-diarrhea.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004041
- https://doi.org/10.3947/ic.2019.51.2.217
