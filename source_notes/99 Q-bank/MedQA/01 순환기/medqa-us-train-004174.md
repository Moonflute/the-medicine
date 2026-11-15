---
type: qbank
schema_version: 1
id: medqa-us-train-004174
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:934854a54f6391697bf0b36488340c60cac9c36850701dc0978e21e54f085dd1
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "근육성 심실중격결손"
  - "선천성 심장질환"
  - "심실중격결손 자연 폐쇄"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Ius7IukIOykkeqyqSDqsrDshpAgKFZlbnRyaWN1bGFyIFNlcHRhbCBEZWZlY3QpLm1k
question_type: 임상증례 객관식
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlnb3hpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

15개월 남아가 정상적으로 성장하고 수유 중 숨참도 없다. 심초음파에서 작은 근육성 심실중격결손이 보이고, 심방·심실 확장이나 폐고혈압은 없다. 가장 적절한 관리는?

## 선택지

A. 현재 폐쇄하지 않고 소아심장 진료에서 경과를 본다
B. 항생제 예방투여를 매일 시작한다
C. 경구 디곡신을 시작한다
D. 경피적 결손 폐쇄술을 바로 시행한다

## 해설


작은 근육성 심실중격결손은 자연 폐쇄되는 경우가 많다. 성장과 심장 구조·압력이 정상인 무증상 아이에게 즉시 폐쇄나 심부전약은 필요하지 않다. 추적 여부와 간격은 소아심장 평가에 따라 정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 무증상·정상성장·폐고혈압 없는 muscularVSD는 안심/추적 A. 일률 digoxin·폐쇄·IE예방항생제 불필요.
- https://www.acc.org/-/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Latest-in-Cardiology/Articles/2023/ACPC-Birnbaum-EA.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004174
- ACC 작은 근육성 심실중격결손 추적 알고리즘: https://www.acc.org/-/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Latest-in-Cardiology/Articles/2023/ACPC-Birnbaum-EA.pdf
