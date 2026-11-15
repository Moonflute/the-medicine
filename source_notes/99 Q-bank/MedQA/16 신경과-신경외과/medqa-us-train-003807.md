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
question_type: risk_factor
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

다발성경화증 재발로 고용량 메틸프레드니솔론을 투여한 지 3일 뒤, 환자가 잠을 거의 자지 않고 초조해하며 없는 것이 보인다고 한다. 혈당도 새로 크게 상승했다. 기존 신경결손은 그대로다. 우선 검토할 설명은?

## 선택지

A. 고용량 스테로이드 관련 이상반응
B. 인터페론 베타 금단
C. 만성 뇌혈관성 인지장애
D. 나탈리주맙 관련 합병증

## 해설

고용량 스테로이드 사용 직후에는 수면·기분·행동 변화와 고혈당이 생길 수 있다. 투약 이력을 확인하고 감염이나 대사 이상에 의한 섬망도 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원문2주전새MS위약진료누락복원. steroidAE추론을확인된처방처럼쓰지않고기타면역억제제전체로일반화하지않음.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng220/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003807
