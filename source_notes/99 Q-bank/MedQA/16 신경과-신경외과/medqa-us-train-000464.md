---
type: qbank
schema_version: 1
id: medqa-us-train-000464
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8e70359faf03734606cf8c8b46186388a35d6433b837e075dd397b38a5ef3a47
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Cluster headache"
  - "Chronic paroxysmal hemicrania"
  - "SUNCT syndrome"
  - "Trigeminal neuralgia"
question_type: diagnosis
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

25세 남성 환자가 극심한 고통을 호소하며 내원하였다. 환자는 왼쪽 머리 주변에 찌르는 듯한 극심한 통증이 있으며 왼쪽 눈에서 눈물이 멈추지 않는다고 말한다. 이러한 유형의 두통은 지난 일주일 동안 매일 아침 잠에서 깰 때마다 발생하며 약 60분간 지속된다. 환자는 전조 증상, 오심, 구토는 없다고 한다. 과거 병력은 없다. 이 환자의 진단은 무엇인가?

## 선택지

A. 군발두통(Cluster headache)
B. 만성 발작성 편측두통(Chronic paroxysmal hemicrania, CPH)
C. 결막 충혈과 눈물을 동반한 단기 지속 편측 신경통형 두통(SUNCT) 증후군
D. 삼차신경통(Trigeminal neuralgia)

## 해설


극심한 일측성 눈물 흘림과 일주일에 매일 새벽에 발생하는 60분 지속 통증은 군발두통의 전형적인 발작 양상이다. 따라서 진단은 군발두통이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000464
