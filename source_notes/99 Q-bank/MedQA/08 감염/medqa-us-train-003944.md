---
type: qbank
schema_version: 1
id: medqa-us-train-003944
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cf30633fd8a1962d69f0308e16b0df77572c8c35cd2296cb94a59a31826ffebd
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "disseminated gonococcal infection"
  - "migratory polyarthritis"
  - "pustular skin lesions"
  - "tenosynovitis"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yehOq3oCDqsJDsl7wgKEdvbm9jb2NjYWwgSW5mZWN0aW9uKS5tZA
  - MjIg7KCV7ZiV7Jm46rO8L-uTnO2AmOultOuytSDrs5EgKERlIFF1ZXJ2YWluJ3MgVGVub3N5bm92aXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

19세 대학생이 오른쪽 손목과 왼쪽 무릎·발목의 급성 관절염, 아킬레스건 압통, 손등의 여러 수포농포로 내원했다. 활막액은 호중구 우세 백혈구 4만/mm3였고 그람염색은 음성이었다. 가장 가능성 높은 진단은?

## 선택지

A. 포진상 피부염
B. 파종성 임균 감염
C. 라임병
D. 반응성 관절염

## 해설


관절염·건초염을 시사하는 통증과 소수의 말단 농포성 병변은 파종성 임균감염 B의 arthritis-dermatitis 증후군에 부합한다. 원문에는 여러 남녀 성 파트너가 있고 요도 분비물이 없다고 감염을 배제할 수 없다. 활막액 그람염색·배양이 음성일 수 있으나 병인은 임균의 파종이며 반응성 관절염 같은 단순 무균성 관절염으로 분류하면 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003944 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 파종성 임균감염의 관절염을 무균성 관절염이라고 한 오류 교정; 성 노출·관절염·농포의 B 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003944
