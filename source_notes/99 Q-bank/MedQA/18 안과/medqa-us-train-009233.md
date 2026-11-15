---
type: qbank
schema_version: 1
id: medqa-us-train-009233
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bb47fa5a123c97a5f8c006228406344ac90a821800cdb232a529d1e29beb63af
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "cavernous sinus thrombosis"
  - "해면정맥동 혈전증"
  - "rhinosinusitis"
question_type: complication
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67aA67mE64-Z7Je8IChTaW51c2l0aXMpLm1k
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sp4Dso7zrp4ntlZgg7Lac7ZiIIChTdWJhcmFjaG5vaWQgaGVtb3JyaGFnZSkubWQ
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

부비동염 환자가 고열·두통과 한쪽 안구돌출로 입원했다. 이틀 뒤 반대쪽도 붓고 양쪽 눈을 여러 방향으로 움직이지 못한다. 이마와 뺨의 감각도 둔하다. 가장 의심되는 합병증은?

## 선택지

A. 한쪽에 국한된 안와앞 봉와직염
B. 감염성 해면정맥동 혈전증
C. 급성 폐쇄각 발작
D. 세균성 결막염

## 해설

안와 증상이 한쪽에서 양쪽으로 진행하고 여러 안구운동신경과 삼차신경 감각이 함께 침범되면 해면정맥동 혈전증을 의심한다. 응급 조영 영상과 치료가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 안저검사에서 모든 방향 동공확대를 봤다는 문장 혼동과 총정맥동이라는 비표준 명칭을 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009233
- https://pubmed.ncbi.nlm.nih.gov/27928417/
