---
type: qbank
schema_version: 1
id: medqa-us-train-003368
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0983792458a302196d43a49f9660787be5c2e4e3dfa5a8aa20a9b81c1b8c8724
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "left-sided varicocele"
  - "renal cell carcinoma"
  - "retroperitoneal mass"
  - "abdominal CT"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-uNqeq1tOygleunpeulmCAoVmFyaWNvY2VsZSkubWQ
  - MjAg67mE64eo6riw6rO8L-y9qe2MpeyVlCAoUmVuYWwgQ2VsbCBDYXJjaW5vbWEpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 남성에게 최근 왼쪽 정계정맥류와 지속적인 옆구리 통증, 혈뇨가 생겼다. 음낭의 확장된 정맥은 누워도 줄지 않는다. 신장과 신정맥을 평가할 검사는?

## 선택지

A. 방광 잔뇨 측정
B. 전립선 생검
C. 흉부 단순촬영
D. 조영증강 복부 CT

## 해설

새로 생긴 정계정맥류가 누워도 줄지 않고 혈뇨와 옆구리 통증이 동반되면 신장 종괴나 신정맥 배출 장애를 평가할 이유가 된다. 오래된 전형적 좌측 정계정맥류에 모두 CT가 필요한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 비환원성 새 정계정맥류의 신정맥/하대정맥 배출 장애와 신장 종괴 평가 A를 연결.
- 공식/학회 근거: https://uroweb.org/guidelines/renal-cell-carcinoma/chapter/diagnostic-evaluation

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003368
