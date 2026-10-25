---
type: qbank
schema_version: 1
id: medqa-us-train-004602
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3ee1b953d431375a1c81a26401fd9d4c8add4bc8aa7fdefa739a4a5fbe5772ca
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
question_type: association
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

6세 남아가 3일 동안 눈 주위가 점점 부어 부모와 함께 내원했다. 이 기간 동안 거품이 많고 연한 노란색인 소변을 보았다. 12일 전 인후통이 있었다. 피곤해 보인다. 체온은 37°C (98.6°F), 맥박은 분당 90회, 혈압은 105/65 mm Hg이다. 신체검사에서 눈 주위 부종과 하지 함요부종이 보인다. 심폐 진찰은 정상이다. 이 환자 상태와 가장 연관된 소변검사 소견은 무엇인가?

## 선택지

A. 백혈구 원주
B. 유리 원주
C. 적혈구 원주
D. 지방 원주

## 해설

거품뇨·부종은 신증후군을 시사하며 선택지 중 fattycast D가 부합한다. 심한단백뇨에서 지질을 함유한 세뇨관세포/oval fat body가 원주에 포함되어 생기며 혈청albumin·정량단백뇨로 확인한다. 지방이 신장에 단순침착해 생긴다고 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 신증후군 fattycast D 유지. 지방이 신장전체에 침착해서 생긴다는 기전 오류.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004602
