---
type: qbank
schema_version: 1
id: medqa-us-train-003540
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:71f59e77a837707221b0dd91726c3e1a45945d9cb3d0f6caa786fd25ad715e29
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "pellagra"
  - "niacin deficiency"
  - "dementia"
  - "diarrhea and dermatitis"
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-y5mOunpCAoRGVtZW50aWEpLm1k
question_type: diagnosis
difficulty: complex
answer: D
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

영양 섭취가 불량하고 장기간 과음한 55세 환자가 설사와 인지 저하로 내원했다. 목과 손등처럼 햇빛에 노출되는 부위에 경계가 뚜렷한 과색소침착과 인설이 있다. 가장 가능성 높은 영양 결핍은?

## 선택지

A. 판토텐산
B. 비오틴
C. 리보플라빈
D. 니아신

## 해설

광노출 부위 피부염에 설사와 인지 저하가 동반되면 니아신 결핍에 의한 펠라그라를 고려한다. 영양 불량 환자에서는 다른 영양 결핍도 함께 살핀다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Pellagra 3D 중 dermatitis를 설염으로 잘못 기재. Niacin결핍 D 유지.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003540
- https://ods.od.nih.gov/factsheets/Niacin-HealthProfessional/
