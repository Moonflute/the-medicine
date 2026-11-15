---
type: qbank
schema_version: 1
id: medqa-us-train-008673
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:155c17fd7fa0148a3fb043eaec7cf3b26173aaaef7aceea71eab335d28e764db
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "MEN1"
  - "primary hyperparathyroidism"
  - "pituitary adenoma"
related_disease_slugs:
  - MDQg64K067aE67mEL-u2gOqwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVycGFyYXRoeXJvaWRpc20pLm1k
  - MDQg64K067aE67mEL-uHjO2VmOyImOyytCDsg5jsooUgKFBpdHVpdGFyeSBBZGVub21hKS5tZA
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

27세 남성이 반복되는 신장결석으로 평가받았다. 교정 칼슘 11.5 mg/dL, PTH 상승으로 원발성 부갑상선기능항진증이 확인됐다. 난치성 다발 십이지장 궤양과 설사도 있어 검사한 결과 가스트린종으로 진단됐다. 다음으로 적절한 조치는?

## 선택지

A. RET 검사만 시행
B. 결석과 궤양을 별개로 보고 가족 위험 평가 생략
C. 연 1회 분변잠혈검사만 시행
D. 다발성 내분비종양 1형에 대한 유전상담과 검사 의뢰

## 해설


젊은 환자의 원발성 부갑상선기능항진증과 가스트린종 조합은 MEN1을 강하게 시사한다. 유전 평가를 통해 다른 장기의 병변 감시와 가족 검사가 필요한지 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008673 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 가족성 난치성 궤양+고Ca/저P의 MEN1 의심에서 추가 pituitary adenoma D 연관성 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008673
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12507346/
