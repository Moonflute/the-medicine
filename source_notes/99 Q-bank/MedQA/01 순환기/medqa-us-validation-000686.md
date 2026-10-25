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

당뇨병성 만성 신장질환이 있는 65세 남성이 STEMI로 일차 경피적 관상동맥중재술을 고려 중이다. 크레아티닌은 1.4 mg/dL이다. 급성 신부전 발생 위험을 줄이는 데 가장 도움이 되는 처치는?

## 선택지

A. 정맥 생리식염수
B. 정맥 조영제 용량 감소
C. 예방적 혈액투석
D. 로사르탄 중단

## 해설

신장 위험이 있는 관상동맥 중재 환자에서 A의 적정한 등장성 생리식염수 수화는 AKI 예방 전략이다. 조영제 용량 최소화도 중요하므로 B를 불필요한 처치로 배제하지 않는다. 체액 상태와 심기능에 맞춰 수액을 조절하며, STEMI의 응급 재관류를 예방적 수화나 투석 때문에 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 정맥 수액 A의 적정 수화와 조영제 최소화를 함께 설명하고 무제한 수액·PCI 지연을 방지.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001038

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000686
