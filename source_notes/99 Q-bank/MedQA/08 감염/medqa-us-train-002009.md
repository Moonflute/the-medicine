---
type: qbank
schema_version: 1
id: medqa-us-train-002009
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6b36a0ce255f5a6883be1b30d3487da7c39a79973fe34a75336f6e3d0e30c7f7
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Ebola virus disease"
  - "viral hemorrhagic fever"
  - "disseminated intravascular coagulation"
question_type: diagnosis
difficulty: complex
answer: A
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

30세 산림 조경 전문가가 토혈과 혼란으로 응급실에 왔다. 일주일 전 발열, 심한 두통, 근육통, 고관절·어깨 통증과 반구진 발진으로 인플루엔자 진단을 받았으나 하루 호전 후 복통, 구토와 설사가 발생했고 토혈이 한 번 있었다. 2주 전 서아프리카 열대우림과 동굴에서 유인원을 포함한 동물과 직접 접촉했다. 결막 충혈, 하지 멍, 주사 부위 출혈이 있고 백혈구 1,000/mm3, 혈소판 50,000/mm3, aPTT 60초, PT 25초, fibrin split product 양성, 크레아티닌 2 mg/dL이다. 다음 중 가장 가능성 높은 원인 병원체는 무엇인가?

## 선택지

A. Ebola virus
B. Plasmodium falciparum
C. Yersinia pestis
D. Zika virus

## 해설


발열, 두통, 근육통, 반구진 발진 후 급성 출혈성 증상과 DIC 소견(혈소판 감소, aPTT·PT 연장, FDP 양성)이 나타난 점이 고위험 출혈성 바이러스 감염을 시사한다. 서아프리카 열대우림에서의 동물 접촉은 에볼라 바이러스 노출 위험을 높인다. 따라서 가장 가능성 높은 병원체는 에볼라 바이러스이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002009
