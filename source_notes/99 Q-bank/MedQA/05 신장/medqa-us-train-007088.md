---
type: qbank
schema_version: 1
id: medqa-us-train-007088
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:574666497ad3a385614819536fb88e6bbbf868c71992a80d84af5dbd8299e4af
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "저혈량성 급성 신손상"
  - "신전성 질소혈증"
  - "탈수"
  - "설사"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
  - ZHJ1ZzowNiDruYTrh6jCt-yLoOyepS9BbGZ1em9zaW4ubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
curation_status: "revised"
curation_reason: "신독성과 HUS에는 반드시 혈뇨가 있다는 잘못된 배제 논리 수정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

59세 남성이 구토와 설사를 며칠 앓은 뒤 소변량이 줄었다. 혈압 88/58 mmHg, 맥박 120회/분, 입안이 건조하고 폐울혈은 없다. 크레아티닌은 평소 0.9에서 3.1 mg/dL로 올랐다. 먼저 할 처치는?

## 선택지

A. 등장성 결정질 수액을 투여하고 관류와 소변량을 재평가한다
B. 초기부터 푸로세미드로 소변량을 늘린다
C. 소변 분획배설 검사 결과를 기다린 뒤 수액을 결정한다
D. 크레아티닌 수치만 보고 즉시 혈액투석을 시작한다

## 해설

위장관 수분 소실, 저혈압, 빈맥은 용적 감소에 의한 신장 저관류를 시사한다. 등장성 결정질로 소생하고 반응을 보며, 신기능이 개선되지 않으면 다른 원인도 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007088
- https://kdigo.org/guidelines/acute-kidney-injury/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 신독성과 HUS에는 반드시 혈뇨가 있다는 잘못된 배제 논리 수정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
