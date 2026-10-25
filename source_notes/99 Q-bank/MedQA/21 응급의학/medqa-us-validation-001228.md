---
type: qbank
schema_version: 1
id: medqa-us-validation-001228
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:de43b63fd4a028df4ceec912e1e7822b2117ecb1d8a90bf009547a2a578e9746
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "일산화탄소 중독"
  - "연기 흡입"
  - "100% 산소"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-ydvOyCsO2ZlO2DhOyGjCDspJHrj4UgKENhcmJvbiBNb25veGlkZSBQb2lzb25pbmcpLm1k
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
  - ZHJ1ZzowMyDshoztmZTquLAvT25kYW5zZXRyb24ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 남성이 불타는 건물에서 구조된 후 응급실에 왔다. 다리에 화상을 입었고 두통과 어지럼, 혼돈이 있으며 검사 말미에 구토를 시작했다. 화상은 체표면적의 1%뿐이고 산소포화도는 99%이다. 가장 적절한 다음 처치는?

## 선택지

A. 100% 산소
B. 하이드록소코발라민
C. 생리식염수
D. 온단세트론

## 해설

정답은 A, 100% 산소이다. 화재 연기 노출 후 두통·어지럼·혼돈·구토는 일산화탄소 중독을 의심하게 한다. 일반적인 2파장 맥박산소측정기의 정상 SpO₂는 CO 중독을 배제하지 못하므로 산소 투여를 지연하지 않고 CO-oximetry 등으로 평가한다. 화재에서는 기도 손상과 시안화물 중독이 함께 있을 수 있어 중증 젖산산증·쇼크 등의 소견이 있으면 하이드록소코발라민도 고려한다. 산소가 다른 모든 화재 독성물질을 해독한다는 의미는 아니며, 신경학적 증상이나 중증 소견에 따라 고압산소 적응증도 전문적으로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. CO 중독의 100% 산소 A 유지. 정상 일반 pulse oximetry로 배제 불가, 화재의 시안화물 동반 중독 가능성 및 전문평가 보완.
- 공식/학회 근거: https://www.cdc.gov/carbon-monoxide/hcp/clinical-guidance/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001228
