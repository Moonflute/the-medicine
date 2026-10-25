---
type: qbank
schema_version: 1
id: medqa-us-train-003187
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4a3b56d6815868756297820a519e61d7d5a4ba8e043983dd4a230286054a6108
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "phencyclidine intoxication"
  - "PCP toxicity"
  - "rotary nystagmus"
  - "violent behavior"
  - "Phencyclidine intoxication"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-usvOyniCDqtIDroKgg67CPIOykkeuPheyEsSDsnqXslaAgKFN1YnN0YW5jZS1SZWxhdGVkIGFuZCBBZGRpY3RpdmUgRGlzb3JkZXJzKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

24세 남성이 낯선 사람을 신체적으로 공격하는 것을 목격한 경찰에 의해 응급실로 이송되었다. 경찰은 그의 눈이 빠르게 앞뒤로 움직이고 얼굴이 매우 붉었다고 한다. 과거력은 특이사항이 없고 체온 38.0°C, 혈압 110/70 mmHg, 맥박 102회/분, 호흡수 25회/분이다. 환자는 공격적이며 진찰에 협조하지 않고 회전성 안진이 보인다. 소변 독성검사에서 다음 중 어떤 약물이 검출될 가능성이 가장 높은가?

## 선택지

A. 마리화나
B. 메스암페타민
C. 코카인
D. 펜시클리딘 염산염(PCP)

## 해설

격렬한 행동 변화와 회전성 안진은 PCP의 해리성 중독을 시사하므로 D가 가장 적절하다. PCP 노출에서 안진이 중요한 감별 단서가 된다. '돌연변이된 PCP'라는 별도 약물 형태를 가정할 필요가 없고, 이 소견 하나가 실제 노출 물질을 확정하거나 다른 약물 가능성을 절대 배제하는 것도 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 근거 없는 돌연변이 PCP 표현과 다른 약물에서 해당 징후가 절대 없다는 단정을 제거했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003187
