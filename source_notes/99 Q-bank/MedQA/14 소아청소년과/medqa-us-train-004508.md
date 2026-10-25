---
type: qbank
schema_version: 1
id: medqa-us-train-004508
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cce3482b91ddfae5c3ef288e9dc68ac6e4ff4cc253eea40d48ac7d5cf5436318
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "주산기 B형간염 감염 예방"
  - "B형간염 면역글로불린"
  - "신생아 예방접종"
question_type: prevention
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNCDqsITri7Tst4wvU29mb3NidXZpci5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 여성이 휴가 중 2.2kg 아기를 출산했다. 산모의 의무기록이 병원으로 팩스로 전송되었고, 간염 패널에서 B형간염 표면항원(HBsAg) 양성, B형간염 핵심항원 항체(anti-HBcAg) 양성, C형간염 RNA 검출 및 C형간염 항체 반응성이 확인되었다. 이 신생아에게 무엇을 투여해야 하는가?

## 선택지

A. 지금 B형간염 면역글로불린, 한 달 후 B형간염 백신
B. B형간염 면역글로불린, B형간염 백신과 레디파스비르/소포스부비르
C. B형간염 면역글로불린과 백신
D. B형간염 백신

## 해설

HBV 노출 신생아에게는 B형간염 백신과 B형간염 면역글로불린(HBIG)을 출생 12시간 이내 서로 다른 부위에 투여하므로 C가 적절하다. 출생체중 2,200 g은 이 예방 조치를 늦출 이유가 아니다. HBIG는 일반 면역글로불린과 다르며 HCV 예방 백신을 의미하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: HBsAg 양성 산모 신생아의 HBIG와 백신 투여 시점을 명확화.
- https://www.cdc.gov/hepatitis-b/hcp/perinatal-provider-overview/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004508
