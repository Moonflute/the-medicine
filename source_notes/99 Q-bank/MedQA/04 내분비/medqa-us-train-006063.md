---
type: qbank
schema_version: 1
id: medqa-us-train-006063
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dacb3f54baf043e44ec28cb8e5b74e8b0fab0a129eceb41a288befc4d83425d6
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "칼만 증후군"
  - "저성선자극성 성선기능저하증"
  - "무후각증"
related_disease_slugs:
  - MTMg67aA7J246rO8L-y5vOunjCDspp3tm4TqtbAgKEthbGxtYW4gU3luZHJvbWUpLm1k
question_type: diagnosis
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
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9UZXN0b3N0ZXJvbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

26세 남성이 불임으로 왔다. 어릴 때부터 냄새를 거의 맡지 못했고 자연 사춘기가 진행하지 않았다. 고환은 작으며 아침 테스토스테론과 LH·FSH가 낮다. 가장 가능성 높은 진단은?

## 선택지

A. 클라인펠터 증후군
B. 칼만 증후군
C. 일차성 고환기능저하증
D. 안드로겐 불감증

## 해설

선천적 후각 저하와 저생식샘자극호르몬성 생식샘기능저하가 함께 있으면 칼만 증후군을 시사한다. 일차성 고환기능저하에서는 보통 LH·FSH가 올라간다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Kallmann B를 GH결핍/저신장 질환으로 설명한 오류를 GnRH결핍성 저성선자극으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006063
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8016789/
