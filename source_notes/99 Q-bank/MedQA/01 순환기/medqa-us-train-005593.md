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
explanation_status: machine-generated
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

72세 여성이 시력 소실로 응급실에 왔다. 오늘 오후 잡지를 읽던 중 왼쪽 눈이 잘 보이지 않기 시작했다. 몇 분에 걸쳐 그 눈의 시야가 점점 어두워져 결국 완전히 까맣게 되었으나 약 10분 후 정상으로 돌아왔다. 현재는 정상적으로 보인다고 한다. 당시에도 지금도 통증이나 다른 증상은 없었다. 과거력으로 고혈압과 고지혈증이 있다. 왼쪽 목에 청진기의 판막을 대면 높은 음의 잡음이 들리지만 그 외 신체검사는 정상이고, 현재 시력은 양안 20/30이다. 이 증상의 원인은 다음 중 어느 해부학적 위치에 가장 잘 국한되는가?

## 선택지

A. 경동맥
B. 좌심방
C. 측두동맥
D. 척추동맥

## 해설


일과성 흑암시는 경동맥 내 혈전이나 색전으로 일시적 망막 혈류 차단이 발생한다. 따라서 증상이 국한되는 해부학적 부위는 경동맥이다. 정답은 A이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 무통성 일과단안시력소실·동측 목잡음은 경동맥 A의 망막색전 원인과 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005593
