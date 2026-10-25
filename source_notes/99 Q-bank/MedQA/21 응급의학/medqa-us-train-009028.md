---
type: qbank
schema_version: 1
id: medqa-us-train-009028
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:deacf6c317036fddf42e1ecc23df911c1cb1cb1e9019d8f9ecfec0ab39bbe049
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "phencyclidine intoxication"
  - "agitation"
  - "nystagmus"
  - "Phencyclidine intoxication"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-usvOyniCDqtIDroKgg67CPIOykkeuPheyEsSDsnqXslaAgKFN1YnN0YW5jZS1SZWxhdGVkIGFuZCBBZGRpY3RpdmUgRGlzb3JkZXJzKS5tZA
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 남성이 나이트클럽에서 머리를 맞은 후 인지 저하와 초조로 경찰에 의해 응급실로 이송되었다. 질문에 답하지 않고 계속 매우 초조하다. 술 냄새가 나며 체온 36.9°C(98.4°F), 맥박 104회/분, 호흡수 24회/분, 혈압 148/95mmHg이다. 혼란스럽고 사람에 대해서만 지남력이 있다. 신경학적 검사에서 축동과 안진이 보이나 치료진을 공격하려 해 즉시 중단했다. 두부 CT는 정상이다. 다음 중 어떤 물질을 섭취한 것이 증상을 가장 잘 설명하는가?

## 선택지

A. 헤로인
B. 리세르그산 디에틸아미드(LSD)
C. 메스암페타민
D. 펜시클리딘(PCP)

## 해설

심한 초조와 공격성에 안진이 동반되어 보기 중 PCP(D)가 가장 잘 부합한다. PCP는 해리 상태, 지각 변화와 안진을 일으킬 수 있으며 동공 크기는 일정하지 않다. 알코올 동시 사용과 두부외상도 상태 평가에 중요하다. 메스암페타민이나 LSD도 초조·정신병적 증상을 일으킬 수 있으므로 이런 증상 자체가 PCP에만 특이적이라는 뜻은 아니다. 이 문항에서는 안진을 포함한 전체 소견을 비교해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. PCP D를 지지하는 안진과 공격성은 유지하되 다른 물질이 급성 정신운동 증상을 전혀 만들지 못한다는 배타적 주장을 교정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009028
