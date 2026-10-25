---
type: qbank
schema_version: 1
id: medqa-us-validation-000323
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e279bc8996f5b72a9c616b85bb3e3f07ae75c10f70e2cc2a4afdcd038d651d8c
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "전립선암 골전이"
  - "통증성 골전이"
  - "완화 방사선 치료"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yghOumveyDmOyVlCAoUHJvc3RhdGUgY2FuY2VyKS5tZA
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

64세 남성이 허리 아래쪽 통증으로 진료를 받으러 왔다. 수년 전 양성 전립선비대증을 진단받았고 지난해 악화되었다. 직장수지검사에서 단단한 결절이 만져져 전립선 생검을 했으며 고등급 선암이 확인되었다. 당시 뼈스캔에서 요추에 작은 국소 병변이 보였다. 전립선과 골반 림프절에 방사선 치료를 받고 류프로라이드와 항안드로겐을 시작했다. 2개월 전부터 허리 통증이 생겨 악화되었고 통증은 거의 지속되며 수면을 방해한다. MRI에서 골절이나 척수압박 없이 L2와 L3에 골전이가 보이고 PSA는 17.5 ng/mL이다. 가장 적절한 처치는?

## 선택지

A. 칼슘과 비타민 D 보충
B. 외부 방사선 치료
C. 플루타미드
D. 풍선척추성형술

## 해설


척추 전이로 국소 통증이 있지만 골절이나 척수압박이 제시되지 않아 해당 부위 외부 방사선치료 B가 통증 완화에 적절하다. 새로운 전신 진행 여부는 별도로 평가하지만 이미 시행한 호르몬 차단을 단순 반복하는 선택지는 당장의 국소 통증 치료를 대체하지 못한다. Kyphoplasty는 풍선척추성형술이며 이 케이스처럼 골절이 없는 상황에서 무조건 시행하는 치료가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000323 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 압박·골절 없는 통증성 척추전이의 국소 방사선 B 유지; D의 kyphoplasty 번역을 풍선척추성형술로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng234/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000323
