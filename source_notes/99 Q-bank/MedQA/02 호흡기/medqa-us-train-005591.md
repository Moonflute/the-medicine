---
type: qbank
schema_version: 1
id: medqa-us-train-005591
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ecf3737993ad37f5494853062d36fbd00b3abbf31df67a7cede5ce288a1bcfc1
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "흡인성 폐렴"
  - "뇌졸중 후 연하장애"
  - "우상엽 폐침윤"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
question_type: mechanism
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
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

58세 여성이 허혈성 뇌졸중을 앓은 뒤 물을 마실 때마다 기침이 나고 목소리가 젖은 듯 변한다. 최근 누워 지내는 동안 발열과 가래가 생겼고 오른쪽 폐의 중력 의존 부위에 침윤이 보인다. 폐렴을 일으킨 가장 중요한 소인은?

## 선택지

A. 생활보조시설 거주 자체
B. 수년 전의 과음 병력
C. 뇌졸중에 따른 구인두 연하장애
D. 위염 때문에 위산 억제제를 복용한 것

## 해설


물을 삼킨 뒤 기침과 젖은 목소리는 구인두 연하장애의 단서다. 뇌졸중 뒤에는 기도 보호가 약해져 음식과 분비물이 흡인될 수 있다. 삼킴 기능을 평가하고 결과에 맞춰 안전한 섭취 방법을 정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/선지/정답 C/해설 읽음. 뇌졸중 후 잔여 신경학적 결손과 악취 객담·의존성 폐분절 침윤은 연하/기도보호 저하에 의한 흡인 위험을 지지. 과거 금주 4년/시설 거주보다 직접적인 원인 비교가 일치. ABG 수치 전반의 생리적 정합성 확정이나 치료 검증은 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005591
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10405672/
