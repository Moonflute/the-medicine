---
type: qbank
schema_version: 1
id: medqa-us-train-007164
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1bad87e5538c6c7ae06b3a0472b4cec478586598d5c94cf5bf822749d9e02354
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "혈우병 A"
  - "혈관절증"
  - "인자 VIII 결핍"
  - "PTT 연장"
  - "Hemophilia A"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2YiOyasOuzkSAoSGVtb3BoaWxpYSkubWQ
question_type: investigation
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

4세 아이가 가벼운 외상 뒤 반복적으로 혈관절증을 보인다. 혈소판 수와 PT는 정상인데 aPTT는 연장됐다. 정상 혈장과 혼합했을 때 aPTT가 정상으로 교정됐다. 혈우병 A와 B를 구분할 검사는?

## 선택지

A. D-이합체
B. 혈소판 응집검사만 시행
C. aPTT만 반복
D. 제VIII인자와 제IX인자 활성 검사

## 해설


혼합검사에서 교정되면 응고인자 결핍을 우선 의심한다. 혈우병 A와 B는 임상상이 겹치므로 제VIII인자와 제IX인자 활성을 직접 측정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007164 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 반복 혈관절증·포경 후 출혈의 내인성 경로 이상에서 aPTT D를 원문 대조 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007164
- https://doi.org/10.1111/hae.14046
