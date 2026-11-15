---
type: qbank
schema_version: 1
id: medqa-us-test-000765
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:a12eeecb9e4167378e74a2dd012e1e3b67a9085f8c981e771c263fd3e8782c24
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "EMTALA"
  - "응급 산과 이송"
  - "환자 자기결정권"
related_disease_slugs: []
question_type: ethics
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

수술과 대량수혈이 불가능한 국내 응급실에 임신 38주 산모가 많은 질출혈과 쇼크로 왔다. 수술 가능한 상급병원이 이송을 수락했다. 이송 준비 중 적절한 대응은?

## 선택지

A. 가능한 소생을 즉시 시작하고 필요한 인력·장비와 진료 정보를 갖춰 지체 없이 이송한다
B. 보호자에게 이동을 맡기고 소생이나 병원 간 연락은 하지 않는다
C. 수혈이 불가능해도 혈압이 완전히 정상화될 때까지 이송하지 않는다
D. 외래 의뢰서를 주고 다음 날 진료받도록 한다

## 해설

현재 병원에서 필요한 응급 치료가 불가능하면 적절한 병원으로 지체 없이 이송한다. 이송 중 위해를 줄이도록 가능한 처치, 필요한 인력·장비 및 진료 정보 전달을 준비한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 의사의 서면 요청이 아닌 설명을 들은 환자의 서면 이송 요청임을 교정.
- https://www.cms.hhs.gov/EMTALA/Downloads/CMS-1063-F.pdf
- https://www.cms.gov/medicare/regulations-guidance/legislation/emergency-medical-treatment-labor-act

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000765
- https://www.law.go.kr/법령/응급의료에관한법률/제11조
