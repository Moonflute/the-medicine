---
type: qbank
schema_version: 1
id: medqa-us-validation-001210
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:ec7b4b77d0f92a0660aabd522c0c4bd065d085753414d9567aa1b83da3ff7484
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "부동성 고칼슘혈증"
  - "침상 안정"
  - "저PTH성 고칼슘혈증"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: mechanism
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

75세 남성이 관상동맥우회술과 승모판 생체판막 치환술 후 중환자실에서 치료 중이다. 수술 후 4주 동안 침상에 누워 지냈고, 혈청 칼슘 11.1 mg/dL, 인산 1.0 mg/dL, PTH 9 pg/mL로 낮다. 심전도와 흉부 X선이 제시되어 있다. 이 환자의 고칼슘혈증을 일으킨 가장 가능성 높은 원인은?

## 선택지

A. 비갑상선성 질환 증후군
B. 부동
C. 악성종양
D. 원발성 부갑상선기능항진증

## 해설


정답 B. 수주간 중환자실 치료와 부동은 골재흡수를 늘려 PTH가 억제된 고칼슘혈증을 유발할 수 있다. 이는 제시 맥락에 부합하며 원발성 부갑상선기능항진은 낮은 PTH와 맞지 않는다. 부동이 모든 고칼슘혈증의 가장 흔한 원인이라는 뜻은 아니며 악성종양 등도 임상적으로 감별한다. ECG/흉부영상은 제공되지 않았으므로 실제 소견을 판독했다고 주장하지 않으며, 이 문제의 핵심 기전 추론은 장기 부동과 제시 호르몬 수치로 가능하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001210 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 장기 중환자실 부동의 골재흡수–저PTH 고Ca B 유지; 전반적 고Ca의 가장 흔한 원인이라는 과장 제거, 영상 누락 개별평가.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001210
