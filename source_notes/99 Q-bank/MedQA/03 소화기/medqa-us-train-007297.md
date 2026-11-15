---
type: qbank
schema_version: 1
id: medqa-us-train-007297
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:99af9353c795eadc92f67851550fe19d6063147704f88e478ee1a37bbbf4df34
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Streptococcus gallolyticus 감염성 심내막염"
  - "대장암 연관성"
  - "대장내시경"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rjIDsnqUg7Y-Q7IeEIChMYXJnZSBCb3dlbCBPYnN0cnVjdGlvbikubWQ
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

66세 여성의 혈액배양에서 Streptococcus gallolyticus가 자랐고 심초음파에서 대동맥판 식생이 확인됐다. 항생제 치료로 상태가 안정됐다. 출혈이나 장 증상이 없어도 함께 확인할 검사는?

## 선택지

A. 분변잠혈검사만 시행
B. 복부 단순 X선
C. 대장내시경
D. 상부위장관 내시경

## 해설


S. gallolyticus 심내막염은 대장 종양과 연관된다. 장 증상이 없어도 환자가 검사를 견딜 상태가 되면 대장내시경으로 병변을 평가한다. 분변잠혈검사만으로 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 확인된S.gallolyticus IE는대장종양평가용대장내시경 C를지지. 이판정이원문2주치료를모든IE에승인하는뜻은아님.
- https://academic.oup.com/eurheartj/article/44/39/3948/7243107

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007297
