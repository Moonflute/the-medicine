---
type: qbank
schema_version: 1
id: medqa-us-train-004407
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5f6d3efe64328747a49e091d4bf1899e4367bb9e7fe333cb07fd6c6e092195c3
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "천식"
  - "운동 유발 기관지수축"
  - "기침형 천식"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: investigation
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
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0NldGlyaXppbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

21세 여성이 몇 주째 밤과 운동할 때 마른기침과 흉부 답답함이 반복된다고 한다. 증상이 없는 오늘 진찰과 흉부 X선은 정상이다. 천식을 평가하는 첫 폐기능검사는?

## 선택지

A. 기관지확장제 투여 전후 폐활량검사
B. 메타콜린 기관지유발검사를 바로 시행한다
C. 폐 일산화탄소 확산능 검사만 시행한다
D. 폐동맥 CT 혈관조영술

## 해설


천식이 의심되면 폐활량검사로 기류제한을 평가하고 기관지확장제 전후 차이로 가변성을 확인한다. 첫 검사 결과가 정상이어도 천식을 완전히 배제할 수는 없다. 증상이 있을 때 다시 검사하거나 필요시 유발검사를 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 야간/운동성기침·흉부압박의 천식 평가에 먼저 spirometry A; 결과에 따라 유발검사.
- https://ginasthma.org/reports/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004407
- https://new.lungkorea.org/board/guide/view/14959
- https://ginasthma.org/2026-gina-strategy-report/
