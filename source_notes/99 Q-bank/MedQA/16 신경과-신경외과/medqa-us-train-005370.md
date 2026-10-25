---
type: qbank
schema_version: 1
id: medqa-us-train-005370
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:acf126698261dc46d0b1a78139da0f7a4ba0a89994a74ff876774fd37fb3d6cd
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "요추 척추관 협착증"
  - "신경인성 파행"
  - "요추 MRI"
question_type: investigation
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yymey2lO2YkeywqeymnSAoU3BpbmFsIFN0ZW5vc2lzKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 남자가 6개월 동안 점점 심해지는 양쪽 하지 통증으로 내원했다. 통증은 왼쪽이 더 심하고 걸을 때 악화되며 내리막길에서 급격히 심해진다. 실내 자전거를 타면 호전되고 일자다리올리기와 발살바법은 통증을 악화시키지 않는다. 다음 중 진단을 확진하기 위한 가장 적절한 검사는?

## 선택지

A. 발목-상완지수
B. CT 척수조영술
C. 근전도검사
D. 자기공명영상

## 해설

내리막길·서기에서 악화되고 굴곡 자세의 실내 자전거에서 완화되는 하지통은 신경인성 파행, 특히 요추 척추관협착증을 시사한다. 지속 증상의 원인을 평가하고 치료계획을 정할 때 선지 중 요추 MRI(D)가 신경근·마미 주변 협착을 확인하는 데 적절하다. 성인 하부 요추는 주로 척수 자체가 아니라 신경근 다발이 지나며 영상협착은 무증상에서도 흔해 임상과 일치해야 한다. 모든 초기 요통에서 MRI가 필요한 것은 아니고, CT 척수조영은 MRI가 불가능한 경우 등의 대안이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 요추협착증 MRI가 척수 압박을 직접 확진한다는 과도한 표현을 신경근/마미 공간과 임상-영상 일치로 교정했다. 검사 비교에서 D를 유지한다.
- 공식/학회 근거: https://acsearch.acr.org/docs/69483/Narrative/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005370
