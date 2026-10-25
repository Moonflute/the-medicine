---
type: qbank
schema_version: 1
id: medqa-us-train-003077
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a08cb405e502deaa9fbbe5b641e9baedf52833f7bfb4622d5e89b5d0a4c0a670
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "gastroesophageal reflux disease"
  - "heartburn"
  - "empiric proton-pump inhibitor"
  - "no alarm symptoms"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsi53rj4Qg7Jet66WYIOyniO2ZmCAoR0VSRCkgKEdhc3Ryb2Vzb3BoYWdlYWwgUmVmbHV4IERpc2Vhc2UpLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvTGFuc29wcmF6b2xlLm1k
  - ZHJ1ZzowMyDshoztmZTquLAvUmFuaXRpZGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

44세 남성이 한 달 동안 식후 반복되는 심와부 통증으로 내원했다. 통증이 목과 인후로 올라가며 일반의약품 제산제로 호전되지 않는다. 아침에 일어날 때 입 냄새가 심하고 누우면 통증이 악화된다. 최근 체중 감소는 없다. 체온 37°C, 호흡수 15회/분, 맥박 70회/분, 혈압 100/84 mmHg이다. 신체검사는 심와부를 깊게 촉진할 때 경미한 압통 외에는 정상이고 심전도도 이상이 없다. 다음 중 관리에서 가장 적절한 다음 단계는?

## 선택지

A. 바륨 삼킴검사
B. 란소프라졸
C. 액상 제산제
D. 라니티딘

## 해설

식후·누운 자세에서 악화되고 목으로 올라오는 통증과 구취는 GERD에 부합한다. 경고소견이 없는 전형적 증상에서 선택지 중 PPI인 lansoprazole B의 시험치료가 적절하다. 정상 ECG 하나만으로 모든 심장성 흉통이 배제되는 것은 아니며 비전형적/급성 양상은 별도 평가한다. 심장성 역류성 식도염이라는 기존 표현은 올바른 진단명이 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 심장성 역류성 식도염이라는 잘못된 용어를 GERD로 교정. 경고소견 없는 PPI B 시험치료.
- https://doi.org/10.14309/ajg.0000000000001538

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003077
