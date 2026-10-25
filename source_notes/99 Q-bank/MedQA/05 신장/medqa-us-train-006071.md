---
type: qbank
schema_version: 1
id: medqa-us-train-006071
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:18c3b14bcad82e63bfa964dce04bcb3625ec64996d5b44bd3dd12e1b47bcbeed
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "아시클로버 결정성 신병증"
  - "신세뇨관 폐쇄"
  - "파종성 대상포진"
  - "Acute tubular necrosis"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
question_type: mechanism
difficulty: complex
answer: "D"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "바이러스가 세뇨관을 막는다는 잘못된 기전을 치료 관련 acyclovir 결정 신병증으로 교정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

조절이 잘 되지 않는 제2형 당뇨병이 있는 55세 여성이 5일 동안 지속된 심한 통증성 수포성 발진으로 응급실에 왔다. 우측 이마에서 시작해 2일 동안 가슴, 등 및 양측 상지로 퍼져 파종성 피부 대상포진으로 진단되어 입원했다. 입원 전 약물은 인슐린뿐이었다. 입원 2일째 양측 옆구리에 간헐적인 경련성 통증과 오심이 발생했다. 체온은 36.7°C(98°F), 맥박은 분당 80회, 혈압은 128/76 mmHg이고 이마, 가슴 및 사지의 발진은 아물고 새 수포는 없다. 혈청 BUN은 33 mg/dL, 크레아티닌은 3.5 mg/dL로 입원 시 각각 18 mg/dL와 1.1 mg/dL였다. 다음 중 검사 이상을 가장 잘 설명하는 원인은 무엇인가?

## 선택지

A. 항사구체기저막 항체 형성
B. 신장 유두의 응고성 괴사
C. 사구체 면역복합체 침착
D. 신세뇨관 폐쇄

## 해설

파종성 대상포진 입원 치료 뒤 빠른 creatinine 상승·옆구리 통증은 acyclovir 결정 침착에 의한 세뇨관 폐쇄를 의도한 사례다. 원문에 투여 약물은 직접 명시되지 않아 이는 표준 치료에서 추론한 전제이다. 실제로는 투여 이력·수액 상태·소변과 다른 AKI 원인을 확인한다. 바이러스 감염 자체가 결정처럼 세뇨관을 막는다는 설명은 잘못이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006071

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 바이러스가 세뇨관을 막는다는 잘못된 기전을 치료 관련 acyclovir 결정 신병증으로 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623
