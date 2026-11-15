---
type: qbank
schema_version: 1
id: medqa-us-train-007704
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:644fea9ed540dcc056dd36c502ea918fd2dd11fecce46573103d9e867f17ae15
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "morbid obesity"
  - "bariatric surgery"
  - "body mass index"
  - "Morbid obesity"
related_disease_slugs: []
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Ub3BpcmFtYXRlLm1k
---

# MedQA US 임상문제

## 문제

42세 여성이 BMI 33 kg/m²이고 제2형 당뇨병과 고혈압이 있다. 구조화된 식사·운동 프로그램과 약물치료에도 체중과 혈당 조절이 충분하지 않다. 국내 지침에 따른 다음 비만 치료 계획은?

## 선택지

A. BMI가 40 이상 될 때까지 수술 평가를 미룬다
B. 비만대사수술 적합성에 대한 다학제 평가를 의뢰한다
C. 지방흡입술을 대사질환 치료로 의뢰한다
D. BMI가 35 미만이므로 동반질환과 무관하게 수술을 배제한다

## 해설


국내 지침에서는 비수술 치료로 충분히 감량하지 못한 경우 BMI 35 이상, 또는 비만 관련 동반질환이 있는 BMI 30 이상에서 비만대사수술을 고려한다. 의뢰는 적합성과 위험·편익을 평가하기 위한 것이며 수술을 확정하는 단계는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007704 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 생활중재 실패는 제시됐지만 약물 실패는 없으므로 제거; BMI42에서 현행 수술 기준과 다학제 평가 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://asmbs.org/app/uploads/2022/10/ASMBS-IFSO-Guidelines-2022-PIIS1550728922006414.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007704
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10088549/
