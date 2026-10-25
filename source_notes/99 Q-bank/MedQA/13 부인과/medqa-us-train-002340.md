---
type: qbank
schema_version: 1
id: medqa-us-train-002340
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a5a3bc225f78980a58fb5875e7801c968b550b7327aa2a00114cf5a049c3ad18
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "polycystic ovary syndrome"
  - "hirsutism"
  - "insulin resistance"
  - "dyslipidemia"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-uLpOuCrSDrgpzshowg7Kad7ZuE6rWwIChQb2x5Y3lzdGljIE92YXJ5IFN5bmRyb21lKS5tZA
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 백인 여성이 과도한 얼굴 및 팔 털로 내원했다. 지난 1년 동안 3개월 이상 월경이 없는 경우가 자주 있었다. 체온 98.6°F, 혈압 120/80 mmHg, 맥박 60회/분, BMI 30 kg/m²이며 검사로 의심 진단이 확인되었다. 이 질환의 최선의 초기 치료와 현재 검사해야 할 동반질환은?

## 선택지

A. 치료: 복합 경구 피임약, 동반질환: 불임과 인슐린 저항성
B. 치료: 체중 감량, 동반질환: 불임과 인슐린 저항성
C. 치료: 체중 감량, 동반질환: 불임과 지질 이상
D. 치료: 체중 감량, 동반질환: 인슐린 저항성과 지질 이상

## 해설

PCOS에서는 생활습관·체중관리와 당대사·지질 평가가 중요하여 D가 선택지 중 적절하다. 인슐린저항성을 혈중 인슐린 검사만으로 일상 선별하기보다 OGTT 등으로 혈당 상태를 평가한다. 희발월경의 내막 보호와 고안드로겐 증상에는 복합피임약 등 추가 치료도 상담한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: PCOS체중관리만으로모든증상치료를대체하지않고 당대사검사방식정리.
- https://integration.asrm.org/practice-guidance/practice-committee-documents/recommendations-from-the-2023-international-evidence-based-guideline-for-the-assessment-and-management-of-polycystic-ovary-syndrome/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002340
