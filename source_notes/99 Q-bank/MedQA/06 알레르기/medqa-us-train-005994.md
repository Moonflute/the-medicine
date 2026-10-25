---
type: qbank
schema_version: 1
id: medqa-us-train-005994
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4ced9eaf7e8770050837529b0feaadce1694c0612f08b6b93dbdd222cde295f6
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "알레르기 비염"
  - "비강 코르티코스테로이드"
  - "재채기와 콧물"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVjOugiOultOq4sCDruYTsl7wgKEFsbGVyZ2ljIFJoaW5pdGlzKS5tZA
question_type: management
difficulty: simple
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
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
---

# MedQA US 임상문제

## 문제

20세 여성이 수개월 동안 매일 지속되는 맑고 물 같은 콧물, 양측 코막힘, 잦은 눈물과 눈 가려움, 매일 재채기로 내원했다. 체온은 100.1°F(37.8°C), 혈압은 120/70 mmHg, 맥박은 분당 70회, 호흡수는 분당 15회이다. 검사에서 부종성 창백한 비갑개와 물 같은 콧물이 보인다. 다음 중 상태의 치료는 무엇인가?

## 선택지

A. 정맥 내 페니실린
B. 경구 아목시실린
C. 경구 아세트아미노펜
D. 비강 내 플루티카손

## 해설


수개월간 지속된 맑은 콧물, 재채기, 눈 가려움과 부종성 비갑개는 지속성 알레르기비염을 시사한다. 비강 내 플루티카손(D)은 적절한 치료이다. 계절성이 확인된 것은 아니며 세균감염을 뒷받침하는 소견도 부족하다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-005994`와 직접 대조했다.
- 판정: 수개월 매일 증상의 지속성 알레르기비염이며 계절성이라고 단정할 정보가 없다. D 유지 및 해설 범위 교정.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/Rhinitis-2020-A-practice-parameter-update.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005994
