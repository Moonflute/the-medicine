---
type: qbank
schema_version: 1
id: medqa-us-train-008960
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ac3f302bed03c01ca4cabe094af5c71301b8bbeee90dbcade0136c1c2b91ffc8
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hemochromatosis"
  - "MCP arthropathy"
  - "iron studies"
related_disease_slugs:
  - MDkg7ZiI7JWhL-ycoOyghOyEsSDtmIjsg4nshozsuajssKnspp0gKEhlcmVkaXRhcnkgSGVtb2Nocm9tYXRvc2lzKS5tZA
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

51세 여성이 양손 둘째·셋째 중수지관절 통증으로 내원했다. 진찰에서 피부 색소침착이 있고 당뇨병과 원인 불명의 간효소 상승이 있다. 철과다증을 우선 평가할 검사는?

## 선택지

A. 항CCP 항체와 류마티스인자
B. 관절액 결정 검사
C. 트랜스페린 포화도와 혈청 페리틴
D. 혈청 구리와 세룰로플라스민

## 해설


특징적인 관절 침범에 색소침착과 당뇨병이 함께 있으면 철과다증을 고려한다. 페리틴은 염증이나 간질환만으로도 오를 수 있으므로 트랜스페린 포화도와 함께 본다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008960 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 2·3 MCP 관절병·색소침착·당뇨에서 철과다 의심 iron studies C는 초기 진단 접근상 일치.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://easl.eu/wp-content/uploads/2022/06/PIIS01688278220021121.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008960
- https://doi.org/10.1016/j.jhep.2022.03.033
