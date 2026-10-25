---
type: qbank
schema_version: 1
id: medqa-us-test-000084
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:8c988d641a4b12931e5d37e3f68c95bb5dfb81f32cca006d88c635d31899b2e6
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "류마티스성 다발근통"
  - "거대세포동맥염"
  - "턱 파행"
  - "Giant cell arteritis"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: prevention
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

60세 여성이 평가를 위해 딸과 함께 내원했다. 딸은 어머니가 최근 아침에 머리를 빗기 어려워졌다고 한다. 아버지가 허혈성 뇌졸중을 앓은 가족력이 있고 과거력으로 게실증이 있지만 약물은 복용하지 않는다. 혈압 120/70 mmHg, 맥박 분당 75회, 호흡수 분당 14회, 체온 37.6°C이다. 목이 뻣뻣하고 양쪽 어깨 압통이 있으나 근력은 정상이다. ESR 65 mm/h, CRP 44 mg/dL이다. 다음 중 어떤 증상에 대해 선별검사를 해야 하는가?

## 선택지

A. 턱 파행
B. 헬리오트로프 발진
C. 위식도 역류
D. 은백색 인설을 동반한 분홍색 판

## 해설


정상 근력에 아침 어깨·목 통증과 높은 염증수치가 있어 류마티스성 다발근통을 의심한다. 거대세포동맥염이 동반될 수 있으므로 씹을 때 턱 근육의 허혈성 통증인 턱 파행(A), 새 두통·시각 증상을 확인한다. 턱 파행은 단순 턱관절 운동제한과 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-test-000084` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 보존된 근력·어깨 강직과 높은 염증수치는 PMR, 동반 GCA 증상 확인 A. 해설에 없던 턱 운동제한을 생성한 부분 교정.
- 범위: evidence-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24632

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000084
