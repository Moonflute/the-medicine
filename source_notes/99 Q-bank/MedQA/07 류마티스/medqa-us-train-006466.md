---
type: qbank
schema_version: 1
id: medqa-us-train-006466
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:74163e56a572c6cae20ab84b454ce52ec3424d436580b4358d9ab8d8c9ebd460
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "마르팡 증후군"
  - "피브릴린-1 결함"
  - "거미손가락"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uniOultO2MoSDspp3tm4TqtbAgKE1hcmZhbiBTeW5kcm9tZSkubWQ
question_type: diagnosis
difficulty: complex
answer: D
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

13세 여아가 특히 위턱의 치통을 호소하여 구강외과에 의뢰되었다. 과거력에서 6세에 동맥관 개존증을 수술로 교정받았다. 체온은 37.0ºC(98.6°F), 맥박은 분당 90회, 호흡수는 분당 18회, 혈압은 110/78 mm Hg이다. 키는 157.5cm(5ft 2in), 체중은 50kg(110lb)이며 몸통에 비해 팔이 불균형하게 길다. 거미손가락과 중등도 관절 이완도 있다. 구강 내에서 치아가 빽빽하고 입천장이 높고 좁다. 다음 중 이 상태에서 결함이 있을 가능성이 가장 높은 단백질은?

## 선택지

A. 카베올린 및 사르코글리칸 단백질
B. 에메린
C. 라민 A
D. 피브릴린-1

## 해설


긴 사지·거미손가락·관절이완과 높고 좁은 구개는 Marfan 증후군을 시사하며 FBN1이 만드는 fibrillin-1(D)과 연관된다. Fibrillin-1은 세포외기질 미세섬유 구성과 탄성조직 구조·성장인자 조절에 중요한 단백질이다. 혈소판 응집의 주된 수용체/리간드 단백질로 설명하지 않는다. PDA 병력 자체가 Marfan 확진 소견은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006466 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Fibrillin-1의 역할을 혈소판 응집으로 잘못 연결한 기전을 미세섬유/탄성조직 구조로 교체했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006466
