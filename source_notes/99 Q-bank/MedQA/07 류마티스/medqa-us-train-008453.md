---
type: qbank
schema_version: 1
id: medqa-us-train-008453
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f301314c17b3142d7ceec38c476dec26f69430037192656fe6c62634de4c7137
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "giant cell arteritis"
  - "polymyalgia rheumatica"
  - "prednisone"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: management
difficulty: simple
answer: C
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
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
---

# MedQA US 임상문제

## 문제

74세 여성이 특별한 과거력 없이 1주 동안 지속된 발열, 멈추지 않는 두통, 엉덩이와 어깨의 뻣뻣함으로 내원했다. 시야 변화는 부인한다. 오른쪽 두피 압통이 있고 통증과 뻣뻣함 때문에 관절 운동 범위가 제한되어 있다. 신경학적 검사는 정상이다. 적혈구 침강속도(ESR)가 75mm/h(여성 정상 범위 0~22mm/h)로 상승해 있다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 조영제 없이 두부 CT를 촬영한다
B. 측두동맥 생검을 시행한다
C. 경구 프레드니손을 시작한다
D. 정맥 메틸프레드니솔론을 시작한다

## 해설


고령의 새로운 지속 두통·두피압통과 높은 ESR, PMR형 증상은 GCA를 강하게 의심하게 한다. 시각허혈이 없는 제시 상황에서는 즉시 고용량 경구 prednisone C를 시작하고 동맥 평가·생검 등을 신속히 진행한다. 생검을 기다리며 치료를 미루지 않는다. 이는 PMR 단독의 저용량 치료와 다르다. 정맥 pulse steroid는 특히 시력위협 등 허혈성 합병증에서 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008453 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: GCA 의심에서 PMR용 저용량과 혼동하지 않고 시각허혈 없으면 고용량 경구 steroid 즉시 C, 확진검사 지연 금지로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24632

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008453
