---
type: qbank
schema_version: 1
id: medqa-us-train-010138
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e5a6128f4f36a1d2eb46100cb8fb2812c7e6cf0b8245dbbbd6cc339e604a6514
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "갑상선 결절"
  - "갑상선암"
  - "세침흡인검사"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDqsrDsoIggKFRoeXJvaWQgTm9kdWxlKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmOyVlCAoVGh5cm9pZCBDYW5jZXIpLm1k
question_type: investigation
difficulty: complex
answer: A
original_answer: B
answer_change_reason: "ETA2023는 새 결절에서 TSH와 진단 초음파를 우선하고 sonographic risk/size로 FNA 결정; subnormal TSH는 scintigraphy 고려. 현 문항은 이러한 선행 결과가 없으므로 A로 교정. https://pmc.ncbi.nlm.nih.gov/articles/PMC10448590/"
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

25세 남성이 새로 발생한 두근거림과 오른손 떨림으로 내원했다. 평소보다 더 활동적인 느낌이지만 점점 피로해지고 있다. 지난 2개월 동안 약 3kg이 감소했고 증상 때문에 매우 불안하다. 15년 전 신경모세포종을 이겨냈으며 잠재적 합병증을 알고 있다. 진찰에서 오른쪽 갑상선엽에 약 2cm 결절이 만져지고 갑상선은 단단하지만 압통은 없다. 림프절병증은 없다. 혈압 118/75 mmHg, 호흡수 분당 17회, 맥박 분당 87회, 체온 37.5°C이다. 다음 중 가장 적절한 처치는?

## 선택지

A. 초음파검사
B. 세침흡인 세포검사
C. 평생 추적 관찰
D. 갑상선 호르몬 대체요법

## 해설


정답 A. 새로 발견된 갑상선 결절은 TSH 측정과 경부 초음파로 크기·구조·림프절 및 악성 위험을 평가한다. 초음파 소견과 크기에 따라 FNA 여부를 정하며 TSH가 낮으면 섭취스캔으로 기능성 결절을 평가한다. 두근거림·체중감소만으로 암을 확진할 수 없고 과거 신경모세포종 치료에 방사선이 사용됐는지도 본문에 없다. 모든 2cm 촉지 결절에서 초음파 전 즉시 FNA를 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010138 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 새 촉지2cm 결절은 TSH·초음파 위험층화가 FNA보다 선행. 방사선 노출조차 제시되지 않은 과거 neuroblastoma만으로 B 강제하지 않고 A로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10448590/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010138
