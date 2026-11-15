---
type: qbank
schema_version: 1
id: medqa-us-train-006990
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:af24c8da7891238f5ff8c8b77c4230b08b7fb934be3fb7f13d370bda691b657a
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "알파-1 항트립신 결핍증"
  - "범소엽성 폐기종"
  - "만성 폐쇄성 폐질환"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 남성이 수년간 진행한 운동 시 호흡곤란으로 내원했다. 흡연력은 3갑년이다. 폐활량검사에서 지속적 기류제한이 있고, 흉부 CT에서 양쪽 하엽에 범소엽성 폐기종이 보인다. 기저 질환을 확인하기 위해 먼저 시행할 혈액검사는?

## 선택지

A. 혈청 총 IgE
B. 항핵항체
C. 혈청 알파-1 항트립신 농도
D. 혈청 안지오텐신 전환효소

## 해설


적은 흡연력으로 설명하기 어려운 젊은 연령의 하엽 우세 범소엽성 폐기종은 알파-1 항트립신 결핍을 시사한다. 혈중 농도를 먼저 확인하고, 낮거나 의심이 계속되면 유전자형이나 표현형 검사로 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 젊은연령·적은흡연기간의 하엽범소엽폐기종 양상은 α1antitrypsin C 평가를 지지.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006990
- https://publications.ersnet.org/content/erj/50/5/1700610
