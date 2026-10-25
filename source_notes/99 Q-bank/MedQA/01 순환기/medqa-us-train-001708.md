---
type: qbank
schema_version: 1
id: medqa-us-train-001708
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:38ab1a95001fce25aefbbe722608a77c2c515e0ddeba7beb141af4d3266ca326
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "Dressler syndrome"
  - "post myocardial infarction pericarditis"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDsi6zrp4nsl7wgKEFjdXRlIFBlcmljYXJkaXRpcykubWQ
question_type: diagnosis
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9BbHRlcGxhc2UubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 남성이 호흡곤란과 날카로운 흉통으로 내원했다. 흉통은 누우면 심해지고 견갑골 능선으로 방사된다. 3주 전 전벽 ST분절 상승 심근경색을 알테플라제로 치료받고 안정적으로 퇴원했다. 체온은 38.1°C (100.5°F), 혈압은 131/91 mm Hg, 맥박은 99회/분이다. 심음은 멀리서 들리고 왼쪽 흉골 가장자리에서 마찰음이 들린다. 심전도에서 광범위한 오목한 ST 상승과 V2–V6 유도의 PR 하강이 보인다. 다음 중 상태의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 심근염
B. 심실류
C. 대동맥 박리
D. 드레슬러 증후군

## 해설


심근경색 후 2~10주에 발생하는 드레슬러 증후군은 자가면역성 심낭염으로, 흉통이 누울 때 악화되고 마찰음이 동반된다. 따라서 가장 가능성 높은 원인은 드레슬러 증후군이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: MI3주 뒤 발열·자세성 흉통/마찰음·diffuse ST/PR변화는 면역성 post-MI pericarditis/Dressler D.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001708
