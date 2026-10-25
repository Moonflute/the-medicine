---
type: qbank
schema_version: 1
id: medqa-us-validation-000093
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:b68d1850ae29bac68a14464156b8005056bb0ab3ebba9d3cc99742a15e907b36
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "마르팡 증후군"
  - "수정체 탈구"
  - "FBN1"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uniOultO2MoSDspp3tm4TqtbAgKE1hcmZhbiBTeW5kcm9tZSkubWQ
question_type: diagnosis
difficulty: standard
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

19세 여성이 오른쪽 눈의 갑작스러운 시력저하로 진료를 받으러 왔다. 키가 크고 마른 체형, 긴 손가락, 왼쪽 뺨의 갈색 모반, 오른쪽 수정체의 상측 측두방향 아탈구가 있었다. 가장 가능성 높은 진단은?

## 선택지

A. 관절 과운동성 증후군
B. 스터지-웨버 증후군
C. 엘러스-단로스 증후군
D. 마르팡 증후군

## 해설


키가 크고 마른 체형, arachnodactyly와 수정체의 상측·측두측 아탈구는 Marfan syndrome D를 가장 지지한다. 탈구된 구조는 결막이 아니라 수정체이다. 얼굴의 갈색모반 자체는 Marfan의 특징적 진단소견이 아니므로 이 소견으로 진단을 정당화하지 않는다. 실제 진단은 대동맥·안과·전신 기준과 가족/유전 정보를 종합한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000093 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수정체 아탈구를 결막탈구로 부르고 갈색모반을 Marfan 핵심징후라 한 오류 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000093
