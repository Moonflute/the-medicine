---
type: qbank
schema_version: 1
id: medqa-us-train-010046
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2a63a6da78a1d1e88f0fcdde499c555b54f5a9c3e5422b7a6e1f3da9cee0f0fd
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "폐쇄성 수면무호흡증"
  - "수면다원검사"
  - "코골이"
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yImOuptCDrrLTtmLjtnaHspp0gKFNsZWVwIEFwbmVhIFN5bmRyb21lKS5tZA
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

66세 남성이 6개월 동안 지속된 피로로 내원했다. 매일 아침 피곤하게 깨어나고 일주일 대부분의 날 낮에 졸려 오후에 한 시간씩 낮잠을 잔다. 아내는 한밤중에 코를 곤다고 한다. 심부전과 심방세동 병력이 있고 아스피린, 아토르바스타틴, 리시노프릴, 메토프롤롤, 와파린을 복용한다. 매일 저녁 와인 1~2잔을 마시고 흡연은 하지 않는다. 키 175cm, 체중 96kg, BMI 31.3kg/m²이다. 혈압 142/88 mmHg, 맥박 분당 98회, 호흡수 분당 22회이다. 구강 진찰에서 낮게 위치한 입천장이 보이고 심장 진찰에서 불규칙한 불규칙 리듬이 있으나 잡음은 없다. 다음 중 가장 적절한 처치는?

## 선택지

A. 이비인후과 평가
B. 야간 맥박산소측정
C. 수면검사실에서 시행하는 수면다원검사
D. 심초음파

## 해설


주간 졸림·수면 무호흡 증상과 코골이는 폐쇄성 수면무호흡증을 시사한다. 확진을 위해서는 수면다원검사가 필요하다. 따라서 가장 적절한 검사는 수면다원검사이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 비만·코골이·주간졸림과 유의한 심장질환이 있어 실험실 수면다원검사 C가 적합하며 단순 야간 산소측정만으로 확진하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010046
