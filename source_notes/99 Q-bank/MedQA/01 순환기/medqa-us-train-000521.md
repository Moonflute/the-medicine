---
type: qbank
schema_version: 1
id: medqa-us-train-000521
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:16e724183b14d1384f72a68526f46728b33fa6659bc2c0682011d046c1a4f18f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "acute myocardial infarction"
  - "ventricular septal rupture"
  - "postmyocardial infarction syndrome"
  - "coronary artery dissection"
  - "papillary muscle rupture"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDsi6zrp4nsl7wgKEFjdXRlIFBlcmljYXJkaXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

하벽 심근경색 3일 뒤, 70세 남성에게 갑자기 폐부종과 저혈압이 생겼다. 심첨부에 새로운 수축기 잡음이 들리고 응급 심초음파에서 움직임이 불안정한 승모판 판엽과 심한 편심성 역류가 보인다. 가장 가능성 높은 합병증은?

## 선택지

A. 심실중격 파열
B. 좌심실 자유벽 파열
C. 지연성 심낭염
D. 유두근 파열

## 해설


심근경색 수일 뒤 유두근이 파열되면 승모판이 제대로 닫히지 않아 급성 중증 역류, 폐부종과 쇼크가 생긴다. 중격 파열은 좌우단락, 자유벽 파열은 혈심낭과 압전이 특징이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: inferior MI3일 후 갑작스러운 울혈과 심첨부 새 holosystolic murmur는 유두근파열→급성MR D. 흉골연 잡음 VSD와 위치 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000521
