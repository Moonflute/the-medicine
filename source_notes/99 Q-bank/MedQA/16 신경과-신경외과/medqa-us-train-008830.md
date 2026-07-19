---
type: qbank
schema_version: 1
id: medqa-us-train-008830
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:138db3952c3756c6c3db30e63b02baa7f47d610c8fdd5db3195b127113af1724
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Parkinson disease"
  - "levodopa-carbidopa"
  - "carbidopa"
question_type: mechanism
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

62세 남성이 일차진료 의뢰로 신경과에 내원했다. 1년 넘게 왼손에 안정 시 떨림과 왼팔의 뻣뻣함이 있다. 아내는 걷는 모습도 이상해졌다고 한다. 고혈압과 고지혈증으로 아스피린, 암로디핀, 로수바스타틴을 복용한다. 신체검사에서 왼쪽 검지와 엄지가 반복적으로 원을 그리는 움직임을 보이며 손을 능동적으로 움직이면 사라진다. 왼쪽 상지의 수동운동은 경직으로 일부 제한되고 보행은 느리고 종종걸음이다. 가장 효과적인 치료를 처방하고 부작용을 예방하기 위해 두 번째 약물을 추가했다. 두 번째 약물의 기전은 무엇인가?

## 선택지

A. 무스카린성 아세틸콜린 수용체 차단
B. 카테콜-O-메틸전이효소 억제
C. 방향족 L-아미노산 탈탄산효소 억제
D. 모노아민 산화효소-B 억제

## 해설


레보도파와 카르비도파 병용은 레보도파의 말초 대사를 차단해 중추에서의 효능을 높인다. 카르비도파는 L-아미노산 탈탄산효소(DDC)를 억제해 레보도파가 도파민으로 전환되는 것을 방지한다. 따라서 두 번째 약물의 기전은 방향족 L-아미노산 탈탄산효소 억제이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008830
