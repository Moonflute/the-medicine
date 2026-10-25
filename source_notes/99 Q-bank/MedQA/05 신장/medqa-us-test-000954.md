---
type: qbank
schema_version: 1
id: medqa-us-test-000954
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:bd40806a95dc8f5e03f8ecf54510cb0fb582eac02d04b3adb7b1472be3afa9d2
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "급성 신손상"
  - "신전성 질소혈증"
  - "요소 분획배설률"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
question_type: investigation
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

70세 남성이 3일간의 호흡곤란, 기좌호흡, 하지부종으로 응급실에 왔다. 6년 전 혈관재개통술이 필요했던 심근경색과 고혈압 병력이 있다. 심바스타틴과 리시노프릴을 복용하며 혈압 100/80 mmHg, 맥박 88회/분, 호흡 28회/분이었다. 경정맥 팽창, 심첨박동의 외측 전위, S4, 범수축기 잡음, 종아리 중간까지 양측 함요부종 2+가 있었다. 푸로세미드, 카르베딜롤, 산소를 시작했지만 6시간 후에도 혈압이 낮고 크레아티닌이 1.9 mg/dL였다. 신전성 신질환과 신성 신질환을 감별하는 데 가장 유용한 검사는?

## 선택지

A. 설포살리실산 검사
B. 소변 나트륨 농도
C. 요소 분획배설률(FEUrea)
D. 소변 질산염

## 해설

정답은 C이다. furosemide는 요중 Na 배설을 늘려 요중 Na나 FENa의 해석을 어렵게 할 수 있으므로 선택지 중 FEUrea가 상대적으로 유용하다. FEUrea 역시 패혈증·중증 질환 등의 영향을 받아 단독으로 신전성/신실질성 AKI를 확진하지 못하며 병력·체액량·요침사와 함께 해석한다. sulfosalicylic acid 검사는 소변 단백을 침전 검출하는 검사이지 알레르기 검사가 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: FEUrea의 상대적 유용성을 절대 확진검사처럼 설명하지 않고 sulfosalicylic acid의 단백 검출 용도를 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000954
