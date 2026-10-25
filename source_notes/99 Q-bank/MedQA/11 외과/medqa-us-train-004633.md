---
type: qbank
schema_version: 1
id: medqa-us-train-004633
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8a906e4e79f61e2301ec3b7743bb532322a7fed3ad995e16b008d2752ad89b7d
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "후복막 출혈"
  - "복부 둔상"
  - "출혈성 쇼크"
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
  - MjEg7J2R6riJ7J2Y7ZWZL-uLpOuwnOyZuOyDgSAoUG9seXRyYXVtYSkubWQ
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

33세 남성이 자동차 사고로 인한 외상 때문에 응급실에 왔다. 맥박은 분당 122회로 빠르고 가늘며, 혈압은 78/37 mm Hg, 호흡수는 분당 26회, 실내 공기 산소포화도는 90%이다. 신체검사에서 졸려하고 피부가 차갑고 축축하다. 복부검사에서 오른쪽 옆구리에 멍이 보인다. 외부 생식기는 정상이고 뚜렷한 외상도 없다. 소변검사에서 적혈구 6/고배율시야가 보이고 헤마토크릿은 22%, 혈청 크레아티닌은 1.1 mg/dL이다. 산소와 정맥 수액 소생을 즉시 시작했지만 저혈압이 지속된다. 외상 초음파(FAST)에서 후복막 액체 저류가 보인다. 관리에서 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 조영제를 사용한 복부 및 골반 CT
B. 수술실로 이동하여 탐색적 개복술
C. 역행성 요도조영술
D. 진단적 복강세척

## 해설


지속 저혈압·빈맥·저헤마토크릿과 옆구리 타박상은 중대한 외상성 출혈을 시사한다. 소생에 반응하지 않는 환자에서는 CT로 처치를 지연하지 않고 즉시 수술적 출혈제어를 준비하므로 선택지 B가 적절하다. 정상 크레아티닌이나 소량 현미경적 혈뇨가 중증 신손상을 배제하지 않는다. 다만 FAST는 주로 복강/심낭의 자유액을 평가하며 후복막 손상 탐지에는 제한적이므로 원문의 후복막 액체 서술만으로 출혈 장기나 손상등급을 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004633 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 지속 쇼크에서 응급 출혈제어 B는 유지하며 FAST가 후복막 출혈을 잘 확인한다는 오해를 제한했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.auanet.org/documents/education/clinical-guidance/Urotrauma.pdf
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8896237/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004633
