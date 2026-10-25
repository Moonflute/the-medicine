---
type: qbank
schema_version: 1
id: medqa-us-train-004293
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:02a12b93f683fd43a438ce977904dad68565098ddae4dba87e4a6c9c3763b2da
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "급성 림프모구성 백혈병"
  - "범혈구감소증"
  - "비장비대"
related_disease_slugs:
  - MDkg7ZiI7JWhL-q4ieyEsSDrprztlITrqqjqtazshLEg67Cx7ZiI67ORIChBTEwpIChBY3V0ZSBMeW1waG9ibGFzdGljIExldWtlbWlhKS5tZA
question_type: 임상증례 객관식
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

이전에 건강했던 4세 남아가 2일간 지속된 발열과 목 부종으로 내원했다. 어머니는 한 달 동안 점점 쇠약해졌다고 한다. 체온 39.5°C, 혈압 115/70 mmHg, 맥박 94회/분, 호흡수 16회/분이다. 양측 경부 림프절병증, 하지 말단과 연구개의 점상출혈, 늑골연 아래 3cm의 비장비대가 있다. 헤모글로빈 8 g/dL, 백혈구 2,400/mm³, 혈소판 30,000/mm³이며 말초혈액도말 사진이 제시되어 있다. 이 소견을 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 급성 림프모구성 백혈병
B. 세균성 패혈증
C. 버킷 림프종
D. 감염성 단핵구증

## 해설


소아의1개월 쇠약·빈혈·혈소판감소·백혈구감소와 림프절/비장비대는 골수 침윤성 질환 중 ALL A를 가장 의심하게 한다. ALL은 백혈구가 낮게도 나타날 수 있다. 도말 이미지가 누락되어 특정 세포 형태를 직접 관찰했다고 쓰지 않으며 실제 확진은 골수 및 면역표현형·유전검사를 결합한다. 단순히 말초에 골수세포가 있다는 사실이 ALL을 의미하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004293 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 어린 소아의 지속 쇠약·다계열 감소·장기비대에서 ALL A 가능성 유지; 없는 도말에서 골수세포를 보았다는 설명 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004293
