---
type: qbank
schema_version: 1
id: medqa-us-train-007472
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:47d559e955fd499a7d859037cf09013d98ed48607cd0f13afb79440590195711
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "신경성 폭식증"
  - "러셀 징후"
  - "구토"
  - "저염소성 대사성 알칼리증"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveyEse2PreyLneymnSAoQnVsaW1pYSBOZXJ2b3NhKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 환자가 반복적인 구토 뒤 쇠약감과 두근거림을 호소한다. 치아 법랑질이 닳아 있고 설사는 없다. 반복 구토에 가장 잘 맞는 전해질·산염기 변화는?

## 선택지

A. 저칼륨·고염소 대사성 산증
B. 저칼륨·저염소 대사성 알칼리증
C. 고칼륨·저염소 대사성 알칼리증
D. 고칼륨·고염소 대사성 산증

## 해설

구토로 위산과 염소가 소실되고 체액량이 줄면 저염소 대사성 알칼리증과 저칼륨혈증이 생길 수 있다. 두근거림이나 쇠약이 있으면 전해질과 심전도를 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 본문에 없는 식욕부진을 제거하고 구토 관련 전해질 기전과 폭식증 확진을 구별했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007472
- https://www.nice.org.uk/guidance/ng69/chapter/recommendations
