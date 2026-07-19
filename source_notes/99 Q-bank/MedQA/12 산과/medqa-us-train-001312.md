---
type: qbank
schema_version: 1
id: medqa-us-train-001312
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d72043ee2a63c4c4f8318a5e1b2da00bf215e94d1e5d5dc72b5ad34ed5b8460f
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "grand-mal seizure"
  - "valproic acid"
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

30세 여성(임신 2회, 출산 1회)이 가정에서 시행한 임신 테스트 결과 양성으로 확인되어 내원하였다. 지난 2주 동안 메스꺼움과 두 차례의 혈액이 섞이지 않은 구토가 있었다. 또한 빈뇨를 호소한다. 첫째 아이의 임신과 출산은 합병증 없이 진행되었다. 작년에 두 차례의 대발작(grand-mal seizure)을 겪었다. 남편과 성생활을 하고 있으며 콘돔을 일관되게 사용하지 않는다. 흡연이나 음주는 하지 않는다. 불법 약물은 사용하지 않는다. 현재 복용 중인 약물은 발프로산(valproic acid)과 종합비타민이다. 활력 징후는 정상 범위 내에 있다. 신체 검진상 이상 소견은 없다. 소변 임신 테스트는 양성이다. 이 아이가 다음 중 어떤 중재를 필요로 할 위험이 증가하는가?

## 선택지

A. 인공와우 이식(Cochlear implantation)
B. 호흡 보조(Respiratory support)
C. 하부 척추 수술(Lower spinal surgery)
D. 치과 치료(Dental treatment)

## 해설


발프로산은 태아 신경관 결손 및 저체중 위험을 크게 증가시킨다. 임신 중 발프로산 복용은 하부 척추 수술(신경관 결손 교정) 등 외과적 중재 필요성을 높인다. 따라서 하부 척추 수술이 가장 위험이 증가하는 중재이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001312
