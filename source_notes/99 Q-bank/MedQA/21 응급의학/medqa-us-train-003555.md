---
type: qbank
schema_version: 1
id: medqa-us-train-003555
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8bcafe5659bce70234422fb6c0dc4e6dbf8b946cd4bc9e6bb1054c0676b7a702
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "hemorrhagic shock"
  - "traumatic amputation"
  - "intraosseous access"
  - "failed peripheral IV access"
question_type: management
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 군인이 폭발물 파편으로 팔꿈치 위 절단 손상을 입었다. 지혈대를 적용하고 이송되었으며, 도착 후 큰 정맥로 하나를 확보했지만 추가 정맥로 확보에 반복적으로 실패했다. 맥박은 145회/분, 호흡수는 28회/분, 혈압은 95/52 mmHg였다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 파편 상처를 세척한다
B. 중심정맥로를 확보한다
C. 지혈대를 압박 드레싱으로 교체한다
D. 골내 접근로를 확보한다

## 해설

출혈성 쇼크에서 말초 정맥로 확보가 반복 실패하면 골내 접근(D)으로 신속하게 소생용 수액·혈액제제 투여 경로를 확보할 수 있다. 접근로 자체가 혈액을 만들어 주는 것은 아니다. 원문은 above-elbow와 proximal forearm 절단을 모두 기술해 높이가 일치하지 않지만, 이 모순이 추가 순환 접근로 선택을 바꾸지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. IO D 확인. 접근로 자체가 혈액을 공급한다는 모호한 설명과 절단 높이의 원문 모순을 구별.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng39/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003555
