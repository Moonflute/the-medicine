---
type: qbank
schema_version: 1
id: medqa-us-train-003485
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:27949d0015b7590d5ded35c983e48974650c3107559c67af72b0100e4ada8740
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "minimal change disease"
  - "nephrotic syndrome"
  - "proteinuria"
  - "prednisolone"
related_disease_slugs:
  - MDUg7Iug7J6lL-uvuOyEuOuzgO2ZlOuzkSAoTWluaW1hbCBDaGFuZ2UgRGlzZWFzZSkubWQ
  - MDUg7Iug7J6lL-yLoOymne2bhOq1sCAoTmVwaHJvdGljIFN5bmRyb21lKS5tZA
  - MDUg7Iug7J6lL-q4sOumveyEsSDri6jrsLHrh6ggKE9ydGhvc3RhdGljIFByb3RlaW51cmlhKS5tZA
question_type: management
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

5세 남아가 4일 전부터 시작된 양쪽 다리와 눈 주변의 통증 없는 부종으로 내원했다. 부종은 아침에 더 심했고 중증 상기도감염에서 회복된 지 8일 되었다. 진찰에서 얼굴과 양쪽 다리에 2+ 함요부종이 있었고 혈압은 110/65 mmHg였다. 검사에서 혈청 알부민 2.4 g/dL, 중성지방 250 mg/dL, 콜레스테롤 300 mg/dL, 소변 단백 4+였다. 다음 중 가장 적절한 초기 치료는?

## 선택지

A. 알부민 주입
B. 에날라프릴
C. 프레드니솔론과 사이클로포스파미드
D. 프레드니솔론

## 해설

저알부민혈증·고지혈증·단백4+·부종은 소아 신증후군이다. 전형적인 첫 발현 소아에서는 minimal change disease 가능성이 높아 prednisolone D가 초기 치료이다. 병리검사 없이 확진된 MCD라는 뜻은 아니며 혈압은 연령·성별·키에 따른 기준으로 평가한다. Cyclophosphamide를 처음부터 병용하지 않고 albumin 투여도 용적상태/특정 적응증 없이 일률 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 전형적 첫 소아 신증후군 prednisolone D 유지. BP110/65를 무조건 정상으로 규정하거나 병리 확진 없이 MCD로 단정하는 설명을 한정.
- https://kdigo.org/wp-content/uploads/2025/04/KDIGO-2025-Guideline-for-Nephrotic-Syndrome-in-Children.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003485
