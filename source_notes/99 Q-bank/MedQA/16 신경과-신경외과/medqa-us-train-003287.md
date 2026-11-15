---
type: qbank
schema_version: 1
id: medqa-us-train-003287
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b646ffba9173ea352dfa43416e3efc568d17edc4772dcec48723ab850b9879f4
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "migraine-associated nausea"
  - "chlorpromazine antiemetic"
  - "acute migraine"
  - "photophobia"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tjrjrkZDthrUgKE1pZ3JhaW5lKS5tZA
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 환자가 평소와 같은 편두통 발작 중 반복해서 토해 경구 약을 삼키기 어렵다. 응급실에서 구토와 발작 치료에 도움이 될 정맥 약은?

## 선택지

A. 온단세트론만으로 두통 치료까지 대신한다
B. 프로프라놀롤 정맥 투여로 발작을 중단한다
C. 메토클로프라미드
D. 덱사메타손만으로 즉시 구토를 멈춘다

## 해설

메토클로프라미드 정맥 투여는 편두통의 구역·구토를 완화하고 급성 통증에도 도움이 될 수 있다. 추체외로계 이상반응 등 금기를 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 클로르프로마진을 급성 편두통 구토에 언제나 가장 효과적인 약이라고 단정한 표현을 제한했다. 주어진 선지 중 항구토 역할에 맞는 C를 유지한다.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=35a743a1-5354-2c50-e063-6394a90a15f9&type=display

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003287
- https://pubmed.ncbi.nlm.nih.gov/41321235/
- https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=198800560
