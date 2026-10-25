---
type: qbank
schema_version: 1
id: medqa-us-train-008682
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b26bf0191f328cc9d517febb19482896ab13ec825590fdedd022b0d3b4a81ac5
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "idiopathic intracranial hypertension"
  - "pseudotumor cerebri"
  - "acetazolamide"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tirnrsJzshLEg65GQ6rCc64K0IOqzoO2YiOyVlSAoSWRpb3BhdGhpYyBJbnRyYWNyYW5pYWwgSHlwZXJ0ZW5zaW9uKS5tZA
difficulty: complex
answer: A
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

31세 여성이 2주 동안 지속된 두통과 오심으로 내원했다. 두통은 아침에 깰 때 더 심하고 강도는 10점 만점에 7점이다. 이 기간 동안 특히 갑자기 일어서거나 몸을 구부릴 때 양쪽 눈의 시야가 수초간 사라지는 짧은 에피소드가 있었다. 키 165cm(5피트 5인치), 체중 98kg(216파운드), BMI 36kg/m²이다. 활력징후는 정상이다. 시력은 양안 20/20이고 주변 시야가 약간 감소되어 있다. 안저검사에서 양측 시신경유두 부종이 보인다. 뇌 MRI는 정상이다. 요추천자에서 개방압은 310mmH₂O이고 뇌척수액 백혈구 4/mm³(림프구 75%), 단백질 35mg/dL, 포도당 45mg/dL이다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 아세타졸아미드 치료
B. 시신경초 천공술
C. 뇌실 단락술
D. 푸로세미드 치료

## 해설

비만, 유두부종, 일시적 시각 소실과 높은 뇌척수액 개방압은 두개내고혈압을 시사한다. 이차 원인을 배제한 IIH에서는 체중 관리와 acetazolamide(A)를 고려하여 시기능을 보호한다. 시야를 추적하고 급속 시력악화가 있으면 수술을 신속히 평가한다. 정상 뇌 MRI만으로 정맥동혈전증 등 모든 이차 원인이 배제되는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 경한 시야손실 IIH의 acetazolamide A 확인. 약물이 모든 증상에 가장 효과적이라는 단정 제거하고 체중·시야 추적 보완.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC6166610/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008682
