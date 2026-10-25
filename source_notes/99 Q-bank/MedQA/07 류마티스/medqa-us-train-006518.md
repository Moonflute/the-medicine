---
type: qbank
schema_version: 1
id: medqa-us-train-006518
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:519b3c5b13d1843f66ed5c6e3202ad3969a20b033db140d1f5b5c807dfa23b11
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "재발성 통풍"
  - "고요산혈증"
  - "알로푸리놀 예방요법"
  - "Gout"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-2Gte2SjSAoR291dCkubWQ
question_type: prevention
difficulty: complex
answer: D
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FsbG9wdXJpbm9sLm1k
---

# MedQA US 임상문제

## 문제

56세 남성이 추적 진료를 위해 내원했다. 2주 전 오른쪽 엄지발가락 중족지관절의 급성 통풍 발작을 치료받았고 나프록센으로 증상이 호전되었다. 지난 1년 동안 발가락과 발목에 비슷한 관절통이 세 번 더 있었으며 일반의약품 진통제로 호전되었다. 현재 복용 약물은 없다. 과거 매일 맥주 3~5잔을 마셨으나 최근 줄였다. 스테이크하우스의 요리사로 일한다. 체온은 37.0°C(98.6°F), 맥박은 분당 76회, 혈압은 147/83 mm Hg이다. 오른쪽 엄지발가락에 경미한 압통만 있고 열감이나 뚜렷한 변형은 없다. 혈청 크레아티닌은 0.9 mg/dL이다. 향후 통풍 발작을 예방하기 위한 장기 치료로 가장 적절한 약물은?

## 선택지

A. 프로베네시드
B. 아스피린
C. 페글로티케이스
D. 알로푸리놀

## 해설


1년간4차례 발작이 있어 장기 요산저하 치료 적응증이며 선택지 D allopurinol이 적절한 우선 약제이다. 낮은 용량으로 시작해 혈청요산 목표에 맞춰 증량하고 초기 항염증 예방요법을 병행한다. Probenecid는 조건에 따라 대안이며 pegloticase는 통상 난치성 중증 통풍에 남긴다. Aspirin은 급성 통풍 치료제로 선택하지 않고 저용량은 요산 배설을 낮출 수 있다. 다른 적응증으로 필요한 aspirin을 임의 중단하라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006518 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Aspirin을 통풍 급성기 약으로 권하고 대안 요산저하제를 모두 부작용 약으로 취급한 설명을 교정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10563586/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006518
