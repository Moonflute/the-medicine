---
type: qbank
schema_version: 1
id: medqa-us-train-002888
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e2b8662ae4f681fa62c54621af78d5a4de46534e35351ae905b6f5e6a40216d1
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "initial prenatal screening"
  - "HIV screening"
  - "syphilis screening"
  - "hepatitis B screening"
question_type: prevention
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
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

임신 8주인 25세 미임부가 남편과 함께 첫 산전 진료를 받으러 왔다. 개인력과 가족력에 중대한 질환은 없고 예방접종은 최신이며 복용 약물은 없다. 기분전환용 약물과 음주를 하지 않는다. 활력징후는 정상이고 키 167 cm, 체중 68 kg, BMI 24.3 kg/m²이다. 4년 전 HIV, 클라미디아 트라코마티스, 임질균 검사에서 음성이었다. 다음 중 이번 방문에서 시행해야 할 검사는?

## 선택지

A. B군 연쇄상구균 배양, C형간염 혈청검사, PPD 피부검사
B. 혈청 TSH, CMV 혈청검사, HSV-2 PCR
C. VDRL, HIV 웨스턴블롯, 혈청 HBsAg
D. HIV ELISA, 신속혈장레긴검사, 혈청 HBsAg

## 해설

선택지 중 D의 HIV 선별·RPR·HBsAg는 초기 임신에 필요하다. 실제 현행 HIV 초기 검사는 항원·항체 복합검사와 확인 알고리즘을 사용한다. HCV도 매 임신 선별해야 하며 D가 모든 산전 검사를 열거한 목록은 아니다. Western blot을 초기 선별검사로 사용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 기존D는적절한검사묶음이나현행초기선별전체와HIV검사방식보강.
- https://www.cdc.gov/pregnancy-hiv-std-tb-hepatitis/about/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002888
