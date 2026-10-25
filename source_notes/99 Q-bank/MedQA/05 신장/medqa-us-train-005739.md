---
type: qbank
schema_version: 1
id: medqa-us-train-005739
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2b67cb646af6032be518a3e4b37f6a5fc9a5d512c80dbcd41efb11db99f0e363
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "요로결석"
  - "신산통"
  - "신장 초음파"
related_disease_slugs:
  - MDUg7Iug7J6lL-yalOuhnOqysOyEnSAoVXJvbGl0aGlhc2lzKS5tZA
question_type: investigation
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
---

# MedQA US 임상문제

## 문제

37세 여성이 8시간 전부터 시작되어 사타구니로 뻗치는 좌측 옆구리 통증과 배뇨 시 골반 통증으로 응급실에 왔다. 여러 차례 요로감염이 있었고 일부는 입원 및 정맥 항생제가 필요했다. 병원에서 혈압은 125/83 mmHg, 맥박은 분당 88회, 호흡수는 분당 28회, 체온은 36.5°C(97.7°F)이다. 신체검사에서 좌측 늑골척추각 압통과 하복부 통증이 있다. 임신검사는 음성이고 경미한 질소혈증이 있으며 소변검사지에서 혈액 양성이다. 다음 중 이 사례의 진단에 가장 유용한 초기 검사는 무엇인가?

## 선택지

A. 신장 초음파
B. 조영 복부 CT
C. 소변 삼투질농도
D. 혈액요소질소(BUN):혈청 크레아티닌(SCr) 비율

## 해설

사타구니로 방사되는 옆구리 통증과 혈뇨는 요로결석을 시사한다. 신장 초음파(A)는 수신증과 일부 결석을 방사선 노출 없이 평가할 수 있어 이 문항의 초기 검사 선택으로 적절하다. 경미한 질소혈증과 반복 감염력이 있어 폐색 여부를 평가하는 것도 중요하다.

초음파 음성만으로 요관결석을 배제할 수 없다. 진단이 불확실하거나 추가 확인이 필요하면 비조영 CT를 고려한다. 선지 B는 '조영' CT로, 결석 확인에 쓰는 비조영 CT와 다르다. 성인의 모든 급성 산통에서 초음파만이 유일한 초기 검사라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 초음파를 모든 성인 산통에서 유일한 첫 검사로 일반화하지 않고, 제공된 선지와 폐색/수신증 평가 및 비조영 CT 보완을 설명.
- https://uroweb.org/guidelines/urolithiasis/chapter/guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005739
