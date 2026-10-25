---
type: qbank
schema_version: 1
id: medqa-us-train-003807
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ede60ebdf7ab406547103d90f6d51788e6f832fcc2a7bec94882f16b3eba1d71
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "medication-induced hallucinations"
  - "multiple sclerosis treatment"
  - "visual hallucinations"
  - "steroid psychosis"
question_type: adverse_effect
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_ri6TrsJzshLEg6rK97ZmU7KadIChNdWx0aXBsZSBzY2xlcm9zaXMpLm1k
difficulty: complex
answer: A
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

다발성 경화증 병력이 있는 50세 남성이 최근 며칠간 거실에 토끼, 호랑이, 에뮤가 보인다고 반복적으로 말하는 이상행동으로 내원했다. 2주 전 새로 발생한 왼쪽 상지 근력저하로 신경과 진료를 받았다. 신경학적 검사는 이전과 동일했고 혈당은 356 mg/dL였다. 다음 중 증상의 가장 가능성 높은 원인은?

## 선택지

A. 약물 부작용
B. 원발성 정신질환
C. 신경질환의 진행
D. 기분전환용 약물 중독

## 해설

정답은 A, 약물 부작용이다. 최근 MS 재발 진료 후 새로운 환시와 고혈당은 재발 치료에 흔히 쓰는 고용량 코르티코스테로이드의 부작용을 시사한다. 그러나 실제 약제·용량은 본문에 없으므로 이는 출제 맥락상 추론이다. 스테로이드와 모든 면역억제제를 같은 정신 부작용으로 일반화하지 않고, 실제 투약을 확인하며 감염·대사성 섬망 등도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원문2주전새MS위약진료누락복원. steroidAE추론을확인된처방처럼쓰지않고기타면역억제제전체로일반화하지않음.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng220/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003807
