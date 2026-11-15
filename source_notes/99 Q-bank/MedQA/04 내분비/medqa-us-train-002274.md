---
type: qbank
schema_version: 1
id: medqa-us-train-002274
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1402dc2798e60b296384461aa96a2e1151e95f95d7a846f9099ded71c5b59474
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "severe hyponatremia"
  - "rapid sodium correction"
  - "osmotic demyelination syndrome"
related_disease_slugs:
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
question_type: management
difficulty: complex
answer: D
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

영양결핍이 있는 67세 환자의 만성 저나트륨혈증 치료 중, 10시간 만에 Na가 110에서 122 mmol/L로 올랐다. 시간당 소변량도 급증하고 있다. 삼투성 탈수초 위험을 줄이기 위해 할 조치는?

## 선택지

A. 고장성 식염수를 계속 투여한다
B. 수분 제한을 더 강화한다
C. 오늘은 더 치료하지 않고 내일 재검만 한다
D. 교정 치료를 중단하고 5% 포도당 수액과 데스모프레신으로 재하강을 검토한다

## 해설


영양결핍이 있는 만성 저나트륨혈증에서 10시간에 12 mmol/L 상승은 과교정이다. 기존 교정을 멈추고 촘촘히 혈청 나트륨을 추적하며 5% 포도당과 데스모프레신을 상황에 따라 사용해 재하강시킨다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Na120 혼돈 환자 저Na 치료의 과교정 합병증은 삼투성 탈수초 D; 빠른 정상화를 권하지 않는 해설.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002274
- https://www.kjim.org/journal/view.php?number=170730
