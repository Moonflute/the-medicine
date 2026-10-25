---
type: qbank
schema_version: 1
id: medqa-us-train-009350
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fe62a71a1b4f7619b528be70019acf832e3fcbc4dd03f5afef403714693217f0
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "epidural hematoma"
  - "경막외혈종"
  - "traumatic brain injury"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qsr3rp4nsmbgg7Lac7ZiIIChFcGlkdXJhbCBoZW1vcnJoYWdlKS5tZA
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsp4Ttg5UgKENvbmN1c3Npb24pLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 여성이 1시간 전 자전거에서 넘어져 응급실에 왔다. 출근 중 균형을 잃고 인도에 머리를 부딪쳤으며 사고 직후 몇 분간 의식이 소실되었다. 현재 오심과 두통이 있고 지난 30분 동안 두 번 구토했다. 심각한 질환의 과거력, 흡연·음주·불법 약물 사용은 없고 약물도 복용하지 않는다. 체온 37°C, 맥박 50회/분, 호흡수 10회/분, 혈압 160/90 mmHg이다. 지남력은 정상이고 폐는 깨끗하며 심장 진찰에서 서맥 외에는 이상이 없다. 오른쪽 측두부에 멍이 있고 진찰 중 경련이 발생했다. 정맥 로라제팜을 투여하고 중환자실에 입원시켰다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 허혈성 뇌졸중
B. 뇌내출혈
C. 특발성 두개내 고혈압
D. 경막외혈종

## 해설

측두부 외상 직후 의식소실 뒤 각성한 시기가 있고, 이어 두통·구토·발작과 고혈압/서맥이 나타나 경막외혈종(D)을 우선 의심한다. CT로 즉시 출혈과 종괴효과를 평가해야 한다. 본문에는 골절이 없다는 영상 결과나 정상 CT가 제시되지 않았다. 다른 외상성 두개내출혈도 가능하므로 임상 양상만으로 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 외상 후 EDH D 유지. 골절 부재와 정상 CT를 가정한 설명 및 가장 흔한 원인 과장 제거.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009350
