---
type: qbank
schema_version: 1
id: medqa-us-train-003419
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fc17ff43d767130f3d60464c5b62cea3b9a2f998d2b1d9cc86017384d78bbbda
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "renovascular hypertension"
  - "renal artery stenosis"
  - "hypertensive emergency"
  - "CT angiography"
related_disease_slugs:
  - MDUg7Iug7J6lL-yLoO2YiOq0gOyEsSDqs6DtmIjslZUgKFJlbm92YXNjdWxhciBIeXBlcnRlbnNpb24pLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

10세 남아가 심한 두통과 구토, 혼돈으로 응급실에 왔다. 혈압은 반복해서 185/125 mmHg이고 양측 시신경유두부종이 있다. 복부 혈관잡음이 있어 신혈관성 고혈압이 의심된다. 원인 검사와 병행해 지금 우선 할 조치는?

## 선택지

A. 신동맥 조영 결과가 나올 때까지 혈압 치료를 미룬다
B. 경구 유지 약만 시작하고 귀가시킨다
C. 집중 감시하에 조절 가능한 정맥 항고혈압제로 혈압을 단계적으로 낮춘다
D. 정맥 약으로 혈압을 즉시 정상 범위까지 떨어뜨린다

## 해설


혼돈과 유두부종을 동반한 중증 고혈압은 소아 고혈압 응급이다. 집중 감시하에 혈압을 조절하면서 원인을 평가하고, 장기 관류가 악화되지 않도록 혈압을 급격히 정상화하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 어린이 중증HTN·복부혈관잡음은 신혈관성 고혈압 의심; 선택지상 CTA C가 원인 혈관병변 확인에 부합. 급성 치료 지연 뜻 아님.
- https://publications.aap.org/pediatrics/article/140/3/e20171904/38358

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003419
- https://doi.org/10.1111/jpc.70491
