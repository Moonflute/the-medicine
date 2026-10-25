---
type: qbank
schema_version: 1
id: medqa-us-train-003003
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4233276ee568525b9b3b53cdd8cba58764f8a1d7cd9dab1438e942fa1f494616
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "innocent murmur"
  - "venous hum"
  - "continuous supraclavicular murmur"
  - "pediatric cardiac auscultation"
question_type: diagnosis
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-ygleunpSDsnqHsnYwgKFZlbm91cyBIdW0pLm1k
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4세 여아가 건강검진을 위해 내원했다. 영아기에 세기관지염을 앓은 것 외에는 건강했다. 6세 언니가 최근 심실중격결손 폐쇄수술을 받았고, 키와 체중은 60백분위수이다. 어머니는 아이에게 심혈관 기형이 있을까 걱정한다. 다음 중 이 아이에서 양성 심잡음을 가장 잘 시사하는 소견은?

## 선택지

A. 좌측 하부 흉골연의 3/6 수축기 박출성 잡음으로 발살바에서 커짐
B. 우측 상부 흉골연의 4/6 중수축기 잡음으로 빠르게 쪼그려 앉을 때 커짐
C. 우측 쇄골상부에서 들리는 2/6 지속성 잡음
D. 좌측 하부 흉골연의 4/6 범수축기 잡음으로 손잡이 쥐기에서 커짐

## 해설

오른쪽 쇄골상부의 낮은 등급 지속성 잡음(C)은 정맥성 잡음(venous hum)이라는 양성 잡음에 부합한다. 다른 보기의 큰 수축기 잡음과 동적 변화는 비후성 심근병증·판막/유출로 병변·VSD 등 병적 잡음을 시사할 수 있다. 따라서 다른 선지가 구조적 질환과 일치하지 않는다는 기존 설명은 거꾸로다. 모든 지속성 잡음이 양성이라는 뜻도 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 나머지 선지들은 구조적 심장질환과 맞지 않는다는 반대 설명을 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003003
