---
type: qbank
schema_version: 1
id: medqa-us-train-000253
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4b10f609d989ee760830ebd4a8cd6fd3a0a73986f8fcaabbc0d27ddb5d9bdfdc
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "vertigo"
  - "hypertension"
  - "dyslipidemia"
question_type: diagnosis
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-ydtOyEneymnSAoQmVuaWduIHBhcm94eXNtYWwgcG9zaXRpb25hbCB2ZXJ0aWdvKS5tZA
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmFsc2FydGFuLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 남성이 휴가 중 갑작스러운 어지럼증과 보행 곤란으로 응급실에 내원했다. 일주일 전 휴가를 시작할 때까지는 건강했으나, 오늘 균형 감각 상실, 경미한 두통을 겪고 있으며 지난 몇 시간 동안 5~6회의 구토를 했다. 발열, 목 통증, 두부 외상, 위약감, 복시는 없다고 한다. 과거력상 고혈압과 이상지질혈증이 있다. 복용 약물로는 발사르탄(valsartan)과 아토르바스타틴(atorvastatin)이 있으나, 여행을 떠난 이후 여러 번 복용을 거르기도 했다. 혈압은 198/112 mm Hg, 심박수는 76회/분, 호흡수는 16회/분, 체온은 37.0°C이다. 환자는 의식이 명료하고 시간, 장소, 사람에 대한 지남력이 있다. 외안근 운동은 정상 범위 내에 있다. 사지 근력은 모두 정상이다. 응급 두부 CT를 시행하였고 사진과 같다. 이 환자에게서 예상되는 추가적인 임상 양상은 무엇인가?

## 선택지

A. 명령을 이해하지 못함
B. 반복적인 교대 운동을 수행하지 못함
C. 우측 편측 무시(Right-sided neglect)
D. 우측 시야 결손

## 해설

급성 현훈·구토·균형 및 보행장애는 소뇌 병변을 시사한다. 사지 근력과 이해력 등이 보존되어 있어 제시된 추가 소견 중 빠른 교대운동을 수행하지 못하는 소뇌성 운동교대장애(B)가 가장 적절하다. 현재 CT 이미지는 제공되지 않아 출혈 여부나 뇌간 침범을 단정할 수 없으며, 실제 진료에서는 긴급 뇌졸중 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 보이지 않는 CT의 후두부/뇌간 출혈을 확정한 해설 제거. 급성 현훈·보행실조·구토로 소뇌 국소화하여 교대운동장애 B 판단 가능.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000253
