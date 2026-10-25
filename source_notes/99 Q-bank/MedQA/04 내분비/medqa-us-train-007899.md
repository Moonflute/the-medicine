---
type: qbank
schema_version: 1
id: medqa-us-train-007899
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3587443d29166f7beb6523f6b60dee1b481476a070d1f915b2af4def91a3fbfc
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Cushing syndrome"
  - "hypercortisolism"
  - "hirsutism"
related_disease_slugs:
  - MDQg64K067aE67mEL-y_oOyLsSDspp3tm4TqtbAgKEN1c2hpbmcncyBTeW5kcm9tZSkubWQ
question_type: diagnosis
difficulty: complex
answer: A
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

37세 여성이 4개월 동안 불규칙한 월경과 전신 피로로 내원했다. 이전에는 25~29일 간격으로 규칙적으로 5일간 월경했지만 현재는 45~60일 간격으로 발생한다. 중대한 질환이나 복용 약물은 없다. 키 155 cm, 체중 89 kg, BMI 37 kg/m²이다. 체온 37°C(98.6°F), 맥박 90회/분, 혈압 146/100 mm Hg이다. 얼굴에 털과 면포가 있고 몸통에 여러 멍이 보인다. 신경학적 검사에서 양측 장요근과 이두근의 근력이 약하다. 헤모글로빈 13.1 g/dL, 백혈구 13,500/mm³, 혈소판 510,000/mm³, 혈청 Na⁺ 145, K⁺ 3.3, Cl⁻ 100 mEq/L, 포도당 188 mg/dL이다. 가장 가능성 높은 진단은?

## 선택지

A. 쿠싱증후군
B. 일차성 알도스테론증
C. 다낭성 난소증후군
D. 갑상선기능저하증

## 해설


정답 A. 멍이 잘 듦, 근위부 근력 약화, 월경 변화, 비만·고혈압·고혈당은 cortisol 과다인 Cushing syndrome에 부합한다. 이를 corticosterone 과다라고 바꾸어 부르면 안 된다. 임상 양상으로 가장 가능성 높은 진단을 고르는 문제이며 실제 진단은 적절한 생화학 검사와 외인성 steroid 노출 확인 등을 거친다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007899 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고코르티코스테론혈증 오역을 고코르티솔혈증으로 교정, 진단 의심과 생화학 확인 구분.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007899
