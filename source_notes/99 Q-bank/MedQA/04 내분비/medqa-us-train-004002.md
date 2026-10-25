---
type: qbank
schema_version: 1
id: medqa-us-train-004002
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:567631ef817969d922c353fdeaf1623d1b0343b31a209ed934665db5c35cd339
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "중증 저칼륨혈증"
  - "저염소성 대사성 알칼리증"
  - "체액량 감소"
related_disease_slugs:
  - MDUg7Iug7J6lL-yggOy5vOulqO2YiOymnSAoSHlwb2thbGVtaWEpLm1k
question_type: 임상증례 객관식
difficulty: complex
answer: A
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
original_answer: C
answer_change_reason: "ERC2025는 K<3.0에서 12유도ECG와 심장리듬 감시를 권고. K2.2의 중증저K에서 ECG평가가 필요하며 원답 C의 생리식염수만으로 K를 신속교정한다는 근거는 없어 A로 수정."
---

# MedQA US 임상문제

## 문제

48세 여자가 저칼륨혈증(2.5 mEq/L)의 추가 평가를 위해 일차의료기관에서 응급실로 이송되었다. 2주 전 고혈압을 진단받고 약물치료를 시작했다. 음식은 가리지 않고 규칙적으로 운동하지만 평소처럼 운동을 끝낼 수 없었다고 한다. 체온 36.5°C, 혈압 107/74 mmHg, 맥박 80회/분, 호흡수 15회/분, 실내 공기 산소포화도 94%이다. 신체검사는 정상이다. 말초 정맥로를 확보하고 기본 대사 패널을 시행했다. 혈청 Na+ 135, Cl− 89, K+ 2.2, HCO3− 33 mEq/L, BUN 44 mg/dL, 포도당 147 mg/dL, 크레아티닌 2.3 mg/dL, 마그네슘 2.0 mEq/L이다. 다음 중 관리의 최선의 단계는 무엇인가?

## 선택지

A. 심전도 시행
B. 탄산수소칼륨 50mEq 경구 투여
C. 말초 정맥으로 등장성 생리식염수 1L 투여
D. 소변 나트륨과 크레아티닌 측정

## 해설

중증 저칼륨혈증(K2.2)은 부정맥 위험이 있으므로 선택지 중 먼저 ECG를 얻고 심전도 감시를 준비하는 A가 적절하다. KCl 보충·신기능/반복K·Mg 및 원인약 평가를 병행한다. 저Cl성 용적수축이 있으면 saline도 필요할 수 있지만 K를 함유하지 않은 식염수만으로 가장 빠르게 K를 교정할 수는 없다. 대사성 알칼리증에서 potassium bicarbonate 선택도 부적절하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: K2.2의 중증저K에서 ECG/감시 A가 즉시 필요. 식염수1L가 가장 빠른K교정이라는 C 해설은 잘못.
- https://www.erc.edu/media/wwufbysp/gl2025-06-spec-circ-e.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004002
