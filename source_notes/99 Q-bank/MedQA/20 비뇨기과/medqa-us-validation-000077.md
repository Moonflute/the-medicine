---
type: qbank
schema_version: 1
id: medqa-us-validation-000077
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:56eac2057af89f09976ff3fb1bada31d011e1d2396c3fe65f14e5df39c3e0077
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "유치도뇨관 관련 요로감염"
  - "도뇨관"
  - "간헐적 도뇨"
question_type: prevention
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JqU66GcIOqwkOyXvCAoVXJpbmFyeSBUcmFjdCBJbmZlY3Rpb24pLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

중환자실에서 시간당 소변량 측정을 위해 유치도뇨관을 둔 51세 남성이 회복해 일반병동으로 왔다. 이제 정확한 시간당 측정이 필요 없고 배뇨 장애도 없다. 도뇨관 관련 요로감염을 줄일 조치는?

## 선택지

A. 퇴원할 때까지 관을 유지한다
B. 예방적 항생제를 처방한다
C. 더 이상 적응증이 없으면 관을 제거한다
D. 증상과 관계없이 매일 소변을 배양한다

## 해설

유치 기간을 줄이는 것이 감염 예방의 핵심이다. 유치 필요성을 매일 평가하고 적응증이 사라지면 제거한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 간헐도뇨를 배뇨를 중단하는 행위로 오역한 해설 수정. CAUTI 예방은 적절한 적응·유치기간 최소화가 핵심, 원정답 A의 적용 한계 명시.
- 공식/학회 근거: https://www.cdc.gov/infection-control/media/pdfs/guideline-cauti-h.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000077
- https://www.kdca.go.kr/bbs/kdca/55/227584/artclView.do
- https://khna.or.kr/home/data/230223/khna_guide_ebp2023.pdf
