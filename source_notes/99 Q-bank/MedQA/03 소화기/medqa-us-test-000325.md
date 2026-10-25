---
type: qbank
schema_version: 1
id: medqa-us-test-000325
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:8e765014bfccbc370621745faae64be0293fdf1e1ae2a172d1d97d15a1aa1219
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 담관염"
  - "총담관 폐쇄"
  - "패혈성 쇼크"
related_disease_slugs:
  - MTEg7Jm46rO8L-2MqO2YiOyEsSDsh7ztgawgKFNlcHRpYyBTaG9jaykubWQ
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 남성이 의식 상태 변화로 응급실에 왔다. 급성으로 위중한 상태이며 방향감각을 잃어 병력을 제공할 수 없었다. 체온 38.7°C(101.6°F), 혈압 80/50 mmHg, 맥박 103회/분, 호흡수 22회/분, BMI 20 kg/m²였다. 진찰에서 공막과 피부에 황달이 있었고, 복부를 진찰할 때 오른쪽 상복부를 깊게 누르면 신음했다. 혈색소 14.5 g/dL, MCV 88 fL, 백혈구 16,500/mm³, 혈소판 170,000/mm³였다. 혈청 나트륨 147 mEq/L, 칼륨 3.8 mEq/L, 염소 106 mEq/L, 중탄산염 25 mEq/L, BUN 30 mg/dL, 크레아티닌 1.2 mg/dL였다. 총 빌리루빈 2.8 mg/dL, AST 50 U/L, ALT 65 U/L, ALP 180 U/L였다. 환자는 응급으로 정맥 수액, 도파민, 광범위 항생제 치료를 받았고 혈압은 101/70 mmHg로 호전되었다. 복부 초음파에서 총담관이 확장되어 있었다. 다음 중 가장 적절한 처치는?

## 선택지

A. 내시경적 역행성 담췌관조영술(ERCP)
B. 자기공명 담췌관조영술(MRCP)
C. 경피경간 담관조영술
D. 복부 CT

## 해설


총담관 폐쇄에 의한 급성 담관염은 황달·복통·발열을 동반한다. ERCP는 폐쇄 부위를 즉시 확인하고 스텐트 삽입·배액이 가능하므로 치료적 진단으로 가장 적절하다. 따라서 ERCP가 정답이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 발열·황달·우상복부통증에 쇼크/의식변화와 담관확장이 동반된 중증 담관염. 소생·항생제 후 배액 가능한 ERCP A가 적합.
- https://www.asge.org/home/resources/publications/guidelines/asge-guideline-on-the-management-of-cholangitis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000325
