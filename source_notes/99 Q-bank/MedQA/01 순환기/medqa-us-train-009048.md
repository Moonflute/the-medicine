---
type: qbank
schema_version: 1
id: medqa-us-train-009048
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:543d13368083c980c39696fa7be1c3b166dc89f236d7fb0fd3af5ec3c6320273
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "hypertrophic obstructive cardiomyopathy"
  - "sudden cardiac death"
  - "dynamic outflow obstruction"
  - "Hypertrophic obstructive cardiomyopathy"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-u5hO2bhOyEsSDsi6zqt7zrs5Hspp0gKEh5cGVydHJvcGhpYyBDYXJkaW9teW9wYXRoeSkubWQ
question_type: prognosis
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

16세 남자가 정기 건강유지검사를 위해 내원했다. 건강하고 중대한 질환 병력은 없다. 키와 체중은 60백분위수이다. 폐 청진은 깨끗하다. 왼쪽 아래 흉골연을 따라 3/6등급 수축기 박출성 심잡음이 들리며 빠르게 쪼그려 앉으면 약해지고 발살바 수기를 하면 강해진다. 이 환자에서 위험이 증가하는 합병증은 무엇인가?

## 선택지

A. 혈관이형성
B. 감염성 심내막염
C. 심장 돌연사
D. 폐출혈

## 해설

쪼그려 앉으면 약해지고 발살바로 강해지는 수축기 잡음은 동적 좌심실 유출로 폐쇄를 동반한 비후성 심근병증을 시사한다. 이 질환에서는 심실성 부정맥에 의한 심장 돌연사 위험이 증가하므로 C가 적합하다. 동맥관 협착이 원인이라는 설명은 잘못이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: HCM의 돌연사 원인을 동맥관 협착으로 잘못 연결한 해설을 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009048
