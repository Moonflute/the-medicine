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
explanation_status: machine-generated
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

36세 남자가 2년 동안 가래를 동반한 기침과 반복되는 천명으로 내원했다. 이 기간 동안 증상의 중증도와 빈도가 서서히 증가했다고 한다. 콧물, 코막힘, 고열은 없다. 5년 동안 흡연해 왔다. 환경력상 직업성 폐질환 위험이 증가할 만한 요인은 없지만 집의 일부에 곰팡이가 자라고 있다. 체온은 37°C(98.6°F), 심박수는 80회/분, 혈압은 124/80 mmHg, 호흡수는 22회/분이다. 흉부 청진에서 양측 견갑골 아래 부위에 천명이 들린다. 흉부 고해상도 CT에서 양쪽 하엽에 광범위한 비정상적 저감쇠 영역과 단순화된 폐 구조가 보인다. 양쪽 하엽의 폐혈관 수가 감소하고 넓게 퍼져 있다. 이 환자의 진단에 가장 도움이 될 검사는 무엇인가?

## 선택지

A. 혈청 총 IgE 농도
B. 흡입 알레르겐 피부단자검사
C. 혈청 α1-항트립신 농도
D. 땀 염화물 농도

## 해설


범소엽성 폐기종은 알파‑1 항트립신 결핍으로 폐혈관 감소와 저감도 저음영이 나타난다. 혈청 α1‑항트립신 농도 측정이 진단에 가장 도움이 된다. 따라서 정답은 C이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 젊은연령·적은흡연기간의 하엽범소엽폐기종 양상은 α1antitrypsin C 평가를 지지.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006990
