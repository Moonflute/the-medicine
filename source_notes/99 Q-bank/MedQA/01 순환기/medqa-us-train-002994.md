---
type: qbank
schema_version: 1
id: medqa-us-train-002994
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8f996e24617d4a4eb964e79dee1e77bca09125e0be8c82f68e80ce16f4ab9a49
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "hypertensive urgency"
  - "severe asymptomatic hypertension"
  - "gradual blood pressure reduction"
  - "medication nonadherence"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVleyEsSDsnITquLAgKEh5cGVydGVuc2l2ZSBDcmlzaXMpLm1k
question_type: management
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRlbm9sb2wubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남성이 혈압약을 일주일째 복용하지 못해 내원했다. 충분히 쉰 뒤 반복 측정한 혈압은 200/116 mmHg이다. 흉통, 호흡곤란, 두통, 시야 변화는 없다. 신경·심폐·안저 진찰과 검사에서도 급성 심장 또는 콩팥 손상은 확인되지 않았다. 적절한 다음 조치는?

## 선택지

A. 복약을 재개하거나 경구약을 조정하고 신속한 추적을 잡는다
B. 정맥 혈압약으로 1시간 안에 평소 혈압까지 낮춘다
C. 증상이 없으므로 약을 중단한 채 다음 정기검진까지 기다린다
D. 속효성 니페디핀을 설하 투여해 혈압을 즉시 낮춘다

## 해설

숫자가 매우 높더라도 급성 표적장기손상이 없으면 고혈압 응급증과 다르게 접근한다. 경구약을 재개·조정하고 조기에 추적한다. 정맥약이나 속효성 약으로 급격히 낮추면 장기 관류가 떨어질 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 무증상 중증고혈압의 경구약 재개 A는 유지. 24–48시간내 반드시 정상화하거나 CT만으로 모든 장기손상을 배제한다는 오독을 방지.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002994
- https://koreanhypertension.org/reference/guide?idno=10446&mode=read
- https://doi.org/10.5646/ch.2026.32.e31
