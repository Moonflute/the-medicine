---
type: qbank
schema_version: 1
id: medqa-us-train-009541
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8a40572e3de27fe0e2716d6d12396be10a27a3d7578c22fbe465b81ff1b0924e
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "primary myelofibrosis"
  - "일차성 골수섬유증"
  - "JAK2 mutation"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2KueuwnOyEsSDqs6jsiJjshKzsnKDspp0gKFBNRikgKFByaW1hcnkgTXllbG9maWJyb3NpcyAoUE1GKSkubWQ
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

67세 남자가 추적 진료를 위해 내원했다. 한 달 전 비장비대가 발견되었고 수개월 동안 야간 발한과 의도하지 않은 5 kg(11 lb) 체중 감소가 있었다. 혈색소 9 g/dL, MCV 95 μm³, 백혈구 12,000/mm³, 혈소판 260,000/mm³이다. 초음파에서 비장 15 cm와 경미한 간비대가 보인다. 말초도말에서 눈물방울 적혈구와 유핵 적혈구, 미성숙 골수계 세포가 보이고 골수 흡인은 매우 어렵지만 세 계열 모두 증식되어 있다. TRAP 음성, 클론성 골수 형질세포는 없고 JAK2 양성, 9번과 22번 염색체 전좌는 음성이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 호지킨 림프종
B. 다발골수종
C. 진성적혈구증가증
D. 일차성 골수섬유증

## 해설


빈혈, 눈물방울 적혈구, 유핵적혈구와 미성숙 골수계 세포, 비장비대 및 어려운 골수 흡인은 일차성 골수섬유증(D)에 부합한다. JAK2 양성과 BCR::ABL1 관련 전좌 음성도 선택지 감별을 돕는다. 진성적혈구증가증에서도 백혈구·혈소판이 함께 증가할 수 있으므로 JAK2만으로 두 질환을 구별하지 않으며, 이 사례에서는 빈혈과 섬유화성 소견이 핵심이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009541 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 눈물방울/유핵적혈구·미성숙 골수계·dry tap·JAK2+/BCRABL−는 PMF D. PV는 적혈구만 증가한다는 부정확한 비교 수정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009541
