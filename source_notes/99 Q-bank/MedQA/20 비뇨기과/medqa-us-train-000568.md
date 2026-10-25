---
type: qbank
schema_version: 1
id: medqa-us-train-000568
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:48221e8374dbb2da080de674f68e93e63efbe51495a81cf6a58f98061df6166b
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "testicular mass"
  - "Testicular cancer"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-qzoO2ZmCDsooXslpEgKFRlc3RpY3VsYXIgY2FuY2VyKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

30세 남성이 기간을 알 수 없는 고환 종괴를 주소로 내원하였다. 환자는 2주 전 오른쪽 고환에서 이상한 점을 처음 발견했으나, 통증이 없고 저절로 나을 것이라 생각하여 긴급한 상황이 아니라고 판단했다고 진술하였다. 종괴를 처음 발견한 이후 변화는 없었으며, 환자는 여전히 통증을 부인하고 있다. 신체 검진상 오른쪽 고환은 압통이 없으며 단단한 종괴가 만져진다. 투과 조명 검사(transillumination test)는 음성이고, 종괴는 환납되지 않는다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 바늘 생검(Needle biopsy)
B. 고환 초음파(Testicular ultrasound)
C. 복부 및 골반 CT
D. 검사실 검사 시행

## 해설

단단한 무통성 고환 내 종괴가 의심되므로 먼저 음낭 초음파(B)로 고환 내/외 위치와 고형성 등을 평가한다. 악성 고환종양이 의심될 때는 통상 경음낭 바늘생검을 하지 않는다. 이것이 조직학적 확인 자체가 불필요하다는 뜻은 아니며 종양표지자 평가와 서혜부 접근 수술 등으로 진단·치료를 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 고환 초음파 B 유지, 조직검사가 전혀 필요없다는 해설을 경음낭 바늘생검 회피와 수술병리의 역할로 구분.
- 공식/학회 근거: https://uroweb.org/guidelines/testicular-cancer/chapter/diagnostic-evaluation

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000568
