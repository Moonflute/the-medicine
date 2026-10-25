---
type: qbank
schema_version: 1
id: medqa-us-train-004101
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:448792afbf7c78916b1a00b9202f875e776297065a0397f3cc737454dbe2ec9d
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "급성 비대상성 심부전"
  - "폐울혈"
  - "간울혈"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: 임상증례 객관식
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 남자가 3시간 동안 지속된 호흡곤란으로 응급실에 왔다. 지난 1주 동안 몇 블록만 걸어도 숨이 차고 피곤했다. 10년간 당뇨병과 고혈압이 있으며 메트포르민, 글리피지드, 리시노프릴을 복용해 왔지만 계획에 없던 여행 때문에 지난주에는 약을 먹지 않았다. 6개월 전 급성 바이러스 간염을 앓았으나 잘 회복했다. 체온 37.0°C, 맥박 108회/분, 혈압 170/94 mmHg, 호흡수 24회/분이다. 눈 주위 부종과 양쪽 발목 및 경골 앞 함요부종이 있고 창백함이나 황달은 없다. 양측 견갑골 아래에서 수포음이 들리며 복부검사에서 압통성 간비대가 있다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 당뇨병성 케톤산증
B. 급성 비대상성 심부전
C. 폐색전증
D. 급성 신부전

## 해설

양측 폐수포음·말초부종·압통간비대와 악화된 호흡곤란은 폐/전신울혈의 급성 비대상성 심부전 B에 부합한다. 간염 과거력이나 당뇨만으로 간질환/DKA가 현재 증상의 원인이라고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ADHF 진단 B는 유지. 진단문항에 불필요한 일률 치료와 전부량 오역을 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004101
