---
type: qbank
schema_version: 1
id: medqa-us-train-000348
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:10f836604081ee535749d19a0c8475fbd324d3db58482f8267370d8325089d17
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Paget disease of bone"
related_disease_slugs:
  - MTMg67aA7J246rO8L-2MjOygnO2KuOuzkSAoUGFnZXQncyBEaXNlYXNlKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 남성이 전신 통증을 주소로 일차 진료 의사를 방문하였다. 환자는 근육과 뼈에 지속적인 통증이 느껴진다고 말한다. 이러한 증상은 지난 몇 주간 지속되었으며, 이부프로펜(ibuprofen)이나 아세트아미노펜(acetaminophen)을 복용해도 호전되지 않았다. 환자의 과거력상 알코올 남용, 반복적인 췌장염, 변비, 불안이 있다. 22갑년의 흡연력이 있다. 체온은 99.5°F(37.5°C), 혈압은 140/95 mmHg, 맥박은 70회/분, 호흡수는 15회/분, 실내 공기에서 산소 포화도는 99%이다. 신체 검진상 사지의 전반적인 압통/통증이 관찰된다. 복부 검진에서 장음은 정상이며 압통은 없다. 피부 검진상 특이 소견은 없다. 검사 결과는 다음과 같다. 혈색소: 12 g/dL, 헤마토크릿: 36%, 백혈구 수: 7,500/mm^3(정상 감별 계산), 혈소판 수: 147,000/mm^3. 혈청: Na+: 138 mEq/L, Cl-: 100 mEq/L, K+: 4.2 mEq/L, HCO3-: 24 mEq/L, BUN: 20 mg/dL, 포도당: 99 mg/dL, 크레아티닌: 1.0 mg/dL, Ca2+: 10.2 mg/dL, 알칼리성 인산분해효소(alkaline phosphatase): 252 U/L, 리파아제(lipase): 30 U/L, AST: 12 U/L, ALT: 10 U/L. 이 환자의 상태와 관련된 것은 무엇인가?

## 선택지

A. 난청(Hearing loss)
B. 벤스 존스 단백(Bence Jones proteins)
C. 고칼슘혈증(Hypercalcemia)
D. 폐쇄성 황달(Obstructive jaundice)

## 해설

정답은 A이다. 골통과 ALP 상승, 정상 간 aminotransferase 및 대체로 정상 칼슘은 Paget 골병을 시사한다. 두개골이 침범되면 청력 저하가 발생할 수 있어 A가 가장 합당하다. 골밀도 증가나 특정 방사선 소견은 본문에 제시되지 않았으므로 관찰했다고 단정하지 않는다. 실제로 골성 ALP와 영상 등을 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 제시되지 않은 골밀도 증가를 근거로 한 설명 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000348
