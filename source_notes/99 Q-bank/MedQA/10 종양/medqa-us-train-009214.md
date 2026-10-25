---
type: qbank
schema_version: 1
id: medqa-us-train-009214
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4b4961c1b25bd0574aedd939333c8931c8457c4a49f43d0c713362499b6d5aa9
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "breast mass"
  - "유방 종괴"
  - "fibroadenoma"
related_disease_slugs:
  - MTMg67aA7J246rO8L-yErOycoOyEoOyihSAoRmlicm9hZGVub21hKS5tZA
question_type: investigation
difficulty: standard
answer: A
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

28세 G0P0 여성이 유방 종괴 평가를 위해 산부인과에 내원했다. 이전에 산부인과 진료를 받은 적은 없지만 전날 샤워 중 스스로 종괴를 발견했다. 일주일 전 경미한 교통사고에서 안전벨트를 착용한 운전자였고 이후 목이 뻐근하다. 그 외에는 건강하며 주요 질환의 개인력이나 가족력은 없다. 마지막 월경은 3주 전이었다. 진찰에서 왼쪽 유방 하내측에 단단하고 둥글며 압통이 없는 2 cm 종괴와 미세한 멍이 있고, 국소 림프절은 만져지지 않는다. 다음으로 가장 적절한 처치는 무엇인가?

## 선택지

A. 유방 초음파
B. 유방촬영술
C. 유방절제술
D. 안심시키고 관찰

## 해설


28세의 새로 만져지는 유방 종괴는 표적 초음파 A로 우선 평가한다. 최근 교통사고와 국소 멍이 있어 혈종·지방괴사도 중요한 감별이며 단단하다는 이유만으로 암이나 섬유선종을 확정하지 않는다. 원문에는 종괴의 이동성이 제시되지 않았다. 영상·임상 소견이 의심스럽거나 불일치하면 추가 영상 또는 조직검사를 고려하고, 확인 없이 단순 안심이나 유방절제술을 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009214 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문의 압통 없는 종괴·최근 안전벨트 외상을 무시하고 이동성 섬유선종으로 단정한 해설 교정;28세 첫 영상 US A 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.radiologyinfo.org/en/info/acs-palpable-breast-masses

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009214
