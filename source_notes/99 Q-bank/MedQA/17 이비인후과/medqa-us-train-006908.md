---
type: qbank
schema_version: 1
id: medqa-us-train-006908
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1690abfa6a4f22cbba437a2f0f6c81e1c2607c986277ed337e2b5b9d42b6cb6c
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "갑상설관 낭종"
  - "정중선 경부 종괴"
  - "경부 초음파"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCR7IOB7ISk6rSAIOuCreyihSAoVGh5cm9nbG9zc2FsIER1Y3QgQ3lzdCkubWQ
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

8세 여아가 6개월 동안 진행된 목 부종으로 내원했다. 통증, 호흡곤란 또는 연하곤란은 없다. 키는 60백분위수, 체중은 55백분위수이고 활력징후는 정상이다. 진찰에서 목 중앙선에 3cm 크기의 낭성 무통성 종창이 있고 혀를 내밀면 위로 움직인다. 경부 림프절병증은 없으며 혈청 TSH는 2.1μU/mL이다. 다음 중 처치로 가장 적절한 다음 단계는?

## 선택지

A. 낭종, 관 및 설골 절제
B. 경부 초음파
C. 경부 CT
D. 낭종 절제

## 해설

정답은 B, 경부 초음파이다. 무통성 정중선 낭성 종괴가 혀를 내밀 때 위로 움직이는 것은 갑상설관낭종에 부합한다. 우선 초음파로 종괴의 성상을 평가하고 정상 위치에 갑상선 조직이 있는지 확인한다. TSH가 정상이어도 정상 위치 갑상선의 존재를 보장하지는 않는다. 확진 후 필요한 경우 낭종과 관 및 설골 중앙부를 포함한 Sistrunk 수술을 계획하며, 단순 낭종만 절제하면 재발 위험이 높다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 정중선 종괴/혀돌출 시 상승은 갑상설관낭종. 초음파를 보편적 최고 정확검사로 단정하지 않고 낭종 확인과 정상 위치 갑상선 확인이라는 수술 전 역할 설명. B 유지.
- 공식/학회 근거: https://doi.org/10.1308/rcsann.2022.0060

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006908
