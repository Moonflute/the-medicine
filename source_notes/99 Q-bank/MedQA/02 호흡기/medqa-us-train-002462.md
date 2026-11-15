---
type: qbank
schema_version: 1
id: medqa-us-train-002462
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5e14c53befaa115ee84977f6d016718caa04bf277f051696bd06ab07e1af2c48
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "pleural empyema"
  - "retained hemothorax"
  - "post-traumatic infection"
related_disease_slugs: []
question_type: diagnosis
difficulty: complex
answer: C
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

32세 남성이 오른쪽 갈비뼈 골절을 입고 3주 뒤 발열과 오른쪽 흉통으로 내원했다. 흉부 CT에서 흉막이 두꺼워지고 조영되는 두 층 사이에 격벽이 있는 액체가 고여 있다. 천자하자 걸쭉한 고름이 나왔다. 액체가 고인 공간과 진단으로 맞는 것은?

## 선택지

A. 폐실질 – 폐농양
B. 심낭강 – 화농성 심낭염
C. 흉막강 – 농흉
D. 기도 – 화농성 기관지염

## 해설

흉막 두 층 사이에 고름이 모이면 농흉이다. 폐 실질 내부에 만들어지는 폐농양과 위치가 다르다. 흉막 감염에서는 적절한 항생제와 함께 배액 필요성을 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Split pleura+외상 후 발열은 농흉 C. 흉막강 고름을 고형성 물질로 정의한 오류 수정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002462
- https://thorax.bmj.com/content/78/Suppl_3/s1
