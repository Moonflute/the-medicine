---
type: qbank
schema_version: 1
id: medqa-us-train-008414
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fb770983c8bf28750c1616a8b42ccee194808761685022437a1f24bdf67f2e50
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "cystic fibrosis"
  - "CFTR"
  - "ΔF508 mutation"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
question_type: mechanism
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4세 남아가 부모와 함께 소아과에 내원했다. 어머니는 최근 아이가 악취 나는 변을 많이 본다고 말한다. 지난 1년 동안 한 달에 한두 번 악취가 나는 변을 보았지만, 최근에는 변이 더 묽고 횟수가 많아졌으며 특유의 냄새가 난다고 한다. 지난 몇 년 동안 폐렴으로 4번 입원했다. 유전자 검사에서 특정 염색체의 돌연변이로 페닐알라닌이 결실된 3염기쌍 결실이 확인되었다. 다음 중 이 아이의 임상 상태를 일으키는 결함 유전자가 위치한 염색체는 무엇인가?

## 선택지

A. 15번 염색체
B. 4번 염색체
C. 22번 염색체
D. 7번 염색체

## 해설


ΔF508 돌연변이는 CFTR 유전자가 7번 염색체에 위치함을 의미한다. 따라서 정답은 D이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 반복 폐감염과 지방변 및 3염기 결실은 CFTR ΔF508을 시사하며 위치는 7번 염색체 D.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008414
