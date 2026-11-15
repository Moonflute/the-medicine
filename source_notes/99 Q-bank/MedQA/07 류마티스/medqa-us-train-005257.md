---
type: qbank
schema_version: 1
id: medqa-us-train-005257
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8e8a11d8b64716e9621d2df0060e2ea23c5b9e560efe72b0c1e193be3a592b44
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "건선성 관절염"
  - "손발톱 건선"
  - "염증성 관절염"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpC5tZA
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1N1bGZhc2FsYXppbmUubWQ
---

# MedQA US 임상문제

## 문제

53세 여성에게 피부 건선과 손가락·손목·무릎의 활동성 건선관절염이 있다. 소염진통제로 통증은 일부 줄었지만 여러 관절의 활막염이 지속된다. 임신 가능성과 약제 금기는 없다. 관절 손상을 줄이기 위한 초기 질병조절제는?

## 선택지

A. 인도메타신 장기 단독
B. 메토트렉세이트
C. 전신 스테로이드 장기 단독
D. 아세트아미노펜 단독

## 해설


여러 말초관절의 활막염에는 질병조절제를 일찍 사용한다. 의미 있는 피부 건선이 함께 있으면 메토트렉세이트가 우선 선택지이며, 소염진통제는 증상 완화용이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005257 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: PsA의 NSAID+MTX를 모든 환자에 필수 조합으로 제시한 설명을 다관절/손발가락염의 조기 DMARD와 증상치료로 수정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://ard.bmj.com/content/83/6/706

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005257
- https://doi.org/10.1136/ard-2024-225531
