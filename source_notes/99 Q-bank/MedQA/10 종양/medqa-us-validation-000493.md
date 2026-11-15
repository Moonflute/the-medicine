---
type: qbank
schema_version: 1
id: medqa-us-validation-000493
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:64deb0dfc50ac2a0fe4462b5b21762f1f9a4b9bd4a3a2459a67c95b4304617b6
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "HER2 양성 유방암"
  - "침윤성 유관암"
  - "트라스투주맙"
related_disease_slugs:
  - MTMg67aA7J246rO8L-y5qOycpOyEsSDsnKDrsKnslZQgKEludmFzaXZlIEJyZWFzdCBDYW5jZXIpLm1k
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: management
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMCDsooXslpEvVHJhc3R1enVtYWIubWQ
---

# MedQA US 임상문제

## 문제

54세 여성이 1.4 cm 유방암을 완전 절제했다. 감시림프절 전이는 없고 종양은 ER·PR 음성, HER2 양성이다. 심장 기능은 정상이다. 보조 전신치료로 적절한 요법은?

## 선택지

A. 아나스트로졸 단독
B. 펨브롤리주맙 단독
C. 파클리탁셀과 트라스투주맙
D. 트라스투주맙과 타목시펜

## 해설


림프절 전이 없는 작은 HER2 양성 유방암에서 파클리탁셀과 트라스투주맙을 포함하는 보조요법을 사용할 수 있다. ER·PR 음성 환자에게는 내분비치료를 사용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000493 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HER2 양성 유방암에서 HER2 표적 항체 trastuzumab D의 연결을 원문 대조하여 유지. 원문의 전체 치료 순서가 모든 환자의 권고라는 의미는 아님.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=492dbdb2-077e-4064-bff3-372d6af0a7a2

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000493
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11145753/
