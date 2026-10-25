---
type: qbank
schema_version: 1
id: medqa-us-train-007659
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9e9ef27c851760966f54a586157325c242b2d77aa084811c36459f91bd764cd8
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "multiple sclerosis"
  - "relapsing-remitting multiple sclerosis"
  - "disease-modifying therapy"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_ri6TrsJzshLEg6rK97ZmU7KadIChNdWx0aXBsZSBzY2xlcm9zaXMpLm1k
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

33세 여성이 정기 건강검진을 위해 내원했다. 특별한 증상은 없다. 1년 전 다발성 경화증을 진단받았고, 이후 각각 약 1주일간 지속되며 입원해 코르티코스테로이드 치료가 필요했던 악화가 두 차례 있었다. 가장 최근 악화는 3주 전이었다. 그 사이에는 신경학적 증상이 없었다. 매일 종합비타민과 칼슘 보충제를 복용한다. 활력징후와 신경학적 검사를 포함한 진찰은 정상이다. 다음 중 약물치료에서 가장 적절한 다음 단계는?

## 선택지

A. 미톡산트론
B. 메틸프레드니솔론
C. 인터페론 베타
D. 필요할 때만 지지요법

## 해설

반복 재발을 경험한 MS에서는 현재 증상이 없더라도 질병조절치료(DMT)를 논의해야 한다. 보기 중 interferon beta(C)는 재발형 MS에 사용하는 DMT이다. Methylprednisolone은 임상적으로 의미 있는 급성 재발 치료이지 장기 재발 예방을 대신하지 않는다. 현행 치료에는 여러 DMT가 있어 interferon이 모든 환자의 유일한 일차 선택은 아니다. 재발 중증도·MRI 활성도·안전성·임신 계획 등을 고려하여 전문적으로 선택한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 재발완화형 MS의 DMT C 유지하되 interferon만 일률적 일차라는 단정 제거.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng220/chapter/Recommendations
- 공식/학회 근거: https://www.nice.org.uk/guidance/ta527/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007659
