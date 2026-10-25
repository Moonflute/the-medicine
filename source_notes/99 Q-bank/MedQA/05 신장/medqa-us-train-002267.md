---
type: qbank
schema_version: 1
id: medqa-us-train-002267
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:14f6cef192aba5632db653b3d24c68ddb440b3821fe81c6290236acef60e6977
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "erythropoietin-induced hypertension"
  - "end-stage renal disease"
  - "erythropoietin"
related_disease_slugs:
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
question_type: adverse_effect
difficulty: complex
answer: B
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

47세 여성이 추적 진료를 위해 내원했다. 제1형 당뇨병과 말기 신장질환이 있으며 최근 빈혈로 에리스로포이에틴을 시작했다. 마지막 혈액투석은 어제 받았다. 인슐린, 칼시트리올, 세벨라머도 복용한다. 맥박 68회/분, 호흡 12회/분, 혈압 169/108 mmHg이며 이전 방문에서는 혈압이 정상이었다. 심음은 정상이고 경동맥·대퇴·복부 잡음은 없다. 폐는 깨끗하다. 혈색소 12 g/dL, 크레아티닌 3.4 mg/dL, BUN 20 mg/dL이다. 다음 중 이 환자 고혈압의 가장 가능성 높은 원인은?

## 선택지

A. 칼시트리올 치료
B. 에리스로포이에틴 치료
C. 자율신경병증
D. 체액 과다

## 해설


에리스로포이에틴은 적혈구 생산을 촉진하지만 혈압 상승을 흔히 일으킨다. 환자의 고혈압은 에리스로포이에틴 투여와 가장 연관성이 높다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 투석 직후 체액과다 소견 없이 EPO 시작 후 새 고혈압은 erythropoietin B의 이상반응과 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002267
