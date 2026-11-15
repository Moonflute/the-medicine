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
question_type: diagnosis
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yymey2lO2YkeywqeymnSAoU3BpbmFsIFN0ZW5vc2lzKS5tZA
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

65세 환자가 오래 서 있거나 내리막을 걸으면 양쪽 종아리가 아프다. 서서 쉬기만 해서는 덜 낫지만, 앉거나 카트에 기대 허리를 굽히면 호전된다. 다리 맥박과 안정 시 발목상완지수는 정상이다. 가장 가능성 높은 진단은?

## 선택지

A. 말초동맥질환에 의한 혈관성 파행
B. 요추 척추관협착증에 의한 신경성 파행
C. 마미증후군
D. 고관절 골관절염

## 해설

걷기뿐 아니라 허리 폄과 오래 서는 자세에서 악화하고, 앉거나 앞으로 굽히면 나아지는 것이 신경성 파행의 단서다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 요추협착증 MRI가 척수 압박을 직접 확진한다는 과도한 표현을 신경근/마미 공간과 임상-영상 일치로 교정했다. 검사 비교에서 D를 유지한다.
- 공식/학회 근거: https://acsearch.acr.org/docs/69483/Narrative/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005370
- https://www.nice.org.uk/guidance/ng59/chapter/recommendations
