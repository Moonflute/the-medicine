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
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
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

이전에 건강했던 10세 남아가 아침부터 한 차례 구토와 심한 두통이 있어 응급실에 왔다. 혼자 옷을 입기 어려워했고 혈압은 185/125 mmHg였다. 환자는 혼란스러워하며 사람에 대해서만 지남력이 있었고, 양측 시신경유두 부종이 보였다. 오른쪽 늑골척추각에서 복부 잡음이 들렸다. 다음 중 진단을 확인하는 데 가장 도움이 되는 검사는?

## 선택지

A. 심초음파
B. 경구 나트륨 부하 검사
C. CT 혈관조영술
D. 고용량 덱사메타손 억제검사

## 해설


고혈압 위기와 급성 신경학적 증상, 신장동맥 협착이 의심될 때 혈관 조영술(CT 혈관조영술)이 협착 부위를 확인하는 가장 유용한 검사이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 어린이 중증HTN·복부혈관잡음은 신혈관성 고혈압 의심; 선택지상 CTA C가 원인 혈관병변 확인에 부합. 급성 치료 지연 뜻 아님.
- https://publications.aap.org/pediatrics/article/140/3/e20171904/38358

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003419
