---
type: qbank
schema_version: 1
id: medqa-us-train-000167
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:317333f88cbe7f3a270e3d80535c9617d12c5e1f708fc1aec6b5322a70b1b1a5
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "aortic stenosis"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDtmJHssKkgKEFvcnRpYyBTdGVub3NpcykubWQ
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

58세 남성이 지난 6개월간 간헐적으로 발생한 흉통에 대한 평가를 위해 응급실에 내원하였다. 병력상 그는 중등도의 운동 시 호흡곤란과 공장에서 일하는 동안 발생한 2회의 실신 에피소드가 있었다. 이 실신 에피소드들은 다른 사람들에 의해 목격되었으며 약 30초간 지속되었다. 환자는 발작 활동은 없었다고 진술한다. 활력징후는 혈압 121/89 mm Hg, 심박수 89회/분, 체온 37.0°C, 호흡수 16회/분이다. 신체 검진상 우측 제2늑간에서 점증-점감형(crescendo-decrescendo) 수축기 잡음이 들린다. 심전도 검사 결과 좌심실 비대가 확인되었다. 이 환자에게 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 심장 내 도자술(Cardiac chamber catheterization)
B. 흉부 X선 촬영
C. 조영제 없는 흉부 컴퓨터 단층촬영(CT)
D. 경흉부 심초음파(Transthoracic echocardiography)

## 해설


협착성 대동맥판막을 의심할 때 가장 먼저 비침습적 영상인 경흉부 심초음파로 판막 구조와 혈류를 평가한다. 이는 진단의 1차 단계이다. 따라서 정답은 경흉부 심초음파이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 운동성 흉통·호흡곤란·실신과 우2늑간 박출성 잡음/LVH는 AS 의심. 초기 판막 구조/중증도 평가 TTE D가 적합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000167
