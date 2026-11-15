---
type: qbank
schema_version: 1
id: medqa-us-train-007253
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d16644aaf66a919024839af25f0fa067b94a8bc0e5a79fdaeb9c7f3a1e407185
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심혈관질환 위험"
  - "당뇨병"
  - "중등도-고강도 스타틴"
  - "아토르바스타틴"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRmVub2ZpYnJhdGUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MaXJhZ2x1dGlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 남성이 제2형 당뇨병과 고혈압으로 치료 중이다. 심근경색이나 뇌졸중 병력은 없으며 생활습관 교정 후에도 LDL 콜레스테롤이 105 mg/dL이다. 이 환자의 죽상경화성 심혈관질환 예방을 위해 우선 선택할 지질저하제는?

## 선택지

A. 아토르바스타틴
B. 페노피브레이트
C. 오메가-3 지방산 보충제
D. 콜레스티라민

## 해설

당뇨병과 추가 위험인자가 있는 환자에서는 심혈관질환 일차예방에도 스타틴을 우선 사용한다. 용량과 목표 LDL은 환자의 위험도와 치료 반응에 맞춰 정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Statin A는유지하되산식미상의18.7%를현행중등도라고고정한위험분류교정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001423
- https://diabetesjournals.org/care/article/49/Supplement_1/S183/163934/9-Pharmacologic-Approaches-to-Glycemic-Treatment

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007253
- 대한당뇨병학회 당뇨병 진료지침(2025): https://www.e-dmj.org/upload/pdf/dmj-2025-0469.pdf
