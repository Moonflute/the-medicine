---
type: qbank
schema_version: 1
id: medqa-us-train-004901
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3eb743ab7a62df0efd9ed7155f75cbc03b864884d1ff71330b7df7d387ab1462
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 담관염"
  - "담도 폐쇄"
  - "내시경적 역행성 담췌관조영술"
  - "Acute cholangitis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sk7jqsJzqtIDsl7wgKENob2xhbmdpdGlzKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 여자가 복통으로 응급실에 왔다. 전날 저녁 식사 중 시작된 통증이 지속되었고 아침부터 매우 아파 남편이 구급차를 불렀다. 비만, 당뇨병, 우울증 병력이 있다. 체온 40°C, 혈압 90/65 mmHg, 맥박 160회/분이며 피부가 약간 황색이고 매우 아파 보인다. 백혈구 14,500/mm³, ALP 227 U/L, 총 빌리루빈 11.3 mg/dL, 직접 빌리루빈 9.8 mg/dL, AST 42 U/L, ALT 31 U/L이다. 항생제와 정맥 수액을 시작했다. 다음 중 가장 적절한 처치는?

## 선택지

A. 내시경적 역행성 담췌관조영술
B. 외상 초음파 평가(FAST)
C. 비위관 삽입 및 금식
D. 보존적 치료 후 계획된 담낭절제술

## 해설

고열·저혈압·빈맥과 심한 고빌리루빈혈증은 중증 급성 담관염을 시사한다. 항생제·수액 소생과 함께 A의 신속한 ERCP 담도배액으로 감염원을 조절해야 한다. 단순 간효소 상승 치료가 아니라 폐쇄된 감염 담도의 감압이 핵심이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 쇼크성 담관염의 ERCP A source control을 명료화하고 질환명 오역 제거.
- https://www.asge.org/home/resources/publications/guidelines/asge-guideline-on-the-management-of-cholangitis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004901
