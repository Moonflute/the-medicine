---
type: qbank
schema_version: 1
id: medqa-us-train-005056
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b0d1f85b5e62c1a7a5e7331487bf4dedf37c2dfeffdc8b76c5c7fad9aed80fb1
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "지주막하출혈"
  - "후교통동맥 낭상동맥류"
  - "동맥류 파열"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sp4Dso7zrp4ntlZgg7Lac7ZiIIChTdWJhcmFjaG5vaWQgaGVtb3JyaGFnZSkubWQ
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

67세 환자가 벼락두통 뒤 의식이 저하됐다. 비조영 CT에서 뇌기저부 지주막하출혈을 확인했다. 응급 치료 계획을 위해 다음으로 확인할 것은?

## 선택지

A. 뇌파에서 발작파가 나타나는지
B. 요추천자에서 황색변조가 있는지
C. 뇌혈관영상으로 파열 동맥류의 위치와 형태를 확인한다
D. 경동맥 도플러로 협착 정도만 확인한다

## 해설

영상에서 지주막하출혈이 확인되면 CTA 등으로 원인 동맥류를 신속히 찾는다. CTA가 불명확하지만 의심이 높으면 카테터 혈관조영술을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 문자 CT와 SAH 임상으로 낭상 동맥류 B를 유지하되 출혈만으로 후교통동맥 위치를 확정한 해설을 제거했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005056
- https://pubmed.ncbi.nlm.nih.gov/37212182/
