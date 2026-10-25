---
type: qbank
schema_version: 1
id: medqa-us-test-000853
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:8d870250e3e619f745d48f730ea9ac558b316a746db464498efcea186b1cdb90
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 담관염"
  - "총담관 결석"
  - "담도 폐쇄"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sk7jqsJzrj4wgKEdhbGxzdG9uZSkubWQ
question_type: management
difficulty: complex
answer: C
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

48세 남성이 18시간 동안의 오심, 구토, 발열 및 오른쪽 상복부 통증으로 진료를 받으러 왔다. 지난 3개월 동안 같은 부위에 간헐적인 통증이 있었고, 보통 과식 후 발생해 1~2시간 내 가라앉았다. 체온 38.5°C(101.3°F), 맥박 130회/분, 호흡 24회/분, 혈압 130/84 mmHg였다. 오른쪽 상복부 압통과 흡기 중 일시적인 호흡 정지가 있었고, 응급 초음파에서 총담관이 확장되어 있었지만 총담관이나 담낭 내 결석은 보이지 않았다. 백혈구 14,000/mm³, 혈소판 320,000/mm³, 총 빌리루빈 1.8 mg/dL, 직접 빌리루빈 1.1 mg/dL, ALT 96 U/L, AST 88 U/L, ALP 350 U/L였다. 다음 중 가장 적절한 처치는?

## 선택지

A. 응급 복강경 담낭절제술
B. 내과적 치료 후 계획 복강경 담낭절제술
C. 응급 내시경 역행성 담췌관조영술(ERCP)
D. 담낭절개술

## 해설

정답은 C이다. 발열·우상복부 통증, 염증 반응, 담즙정체성 검사 이상과 총담관 확장은 급성 담관염을 지지한다. 초음파에 결석이 보이지 않아도 담도 폐쇄를 배제할 수 없으며, 소생·항생제와 함께 ERCP를 통한 신속한 배액을 고려한다. ERCP에서 폐쇄 원인을 확인해 결석 제거 또는 배액을 시행할 수 있지만 본문만으로 결석이 이미 관찰되었다고 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: CBD 결석이 직접 보였다고 단정하지 않고 담관염에 필요한 배액으로 ERCP 근거를 설명.
- https://www.asge.org/home/resources/publications/guidelines/asge-guideline-on-the-management-of-cholangitis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000853
