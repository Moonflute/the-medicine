---
type: qbank
schema_version: 1
id: medqa-us-train-003466
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:436b61d2fb404d8cc75606b1a3df8ad0d8f9eeeda520e915d6756e8fb6cbdf35
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "mitral stenosis"
  - "rheumatic heart disease"
  - "increased left atrial pressure"
  - "atrial fibrillation"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yKueuqqO2MkOuniSDtmJHssKkgKE1pdHJhbCBTdGVub3NpcykubWQ
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
  - MDEg7Iic7ZmY6riwL-2MkOunieyniO2ZmC5tZA
question_type: mechanism
difficulty: complex
answer: D
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

42세 여성이 일주일간 2회의 실신으로 내원했다. 실신 후 즉시 회복되었고 혼란은 없었다. 5개월간 호흡곤란과 심계항진이 점점 심해졌으며 일상생활을 하기 어려웠다. 검사에서 경정맥 팽창, 무릎 아래 함요부종, 양쪽 폐기저부 수포음, 강하고 분열된 제2심음, 개방성음 뒤의 저음 이완기 잡음이 있었다. 심전도는 심방세동과 우축편위를 보였다. 이 소견들의 가장 가능성 높은 기전은?

## 선택지

A. 좌심실 이완기말 압력 증가
B. 좌우 단락 증가
C. 좌심실 수축력 감소
D. 좌심방 압력 증가

## 해설


심방압 상승은 좌심방에 혈액이 정체되어 폐정맥 압력이 상승하고, 이는 폐울혈 및 말초 부종을 일으킨다. 폐동맥 고압과 심방세동도 좌심방 압력 증가와 일치한다. 따라서 가장 가능성 높은 기전은 좌심방 압력 증가이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Opening snap+심첨 이완기 rumble의 MS가 좌심방압 상승 D→폐울혈/폐고혈압·AF를 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003466
