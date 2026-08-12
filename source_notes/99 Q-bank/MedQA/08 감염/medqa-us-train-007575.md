---
type: qbank
schema_version: 1
id: medqa-us-train-007575
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fbe48e59ca91708a818c0cec9c5117f880da9de74f01b81efafbc275e9653e65
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "HIV 노출 후 예방요법"
  - "주사침 손상"
  - "3제 항레트로바이러스 치료"
  - "직업적 노출"
related_disease_slugs: []
question_type: management
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

26세 여대생이 주사침 손상으로 산업보건과에 내원했다. HIV 양성 환자에게서 채혈하다 바늘을 씌우는 과정에서 피부를 찔렀다. 즉시 베타딘으로 상처를 씻었다. 2년 전 의과대학 입학 당시 HIV 혈청검사는 음성이었고 한 명의 남성 파트너와만 지내며 정맥주사 약물 사용은 없다. 원인 환자는 최근 HIV를 진단받았고 CD4 수는 550/µL, 최근 바이러스량은 1,800,000 copies/mL이며 3일 전 HAART를 시작했다. 이 여학생의 노출을 관리하는 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 원인 환자의 유전자형 검사를 시행하고 결과에 맞춘 항레트로바이러스 치료를 시작한다
B. 여학생의 HIV 혈청검사를 반복하고 음성이면 3제 항레트로바이러스 치료를 시작한다
C. 여학생의 HIV 혈청검사를 반복하고 양성이면 3제 항레트로바이러스 치료를 시작한다
D. 여학생의 HIV 혈청검사를 채취하고 즉시 3제 항레트로바이러스 치료를 시작한다

## 해설


직업적 HIV 노출 후 2시간 이내에 즉시 3제 항레트로바이러스 사후예방(PEP)을 시작해야 하며, 혈청 검사는 6주 후에 시행한다. 따라서 혈청검사를 채취하고 즉시 PEP를 시작한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007575
