---
type: qbank
schema_version: 1
id: medqa-us-train-005593
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:62d27ddeab5af7fc1088659921495fa5064937bac5d2c67d54f3e7c44625d6ff
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "일과성 흑암시"
  - "경동맥 죽상경화"
  - "망막 허혈"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 여성이 왼쪽 눈에 커튼이 내려오듯 시야가 어두워졌다가 10분 뒤 정상으로 회복됐다고 한다. 통증은 없고 왼쪽 경동맥 위에서 혈관잡음이 들린다. 망막으로 색전이 이동했을 가능성이 높은 혈관은?

## 선택지

A. 왼쪽 내경동맥
B. 오른쪽 내경동맥
C. 왼쪽 외경동맥
D. 기저동맥

## 해설


일시적 단안 시력 소실은 망막 허혈의 단서다. 눈동맥은 같은 쪽 내경동맥에서 나오므로 왼쪽 내경동맥을 색전원으로 평가한다. 시력이 회복돼도 같은 날 뇌졸중 위험을 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 무통성 일과단안시력소실·동측 목잡음은 경동맥 A의 망막색전 원인과 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005593
