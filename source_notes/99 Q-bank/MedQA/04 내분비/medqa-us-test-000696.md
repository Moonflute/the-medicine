---
type: qbank
schema_version: 1
id: medqa-us-test-000696
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:ed5147c18f99b2f6bd4a77b10b8b2cc84b4c5df11f53625a63d4f6bff94138cb
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "삼투성 이뇨"
  - "조절되지 않는 당뇨병"
  - "고나트륨혈증"
related_disease_slugs:
  - MDUg7Iug7J6lL-qzoOuCmO2KuOulqO2YiOymnSAoSHlwZXJuYXRyZW1pYSkubWQ
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: mechanism
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

75세 남성이 7일 동안 지속된 메스꺼움과 구토로 병원에 왔다. 지난 2일 동안 쇠약하고 피곤하며 오래 앉아 있다가 일어서면 어지럽다. 평소보다 화장실에 자주 가지만 매번 ‘정상적인 양’으로 소변을 본다고 한다. 설사는 없었다. 6개월 동안 히드로클로로티아지드로 고혈압을 치료 중이며 하루 물 9잔을 마시고 약을 규칙적으로 복용한다. 키 168 cm, 체중 90 kg, BMI 32 kg/m²였다. 체온 36.5°C(97.7°F), 혈압 106/54 mmHg, 맥박 92회/분이었다. 혀가 하얗고 손등 피부를 집으면 5초 후에 돌아왔다. 말이 느렸으나 지남력은 정상이었다. 혈청 나트륨 150 mEq/L, 염소 97 mEq/L, 칼륨 3.6 mEq/L, 중탄산염 30 mEq/L, 삼투질농도 354 mOsm/kg, HbA1c 10.5%, 소변 삼투질농도 400 mOsm/kg였다. 이 소견의 가장 가능성 높은 설명은?

## 선택지

A. 이뇨제 과다복용
B. 삼투성 이뇨
C. 알도스테론 과다 생성
D. 항이뇨호르몬 생성 부족

## 해설

HbA1c 10.5%는 지속적인 고혈당을 시사하며, 포도당의 요중 배설이 늘면 삼투성 이뇨와 수분 소실이 생겨 탈수·고나트륨혈증을 일으킬 수 있다. 보기 중 B가 가장 합당하다. 소변 삼투질농도 400 mOsm/kg은 혈청 354보다 높으며, 용질이 많은 소변에서도 순수 수분 손실이 클 수 있다. 이 현상에 반드시 혈당 300 mg/dL 이상이라는 고정 역치가 적용되는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 B 유지. 소변 400은 혈청354보다 높은데 더 낮다고 한 수치오독 및 고혈당성 이뇨의 고정 300mg/dL 역치 주장 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000696
