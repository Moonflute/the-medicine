---
type: qbank
schema_version: 1
id: medqa-us-train-006208
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e561cf635eef8d9493eb21465298ffcce687d4c801ae670dcbde5591529a0f26
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "호중구감소성 발열"
  - "급성 골수성 백혈병"
  - "광범위 항녹농균 항생제"
related_disease_slugs:
  - MDkg7ZiI7JWhL-q4ieyEsSDqs6jsiJjshLEg67Cx7ZiI67ORIChBTUwpIChBY3V0ZSBNeWVsb2lkIExldWtlbWlhKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2FzcG9mdW5naW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFsYWN5Y2xvdmlyLm1k
---

# MedQA US 임상문제

## 문제

55세 여성이 급성 골수성 백혈병 유도 화학요법 후 퇴원한 지 4일째 발열로 내원했다. 다른 증상은 없고 체온 38.8°C(101.8°F), 혈압 110/65 mmHg, 맥박 82회, 호흡수 14회이다. 카테터 부위, 피부, 두경부, 심장, 폐, 복부 및 직장 주위는 정상이다. 혈색소 9 g/dL, 백혈구 800/mm³, 분절호중구 40%, 혈소판 85,000/mm³이다. 다음 중 현재 가장 적절한 약물치료는 무엇인가?

## 선택지

A. 카스포펀진
B. 시프로플록사신
C. 이미페넴
D. 발라시클로버

## 해설


WBC800/µL×호중구40%=ANC320/µL이며 AML 유도항암 후 발열은 고위험 발열성 호중구감소증이다. 신속한 입원 경험적 항녹농균 정주 치료가 필요하고 선택지 C imipenem은 실제 임상에서 cilastatin과 결합해 사용하는 적절한 약제 중 하나다. 단순40%라는 백분율만으로 위험을 판단하지 않으며 배양·신기능·내성 위험에 따라 치료를 조정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006208 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 40%를 정상 호중구로 오해하지 않도록 ANC320 계산 및 imipenem-cilastatin 조합 맥락 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/neutropenic-patients-with-cancer/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006208
