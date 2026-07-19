---
type: qbank
schema_version: 1
id: medqa-us-train-003646
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:be90e10344ed25c9fcc009aae6bf9e49c84f0f87017fb22dc3d9d9cfa2df84c1
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "acute tubular necrosis"
  - "septic shock"
  - "intrinsic acute kidney injury"
  - "BUN creatinine ratio"
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

72세 남성이 발열, 오한, 호흡곤란, 가래 기침, 소변량 감소로 응급실에 왔다. 혈압은 80/48 mmHg였고 중환자실에서 혈관작용제 치료를 시작했다. 6시간 동안 무뇨가 지속되었으며 패혈성 쇼크가 의심되었다. 다음 중 예상되는 추가 소견은?

## 선택지

A. 소변 삼투질농도 500 mOsmol/kg 초과
B. 소변 삼투질농도 350 mOsmol/kg 미만
C. BUN:혈청 크레아티닌 비율 15:1 미만
D. 소변 나트륨 40 mEq/L 초과

## 해설


패혈성 쇼크에서 신전도성 급성 신손상(ATN)이 발생하면 BUN:크레아티닌 비율이 <15:1로 낮아진다. 이는 재흡수가 감소하고 크레아티닌이 상대적으로 더 상승하기 때문이다. 다른 선택지는 초기 전신성 혈류 감소에 따른 농축성 AKI에서 보이는 소견이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003646
