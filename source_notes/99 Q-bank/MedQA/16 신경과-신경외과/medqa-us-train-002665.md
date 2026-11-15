---
type: qbank
schema_version: 1
id: medqa-us-train-002665
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fae2264d88b957b6a82a0ce7da6aa2329e6eaf1bfb0045a799a8f14d86fe44c3
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "thiamine deficiency"
  - "cerebellar ataxia"
  - "Wernicke encephalopathy"
  - "Varicella"
question_type: diagnosis
related_disease_slugs:
  - MDgg6rCQ7Je8L-yImOuRkC3rjIDsg4Htj6zsp4Qg67CU7J2065-s7IqkIOqwkOyXvCAoVmFyaWNlbGxhLVpvc3RlciBWaXJ1cyBJbmZlY3Rpb24pLm1k
difficulty: standard
answer: D
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

5세 아이가 감염에서 회복한 지 열흘 뒤 이틀 전부터 걷다 비틀거린다. 팔을 뻗어 목표를 잘 맞추지 못한다. 열과 의식 변화는 없고 근력·건반사는 정상이다. 가장 가능성 높은 진단은?

## 선택지

A. 길랭–바레 증후군
B. 고관절 일과성 활막염
C. 마미증후군
D. 감염 후 급성 소뇌실조

## 해설

감염 회복 뒤 급성 보행실조와 겨냥이상이 나타나고 의식과 근력이 보존되면 감염 후 소뇌실조가 가능하다. 악화, 지속적인 두통·구토, 발열이나 의식 변화가 있으면 즉시 다른 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 수두와 무관한 트리프토판 결핍이라는 엉뚱한 해설을 급성 감염후 소뇌실조 설명으로 교체하고 영문 피부 단서를 복원했다.
- 공식/학회 근거: https://www.rch.org.au/clinicalguide/guideline_index/Ataxia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002665
