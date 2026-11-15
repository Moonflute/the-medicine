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

20세 여성이 수개월간 매일 코가 막혀 잠을 설친다. 맑은 콧물과 재채기가 있고 비갑개가 창백하게 부었다. 경구 항히스타민제로 가려움은 줄었지만 코막힘은 지속된다. 다음 약물은?

## 선택지

A. 경구 아목시실린
B. 비강 충혈완화제 매일 장기 사용
C. 경구 프레드니솔론 매일 유지
D. 비강 플루티카손

## 해설


코막힘이 두드러지는 지속성 알레르기비염에는 비강 스테로이드가 효과적이다. 올바른 분무법과 꾸준한 사용을 안내한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-005994`와 직접 대조했다.
- 판정: 수개월 매일 증상의 지속성 알레르기비염이며 계절성이라고 단정할 정보가 없다. D 유지 및 해설 범위 교정.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/Rhinitis-2020-A-practice-parameter-update.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005994
- https://doi.org/10.4168/aair.2023.15.1.19
