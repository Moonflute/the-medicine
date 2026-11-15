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

4세 남아가 한 달간 기운이 떨어지다가 발열로 내원했다. 양측 경부 림프절이 커져 있고 점상출혈과 비장비대가 있다. 혈색소 8 g/dL, 백혈구 2,400/µL, 혈소판 30,000/µL다. 가장 가능성 높은 진단은?

## 선택지

A. 급성 림프모구성 백혈병
B. 세균성 패혈증
C. 버킷 림프종
D. 감염성 단핵구증

## 해설


소아의 여러 혈구 감소에 림프절비대, 비장비대, 점상출혈이 동반되면 급성 백혈병을 의심한다. 보기 중 급성 림프모구성 백혈병이 가장 부합한다. 확진에는 골수 검사와 면역표현형 확인이 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004293 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 어린 소아의 지속 쇠약·다계열 감소·장기비대에서 ALL A 가능성 유지; 없는 도말에서 골수세포를 보았다는 설명 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004293
