---
type: qbank
schema_version: 1
id: medqa-us-train-002726
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:38a43c24ad7acf424750a6c479de2fc5cb5b29ca78a8a9e66291a4682d6ded4f
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "refeeding syndrome"
  - "hypophosphatemia"
  - "anorexia nervosa"
  - "nutritional rehabilitation"
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveyEseyLneyaleu2gOynhOymnSAoQW5vcmV4aWEgTmVydm9zYSkubWQ
question_type: investigation
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
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

영양결핍이 심한 20세 여성이 식사를 재개한 지 이틀 뒤 근력저하와 호흡곤란이 생겼다. 혈청 칼륨과 마그네슘은 정상인데 호흡근이 약해졌다. 재급식증후군으로 의심할 때 우선 확인할 전해질은?

## 선택지

A. 인산염
B. 나트륨
C. 칼슘
D. 염소

## 해설

재급식으로 인슐린이 증가하면 인산이 세포 내로 이동해 저인산혈증이 생길 수 있다. 심하면 호흡근 약화가 나타나므로 인산을 확인하고, 칼륨·마그네슘도 함께 추적한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Refeeding 저P A는 유지. 저K/저Mg가 나중에만 생긴다는 위험한 시간 순서 단정 수정.
- https://www.nice.org.uk/guidance/cg32/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002726
- https://doi.org/10.1002/ncp.10474
