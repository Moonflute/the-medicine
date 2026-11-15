---
type: qbank
schema_version: 1
id: medqa-us-train-007014
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1b386ece8c6dcd318aa41f98c048ad4682e679af518be97b7f997a95e38ef83f
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "제1형 당뇨병"
  - "인슐린 결핍"
  - "삼투성 이뇨"
  - "다뇨"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDHtmJUg64u564eo67ORIChUeXBlIDEgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: investigation
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

12세 남아가 한 달간 다뇨·다갈과 체중 감소를 보였고 진료실 정맥혈의 무작위 혈당은 286 mg/dL다. 지금 가장 적절한 대응은?

## 선택지

A. 정상 체격이므로 당뇨 가능성을 배제
B. 소변 포도당이 음성으로 바뀌는지만 추적
C. 다음 주까지 모든 평가를 미루고 공복혈당 재검
D. 당뇨병으로 판단하고 혈중 케톤과 산증 여부를 바로 평가

## 해설

전형적 고혈당 증상이 있고 무작위 혈장 포도당이 200 mg/dL 이상이면 당뇨병을 진단할 수 있다. 소아의 새 고혈당에서는 케톤산증이 있는지 신속히 확인하고 당뇨병 유형도 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 아나필락시스 해설을 소아 제1형 당뇨병/인슐린 결핍에 의한 당뇨와 삼투성 이뇨 설명으로 교체. 원정답 D 유지.
- https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/type-1-diabetes

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007014
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
