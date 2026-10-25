---
type: qbank
schema_version: 1
id: medqa-us-train-009506
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e59b1aee14462c268cb8392cb1fecc3204db622d539fbd39612b04c7ec543198
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "meningitis"
  - "수막염"
  - "lumbar puncture"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsiJjrp4nsooUgKE1lbmluZ2lvbWEpLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

21세 대학생 남자가 혼란 상태로 응급실에 왔다. 약 45분 전 경련을 한 번 했고 3일간 발열과 두통을 호소했다. 오심, 구토, 두부 외상, 인후통, 발진, 복통은 없었다. 혈압 102/78 mmHg, 심박수 122회/분, 체온 38.4°C이며 의식은 있지만 혼란스럽고 지남력이 없다. 빛과 큰 소리에 예민하고 심박수는 증가했지만 리듬은 정상이다. 폐와 안저는 정상이며 브루진스키 징후가 양성이다. 다음으로 가장 적절한 처치는 무엇인가?

## 선택지

A. 뇌 CT
B. 뇌파검사
C. 중환자실 의뢰
D. 요추천자

## 해설

발열·수막자극징후·의식변화는 수막뇌염을 의심하게 한다. 이 환자에는 새로 발생한 발작과 지속 혼돈이 있어, 보기 중 뇌 CT(A)로 LP 전 종괴효과 등 안전성 문제를 평가하는 것이 적절하다. 모든 수막염 환자가 LP 전에 CT를 받아야 하는 것은 아니다. 혈액배양과 경험적 항균치료는 영상이나 LP를 기다리며 지연해서는 안 되고, 정상 CT만으로 모든 뇌탈출 위험이 사라지는 것도 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 수막염 환자는 모두 CT를 먼저 받아야 한다는 해설 오류 교정. 이 사례의 새 발작/의식변화 때문에 A 선택.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng240/chapter/Recommendations
- 공식/학회 근거: https://www.journalofinfection.com/article/S0163-4453%2816%2900024-4/fulltext

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009506
