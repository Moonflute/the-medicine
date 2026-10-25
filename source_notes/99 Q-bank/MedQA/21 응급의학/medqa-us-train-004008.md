---
type: qbank
schema_version: 1
id: medqa-us-train-004008
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:33fe8d6d1bd8691cd7c021ac1ca6bb32aa1078e3ea2e799b69bb3c87e8800d7d
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "항콜린성 중독"
  - "항콜린성 증후군"
  - "요폐"
question_type: 임상증례 객관식
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
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

67세 남자가 급성 혼돈 상태로 응급실에 왔다. 아내는 아침에 함께 하이킹을 준비하던 중 환자가 부엌에서 알아들을 수 없는 말을 중얼거리는 것을 발견했다. 이전에는 건강했으며 가벼운 건망증, 우울증, 천식, 계절성 알레르기 병력만 있다. 체온 36.9°C, 혈압 122/62 mmHg, 맥박 119회/분, 실내 공기 산소포화도 98%이다. 질문에 부적절하게 대답하고 혼란스러워한다. 피부는 따뜻하고 홍조를 띠며 건조하고 동공은 확장되어 있다. 이 환자에서 추가로 나타날 가능성이 높은 소견은 무엇인가?

## 선택지

A. 관상동맥 연축
B. 기관지 분비물 증가
C. QRS 연장
D. 요폐

## 해설

혼돈·산동·빈맥·따뜻하고 붉으며 건조한 피부는 항무스카린성 독성을 시사한다. 방광 배뇨근의 muscarinic 작용 차단으로 요폐(D)가 나타날 수 있다. 장운동 저하에 따른 장폐색/변비는 별개의 효과다. QRS 연장은 일부 TCA 등의 동시 sodium-channel 차단에서 가능하지만 모든 항무스카린 중독에 필수인 소견은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 항콜린성 요폐의 기전을 장관운동 억제로 설명한 오류 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004008
