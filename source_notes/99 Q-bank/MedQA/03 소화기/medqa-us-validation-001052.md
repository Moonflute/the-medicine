---
type: qbank
schema_version: 1
id: medqa-us-validation-001052
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:2268f9c976c9e5e3f8cf64abb1c97e214a03751b1437f6142a33d78a732dc61f
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "기종성 담낭염"
  - "당뇨병"
  - "담낭벽 가스"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

당뇨병이 있는 73세 남성이 발열과 심한 오른쪽 윗배 통증으로 내원했다. 혈압은 92/68 mmHg이다. 최근 담도 시술은 없으며 CT에서 두꺼워진 담낭벽 내부와 담낭 내에 가스가 보인다. 가장 가능성 높은 진단은?

## 선택지

A. 급성 담석성 췌장염
B. 기종성 담낭염
C. 담석성 장폐색
D. 원발성 경화성 담관염

## 해설


담낭벽 내 가스는 기종성 담낭염을 시사한다. 당뇨병 고령 환자에서 중요하며 담석이 없어도 발생한다. 패혈증 소생과 항생제를 시작하고 응급 수술 또는 배액 가능성을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001052 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: emphysematous를 폐쇄성과 동일시한 번역 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001052
- https://www.jshbps.jp/modules/en/index.php?content_id=47
