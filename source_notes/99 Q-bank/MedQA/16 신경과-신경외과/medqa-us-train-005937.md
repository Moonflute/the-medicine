---
type: qbank
schema_version: 1
id: medqa-us-train-005937
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9b0ee80a496f040a2780550541326fa1428e1b3c7a38bc5b4bc887146b1a57fb
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "뇌간출혈"
  - "뇌탈출"
  - "뇌사 평가"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4ztg4jstpwgKEJyYWluIGhlcm5pYXRpb24pLm1k
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QaGVueXRvaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

교뇌 출혈로 기계환기 중인 환자에게 빛반사와 각막반사가 없다. 경련 치료로 반복 투여한 진정제의 효과가 남았을 가능성이 있다. 국내에서 정식 뇌사판정 전 우선 할 일은?

## 선택지

A. 뇌간반사가 없으므로 즉시 뇌사를 선언한다
B. 생명유지 치료를 지속하며 약물 영향 등 가역적 요인을 배제한다
C. 약물 영향이 있어도 뇌파검사 한 번으로 뇌사를 확정한다
D. 진정제 종류와 무관하게 한 시간 후 뇌사판정을 시행한다

## 해설

진정제나 마취제 등 약물 영향은 뇌사와 비슷한 소견을 만들 수 있다. 약물의 영향과 다른 가역 요인을 배제하고 국내 정식 판정의 선행 조건을 충족해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 디아제팜 교란이 남은 환자에서 고정된 6시간 관찰만으로 뇌사를 판정한다는 오류를 교정. C는 재평가이며 사망선언이 아님.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC10791061/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005937
- https://www.law.go.kr/LSW/flDownload.do?bylClsCd=110201&flSeq=151746575&gubun=
