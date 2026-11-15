---
type: qbank
schema_version: 1
id: medqa-us-train-001385
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1e93a409d2f35c506476087317d918f04e0a81099b984c4d74c38765d25bc923
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "polycystic ovary syndrome"
  - "obesity"
  - "adnexal mass"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-uLpOuCrSDrgpzshowg7Kad7ZuE6rWwIChQb2x5Y3lzdGljIE92YXJ5IFN5bmRyb21lKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQ2FsY2l1bUdsdWNvbmF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 여성이 지속되는 한쪽 골반 불편감으로 왔다. 임신검사는 음성이고 진찰에서 부속기 종괴가 의심되지만 환자는 질식 초음파를 원하지 않는다. 안정적인 상태에서 초기 영상은?

## 선택지

A. 진단할 수 없으므로 검사를 모두 생략한다
B. 동의 여부와 관계없이 질식 초음파부터 시행한다
C. 경복부 골반 초음파로 우선 평가하고 불충분하면 추가 영상을 논의한다
D. 골반 단순촬영으로 난소 종괴를 분류한다

## 해설

초음파는 부속기 종괴의 첫 영상이다. 질식 검사가 적합하지 않거나 환자가 선택하지 않으면 경복부 초음파로 평가하고, 묘사가 충분하지 않을 때 추가 영상을 논의한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- https://gravitas.acr.org/ACPortal/GetDataForOneScenario?senarioId=1172
- https://www.nice.org.uk/guidance/ng88/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001385
- https://acsearch.acr.org/docs/69466/Narrative/
