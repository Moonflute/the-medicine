---
type: qbank
schema_version: 1
id: medqa-us-train-000723
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4f8299b10ef8dbd06c166cd377393c70b1293ea39528dcd5710546d2e0e20d86
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "coronary artery disease"
  - "essential hypertension"
  - "type 2 diabetes mellitus"
  - "peripheral artery disease"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 남성이 수개월째 200 m쯤 걸으면 종아리가 아프고 쉬면 몇 분 안에 좋아진다. 휴식통이나 궤양은 없고 발목–상완지수는 0.55이다. 스타틴·항혈소판제와 금연 치료를 시작했다. 보행능력을 높이기 위한 초기 치료는?

## 선택지

A. 계획된 보행 운동치료
B. 즉시 혈관 내 재개통술
C. 긴급 동맥 우회술
D. 보행을 피하고 하지 압박을 적용한다

## 해설


휴식통이나 조직 손상이 없는 안정적인 간헐적 파행의 초기에는 구조화된 운동치료가 보행능력을 개선한다. 적절한 약물과 운동 후에도 일상생활 제한이 크면 재개통술을 검토한다. 휴식통·허혈성 궤양이 있으면 별도로 신속한 혈관 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 전형 파행과 ABI0.5/0.6의 만성 증상성PAD 초기에는 구조화 운동 A가 적합. 곧바로 우회술/척수자극을 선택하지 않음.
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000723
- https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2024/05/09/15/00/2024-guideline-for-lower-extremity-pad
