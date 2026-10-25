---
type: qbank
schema_version: 1
id: medqa-us-train-002925
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f97d916967eb4209dc4a70ab64be0a8a4bec68624b5b48f1ae57de4978b57d03
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "viral myocarditis"
  - "Coxsackie B virus"
  - "heart failure"
  - "postviral cardiomyopathy"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOq3vOyXvCAoTXlvY2FyZGl0aXMpLm1k
  - MDEg7Iic7ZmY6riwL-yLrOq3vOuzkeymnSAoQ2FyZGlvbXlvcGF0aHkpLm1k
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

12세 여아가 일주일 동안 운동할 때 피로, 호흡곤란, 가벼운 흉통으로 내원했다. 발열이나 발진은 없고 3주 전 상기도 감염이 있었다. 3일 전 콜로라도 여름캠프에서 돌아왔으며 하이킹과 캠핑을 했다. 체온 36.9°C, 심박수 96회/분, 혈압 106/74 mmHg, 실내 공기 산소포화도 96%이다. 경정맥 팽창과 양쪽 발목 1+ 함요부종, 흩어진 흡기성 수포음, 심첨부의 제3심음이 들린다. 혈색소 11.6 g/dL, 백혈구 8,900/mm³, ESR 10 mm/hr이며 흉부 X선에서 경미한 심장비대가 보인다. 다음 중 이 환자 증상의 가장 가능성 높은 원인은?

## 선택지

A. 급성 류마티스열
B. 보렐리아 부르그도르페리 감염
C. 콕사키바이러스 감염
D. 리노바이러스 감염

## 해설

선행 호흡기 감염 후 호흡곤란·S3·JVD·부종·심비대가 나타나 심근염에 의한 심부전을 의심한다. 선택지 중 고전적 원인인 Coxsackie virus C가 가장 부합한다. 그러나 이 증례만으로 특정 바이러스가 확진된 것은 아니며, 실제 심근염 원인 분포는 지역·연령과 검사방법에 따라 달라진다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 심부전 양상과 선행 URI에서 선택지 C는 가능하나 Coxsackie가 현재 모든 청소년 심근염 최다 원인이라는 단정은 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002925
