---
type: qbank
schema_version: 1
id: medqa-us-validation-000021
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:fba93b46a00bcdba2920a5e64aeeb0fdd84d809c0509fbb6471cb896ae65c06d
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "베르니케 뇌병증"
  - "티아민 결핍"
  - "알코올 사용장애"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy9lOyYrCDsgqzsmqkg7J6l7JWgIChBbGNvaG9sIFVzZSBEaXNvcmRlcikubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 노숙인 남성이 급성 혼돈으로 응급실에 왔다. 술과 정맥 약물 남용 병력이 있고 실조성 보행, 안근마비, 양쪽 하지 진동감각 저하, 모낭 주위 출혈, 잇몸 출혈, 멍이 많았다. 대적혈구성 빈혈, 저마그네슘혈증, 저혈당이 있었다. 다음 중 가장 적절한 치료는?

## 선택지

A. 엽산
B. 마그네슘
C. 티아민
D. 비타민 C

## 해설

혼돈·실조·안근마비와 영양결핍 위험은 Wernicke 뇌병증을 시사하므로 보기 중 비경구 thiamine(C)이 우선적인 특이 치료이다. 원문 혈당 47mg/dL의 저혈당도 즉시 교정해야 하며 thiamine 확보를 기다리느라 포도당 치료를 지연하지 않는다. 가능하면 thiamine을 먼저 또는 함께 투여하고, 마그네슘과 다른 영양결핍도 평가·보충한다. 말초신경 증상이나 피부 출혈 등은 복합 영양결핍을 시사할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 급성 Wernicke 치료 thiamine C 확인. 원문 glucose 47 저혈당은 thiamine만으로 교정되지 않아 동시 응급 교정을 명시.
- 공식/학회 근거: https://www.gov.uk/guidance/clinical-guidelines-for-alcohol-treatment/10-pharmacological-interventions
- 공식/학회 근거: https://aci.health.nsw.gov.au/ecat/adult/substance-withdrawal

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000021
