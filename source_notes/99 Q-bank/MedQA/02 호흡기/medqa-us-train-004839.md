---
type: qbank
schema_version: 1
id: medqa-us-train-004839
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d7343eff4a0118ea16f1402e3375df415d3b6304ac7c9ba17bd9426f76d47ac8
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "천식"
  - "소아 천식"
  - "알레르기성 천식"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: diagnosis
difficulty: standard
answer: A
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

4세 남아가 12월에 3개월 전부터 간헐적인 호흡곤란과 비생산성 기침이 반복되어 내원했다. 증상은 잠들기 전이나 밤에 잠에서 깰 때 나타나며, 어린이집에서 놀 때에도 호흡곤란을 호소한다. 땅콩 알레르기 병력이 있다. 진찰에서 경미하고 산재한 천명음이 들리며 흉부 X선은 정상이다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 천식
B. 심부전
C. 원발성 섬모운동 이상증
D. 기관연화증

## 해설


밤에 악화되는 호흡곤란·천명·알레르기 병력이 있는 4세 소아는 알레르기성 천식이 가장 흔한 원인이다. 심부전·섬모운동 이상·기관연화증은 이 연령대와 증상 패턴에 덜 부합한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 아토피 소아의 반복 야간 천명과 정상 CXR는 천식 A에 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004839
