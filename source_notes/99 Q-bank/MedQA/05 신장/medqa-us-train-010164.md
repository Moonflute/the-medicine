---
type: qbank
schema_version: 1
id: medqa-us-train-010164
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d4c1bd8b11a566b75b03ba2c7c9cd492b1209bf6bd650ec7c2f692059b38fe56
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "신증후군"
  - "미세변화병"
  - "지방 원주"
related_disease_slugs:
  - MDUg7Iug7J6lL-yLoOymne2bhOq1sCAoTmVwaHJvdGljIFN5bmRyb21lKS5tZA
  - MDUg7Iug7J6lL-uvuOyEuOuzgO2ZlOuzkSAoTWluaW1hbCBDaGFuZ2UgRGlzZWFzZSkubWQ
question_type: diagnosis
difficulty: complex
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "지방 원주와 oval fat body를 같은 구조로 설명한 부정확한 문구 수정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

7세 여아가 아침에 양쪽 눈 밑이 붓는 증상으로 어머니와 함께 소아과에 내원했다. 며칠 전 계절성 인플루엔자 감염에서 회복했다. 체온 37°C, 혈압 100/67 mmHg, 맥박 분당 95회이다. 얼굴 부종과 양쪽 다리 2+ 함요부종이 있다. 혈청 알부민 2.1 g/dL, 중성지방 200 mg/dL, 콜레스테롤 250 mg/dL, 요시험지 단백 4+이다. 다음 중 이 환자의 소변에서 가장 잘 보일 원주는?

## 선택지

A. 지방 원주
B. 적혈구 원주
C. 과립 원주
D. 왁스 원주

## 해설

심한 단백뇨·저알부민혈증·고지혈증·부종은 신증후군을 지지한다. 여과된 지질·지단백이 세뇨관 세포에 흡수되고 지질 방울이나 지질을 포함한 세포가 원주 기질에 포획되어 지방 원주가 나타날 수 있다. Oval fat body는 지질을 포함한 세포이고 지방 원주 자체와 동일한 구조는 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010164

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 지방 원주와 oval fat body를 같은 구조로 설명한 부정확한 문구 수정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
