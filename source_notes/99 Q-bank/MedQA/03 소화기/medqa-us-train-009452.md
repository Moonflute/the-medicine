---
type: qbank
schema_version: 1
id: medqa-us-train-009452
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:83595fe459f793476dc16506338dd7cc2fc9588b6ebd606066f3c642e6407031
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "cholestatic pruritus"
  - "담즙정체성 소양감"
  - "portal vein thrombosis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

최근 여행력이 없는 70세 남자가 2주 동안 점점 심해지는 복부 가려움으로 내원했다. 피부가 노랗게 변했는지는 확실하지 않으며 비교용 사진이 없는 신분증을 가지고 있다. 진찰에서 간 형태는 정상이다. 혈청 Na 139 mmol/L, K 3.8, Cl 110, CO₂ 27, BUN 26 mg/dL, 크레아티닌 0.84 mg/dL, 혈당 108 mg/dL이다. 다음 중 제시된 병력과 가장 양립하기 어려운 것은 무엇인가?

## 선택지

A. 문맥 혈전증
B. 대상포진후 신경통
C. 진성적혈구증가증
D. 편평태선

## 해설


정답 A. 질문은 소양증과 가장 덜 부합하는 질환을 묻는다. 진성적혈구증가증은 수인성 소양증, 대상포진 후 상태는 신경병성 소양증, 편평태선은 가려운 피부 병변과 연결될 수 있다. 문맥혈전증 자체는 이들에 비해 전형적인 직접 소양증 원인이 아니다. 드문 문맥담도병증에 의한 담즙정체 가능성까지 완전히 배제한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009452 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: least compatible 부정형 질문을 뒤집어 정답 A가 소양증 원인에 부합한다고 한 해설 교체.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009452
