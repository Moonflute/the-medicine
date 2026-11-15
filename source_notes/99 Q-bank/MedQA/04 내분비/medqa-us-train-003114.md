---
type: qbank
schema_version: 1
id: medqa-us-train-003114
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0293c912952685c23bbb09024e7c1c107c8d77b9eefaea302e7618f68bc941a2
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "thyroid nodule"
  - "euthyroid thyroid mass"
  - "thyroid ultrasound"
  - "thyroid cancer evaluation"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDqsrDsoIggKFRoeXJvaWQgTm9kdWxlKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmOyVlCAoVGh5cm9pZCBDYW5jZXIpLm1k
question_type: management
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

29세 여성이 우연히 발견된 1.6cm 갑상선 결절을 확인하러 왔다. TSH는 정상이다. 초음파상 고형 성분이 전혀 없는 단순 낭종이며, 목소리 변화·압박 증상·의심 림프절은 없다. 암을 배제하기 위한 다음 조치는?

## 선택지

A. 즉시 세침흡인
B. 진단 목적의 조직검사 없이 임상적으로 추적
C. 중심부바늘생검
D. 갑상선 반절제술

## 해설

고형 성분이 없는 단순 낭종은 K-TIRADS 2에 해당한다. 증상이나 별도의 고위험 소견이 없는 경우 암 평가를 위한 세침흡인은 필요하지 않다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 촉지 결절 US B는 선택지상 적절. TSH 동시평가 누락 및 T3/calcitonin 모두 일률 후속검사라는 오해를 교정.
- https://doi.org/10.1089/thy.2015.0020

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003114
- https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART003086091
- https://doi.org/10.3348/kjr.2021.0713
