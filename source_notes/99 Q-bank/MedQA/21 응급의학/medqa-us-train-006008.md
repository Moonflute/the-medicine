---
type: qbank
schema_version: 1
id: medqa-us-train-006008
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:956c97fc7a7fda108b51752d66bd1145d4b44293dac6475e0bfe42dcb94d9112
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "복부 둔상"
  - "혈복강"
  - "출혈성 쇼크"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
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

24세 여성이 폭행을 당한 후 응급실에 왔다. 구급대원에 따르면 몸통을 여러 차례 발로 차였으나 의식이 있고 질문에 대답할 수 있다. 두부 외상은 부인한다. 자궁내막증과 2년 전 수술로 제거한 난관난소농양 병력이 있으며 집에서 복용하는 약은 경구피임약뿐이다. 체온은 98.5°F(36.9°C), 혈압은 82/51 mmHg, 맥박은 분당 136회, 호흡수는 분당 10회, 산소포화도는 94%이다. 얼굴에 표재성 열상이 있고 흉부와 복부에 심한 멍이 있다. 폐 청진은 양측 정상이고 복부는 부드럽지만 팽창되어 전반적인 압통이 있다. 피부는 차갑고 축축하다. FAST 검사에서 비장 주위 공간에 액체가 보인다. 다음 중 관리의 다음 최선 단계는 무엇인가?

## 선택지

A. 복부 방사선촬영
B. 복부 CT
C. 응급 개복술
D. 수액 소생

## 해설

저혈압과 빈맥이 있는 관통성 복부외상 환자에서 비장 주위 FAST 양성은 복강 내 출혈을 시사한다. 즉각적인 정맥 접근과 소생(D)을 시작하되, 출혈성 쇼크에서는 혈액제제 중심 소생과 응급 출혈 통제를 병행한다. 혈압이 정상화될 때까지 다량의 결정질 수액만 투여하거나 CT를 기다려서는 안 된다. 이 환자는 외상외과의 신속한 개복술 평가가 필요한 상태이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 쇼크에서 소생을 즉시 시작하는 D를 유지하되 FAST 양성 불안정 환자의 응급 개복술을 수액 반응 대기로 지연하지 않도록 교정한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng39/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006008
