---
type: qbank
schema_version: 1
id: medqa-us-train-006977
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2f7b245b98a1c1548c3e9bbecdb85a47fd8b4d0c3e63021e43b8d7fe3ca60365
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "카르시노이드 증후군"
  - "세로토닌"
  - "신경내분비종양"
  - "삼첨판 역류"
related_disease_slugs:
  - MTAg7KKF7JaRL-y5tOultOyLnOuFuOydtOuTnCDspp3tm4TqtbAgKENhcmNpbm9pZCBTeW5kcm9tZSkubWQ
question_type: management
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT25kYW5zZXRyb24ubWQ
---

# MedQA US 임상문제

## 문제

54세 여성이 전이성 소장 신경내분비종양으로 진단되었다. 반복되는 얼굴 홍조와 물설사가 있고 소변 5-HIAA가 높다. 이 증상을 처음 조절할 약은?

## 선택지

A. 텔로트리스타트 단독
B. 에베롤리무스
C. 지속형 옥트레오타이드
D. 로페라미드 단독

## 해설


카르시노이드 증후군의 홍조와 설사에는 소마토스타틴 유사체인 옥트레오타이드나 란레오타이드를 우선 사용한다. 텔로트리스타트는 유사체에도 지속되는 설사에 추가할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006977 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: octreotide를 serotonin 길항제라 부른 기전 오류를 somatostatin analogue로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=ad30bb58-5e16-43c4-8fdc-5cef8261eb8f&type=pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006977
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9539661/
