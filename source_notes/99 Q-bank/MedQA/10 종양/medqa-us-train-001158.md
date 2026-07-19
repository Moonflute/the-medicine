---
type: qbank
schema_version: 1
id: medqa-us-train-001158
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:620444ad633c00932c87afa7f3f6f8cd1987a0497a503668f1b57f01065c0ff3
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "infiltrating ductal carcinoma"
question_type: management
difficulty: complex
answer: A
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

환자가 유방촬영술(mammogram)을 시행받았고, 불규칙한 경계와 침상 모양(spiculated)의 가장자리를 가진 6.5mm 크기의 종괴가 관찰되었습니다. 이후 시행한 종괴의 중심부 바늘 생검(core needle biopsy) 결과, HER2 양성, 에스트로겐 수용체 음성, 프로게스테론 수용체 음성인 침윤성 관암종(infiltrating ductal carcinoma)으로 확인되었습니다. 혈구 수치와 간 기능 검사는 정상입니다. 검사 결과는 다음과 같습니다: 혈색소 12.5 g/dL, 혈청 Na+ 140 mEq/L, Cl- 103 mEq/L, K+ 4.2 mEq/L, HCO3- 26 mEq/L, Ca2+ 8.9 mg/dL, 요소질소(BUN) 12 mg/dL, 포도당 110 mg/dL, 알칼리성 인산분해효소(ALP) 25 U/L, 알라닌 아미노전이효소(ALT) 15 U/L, 아스파르트산 아미노전이효소(AST) 13 U/L. 다음 중 가장 적절한 다음 관리 단계는 무엇입니까?

## 선택지

A. 유방 보존술 및 감시 림프절 생검
B. 전신 PET/CT
C. 양측 유방 절제술 및 림프절 곽청술
D. 뼈 스캔(Bone scan)

## 해설


HER2 양성, 호르몬 수용체 음성의 6.5 mm 미만 종양은 림프절 전이 위험이 낮아 유방 보존술(광범위 절제)과 동시에 감시 림프절 생검으로 충분히 관리한다. 이는 표준 초기 치료 단계이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001158
