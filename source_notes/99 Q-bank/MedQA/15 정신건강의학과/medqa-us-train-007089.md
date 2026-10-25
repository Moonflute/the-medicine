---
type: qbank
schema_version: 1
id: medqa-us-train-007089
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8f91c332259faf88f3fbca8fa10428915ecdad7034f3b65aab84892d2fe79c5f
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "급성 근긴장이상"
  - "할로페리돌 유발 추체외로 부작용"
  - "사경"
  - "안구운동발작"
  - "Acute dystonic reaction"
question_type: management
related_disease_slugs: []
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 여자가 근육이 뻣뻣해지고 아파서 응급실에 내원했다. 왼쪽 목 근육의 긴장과 경련이 점점 심해졌다고 한다. 아래를 보려고 하면 눈이 ‘고정된 것 같다’고 한다. 할로페리돌로 치료 중인 조현병 병력이 있다. 체온은 37.0°C(98.6°F), 맥박은 110회/분, 호흡수는 18회/분, 혈압은 115/71 mmHg이다. 신체검사에서 목이 심하게 뻣뻣하고 근육 경련이 있다. 머리가 왼쪽으로 심하게 기울어져 있으며 눈은 위쪽을 향한 채 고정되어 있다. 양측 폐의 공기 유입은 좋고 천명은 없다. 다음 중 가장 적절한 다음 치료는 무엇인가?

## 선택지

A. 벤즈트로핀
B. 단트롤렌
C. 할로페리돌
D. 프로프라놀롤

## 해설

할로페리돌 노출 후 발생한 통증성 사경과 지속적 상방주시(안구운동발작)는 급성 근긴장이상반응에 부합한다. 제시된 약물 중 항콜린제인 벤즈트로핀이 적절하다. 단트롤렌은 이 국소 급성 추체외로 반응의 표준 항콜린 치료가 아니고 프로프라놀롤은 주로 정좌불능에 고려한다. 원인 약물의 중단·감량 검토와 함께 급성 증상을 치료한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007089

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 벤즈트로핀을 '무증상 부교감 차단제'로 설명한 비문 교정. 사경·안구운동발작의 항콜린 치료 답 유지.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
