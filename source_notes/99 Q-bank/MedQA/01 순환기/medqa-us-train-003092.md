---
type: qbank
schema_version: 1
id: medqa-us-train-003092
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:17c0c7e4e46db58b69fe8b1be842fb440a4cc441da7fd5f175dfaac5d6ca95e2
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "Marfan syndrome"
  - "FBN1 mutation"
  - "aortic root dilation"
  - "aortic aneurysm"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uzteu2gCDrjIDrj5nrp6XrpZggKEFiZG9taW5hbCBBb3J0aWMgQW5ldXJ5c20pLm1k
  - MDEg7Iic7ZmY6riwL-uniOultO2MoSDspp3tm4TqtbAgKE1hcmZhbiBTeW5kcm9tZSkubWQ
question_type: risk_factor
difficulty: simple
answer: A
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

정기검진에서 건강한 12세 남아가 키가 크고 팔 길이가 넓으며 경미한 척추측만증이 있는 것으로 확인되었다. 흉부 청진에서 심잡음이 들리고 경흉부 심초음파에서 대동맥근 확장과 대동맥판 역류가 보인다. 피브릴린-1 유전자 돌연변이가 양성이며 혈장 호모시스테인 수치는 상승하지 않았다. 다음 중 어떤 합병증의 위험이 가장 높은가?

## 선택지

A. 대동맥류
B. 혈전성 사건
C. 불임
D. 갈색세포종

## 해설

FBN1 변이·긴 사지·대동맥근 확장은 Marfan 증후군에 부합하며 대동맥류 A와 대동맥 박리/파열 위험이 증가한다. 대동맥판 역류는 근부 확장에 동반될 수 있으나 주요 치명적 합병증을 판막 파열이라고 부르는 것은 부정확하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Marfan의 주요 대동맥 합병증을 판막 파열로 잘못 표현. 대동맥류 A와 박리·파열로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003092
