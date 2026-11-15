---
type: qbank
schema_version: 1
id: medqa-us-train-000427
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d62c6704c68f56f25fd0ce54ed79d8c48a18316977357ec88cf9a9a57aa3905f
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "pseudoaneurysm"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwgOyEsSDrj5nrp6XrpZggKFBzZXVkb2FuZXVyeXNtKS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvU2ltdmFzdGF0aW4ubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
---

# MedQA US 임상문제

## 문제

대퇴동맥으로 혈관 시술을 받은 54세 남성이 통증이 있는 박동성 서혜부 종괴로 왔다. 초음파에서 대퇴동맥과 연결된 3 cm 가성동맥류가 보인다. 감염이나 사지허혈은 없고 주입에 적합한 좁은 목이다. 적절한 치료는?

## 선택지

A. 초음파 유도 트롬빈 주입술
B. 항혈소판제를 늘리고 외래에서 관찰만 한다
C. 혈종으로 보고 외래에서 바늘로 흡인한다
D. 모든 가성동맥류에서 즉시 개방 수술한다

## 해설


통증이 있고 크기가 큰 시술 후 가성동맥류에서 구조가 적합하면 초음파 유도 트롬빈 주입을 고려한다. 감염이나 피부 괴사, 사지허혈, 어려운 해부학적 조건에서는 다른 방법을 선택한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000427 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 대퇴동맥 천자 후 증상성 3cm 가성동맥류의 트롬빈 주입 선택 근거와 적용 조건을 보완했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2019/06/04/10/26/postcatheterization-femoral-pseudoaneurysms

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000427
- https://pubmed.ncbi.nlm.nih.gov/15525892/
