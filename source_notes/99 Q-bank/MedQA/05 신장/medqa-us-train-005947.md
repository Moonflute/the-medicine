---
type: qbank
schema_version: 1
id: medqa-us-train-005947
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:980d258c6cb72cd328a0080aa161a00a1d3988e1ef046f1c097789e4144060a3
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "상염색체 우성 다낭성 신장질환"
  - "가족 선별검사"
  - "신장 초음파"
related_disease_slugs:
  - MDUg7Iug7J6lL-uLpOuCreyEsSDsvantjKUg7KeI7ZmYIChQb2x5Y3lzdGljIEtpZG5leSBEaXNlYXNlKS5tZA
question_type: investigation
difficulty: complex
answer: C
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

42세 남성이 상염색체우성 다낭성 신장질환으로 진단됐다. 무증상인 36세 여동생이 검사 결과의 의미를 상담받고 자신도 검사받기를 원한다. 첫 영상검사는?

## 선택지

A. 복부 조영 CT
B. 신장 생검
C. 신장 초음파
D. 배뇨방광요도조영술

## 해설

위험이 있는 성인 혈연가족을 영상으로 평가할 때 신장 초음파를 우선 사용한다. 결과는 나이별 기준으로 해석하며 젊은 사람의 음성 검사만으로 질환을 완전히 배제할 수 없는 경우가 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. ADPKD 가족 선별 초음파의 적절성을 유지하되 성인 위험가족의 상담·연령별 해석 범위를 명시.
- https://kdigo.org/wp-content/uploads/2026/04/KDIGO-2025-ADPKD-Guideline.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005947
- https://kdigo.org/guidelines/autosomal-dominant-polycystic-kidney-disease-adpkd/
