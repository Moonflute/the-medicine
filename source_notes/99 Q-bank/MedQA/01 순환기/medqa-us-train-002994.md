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

62세 남성이 집에서 측정한 고혈압 때문에 아내와 함께 응급실에 왔다. 증상은 없고 고혈압과 고지혈증으로 아테놀롤과 아토르바스타틴을 복용했지만 최근 아테놀롤이 떨어져 건강보험이 없어 재처방을 받지 못했다. 체온 36.8°C, 맥박 65회/분, 호흡수 22회/분, 혈압 201/139 mmHg이다. 안저검사에서 유두부종은 없고 CT에서도 두개내 출혈이나 허혈이 없다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 저용량 약물을 시작하거나 재개하여 24~48시간에 걸쳐 혈압을 서서히 낮춘다
B. 저용량 약물을 시작하거나 재개하여 24~48시간에 걸쳐 혈압을 빠르게 낮춘다
C. 중환자실에 입원시켜 첫 1시간에 혈압을 10% 낮추도록 정맥 약물을 시작한다
D. 중환자실에 입원시켜 첫 4시간에 혈압을 25% 낮추도록 정맥 약물을 시작한다

## 해설

급성 표적장기손상이 확인되지 않은 무증상 중증고혈압에서는 선택지 A처럼 접근 가능한 경구약을 시작/재개하고 추적을 확보하며 점진적으로 조절한다. 신경·심장·신장 평가를 포함해야 하고 정상 두부CT만으로 모든 장기손상이 배제되지는 않는다. 수치만으로 ICU 정맥약으로 급강하시키거나 24–48시간 내 무조건 정상화하는 목표를 두지 않는다. 장기손상이 발견되면 고혈압 응급증으로 별도 치료한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 무증상 중증고혈압의 경구약 재개 A는 유지. 24–48시간내 반드시 정상화하거나 CT만으로 모든 장기손상을 배제한다는 오독을 방지.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002994
