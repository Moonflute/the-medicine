---
type: qbank
schema_version: 1
id: medqa-us-train-006584
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:25ea9293db7a4da32f3ccc61ff828c2b3258708aae04448568650de4671b1a86
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "조기 양막 파수"
  - "조산"
  - "태아 신경보호를 위한 황산마그네슘"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yhsOq4sCDslpHrp4kg7YyM7IiYIChQcmVtYXR1cmUgUnVwdHVyZSBvZiBNZW1icmFuZXMpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTWFnbmVzaXVtU3VsZmF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 30주 4일 산모가 조기 양막파수 후 활발한 진통 중이다. 자궁경부가 5 cm 열려 수시간 내 출산이 예상된다. 감염·자간전증은 없고 산전 스테로이드를 시작했다. 태아 신경보호를 위해 추가로 고려할 약은?

## 선택지

A. 추가 자궁수축억제 목적으로 장기간 테르부탈린
B. 정맥 황산마그네슘
C. 태아 심박이 정상이어도 옥시토신을 바로 시작
D. 메토트렉세이트

## 해설

임박한 이른 조산에서 황산마그네슘은 태아 신경보호를 위해 사용한다. 자궁수축을 멈추기 위한 치료나 필요한 분만을 지연하라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 31주 임박 분만의 Mg 신경보호와 PPROM 항생제의 독립 적응증 구분.
- https://www.acog.org/womens-health/faqs/preterm-labor-and-birth
- https://www.rcog.org.uk/for-the-public/browse-our-patient-information/when-your-waters-break-prematurely/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006584
- https://www.nice.org.uk/guidance/ng25/chapter/recommendations
- https://doi.org/10.1002/ijgo.13856
