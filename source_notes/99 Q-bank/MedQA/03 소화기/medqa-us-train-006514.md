---
type: qbank
schema_version: 1
id: medqa-us-train-006514
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:404cc8f735e7b631bd49104cc27e93b193156e94509855dfea016fd3e41f477e
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "약물 복약순응도"
  - "환자 교육"
  - "위식도역류질환"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsi53rj4Qg7Jet66WYIOyniO2ZmCAoR0VSRCkgKEdhc3Ryb2Vzb3BoYWdlYWwgUmVmbHV4IERpc2Vhc2UpLm1k
question_type: communication
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

위식도역류질환 환자에게 처음 처방한 PPI의 복용 시점을 설명했다. 환자가 집에 가서 어떻게 복용할지 제대로 이해했는지 확인하는 가장 좋은 방법은?

## 선택지

A. 복약 안내문을 읽어 보라고 한다.
B. 복용법을 이해했는지 예·아니오로 묻는다.
C. 집에서 언제 어떻게 먹을지 환자 말로 설명해 보도록 한다.
D. 처방전의 복용법을 다시 한번 읽어 준다.

## 해설


환자 자신의 말로 복약 계획을 설명하게 하는 되말하기(teach-back)는 오해를 바로 발견해서 고칠 수 있다. 설명을 들었다는 확인이나 자료 배부만으로 이해했다고 보지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 복약정보를 환자가 되말하도록 하는 teach-back C가 이해도 확인에 직접적이며 단순 인쇄물과 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006514
- https://www.ahrq.gov/health-literacy/improve/precautions/tool5.html
