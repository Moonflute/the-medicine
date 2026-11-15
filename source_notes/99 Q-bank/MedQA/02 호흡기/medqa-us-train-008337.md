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

21세 남성이 충분히 자는데도 낮에 갑자기 잠들 때가 많다. 친구가 웃긴 말을 하면 수 초 동안 무릎이 풀리지만 그때 의식은 유지된다. 가끔 잠에서 깼을 때 잠시 몸을 움직이지 못한다. 가장 가능성 높은 진단은?

## 선택지

A. 폐쇄성 수면무호흡
B. 수면위상지연장애
C. 기면증
D. 미주신경성 실신

## 해설

심한 주간 졸림과 감정 자극에 따른 일시적 근력 소실(탈력발작)은 기면증을 시사한다. 수면마비는 동반될 수 있지만 그 소견만으로 진단하지 않는다. 야간 수면다원검사와 다중수면잠복기검사 등을 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 수면마비를 낮의 탈력발작과 혼동하고 없는 수면발작을 확정한 설명을 수정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008337
- https://aasm.org/wp-content/uploads/2018/01/MSLT-Guideline-at-a-Glance.pdf
