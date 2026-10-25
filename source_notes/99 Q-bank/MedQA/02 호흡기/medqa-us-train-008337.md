---
type: qbank
schema_version: 1
id: medqa-us-train-008337
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7590c14d62c11f4de88094f1044403fd16c88db45f3161a5b1d4b389a01796a9
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "narcolepsy"
  - "sleep paralysis"
  - "hypnagogic hallucinations"
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q4sOuptOymnSAoTmFyY29sZXBzeSkubWQ
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
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

21세 남자가 주간 피로로 내원했다. 성적이 떨어지고 장학금을 잃을까 걱정한다. 잠들기 전과 깬 후 꿈같은 상태를 자주 경험하며 야간에 자주 깨면서 움직일 수 없다. 코골이는 없고 음주나 약물 남용도 없다. BMI 21 kg/m²이고 활력징후는 정상이다. 이 환자의 진단은?

## 선택지

A. 폐쇄성 수면무호흡
B. 수면위상지연증후군
C. 기면증
D. 알코올 금단

## 해설

주간 졸림, 입면·각성기의 꿈 같은 경험과 움직일 수 없는 수면마비는 기면증(C)을 시사한다. 수면마비는 감정 자극에 따른 탈력발작과 다르며, 이 문항에 탈력발작이 제시된 것은 아니다. 실제 진단에는 충분한 수면 여부를 확인하고 수면다원검사와 다중수면잠복기검사 등을 이용한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 수면마비를 낮의 탈력발작과 혼동하고 없는 수면발작을 확정한 설명을 수정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008337
