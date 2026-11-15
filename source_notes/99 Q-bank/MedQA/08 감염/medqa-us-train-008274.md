---
type: qbank
schema_version: 1
id: medqa-us-train-008274
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f96668bab97433d0e6ba0fb457f48a4be8e32369fab50d8a99f4b532709a923b
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "neurocysticercosis"
  - "Taenia solium"
  - "ingestion of human fecal eggs"
related_disease_slugs:
  - MDgg6rCQ7Je8L-q4sOyDney2qS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

유행 지역 체류력이 있는 환자가 첫 발작으로 진료받았다. MRI에서 신경낭충증에 합당한 유충 낭종이 여러 개 보이고 발작은 조절됐다. 환자가 새로 한쪽 시야가 흐리다고 한다. 항기생충제를 시작하기 전에 우선 할 일은?

## 선택지

A. 장내 기생충 검사 결과만 기다린다
B. 안과 평가 없이 알벤다졸을 즉시 시작한다
C. 시야 증상은 뇌 병변 탓으로 보고 눈 검사는 생략한다
D. 안과에서 안저검사를 시행해 안구 내 낭충을 확인한다

## 해설


안구 내 낭충이 있는 상태에서 항기생충제로 염증이 생기면 시력이 손상될 수 있다. 신경낭충증에서 치료 전 안저검사를 하고 안구 내 병변이 있으면 제거 등 치료 순서를 전문팀과 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008274 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 발작·망막하 낭종·고리 병변은 낭미충증이며 사람 분변의 T. solium 충란 섭취 C. 돼지고기 낭미충 섭취에 의한 장내 조충증과 구분해 대조.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008274
- https://www.idsociety.org/practice-guideline/neurocysticercosis/
