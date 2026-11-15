---
type: qbank
schema_version: 1
id: medqa-us-train-004430
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a44a3badd418c16b2462d08976a6a2540f28e5df2d6fa2656d0c37bbf44ebab7
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "상부 위장관 출혈"
  - "소화성 궤양 출혈"
  - "출혈성 쇼크"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sg4HrtoAg7JyE7J6l6rSAIOy2nO2YiCAoVXBwZXIgR2FzdHJvaW50ZXN0aW5hbCBUcmFjdCkubWQ
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITqtqTslpEgKEdhc3RyaWMgVWxjZXIpLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUm9zdXZhc3RhdGluLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 남성이 최근 NSAID를 복용했고 대량 흑색변 뒤 창백하고 식은땀을 흘린다. 초기 수액 뒤에도 혈압 78/48 mmHg, 맥박 125회/분이다. 입원 직후 혈색소는 9.4 g/dL이다. 적혈구 수혈에 대한 적절한 판단은?

## 선택지

A. 출혈성 쇼크가 지속되므로 초기 혈색소가 더 떨어지기를 기다리지 않고 수혈한다
B. 혈색소가 7 g/dL 미만이 될 때까지 수혈을 보류한다
C. 내시경에서 출혈원이 확정된 뒤에만 수혈한다
D. 혈색소가 9 g/dL 이상이므로 수액만 반복한다

## 해설


활동성 대량출혈의 초기에 혈색소는 실제로 잃은 혈액량을 충분히 반영하지 못한다. 쇼크가 지속되면 안정 환자에게 적용하는 제한적 수혈 역치만 기다리지 않고 소생과 출혈 조절을 병행한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 수액후에도 지속되는 출혈성 관류저하에서는 Hb 숫자만 기다리지 않고 임상상으로 수혈 A를 판단.
- https://www.esge.com/assets/downloads/pdfs/guidelines/2026_a-2863-8314.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004430
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12285778/
- https://gi.org/guideline/upper-gastrointestinal-and-ulcer-bleeding/
