---
type: qbank
schema_version: 1
id: medqa-us-train-004663
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:588a2b464ed45ae43e0b56425ea7b0ba9152fcff9f5c07054cfef10bd1750b03
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "지주막하출혈"
  - "벼락두통"
  - "뇌동맥류"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sp4Dso7zrp4ntlZgg7Lac7ZiIIChTdWJhcmFjaG5vaWQgaGVtb3JyaGFnZSkubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

56세 환자가 갑자기 최고 강도에 도달한 두통과 경부강직으로 왔다. 시작 10시간 후 시행한 비조영 CT에는 출혈이 없다. 지주막하출혈이 계속 의심되고, 요추천자 금기는 없다. 다음 검사는?

## 선택지

A. 요추천자로 뇌척수액의 출혈 증거를 확인한다
B. 처음 CT가 정상이므로 추가 검사 없이 귀가한다
C. 경동맥 초음파만 시행한다
D. 뇌파검사를 시행한다

## 해설

발병 후 6시간이 지난 뒤 음성인 CT만으로 의심되는 지주막하출혈을 배제하지 않는다. 금기가 없으면 요추천자로 뇌척수액을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 음성 CT면 무조건 LP라는 일반화를 CT시점과 신경학적 검사에 따라 제한했다. 이 환자는 우측 하지위약이 있어6시간 이내 CT 단독 배제 조건에 맞지 않으므로 B를 유지한다.
- 공식/학회 근거: https://www.ahajournals.org/doi/pdf/10.1161/STR.0000000000000436

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004663
- https://pubmed.ncbi.nlm.nih.gov/37212182/
