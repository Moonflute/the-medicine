---
type: qbank
schema_version: 1
id: medqa-us-validation-001153
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:2a09fa55379cc24f38ea91a49e8b6d4293dbad62d920654a4d08eaeecb4c6193
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "폰빌레브란트병"
  - "과다월경"
  - "점막피부 출혈"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2PsCDruYzroIjruIzrnoDtirjrs5EgKHZvbiBXaWxsZWJyYW5kIERpc2Vhc2UsIHZXRCkubWQ
question_type: diagnosis
difficulty: complex
answer: B
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

25세 여성이 평생 지속된 과다월경과 쉽게 멍드는 증상으로 진료를 받으러 왔다. 어머니도 월경량이 많다. 혈색소는 10.5 g/dL, 혈소판은 정상이고 PT는 14초, PTT는 43초로 연장되어 있다. 이 환자의 과다월경을 일으킨 가장 가능성 높은 원인은?

## 선택지

A. 인자 V 라이덴
B. 폰빌레브란트병
C. 혈우병 B
D. 항인지질항체증후군

## 해설


평생 지속된 과다월경·멍과 모녀 가족력은 VWD(B)를 시사한다. 원문 PT 14초와 INR 1.1은 정상 범위이고 PTT 43초는 연장되어 있다. vWF의 혈소판 부착 기능 저하와 VIII인자 안정화 감소로 설명하며, 두 검사 모두 연장되었다고 해석하지 않는다. Factor V Leiden과 항인지질항체증후군은 주로 혈전성 질환이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001153 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 모녀 점막출혈과 PT정상/INR1.1·PTT연장은 VWD B. 첫 문장이 PT까지 연장되었다고 한 모순 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001153
