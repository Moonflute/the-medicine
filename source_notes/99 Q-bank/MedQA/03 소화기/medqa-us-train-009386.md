---
type: qbank
schema_version: 1
id: medqa-us-train-009386
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2f0dc8ba06db985d1d13e01c5cfa4e63167aefbd1db2487c2e799469f0682c55
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute hepatitis A"
  - "급성 A형간염"
  - "anti-HAV IgM"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEgQe2YlSDqsITsl7wgKEFjdXRlIEhlcGF0aXRpcyBBKS5tZA
question_type: investigation
difficulty: complex
answer: A
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
---

# MedQA US 임상문제

## 문제

13세 남자가 어제부터 공막 황달과 2일간의 짙은 소변으로 내원했다. 일주일 전 기침, 감기, 발열이 있었고 일반의약품으로 치료했다. 호흡기 증상은 호전되었지만 이후 피로, 오심, 식욕저하가 있다. 반복적인 오심, 구토, 황달, 복통 병력이나 수혈력은 없다. 학교 근처 노점에서 자주 먹는다. 성장과 발달은 정상이다. 체온 37.9°C, 맥박 96회/분, 혈압 110/70 mmHg, 호흡수 22회/분이다. 황달과 압통이 있는 단단하고 매끄러운 간비대가 있다. 혈색소 14.2 g/dL, 백혈구 10,500/mm³, 혈소판 270,000/mm³, 총 빌리루빈 8.4 mg/dL, 직접 빌리루빈 7.8 mg/dL, ALT 350 U/L, ALP 95 U/L, PT 20초이다. 이 상태를 진단하는 데 가장 유용한 검사는 무엇인가?

## 선택지

A. 혈청 항HAV IgM 항체
B. 혈장 티로신과 메티오닌
C. 소변 환원물질 검사
D. 경피적 간 생검

## 해설


정답 A. 급성 간염이 의심되는 이 환자에서 IgM anti-HAV 양성은 최근/급성 HAV 감염을 뒷받침한다. IgG anti-HAV 또는 total anti-HAV만으로는 과거 면역과 급성 감염을 구분할 수 없다. 임상 증상만으로 다른 바이러스성 간염과 확정적으로 구분하지 않으며, PT 연장 등 중증도 소견은 별도로 추적해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009386 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 급성 HAV 확인은 IgM anti-HAV A; 임상 양상만의 확진과 가장 민감하다는 무조건 표현 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/hepatitis-a/hcp/diagnosis-testing/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009386
