---
type: qbank
schema_version: 1
id: medqa-us-train-002661
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f9387cf02220f63c393fd18dd442745ea7d9eba57e2c6d49fad704f6630a2e14
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "xanthomas"
  - "xanthelasma"
  - "familial hypercholesterolemia"
  - "lipid panel"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwgOyhseyEsSDqs6DsvZzroIjsiqTthYzroaTtmIjspp0gKEZhbWlsaWFsIEh5cGVyY2hvbGVzdGVyb2xlbWlhKS5tZA
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 여성이 팔꿈치와 무릎에 생겼다 사라지는 황색 돌기와 반점, 최근 눈꺼풀의 황색 돌기로 내원했다. 8년간 진료를 받지 않았으며 아버지는 55세에 심장마비로 사망했고 어머니는 뇌졸중을 앓았다. 무릎과 팔꿈치에 단단한 황갈색 구진, 눈 주변에는 작고 부드러운 구진이 있다. 원인을 설명하고 추가검사를 계획할 때 어떤 검사를 시행해야 하는가?

## 선택지

A. 생검
B. 셀리악 패널
C. 지질 패널
D. 적혈구침강속도

## 해설

팔꿈치·무릎의 황갈색 구진은 황색종, 눈꺼풀의 부드러운 황색 병변은 황색판종을 시사한다. 진피의 지질을 함유한 대식세포 축적이며 지방세포 종양인 지방종과 다르다. 조기 심혈관질환 가족력도 있어 지질 패널 C로 이상지질혈증을 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 황색종/황색판종을 지방종으로 잘못 명명. 지질검사 C 유지.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002661
