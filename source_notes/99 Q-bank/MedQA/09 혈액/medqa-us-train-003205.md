---
type: qbank
schema_version: 1
id: medqa-us-train-003205
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8e858c7059121f88c020cae815895a378264b15dc1a4b61f9e90174e72f4b380
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "anemia of chronic disease"
  - "microcytic anemia"
  - "low TIBC"
  - "inflammation-mediated iron sequestration"
related_disease_slugs:
  - MDkg7ZiI7JWhL-unjOyEsSDsp4jtmZgg67mI7ZiIIChBbmVtaWEgb2YgQ2hyb25pYyBEaXNlYXNlKS5tZA
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
question_type: mechanism
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

당뇨병 병력이 있는 63세 남성이 피로로 내원했다. 혼자 살며 10년 동안 의사를 보지 않았고 운동을 하지 않으며 식단이 불량하고 매일 맥주 1~2잔을 마신다. 대장내시경을 받은 적이 없다. 혈색소 8.9 g/dL, 평균적혈구용적 70 fL, 페리틴 400 ng/mL, 총 철결합능 200 μg/dL, 혈청 철 50 μg/dL이다. 다음 중 비정상 검사 결과의 원인은?

## 선택지

A. 비타민 결핍
B. 무기질 결핍
C. 무기질 과잉
D. 만성 염증

## 해설


낮은 혈청 철과 TIBC에 비해 ferritin이 높은 조합은 염증성 빈혈에 부합하여 D이다. 염증으로 hepcidin이 증가하면 ferroportin이 억제되어 장의 철흡수와 대식세포의 철 방출이 줄고 조혈에 사용할 철이 감소한다. 간염성 빈혈이라는 별개 진단을 의미하지 않으며 기저 염증원과 동반 철결핍 여부는 추가 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003205 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 간염성 빈혈이라는 잘못된 용어를 염증성 빈혈/hepcidin 기전으로 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003205
