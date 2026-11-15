---
type: qbank
schema_version: 1
id: medqa-us-train-007047
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:95a693766e463181fcaf9ef5c2a167d6f295bda9e4b199e390dbda7faebc2675
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "아동 방임"
  - "의무 신고"
  - "아동 보호"
question_type: ethics
related_disease_slugs: []
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 4개월 여아가 반복되는 기저귀 피부염으로 내원했다. 최근 체중 증가가 부진하고 탈수 소견이 있으며, 보호자가 수유와 기저귀 교체를 반복해서 방치했다는 병력이 확인됐다. 의사가 진료 중 방임을 의심했다면 필요한 조치는?

## 선택지

A. 아동에게 필요한 진료를 제공하고 지자체 또는 수사기관에 즉시 신고한다
B. 보호자의 신고 동의를 받을 때까지 기다린다
C. 명백한 외상이나 진단서가 확보될 때만 신고한다
D. 피부염만 치료하고 다음 방문 때까지 신고 여부를 보류한다

## 해설

국내에서 의료인은 직무 중 아동학대나 방임을 알게 됐거나 의심할 때 즉시 신고할 의무가 있다. 확진이나 보호자의 동의를 기다리지 않는다. 신고와 함께 탈수 등 당장 필요한 치료를 하고 아동의 안전을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 신고 의무는 학대/방임이 입증된 뒤에만 생기는 것이 아님을 명확화.
- https://publications.aap.org/pediatrics/article-lookup/doi/10.1542/peds.2015-0356

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007047
- 국가법령정보센터, 아동학대범죄의 처벌 등에 관한 특례법 제10조: https://www.law.go.kr/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1033213513
