---
type: qbank
schema_version: 1
id: medqa-us-train-007712
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a6a9ae853e7e36695561577af1b1a63223fd9678be2da5905012f917353e2c65
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "polymyalgia rheumatica"
  - "inflammatory myalgia"
  - "glucocorticoid treatment"
  - "Polymyalgia rheumatica"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: management
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

고혈압 병력이 있는 59세 남자가 수개월 동안 지속된 관절의 쑤심과 뻣뻣함으로 내원했다. 특히 아침에 어깨, 목, 엉덩이가 뻣뻣하며 때때로 통증이 팔꿈치와 무릎으로 이동한다. 미열, 피로감, 식욕저하도 있다. 신체검사에서 명백한 변형이나 관절 부종 없이 통증 때문에 어깨와 엉덩이의 능동 및 수동 운동이 감소되어 있다. 적혈구침강속도는 52 mm/h(남성 정상 0~22 mm/h)이다. 치료로 가장 적절한 것은?

## 선택지

A. 비스테로이드성 항염증제
B. 히알루론산
C. 비스포스포네이트
D. 코르티코스테로이드

## 해설


50세 이후의 어깨·골반대 아침강직과 통증, 전신 증상 및 ESR 상승은 PMR에 부합한다. 보기 중 glucocorticoid D가 적절하지만 GCA 동반이 없는 PMR에 일률적인 고용량 치료를 권하면 안 된다. 2026 BSR은 prednisolone12.5–15 mg/day로 시작하고 필요 시 최대25 mg/day까지 조정하는 최소 유효용량 접근을 권고한다. GCA 증상과 감염·암 등 유사질환을 평가하고 반응과 부작용을 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007712 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: PMR에 고용량 steroid가 일률적이라는 오류를2026BSR의 저용량 시작·개별화로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13661133/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007712
