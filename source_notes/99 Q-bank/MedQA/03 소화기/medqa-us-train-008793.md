---
type: qbank
schema_version: 1
id: medqa-us-train-008793
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:719526abe3e266b873a3bcb2ada11cf4715b8e96b6f9f1bf02887944a4130ffd
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "irritable bowel syndrome"
  - "functional abdominal pain"
  - "pain relieved by defecation"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qs7zrr7zshLEg7J6lIOymne2bhOq1sCAoSUJTKSAoSXJyaXRhYmxlIEJvd2VsIFN5bmRyb21lIChJQlMpKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
---

# MedQA US 임상문제

## 문제

32세 여성이 설사형 과민성장증후군을 진단받았다. 일반적인 식사 조절에도 복통과 팽만이 있고, 본인이 식사로 증상을 줄이고 싶어 한다. 체중 감소나 혈변은 없다. 적절한 식사 계획은?

## 선택지

A. 밀·유제품·콩류를 평가 없이 평생 모두 제한한다.
B. 평소 식사를 유지하고 발효성 탄수화물 섭취를 늘린다.
C. 저포드맵 식이를 짧게 시도한 뒤 음식을 하나씩 다시 넣어 허용 범위를 찾는다.
D. 매일 생밀기울을 갑자기 많이 먹어 복부팽만을 치료한다.

## 해설


저포드맵 식이는 일부 환자의 복통과 팽만을 줄일 수 있다. 제한은 짧게 시행하고, 반응을 본 다음 재도입해 문제가 되는 음식만 조정한다. 지나친 장기 제한은 피한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008793 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: IBS의 배변 관련 통증 완화 C 유지. 본문에 없는 변비와 이미 확인된 배변 후 호전을 추가한 설명 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008793
- https://doi.org/10.5056/jnm25007
