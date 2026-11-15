---
type: qbank
schema_version: 1
id: medqa-us-validation-000686
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:810939b4b165269774a0e9238681171e246f3f89a5bec5afff5d275fc44e8281
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "조영제 유발 신장병증"
  - "만성 신장질환"
  - "정맥 수액"
related_disease_slugs:
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
question_type: prevention
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 남성이 STEMI로 응급 관상동맥중재술을 받는다. eGFR은 23 mL/min/1.73 m²이고 폐부종은 없으며 재관류는 지연하지 않는다. 조영제 양을 최소화하는 것 외에 급성 콩팥손상 위험을 줄이는 데 고려할 조치는?

## 선택지

A. 체액 상태를 보며 적절한 등장성 생리식염수를 투여한다
B. 시술 전에 예방적 혈액투석부터 한다
C. 탈수를 유도하기 위해 푸로세미드를 일률적으로 투여한다
D. 모든 수액을 금지한다

## 해설

신기능이 많이 저하된 환자에서는 불필요한 조영제 노출을 줄이고, 울혈이나 금기가 없다면 체액 상태에 맞춰 등장성 수액을 고려한다. 응급 재관류를 수액이나 투석 때문에 미뤄서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 정맥 수액 A의 적정 수화와 조영제 최소화를 함께 설명하고 무제한 수액·PCI 지연을 방지.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001038

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000686
- 대한영상의학회 등 조영제 유해반응 국내 임상진료지침(2022): https://www.jksronline.org/DOIx.php?id=10.3348%2Fjksr.2022.0024
