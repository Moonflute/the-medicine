---
type: qbank
schema_version: 1
id: medqa-us-train-003483
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:20350c7cb1f0d1cf992cc051c5006cb1a04156344815a9b6850b19aa5c065790
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "spontaneous pneumothorax"
  - "emphysematous bleb rupture"
  - "hypoxemia"
  - "smoking-related lung disease"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
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

65세 남성이 자동차 엔진을 수리하던 중 갑자기 심한 호흡곤란이 발생해 응급실에 왔다. 다양한 화학물질과 흡입제를 사용했고, 52갑년의 흡연력이 있다. 현재 100% 산소를 투여받고 있지만 산소포화도는 77%였다. 맥박은 120회/분, 호흡수는 29회/분이며 오른쪽 상부 폐야의 호흡음이 감소했다. 다음 중 가장 가능성 높은 진단을 설명하는 소견은?

## 선택지

A. 순환 적혈구에 Fe3+가 포함된 헤모글로빈
B. 심박출량 감소에 따른 폐부종
C. 폐기종성 수포의 파열
D. 심한 기관지수축

## 해설

오랜 흡연력과 갑작스러운 호흡곤란·편측 호흡음 감소는 폐기종성 bleb/bulla 파열에 의한 이차성 자발기흉 C를 시사한다. 파열로 흉막강에 공기가 들어가 폐가 허탈한다. 화학물질 관련 methemoglobinemia는 산소반응 저하를 설명할 수 있지만 국소 편측 호흡음 감소를 더 잘 설명하지 않는다. 실제 산소 장치의 FiO2와 영상은 확인해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 흡연자의 편측 호흡음 감소는 bleb 파열 C. 벌브·폐외부 공기라는 부정확한 표현 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003483
