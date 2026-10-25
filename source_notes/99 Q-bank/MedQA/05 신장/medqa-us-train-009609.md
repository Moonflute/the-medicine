---
type: qbank
schema_version: 1
id: medqa-us-train-009609
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9f766e47e6f95d91295bb0fa3616869f494b2340fb6d39fa880522857489de1a
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "calcium oxalate nephrolithiasis"
  - "칼슘 옥살산염 신장결석"
  - "dietary protein reduction"
related_disease_slugs:
  - MDUg7Iug7J6lL-yalOuhnOqysOyEnSAoVXJvbGl0aGlhc2lzKS5tZA
question_type: prevention
difficulty: standard
answer: "D"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
curation_status: "revised"
curation_reason: "고단백의 요중 oxalate 상승을 일률적 기전으로 단정하지 않고 정상 식이 칼슘 유지 원칙 보완."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

52세 여성이 왼쪽 옆구리에서 사타구니로 방사되는 산통으로 내원했다. 심한 통증으로 안절부절못하며 어머니와 함께 칼슘 옥살산염 신장결석 병력이 있다. 제2형 당뇨병과 고혈압이 있고 메트포르민, 메토프롤롤, 리시노프릴을 복용한다. 체중 감량 중이며 닭고기와 해산물 위주의 고단백 식단을 먹고 칼슘 섭취를 위해 요구르트를 많이 먹는다. 요구르트를 끊어야 하는지, 현재 결석 원인인지 묻는다. 향후 신장결석 위험을 줄이는 생활습관은 무엇인가?

## 선택지

A. 전해질 섭취 증가
B. 설포닐우레아로 변경
C. 칼륨보존 이뇨제로 변경
D. 단백질 섭취 감소

## 해설

과도한 비유제품 동물성 단백 섭취를 줄이는 것이 이 사례의 선택지 중 적합하다. 산 부하·낮은 citrate·높은 uric acid 배설 등이 결석 위험에 기여할 수 있다. 식사 칼슘을 무조건 끊으면 장에서 oxalate 흡수가 늘 수 있어 정상적인 식이 칼슘은 유지한다. 충분한 수분과 염분 조절도 중요하며 단백 제한 하나가 모든 결석의 최선이라는 뜻은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009609

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 고단백의 요중 oxalate 상승을 일률적 기전으로 단정하지 않고 정상 식이 칼슘 유지 원칙 보완.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://uroweb.org/guidelines/urolithiasis/chapter/metabolic-evaluation-and-recurrence-prevention
