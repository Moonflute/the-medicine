---
type: qbank
schema_version: 1
id: medqa-us-train-009078
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cda7e00d68fe9fd63d1d230ea0e1d956efd047ed72c8c59e3c1003b5b2578eb2
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "diffuse large B-cell lymphoma"
  - "CD20"
  - "high-grade non-Hodgkin lymphoma"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uyhO2CtyDsnKDsgqwg66-466eM7ISxIOqxsOuMgCBC7IS47Y-sIOumvO2UhOyihSAoQnVya2l0dC1saWtlIERpZmZ1c2UgTGFyZ2UgQi1jZWxsIEx5bXBob21hKS5tZA
  - MDkg7ZiI7JWhL-u5hO2YuOyngO2CqCDrprztlITsooUgKE5vbi1Ib2Rna2luIEx5bXBob21hKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
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

67세 여성이 3주 동안 지속된 피로와 악화되는 등·복부 통증으로 내원했다. 과도한 야간 발한과 체중 4.6kg(10파운드) 감소도 있었고 3일 전부터 목이 부었다. 흡연과 음주는 하지 않는다. 4cm 크기의 쇄골상부 무통성 고정 림프절이 만져지고 비장은 왼쪽 늑골연 아래 2cm에서 만져진다. 혈색소 10.4g/dL, MCV 87μm³, 백혈구 5,200/mm³, 혈소판 190,000/mm³, LDH 310U/L이다. 흉부와 복부 CT에서 대동맥 주위, 액와, 종격동, 경부 림프절이 크게 커져 있고, 림프절 조직검사에서 높은 증식지수와 CD20 양성 림프구가 보인다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 변연부 림프종
B. 미만성 큰 B세포 림프종
C. 털세포 백혈병
D. 여포성 림프종

## 해설


짧은 기간에 진행한 큰 림프절, B 증상, LDH 상승과 CD20 양성·높은 증식지수는 선택지 중 미만성 큰 B세포 림프종(B)에 가장 부합한다. 변연부·여포성 림프종은 보통 더 완만한 경과를 보이며 털세포백혈병은 이 임상상과 다르다. 최종 분류에는 절제 조직의 형태와 면역표현형을 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009078 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 빠른 진행·B 증상·CD20 양성 고증식 B세포 림프종은 DLBCL B가 가장 적절. 다발성 큰 B세포라는 질환명 오기를 미만성으로 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009078
