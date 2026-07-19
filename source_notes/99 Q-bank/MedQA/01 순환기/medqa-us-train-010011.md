---
type: qbank
schema_version: 1
id: medqa-us-train-010011
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:634b836505c2b0cf9592c1c4b07f25bfa7933101693614cc04cec976c4dc37fe
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "고혈압성 응급"
  - "급성 신손상"
  - "표적장기 손상"
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

57세 남성이 고혈압으로 일차진료의의 지시에 따라 응급실에 내원했다. 일반 건강검진에서 혈압이 180/115 mmHg로 측정되어 의사가 보냈다. 현재 무증상이고 건강하다고 느낀다. 고혈압 외 다른 질환은 없으며 지난주 검사도 정상이었다. 체온 36.8°F(36.8°C), 혈압 197/105 mmHg, 맥박 분당 88회, 호흡수 분당 14회, 실내 공기 산소포화도 99%이다. 신체검사는 정상이다. 재검한 검사에서 혈색소 15 g/dL, 헤마토크릿 46%, 백혈구 3,400/mm³(감별 정상), 혈소판 177,000/mm³, Na⁺ 139, Cl⁻ 102, K⁺ 4.0, HCO₃⁻ 24 mEq/L, BUN 29 mg/dL, 포도당 139 mg/dL, 크레아티닌 2.3 mg/dL, Ca²⁺ 10.2 mg/dL이다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 쿠싱증후군
B. 고혈압
C. 고혈압성 응급
D. 고혈압성 긴급

## 해설


환자는 급성 신기능 악화(Cr 2.3 mg/dL)와 중등도 혈압 상승을 동반한 매우 높은 혈압(197/105 mmHg)으로 장기 손상(신장) 증거가 있다. 이는 고혈압성 응급에 해당한다. 따라서 고혈압성 응급이 정답이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010011
