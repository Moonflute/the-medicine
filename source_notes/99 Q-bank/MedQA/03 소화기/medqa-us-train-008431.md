---
type: qbank
schema_version: 1
id: medqa-us-train-008431
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e0fc192eca40933f6d14b2ed9f6067c789609553c02336cb548546b2f38e6f31
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "mesenteric ischemia"
  - "ischemic bowel disease"
  - "systemic lupus erythematosus vasculitis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzKS5tZA
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tl4jtmIjshLEg64yA7J6l7Je8IChJc2NoZW1pYyBDb2xpdGlzKS5tZA
question_type: diagnosis
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

52세 여성이 식후 악화되는 간헐적이고 광범위한 복통과 여러 차례의 설사로 내원했으며, 마지막 설사는 혈변이었다. 증상은 6개월 전부터 있었지만 최근 악화되었다. 증상이 시작된 후 체중이 상당히 감소했다. 과거력으로 약물 조절이 어려운 전신홍반루푸스(SLE)가 있다. 혈압 100/70mmHg, 체온 37.1°C(98.8°F), 맥박 95회/분이다. 신체검사에서 심한 통증을 호소하고 복부에 경미한 광범위 압통이 있다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 장 허혈성 질환
B. 궤양성 대장염
C. 소장 폐색
D. 급성 췌장염

## 해설


식후 악화되는 통증과 체중감소, 새 혈변 및 진찰 소견보다 심한 통증은 장허혈(A)에 부합한다. SLE에서는 혈관염이나 혈전 등 혈류장애가 관련될 수 있지만 원문만으로 기전을 확정하지는 못한다. BP100/70 자체를 쇼크로 단정하지 않으며 급성 악화에는 신속한 추가 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008431 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 식후통·체중감소·혈변과 진찰보다 심한 통증은 장허혈 A. BP100/70을 쇼크라고 하거나 SLE혈관염을 입증된 원인으로 확정하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008431
