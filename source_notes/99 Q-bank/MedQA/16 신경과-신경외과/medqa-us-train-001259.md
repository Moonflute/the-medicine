---
type: qbank
schema_version: 1
id: medqa-us-train-001259
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dc1107196cfb47b3327fb10d9f982754d05122dc14c40d6b2c1a090b5e79a936
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "internuclear ophthalmoplegia"
  - "multiple sclerosis"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_ri6TrsJzshLEg6rK97ZmU7KadIChNdWx0aXBsZSBzY2xlcm9zaXMpLm1k
difficulty: standard
answer: C
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

23세 여성이 1주일 전부터 복시가 발생하여 내원했다. 복시는 주변을 바라볼 때 악화된다. 발열, 두통, 눈의 통증, 시력 변화 또는 다른 신경학적 증상은 없다. 왼쪽을 바라보게 하면 오른쪽 눈이 내전하지 못하고 왼쪽 눈은 안진과 함께 외전한다. 오른쪽을 바라보게 하면 왼쪽 눈이 내전하지 못한다. 양쪽 동공은 크기가 같고 빛에 정상적으로 반응하며, 눈모음은 정상이다. 다음 중 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 뇌 CT
B. 요추천자
C. 뇌 MRI
D. 안과 의뢰

## 해설

내전장애·반대눈 외전안진과 보존된 눈모음은 양측 핵간안근마비를 시사한다. 젊은 환자에서 MLF탈수초화를 고려하여 뇌 MRI(C)로 병변을 평가한다. 실제MS진단은 병력·진찰·검사 및 진단기준을 통합하며 MRI검사 하나만으로 항상 확진되는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 핵간안근마비 명칭 교정, 외전진전이 아닌 외전안진. MRI C는 적절하나 단독MS확진은 아님.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng220/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001259
