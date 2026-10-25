---
type: qbank
schema_version: 1
id: medqa-us-train-004321
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2d9123d27564c07ede915486d1fe01b747b296212355fadd67ffeeac543dae94
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "고칼슘혈증"
  - "비타민 보충제 과다"
  - "다뇨"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: 임상증례 객관식
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: machine-generated
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

55세 여자가 소변량 증가와 갈증 증가로 내원했다. 최근 일반의약품 비타민과 보충제를 여러 개 복용하기 시작했고 복통과 변비도 있다. 체중 변화는 크지 않으며 진료실 혈당은 96 mg/dL이다. 진단에 가장 도움이 될 검사는 무엇인가?

## 선택지

A. 피리독신 수치
B. 나이아신 수치
C. 칼슘 수치
D. 유리 T4 수치

## 해설


다뇨와 갈증이 동반된 경우 고칼슘혈증을 의심할 수 있지만, 비타민 보충제 과다 복용이 원인일 때 가장 중요한 검사는 혈청 칼슘 농도이다. 따라서 진단에 도움이 되는 검사는 칼슘 수치이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 정상혈당의 다뇨·변비·복통과 보충제노출은 hyperCa 의심; 혈청Ca C로 확인.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004321
