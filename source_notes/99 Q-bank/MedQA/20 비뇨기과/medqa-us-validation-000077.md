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
answer: A
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

51세 남성이 4일간 심한 배뇨통과 빈뇨로 진료를 받으러 왔다. 3주 전 탈장 수술 후 패혈성 쇼크로 중환자실 치료를 받았고 요검사에서 혈액·단백질 1+, 아질산염과 백혈구에스테라제 양성, 백혈구 20~25/HPF였다. 이 합병증을 예방할 수 있었던 방법은?

## 선택지

A. 간헐적 도뇨
B. 예방적 경구 시프로플록사신
C. 국소 무피로신
D. 세균뇨 선별검사

## 해설

원정답은 A, 간헐적 도뇨이다. ICU 치료 후 요로감염이라는 출제 맥락에서 불필요한 장기 유치도뇨 노출을 줄이는 방법을 묻는다. 간헐적 도뇨는 필요할 때 도뇨관으로 방광을 비우고 제거하는 방식이지 자발 배뇨를 간헐적으로 중단하는 행위가 아니다. 방광배출 장애가 있는 적절한 환자에서 유치도뇨의 대안이며, 모든 ICU 환자에 일률적으로 적용하지는 않는다. 예방 핵심은 적절한 적응증, 무균 삽입/관리 및 가능한 빠른 제거이며 예방적 항생제나 무증상 세균뇨 선별을 정례화하지 않는다. 본문에는 실제 도뇨관 사용이 명시되지 않아 이는 출제 맥락상 추론이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 간헐도뇨를 배뇨를 중단하는 행위로 오역한 해설 수정. CAUTI 예방은 적절한 적응·유치기간 최소화가 핵심, 원정답 A의 적용 한계 명시.
- 공식/학회 근거: https://www.cdc.gov/infection-control/media/pdfs/guideline-cauti-h.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000077
