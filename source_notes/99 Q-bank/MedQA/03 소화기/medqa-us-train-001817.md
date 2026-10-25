---
type: qbank
schema_version: 1
id: medqa-us-train-001817
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:26b6ee6875a5d7fbe644a484e6e2d5b4e070119ca9dc18b2064afc2e36c4372a
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "perforated peptic ulcer"
  - "acute abdomen"
  - "abdominal auscultation"
related_disease_slugs:
  - MTEg7Jm46rO8L-q4ieyEsSDrs7Xspp0gKEFjdXRlIEFiZG9tZW4pLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC9QVUQg7LKc6rO1IChQZXJmb3JhdGlvbikubWQ
question_type: investigation
difficulty: complex
answer: D
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

41세 여성이 2시간 동안 갑자기 시작된 심한 복통으로 응급실에 왔다. 평소 모호한 복통이 자주 있었지만 이처럼 심한 적은 없었다. 통증이 생길 때마다 식사 후 호전되었다. 활력징후는 혈압 121/77 mm Hg, 맥박 91/min, 호흡 21/min, 체온 37°C (98.6°F)이다. 복부가 납작하고 단단하다. 신체진찰로 이 환자의 복부 불편감과 위통을 평가할 때 다음 단계는 무엇인가?

## 선택지

A. 복부 이동성 탁음을 확인한다
B. 최대 통증 부위를 타진한다
C. 최대 통증 부위를 가볍게 촉진한다
D. 복부를 청진한다

## 해설


복부가 단단하고 복통이 급성으로 시작했을 때 가장 먼저 복부 소리를 청진해 장폐색이나 복막염 여부를 평가한다. 청진은 복부 내 가스 이동이나 장음 감소를 확인해 급성 복부의 원인 감별에 필수적이다. 따라서 복부를 청진한다가 올바른 단계이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 질문은 급성복통의 전체 치료가 아니라 신체진찰 순서. 시진 뒤 청진 D를 타진/촉진보다 먼저 시행하는 맥락 확인.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001817
