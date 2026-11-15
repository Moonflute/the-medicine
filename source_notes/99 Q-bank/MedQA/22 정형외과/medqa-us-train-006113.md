---
type: qbank
schema_version: 1
id: medqa-us-train-006113
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2fcacb75c4d6fdd2fe7679f3beb7a46e05b996abdaf3bb47dd92447066240c11
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "소아 골수염"
  - "대퇴골 골수염"
  - "골생검"
  - "Acute osteomyelitis"
question_type: investigation
related_disease_slugs:
  - MDgg6rCQ7Je8L-qzqOyImOyXvCAoT3N0ZW9teWVsaXRpcykubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvTmFmY2lsbGluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

6세 남아가 고열과 한쪽 허벅지 통증으로 절뚝거린다. 원위 대퇴골을 누르면 특히 아프고 염증 지표가 상승했다. 단순 X선은 정상이지만 급성 혈행성 골수염이 의심된다. 골수와 주변 농양을 평가할 검사는?

## 선택지

A. 고관절 방사선촬영 반복만
B. 대퇴부 MRI
C. 혈청 요산 검사
D. 골밀도검사

## 해설

소아 골수염 초기에는 X선이 정상일 수 있다. MRI로 골수부종과 인접 농양을 확인하고, 혈액배양과 필요시 골·농양 검체로 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 영문 metaphysis를 간부로 옮긴 위치 오류를 골간단으로 교정하고 골생검은 모든 환자에서 치료보다 먼저 필수라는 해설을 제한했다.
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/bone-and-joint-infections---osteomyelitis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006113
