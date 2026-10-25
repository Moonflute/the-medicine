---
type: qbank
schema_version: 1
id: medqa-us-train-004132
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ee562f860059123b4b0e639cb6f30ba76d5946d7fb9636d18aeaa5c4c8b30147
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "세균성 질염"
  - "질 분비물"
  - "배뇨통"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTMg67aA7J246rO8L-yEuOq3oOyEsSDsp4jsl7wgKEJhY3RlcmlhbCBWYWdpbm9zaXMpLm1k
difficulty: complex
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

17세 여자가 배뇨통으로 응급실에 왔다. 혈뇨나 성교통은 없으며 마지막 월경은 3주 전이고 최근 성관계도 없었다. 체온 37.6°C, 혈압 127/67 mmHg, 맥박 90회/분, 호흡수 17회/분이다. 질에서 이상한 냄새가 나고 회색 분비물이 보인다. 질경검사에서 자궁경부는 정상이며 양손검사에서 부속기 종괴나 압통은 없다. 다음 중 가장 적절한 다음 관리는 무엇인가?

## 선택지

A. 전혈구검사
B. 소변검사와 자궁경부 세포검사
C. 소변검사, 소변 배양, 수산화칼륨(KOH) 도말
D. 소변검사, 소변 배양, KOH 도말, 소변 임신검사

## 해설

배뇨통은 소변검사·배양으로 요로감염을 평가하고 임신 가능성도 확인한다(D). 회색 분비물과 악취는 BV를 시사하며 KOH 냄새검사·질 pH·단서세포 등으로 평가한다. KOH는 효모 관찰에 쓰일 수 있지만 트리코모나스 운동성 평가는 생리식염수 습윤표본이며 더 민감한 NAAT를 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 소변 검사·임신 검사 D 유지. KOH를 트리코모나스 검사로 설명한 오류와 배뇨통=BV 단정을 교정.
- https://www.cdc.gov/std/treatment-guidelines/BV.htm
- https://www.cdc.gov/std/treatment-guidelines/candidiasis.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004132
