---
type: qbank
schema_version: 1
id: medqa-us-train-009101
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:68e794123d19948a98a8d124a81f07f1f20cc2925cc756200adfef96e869c3c6
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "vestibular neuritis"
  - "acute vestibular syndrome"
  - "horizontal nystagmus"
question_type: diagnosis
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-yghOygleyLoOqyveyXvCAoVmVzdGlidWxhciBuZXVyaXRpcykubWQ
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

33세 환자가 이틀 동안 지속된 현훈을 호소한다. 새 난청이나 국소 결손은 없다. 숙련된 평가자가 단방향 수평·회선 안진, 한쪽 머리충동검사에서 교정 단속운동, 눈의 수직 편위 없음을 확인했다. 가장 가능성 높은 진단은?

## 선택지

A. 전정신경염
B. 이석증
C. 메니에르병
D. 전정편두통

## 해설

수일간 지속되는 급성 현훈과 한쪽 전정안반사 저하에 새 청각·중추 신경 이상이 없으면 전정신경염에 맞는다. 진찰이 애매하거나 중추 소견이 있으면 뇌졸중을 추가 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 전정신경염 D의 임상적 개연성은 유지. 구역이 없다는 invented 소견 및 수평안진만으로 중추성 배제 오류 교정.
- 공식/학회 근거: https://www.saem.org/publications/grace/grace-3

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009101
- https://pubmed.ncbi.nlm.nih.gov/35723133/
- https://pubmed.ncbi.nlm.nih.gov/37166022/
