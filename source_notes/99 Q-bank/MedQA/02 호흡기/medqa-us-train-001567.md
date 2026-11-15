---
type: qbank
schema_version: 1
id: medqa-us-train-001567
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1cd6c58c486e3da62f6f95055b035efbf02d3d3e7644bc4f9a42b7438e6db743
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "moderate persistent asthma"
  - "inhaled corticosteroid"
  - "LABA"
  - "asthma"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 남성이 기관지확장제 반응이 확인된 천식으로 진료 중이다. 매일 저용량 흡입 스테로이드를 바르게 사용하지만 주 5일 이상 증상이 있고 밤에도 반복해 깬다. 최근 감염은 없으며 해당 흡입기를 사용할 수 있다. 치료를 한 단계 높이는 방법으로 적절한 것은?

## 선택지

A. 흡입 스테로이드를 중단하고 살메테롤만 사용한다
B. 저용량 흡입 스테로이드/포르모테롤을 유지와 증상 완화에 모두 사용한다
C. 속효성 살부타몰만 매일 정기 사용한다
D. 매일 경구 프레드니솔론을 장기간 투여한다

## 해설


흡입법과 순응도를 확인했는데도 저용량 흡입 스테로이드로 조절되지 않으면 흡입 스테로이드/포르모테롤을 유지와 완화에 함께 쓰는 치료로 올릴 수 있다. 모든 흡입 스테로이드/장기작용 베타₂작용제 조합을 완화제로 사용할 수 있는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 매일 증상·주3회 야간각성과 가역적 FEV1저하는 조절제 필요. 보기 중 low-dose ICS/LABA B가 LABA단독보다 적합.
- https://ginasthma.org/reports/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001567
- https://new.lungkorea.org/board/guide/view/14959
- https://ginasthma.org/2026-gina-strategy-report/
