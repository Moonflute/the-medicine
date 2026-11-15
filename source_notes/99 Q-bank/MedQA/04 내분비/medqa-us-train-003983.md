---
type: qbank
schema_version: 1
id: medqa-us-train-003983
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:940662c48f54e498b7c51dd8505071564b10bdc611d007375f768eecbf75df10
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "원발성 알도스테론증"
  - "양측 부신 증식"
  - "저칼륨혈증"
  - "고혈압"
related_disease_slugs:
  - MDQg64K067aE67mEL-ybkOuwnOyEsSDslYzrj4TsiqTthYzroaDspp0gKFByaW1hcnkgQWxkb3N0ZXJvbmlzbSkubWQ
  - MDUg7Iug7J6lL-yggOy5vOulqO2YiOymnSAoSHlwb2thbGVtaWEpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: 임상증례 객관식
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBsZXJlbm9uZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

37세 남성이 원발성 알도스테론증으로 확진됐다. 부신정맥 채혈이 양쪽에서 적절히 됐고 코르티솔로 보정한 알도스테론 분비는 양측성이었다. 적절한 장기 치료는?

## 선택지

A. 한쪽 부신을 임의로 절제
B. 양쪽 부신을 모두 절제
C. 베타차단제 단독으로 원인 치료
D. 스피로놀락톤 등 무기질코르티코이드 수용체차단제

## 해설

양측성 원발성 알도스테론증은 무기질코르티코이드 수용체차단제로 치료한다. 칼륨, 신장기능과 혈압을 추적한다. 한쪽이 과분비하는 경우에는 수술을 별도로 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Eplerenone을 aldosterone 합성 억제제로 잘못 설명; 양측 PA의 MR차단 D.
- https://www.endocrine.org/clinical-practice-guidelines/primary-aldosteronism-2

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003983
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10765003/
