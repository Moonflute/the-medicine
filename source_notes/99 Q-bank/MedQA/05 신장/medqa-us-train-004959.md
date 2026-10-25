---
type: qbank
schema_version: 1
id: medqa-us-train-004959
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e745ffb6cb9028a47f2833d948d5810a99950afaefe6e9c2c30e0d0c06957e9d
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "상염색체 우성 다낭신"
  - "간 낭종"
  - "다낭신 가족력"
  - "Autosomal dominant polycystic kidney disease"
related_disease_slugs:
  - MDUg7Iug7J6lL-uLpOuCreyEsSDsvantjKUg7KeI7ZmYIChQb2x5Y3lzdGljIEtpZG5leSBEaXNlYXNlKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

41세 남자가 며칠 동안 소변이 갈색으로 변하고 복부 둘레 증가, 조기 포만감, 운동 시 호흡곤란이 있어 내원했다. 19년간 본태성 고혈압이 있고 리시노프릴과 하이드로클로로티아지드를 복용한다. 복부 초음파에서 양쪽 신장과 간에 다발성 낭종이 보이며 우상복부 종괴가 만져진다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 신세포암
B. 폰 히펠-린다우 증후군
C. 단순 신장 낭종
D. 상염색체 우성 다낭신

## 해설

양측 다발성 신낭종·간낭종·고혈압·혈뇨는 D의 상염색체우성 다낭신병에 부합한다. 원문의 아버지 뇌출혈은 관련 가능성이 있는 단서이지 아버지의 ADPKD 확진을 의미하지 않는다. 가족력 유무만으로 이 영상 패턴을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ADPKD의 영상 패턴은 유지하되 확진 가족력을 지어낸 해설 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004959
