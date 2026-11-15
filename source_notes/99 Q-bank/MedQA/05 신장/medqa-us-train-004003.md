---
type: qbank
schema_version: 1
id: medqa-us-train-004003
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:031f14170fea454b6c74bf68c254b0772840836a6fe8b72f94c9b4d3641e976a
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "급성 세뇨관 괴사"
  - "급성 신손상"
  - "아미노글리코사이드 신독성"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
question_type: diagnosis
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUmFtaXByaWwubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdGF6aWRpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

78세 여성이 패혈증으로 치료받은 뒤 혈압과 체액 상태가 회복됐지만 크레아티닌이 계속 상승한다. 최근 겐타마이신을 사용했고 소변 검사에서 많은 진흙색 과립 원주와 세뇨관 상피세포가 보인다. 영상에서 요로 폐쇄는 없다. 신손상의 원인으로 가장 적절한 것은?

## 선택지

A. 요로 폐쇄
B. 허혈 또는 약물 독성에 의한 급성 세뇨관 손상
C. 급속진행성 사구체신염
D. 탈수에 의한 신전성 손상만 지속

## 해설

저혈압이나 아미노글리코사이드 노출 뒤 나타난 진흙색 과립 원주와 세뇨관 상피세포는 급성 세뇨관 손상을 지지한다. 하나의 분획배설 수치로 원인을 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Aminoglycoside ATN의 muddy brown cast는 괴사상피/세포잔해이며 색소침착 자체로 정의하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004003
- https://kdigo.org/guidelines/acute-kidney-injury/
