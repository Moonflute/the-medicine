---
type: qbank
schema_version: 1
id: medqa-us-train-006214
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8d79c52019dc921c49c4459b3a7bb0e839b410d88600aca9144363dc6352f25b
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "급성 세포매개 이식거부"
  - "신장이식"
  - "정맥 내 스테로이드"
  - "Acute cellular rejection"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2PkO2PrOyekOy2qSDtj5DroLQgKFBuZXVtb2N5c3RpcyBQbmV1bW9uaWEpLm1k
question_type: management
difficulty: complex
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlsdGlhemVtLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
curation_status: "revised"
curation_reason: "가장 빠른 치료라는 표현을 생검상 급성 세포성 거부의 초기 치료로 정밀화."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

57세 여성이 소변량 감소로 내원했다. 2주 동안 매일 소변량이 줄었고 식이와 수분 섭취 변화는 없다. 루푸스 신염으로 말기 신장질환이 발생해 2개월 전 신장이식을 받았다. 이후 미코페놀레이트와 사이클로스포린을 처방대로 복용한다. 체온은 99°F(37.2°C), 혈압은 172/102 mmHg, 맥박은 분당 88회, 호흡수는 분당 17회, 산소포화도는 97%이다. 혈청 크레아티닌과 BUN이 상승하고 양측 하지에 2+ 함요부종이 있다. 폐는 깨끗하고 소변검사에서 단백이 증가했다. 배뇨 후 방광 스캔은 정상이며 신장생검에서 림프구 침윤과 내막 부종이 보인다. 다음 중 가장 적절한 관리의 다음 단계는 무엇인가?

## 선택지

A. 세프트리악손 추가
B. 딜티아젬 추가
C. 신장 절제술
D. 정맥 내 스테로이드 시작

## 해설

이식 두 달 뒤 이식신 기능 악화와 생검의 림프구 침윤·내막 변화는 급성 세포매개 거부반응을 지지한다. 선택지 중 정맥 corticosteroid가 초기 치료에 해당한다. 거부 유형·중증도·치료 반응에 따라 추가 치료가 달라지며 감염·폐색·약물 독성도 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006214

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 가장 빠른 치료라는 표현을 생검상 급성 세포성 거부의 초기 치료로 정밀화.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://kdigo.org/wp-content/uploads/2022/09/KDIGO-2009-Transplant-Recipient-Guideline-English.pdf
