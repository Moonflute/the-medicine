---
type: qbank
schema_version: 1
id: medqa-us-test-001117
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:93e5efd8a923534fdbbac881f85486afdb4eb4f7a681e2c7477e5c6a660af3ea
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "섬유근육통"
  - "만성 광범위 통증"
  - "아미트립틸린"
  - "Fibromyalgia"
related_disease_slugs: []
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbWl0cmlwdHlsaW5lLm1k
---

# MedQA US 임상문제

## 문제

46세 여성이 5개월간 심한 근육통과 관절통으로 진료를 받으러 왔다. 통증의 위치와 강도는 변하며 아침 관절강직, 수면 부족으로 생각되는 하루 종일의 피로, 하지 저림, 복부팽만이 있었다. 신체진찰에서 목, 어깨, 요천추 부위의 대칭적인 근육 압통이 있었지만 근력과 심부건반사는 정상이었다. 혈색소 14.3 g/dL, ESR 12 mm/h, TSH 3.1 μU/mL, 요검사는 정상이다. 가장 적절한 치료는?

## 선택지

A. 테마제팜
B. 비타민 B12
C. 아미트립틸린
D. 메토트렉세이트

## 해설


정상 근력·반사·염증수치에 만성 광범위 통증·피로·수면장애가 있어 섬유근육통을 의심한다. 선택지 중 아미트립틸린(C)은 통증·수면 증상에 고려할 수 있다. 교육과 개인별 운동·수면·심리 관리가 기본이며 약물은 이득과 부작용을 평가해 선택한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-test-001117` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 섬유근육통과 선택지 C 유지. 아미트립틸린을 모든 환자의 필수 1차 치료로 단정하지 않고 운동·수면관리와 병행하는 선택약으로 제한.
- 범위: evidence-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng193/chapter/recommendations
- https://ard.bmj.com/content/76/2/318.long

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001117
