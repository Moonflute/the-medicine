---
type: qbank
schema_version: 1
id: medqa-us-train-004290
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:70388bdb22b659d9ed309ee1d3e312983ba7b476f3d4be21e6fe12a74b51df19
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "헤로인 과다복용"
  - "호흡억제"
  - "오피오이드 중독"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-usvOyniCDqtIDroKgg67CPIOykkeuPheyEsSDsnqXslaAgKFN1YnN0YW5jZS1SZWxhdGVkIGFuZCBBZGRpY3RpdmUgRGlzb3JkZXJzKS5tZA
difficulty: simple
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

34세 남자가 길가에 쓰러진 채 발견되어 구급대에 의해 응급실로 이송되었다. 추가 병력은 알 수 없고 환자는 반응이 없다. 체온 36°C, 심박수 65회/분, 혈압 100/66 mmHg, 호흡수 4회/분, 산소포화도 96%이다. 신체검사 사진이 제시되어 있다. 가장 가능성 높은 과다복용 약물은 무엇인가?

## 선택지

A. 코카인
B. 대마
C. 알코올
D. 헤로인

## 해설

호흡수 4회/분의 심한 저환기와 무반응은 opioid 과다복용을 강하게 의심하게 하며 보기 중 heroin(D)이 가장 적합하다. 누락된 사진에서 동공이나 주사 흔적을 확인했다고 할 수 없다. 확진을 기다리며 기도·환기 지지와 경험적 naloxone을 지연해서는 안 된다. Alcohol 등 혼합 중독도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 누락 사진의 동공 변화를 정상이라고 가정한 해설 제거. 심한 호흡억제와 의식저하를 근거로 D 유지.
- 공식/학회 근거: https://www.cdc.gov/stop-overdose/response/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004290
