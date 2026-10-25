---
type: qbank
schema_version: 1
id: medqa-us-train-001641
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6a7ec64b587a7624a405fb60c401da3d6c2e900df3107a1139475679bb09c9cd
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "SIADH after stroke"
  - "hyponatremia"
  - "fluid restriction"
related_disease_slugs:
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

69세 남성이 저녁식사 중 발생한 말 어눌함과 오른팔 사용 불능으로 응급실에 내원했다. 1시간 이내 도착했고 머리 CT에서 출혈은 없었다. 혈전용해제를 투여하고 신경과 병동에서 관리했다. 3일 후 안정적으로 회복 중이나 목 통증이 서서히 악화되어 이부프로펜을 투여 중이다. 혈청 Na+ 130 mEq/L, K+ 3.7 mEq/L, Cl− 100 mEq/L, HCO3− 24 mEq/L, BUN 7 mg/dL, 포도당 70 mg/dL, 크레아티닌 0.9 mg/dL, Ca2+ 9.7 mg/dL이며 소변은 어둡고 24시간 소변 Na+는 320 mEq/L이다. 체온은 99.5°F (37.5°C), 맥박은 95회/분, 혈압은 129/70 mmHg, 호흡수는 10회/분이다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 수분 제한
B. 경구 소금 정제
C. 데메클로사이클린
D. 코니밥탄

## 해설

급성 중추신경계 질환 뒤 발생한 경도 저나트륨혈증에서는 SIADH를 고려한다. 이 환자는 임상적으로 안정되고 중증 신경학적 악화가 제시되지 않았으므로, 보기 중에서는 A, 수분 제한이 합당하다. 데메클로사이클린이나 바소프레신 길항제를 초기부터 일률적으로 투여하지 않는다.

다만 Na 130 mEq/L와 높은 요중 나트륨만으로 SIADH를 확진하지 않는다. 혈청·소변 삼투질농도, 체액 상태, 부신·갑상선 기능 및 약물 영향을 평가해야 하며, 저혈량/염분소실 상태라면 처치가 달라진다. 원문의 'mEq/L/24 hours'는 농도와 일일 배설량 표기가 혼재하므로 확정적 요중 농도로 해석하지 않는다. 의식저하나 발작 등 중증 증상이 생기면 단순 수분 제한으로 대응하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 안정된 경도 저나트륨혈증의 원정답 A 유지. SIADH를 확진한 것처럼 쓰지 않고 체액상태/혈청·소변 삼투질농도 확인 필요 및 수분 제한의 범위를 명시. 원문의 비일관적인 24시간 소변 Na 단위를 진단적 농도로 단정하지 않음.
- https://academic.oup.com/ejendo/article/170/3/G1/6668028

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001641
