---
type: qbank
schema_version: 1
id: medqa-us-train-008427
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:df2a840f3de2ebdcfb76d713b5df63967a9c481549d965329c40c216c916fb25
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "hepatitis C in pregnancy"
  - "hepatitis A vaccination"
  - "hepatitis B immunity"
question_type: management
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

만성 C형간염으로 HCV RNA가 검출되는 임신 37주 산모가 분만 방법을 묻는다. HIV 동시 감염은 없고 태아는 두위이며 다른 제왕절개 적응증도 없다. 적절한 설명은?

## 선택지

A. HCV RNA가 양성이므로 38주에 반드시 계획 제왕절개한다
B. 제왕절개를 하면 신생아 감염검사가 필요 없다
C. C형간염만을 이유로 제왕절개하지 않고 산과적 조건에 따라 분만한다
D. C형간염 치료를 위해 분만을 미루고 우선 리바비린을 시작한다

## 해설

단독 C형간염에서 제왕절개가 모자감염을 줄인다는 근거가 없어 분만 방식은 산과적 상황으로 결정한다. 출산 후 노출된 아기는 지침에 따라 검사한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원정답 B와 반대로 HBIG를 권한 해설 및 HBV혈청 해석 수정.
- https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-9-hepatitis-a.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008427
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12835810/
- https://easlcampus.eu/sites/default/files/2023-07/EASL%20CPG%20management%20of%20liver%20diseases%20in%20pregnancy.pdf
