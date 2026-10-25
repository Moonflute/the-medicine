---
type: qbank
schema_version: 1
id: medqa-us-train-005363
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6b48e72af07479b2d2e5c2918a8be94e5cd56aa178ac7dac718f6e98e7738ac0
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "다낭성난소증후군"
  - "무배란성 무월경"
  - "프로게스테론 철회검사"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-uLpOuCrSDrgpzshowg7Kad7ZuE6rWwIChQb2x5Y3lzdGljIE92YXJ5IFN5bmRyb21lKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 여자가 6개월 동안 월경이 없고 주기가 불규칙하며 중간출혈이 있어 내원했다. BMI 31.5 kg/m², 심한 낭성여드름과 겨드랑이·목의 흑색극세포증이 있고 임신검사는 음성이다. 다음 중 월경불순 원인을 판단하는 데 도움이 되는 검사는?

## 선택지

A. 난포자극호르몬 측정
B. 프로게스테론 철회검사
C. 갑상샘자극호르몬 측정
D. 프로락틴 수치 측정

## 해설

PCOS에 의한 만성 무배란이 의심된다. 프로게스테론 투여 후 철회출혈이 생기면 에스트로겐 작용과 유출로 개방성이 보존되어 있어 무배란을 지지한다(B). 무출혈은 저에스트로겐 외에도 유착·유출로 문제 등에서 가능하여 단독으로 확진하지 못한다. TSH·프로락틴 등 원인 배제 검사도 초기 평가에 포함한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 프로게스테론 철회검사 B 유지. 무출혈=에스트로겐 결핍 단정 및 배란 직접검사라는 오류를 교정.
- https://www.asrm.org/practice-guidance/practice-committee-documents/current-evaluation-of-amenorrhea/
- https://integration.asrm.org/practice-guidance/practice-committee-documents/recommendations-from-the-2023-international-evidence-based-guideline-for-the-assessment-and-management-of-polycystic-ovary-syndrome/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005363
