---
type: qbank
schema_version: 1
id: medqa-us-train-002534
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:395b249ad265fb3b0015ab6fc583549588b18f319c08918f3680953b5e877342
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "vitiligo"
  - "autoimmune disease"
  - "spontaneous repigmentation"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uwseuwmOymnSAoVml0aWxpZ28pLm1k
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

애디슨병 병력이 있는 31세 아프리카계 미국인 여성이 얼굴과 어깨에 넓고 대칭적인 저색소 반점과 반을 보인다. 우드등으로 진균성 원인을 배제한 후 백반증이 의심된다. 다음 중 이 질환에 대한 설명으로 옳은 것은?

## 선택지

A. 대개 서서히 진행하며 환자의 15%에서 자연적으로 재색소화된다
B. 완전한 색소 회복과 함께 재발과 관해를 반복한다
C. 탈색 부위에 켈로이드 형성이 동반된다
D. 국소 병변에서는 국소 코르티코스테로이드를 사용하면 안 된다

## 해설

백반증은 지속·진행·안정·자연 재색소화 등 다양한 경과를 보일 수 있고 재색소화는 흔히 불완전하다. 선지 중 A가 가장 가깝지만 15%는 고정된 보편적 예후 수치가 아니라 전통적 추정으로 이해해야 한다. 관찰 연구마다 비율과 정도가 다르다. 완전 색소회복을 반복하는 질환도, 켈로이드가 정의적 특징인 질환도 아니며 국한 병변에 국소 corticosteroid가 항상 부적절한 것은 아니다. Wood등만으로 모든 진균성 병인을 배제할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 선지 중 A를 유지하되 자연 재색소화를 모든 환자에서 고정 15%로 단정하지 않고 경과 다양성과 근거 한계를 설명한다.
- 공식/학회 근거: https://academic.oup.com/bjd/article/186/1/18/6593593
- 공식/학회 근거: https://ijdvl.com/a-cross-sectional-study-of-spontaneous-repigmentation-in-vitiligo/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002534
