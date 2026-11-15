---
type: qbank
schema_version: 1
id: medqa-us-train-008830
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:138db3952c3756c6c3db30e63b02baa7f47d610c8fdd5db3195b127113af1724
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Parkinson disease"
  - "levodopa-carbidopa"
  - "carbidopa"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tjIztgqjsiqgg7Kad7ZuE6rWwIChQYXJraW5zb25pc20pLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUm9zdXZhc3RhdGluLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MZXZvZG9wYS5tZA
---

# MedQA US 임상문제

## 문제

레보도파를 규칙적으로 복용 중인 파킨슨병 환자는 약을 먹고 나면 움직임이 좋아진다. 다음 약을 먹기 30–60분 전부터 서동과 경직이 매번 돌아온다. 이 양상을 가장 잘 설명하는 것은?

## 선택지

A. 최고 혈중농도에서 나타나는 이상운동증
B. 약효 소진에 따른 운동 변동
C. 레보도파와 무관한 일과성 허혈발작
D. 환각 중심의 약물 부작용

## 해설


복용 뒤 개선됐다가 다음 복용 직전에 운동증상이 되돌아오면 약효 소진(wearing-off)이다. 복용과 증상 일지를 바탕으로 투여 간격이나 보조 약제를 조정할 수 있다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008830
- https://pmc.ncbi.nlm.nih.gov/articles/12089898/
