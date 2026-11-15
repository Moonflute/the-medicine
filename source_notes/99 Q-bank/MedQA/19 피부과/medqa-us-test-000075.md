---
type: qbank
schema_version: 1
id: medqa-us-test-000075
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:56baa760fd281aefc7ad3c3df30b7878aa83a3661d9ff24a45a63324e4f3a29b
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "어루러기"
  - "말라세지아"
  - "KOH 검사"
question_type: investigation
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yWtOujqOufrOq4sCAoVGluZWEgVmVyc2ljb2xvcikubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

21세 남성이 등과 어깨의 가려운 저색소반으로 내원했다. 병변 표면에 가는 인설이 있다. 어루러기가 의심될 때 인설에서 효모와 균사를 확인하는 검사는?

## 선택지

A. 우드등 검사
B. 피부 배양
C. 수산화칼륨(KOH) 검사
D. 피부 생검

## 해설

어루러기는 말라세지아에 의해 발생한다. 병변의 인설을 긁어 수산화칼륨(KOH)으로 처리하면 짧은 균사와 효모를 확인할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 말라세지아를 다른 곰팡이로 인해 발생하는 질환처럼 설명한 오류/검사민감도 과장 수정. KOH C 유지.
- 공식/학회 근거: https://www.aad.org/public/diseases/a-z/tinea-versicolor-treatment

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000075
