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

42세 여성이 양쪽 아킬레스힘줄과 손등 폄힘줄의 단단한 노란 결절로 내원했다. 아버지는 45세에 심근경색을 겪었다. 이 피부·힘줄 소견의 원인을 평가할 첫 검사는?

## 선택지

A. 혈청 요산 검사
B. 피부 병변의 세균배양
C. LDL 콜레스테롤을 포함한 지질검사
D. 혈청 칼슘 검사

## 해설

힘줄 황색종과 조기 관상동맥질환 가족력이 함께 있으면 가족성 고콜레스테롤혈증을 의심한다. 지질검사로 LDL 콜레스테롤을 확인하고, 의심이 높으면 임상 기준과 가족 평가를 진행한다. 눈꺼풀 황색판종만으로는 가족성 질환을 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 황색종/황색판종을 지방종으로 잘못 명명. 지질검사 C 유지.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002661
- https://www.kjim.org/journal/view.php?doi=10.3904%2Fkjim.2022.121
