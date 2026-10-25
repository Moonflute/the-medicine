---
type: qbank
schema_version: 1
id: medqa-us-train-001965
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6d58d2a38373eb2a042fe4d0f3adc3cb3db3918df177239de7cd6fd5d362009e
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "organ donation"
  - "HIV infection"
  - "hepatitis C"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: ethics
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

58세 남성이 혼란, 체중 감소 및 무뇨로 응급실에 왔다. 만성콩팥병, 고혈압과 제2형 당뇨병이 있고 소아기에 급성 림프모구성 백혈병으로 동종 줄기세포이식을 받았다. HIV 양성이고 활동성 C형간염이 있다. 무기력하고 다리의 심한 부종과 전신 근력저하, 폐 수포음이 있다. HCV 항체와 RNA가 양성이고 HIV 바이러스량은 검출되지 않으며 CD4 수는 589/μL이다. ECG에서 잦은 심실조기수축이 보이고 ABG는 pH 7.23, PCO2 31 mm Hg, HCO3- 13 mEq/L이다. 사망 시 장기 또는 조직 기증을 원한다. 다음 중 장기 기증의 절대적 금기는 무엇인가?

## 선택지

A. 소아기 백혈병
B. 급성 신손상
C. 알코올중독
D. 절대적 금기 없음

## 해설

선택지에 제시된 소아기 백혈병의 장기 관해, 급성 신손상, 과거 음주력만으로 모든 장기·조직 기증을 일률적으로 금지할 수 없으므로 D이다. 다만 D는 이 환자의 모든 조직이 적합하다는 보장이 아니다. HIV 양성자의 장기는 HOPE Act 및 OPTN 요건에 따라 HIV 양성 수혜자에게 이식할 수 있고, HCV를 포함한 감염 전파 위험은 장기 종류·수혜자·동의·치료 가능성을 평가한다. 조직·각막의 공여 적합성은 별도 규정을 적용한다. HIV/HCV가 항상 모든 장기 기증의 절대금기라는 기존 설명은 부정확하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 해설의 HIV/HCV 일괄 절대금기 주장을 제거. 선택지 A–C는 자동 절대금기가 아니나 장기·조직별 감염 규정은 별도.
- https://www.hrsa.gov/optn/professionals/resources/hope-act
- https://www.cdc.gov/transplant-safety/hcp/clinical-guidance/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001965
