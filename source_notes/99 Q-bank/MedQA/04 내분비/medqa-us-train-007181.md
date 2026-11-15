---
type: qbank
schema_version: 1
id: medqa-us-train-007181
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d9f49772fc40db73fb457e6f0a41294053bcea445e5ed9f357509f30d83adbeb
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "하시모토 갑상선염"
  - "무증상 갑상선 자가면역"
  - "정상 갑상선 기능"
related_disease_slugs:
  - MDQg64K067aE67mEL-2VmOyLnOuqqO2GoCDqsJHsg4Hsg5jsl7wgKEhhc2hpbW90bydzIFRoeXJvaWRpdGlzKS5tZA
question_type: monitoring
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 여성이 검진에서 항갑상선 과산화효소 항체 양성을 확인했다. 임신하지 않았고 TSH와 유리 T4가 정상이며 증상도 없다. 어떤 관리가 적절한가?

## 선택지

A. 항체가 양성이면 레보티록신을 바로 시작
B. 갑상선호르몬을 시작하지 않고 갑상선 기능을 주기적으로 확인
C. 항체를 낮추기 위해 메티마졸 투여
D. 갑상선 흡수 스캔을 반복

## 해설

항체 양성은 향후 기능저하 가능성을 높이지만 현재 갑상선 기능이 정상이라면 레보티록신으로 치료하지 않는다. 증상이나 생애 상황에 맞춰 기능을 추적한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 항TPO양성만으로현재갑상선저하/확진Hashimoto라고단정한설명 한정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007181
- https://ekjm.org/journal/view.php?number=25889
