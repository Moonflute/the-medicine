---
type: qbank
schema_version: 1
id: medqa-us-train-005162
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c36cf63a219d1c7e35de6822e14f0f42b5e9215bc2e3db2d9a217c08dcc65c8f
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "다발근염"
  - "염증성 근육병"
  - "근전도검사"
  - "polymyositis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yXvOymneyEsSDqt7zrs5Hspp0gKEluZmxhbW1hdG9yeSBNeW9wYXRoeSkubWQ
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

32세 여자가 6주 동안 어깨와 다리 근력저하로 내원했다. 계단 오르기와 머리 빗기가 어렵고 최근 음식 삼키기도 힘들다. 휴식해도 호전되지 않으며 양측 장요근, 햄스트링, 삼각근, 이두근이 약하다. CK 7,047 U/L, LDH 2,785 U/L이다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 요추천자
B. 근전도검사
C. 텐실론 검사
D. 측두동맥 생검

## 해설


급성 근육 효소 상승과 전신 근력 저하는 다발성 근염을 의심하게 하며, 전기생리학적 특성을 확인하기 위해 근전도(EMG) 검사가 필요하다. EMG는 근섬유 손상 패턴을 보여준다. 따라서 근전도 검사가 다음 단계이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005162 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 심한 CK/LDH 상승과 대칭 근위부 근력저하·연하곤란은 근병증을 시사하며 선택지 중 EMG B가 근병성 전기생리 평가에 적절하다. 감각·반사 보존과 휴식 비호전을 포함해 원문·해설을 대조했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.niehs.nih.gov/sites/default/files/2024-09/naehs_council_abstract_rider_2024_september_long_508.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005162
