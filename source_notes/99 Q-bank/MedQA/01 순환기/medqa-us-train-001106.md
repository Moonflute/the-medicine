---
type: qbank
schema_version: 1
id: medqa-us-train-001106
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:84ea3aec32a37325880bd48120d7d60861c629831a3e9650aa7492795e5f1e81
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "chronic obstructive pulmonary disease"
  - "narrow-complex tachycardia"
  - "atrial fibrillation"
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

만성 폐쇄성 폐질환(COPD) 과거력이 있는 60세 남성이 호흡곤란으로 구급차를 통해 응급실로 이송되었습니다. 환자는 숨이 차서 문장을 제대로 이어 말하지 못합니다. 응급구조사는 환자가 티오트로피움(tiotropium) 흡입기를 여러 번 사용했으나 효과가 없었다고 전합니다. 환자의 활력징후는 다음과 같습니다: 체온 정상, 혈압 90/60 mmHg, 심박수 120회/분, 호흡수 24회/분. 산소포화도는 90%입니다. 심전도(EKG) 검사 결과, 각 QRS 복합체 앞에 불규칙한 P파가 선행하고 PR 간격이 불규칙한 좁은 복합체 빈맥(narrow-complex tachycardia)이 관찰됩니다. 다음으로 가장 적절한 처치는 무엇입니까?

## 선택지

A. 혈액 화학 검사 및 일반 혈액 검사를 시행하고 관찰한다
B. 즉시 라베탈롤(labetalol)을 투여하고 응급실에서 관찰한다
C. 즉시 산소를 투여한다
D. 기관내 삽관을 시행하고 중환자실로 입원시킨다

## 해설


COPD 환자에서 불규칙한 P파와 불규칙 PR 간격은 심방세동을 시사한다. 저산소증과 저혈압이 동반된 급성 상황에서는 즉시 산소 공급이 가장 중요한 초기 처치이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001106
