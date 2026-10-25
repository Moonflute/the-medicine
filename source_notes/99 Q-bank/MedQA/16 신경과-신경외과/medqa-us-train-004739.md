---
type: qbank
schema_version: 1
id: medqa-us-train-004739
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:95a37a199a510270697153893f98f74ee56bd421f771951bf870c4da5bc42014
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "정상압 수두증"
  - "보행장애"
  - "요실금과 인지저하"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_soJXsg4HslZUg7IiY65GQ7KadIChOb3JtYWwgcHJlc3N1cmUgaHlkcm9jZXBoYWx1cykubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

77세 여성이 4개월 동안 점점 심해지는 혼란과 보행 곤란으로 내원했다. 딸은 기억력이 떨어지고 보행이 느려졌다고 걱정한다. 주간 브리지 게임과 평소 보던 TV 프로그램 중에도 집중하지 못한다. 요실금이 점점 잦아져 지금은 매일 성인용 기저귀를 착용한다. 고지혈증과 고혈압이 있고 리시노프릴과 아토르바스타틴을 복용한다. 체온은 36.8°C (98.2°F), 맥박은 분당 84회, 호흡수는 분당 15회, 혈압은 139/83 mmHg이다. 혼란스러워하며 사람과 장소에만 지남력이 있다. 단어 3개 중 즉시 2개, 5분 후 1개를 기억한다. 보폭이 넓고 짧은 걸음을 걷는다. 감각과 근력은 정상이고 검사실 결과도 정상이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 가성치매
B. 전두측두엽 치매
C. 정상압 수두증
D. 크로이츠펠트-야코프병

## 해설

진행하는 넓고 짧은 보행, 인지저하와 요실금의 조합은 정상압수두증(C)을 가장 시사한다. 정상압은 전신 동맥혈압이 정상이라는 뜻이 아니라 통상 측정되는 뇌척수액 압력과 관련된 명칭이다. 정상 기본 혈액검사가 이를 확진하는 것도 아니다. 실제로 뇌실확장 영상과 다른 질환 감별, 필요 시 CSF 배액 반응 평가 등을 종합한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 정상압수두증의 정상압을 정상 전신혈압으로 혼동한 설명을 제거했다. 임상 삼징과 C의 연결은 유지한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004739
