---
type: qbank
schema_version: 1
id: medqa-us-train-003479
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7a082f64e97ed44783157d8efe9460d24e8aaea66c670be263f1cc72fb23615a
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "penetrating chest trauma"
  - "retained knife"
  - "thoracic injury"
  - "endotracheal intubation"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-2dieu2gCDsmbjsg4EubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: B
answer_change_reason: "원문에서도 정상 기도·산소화·대칭 호흡음으로 즉시 삽관 적응증이 제시되지 않았다. 현행 안정 관통 흉부외상 영상 권고에 따라 B에서 D로 교정."
---

# MedQA US 임상문제

## 문제

29세 남성이 오른쪽 가슴을 칼에 찔린 뒤 20분 후 응급실에 왔다. 환자는 의식이 명료하고 산소포화도는 97%였다. 혈압은 112/70 mmHg, 호흡수는 분당 16회였다. 오른쪽 4번째 늑간의 전액와선에 칼이 박혀 있고 상처에서 피가 배어 나왔지만 공기방울은 없었다. 양쪽 호흡음은 같았고 흉부 X선에서 칼이 오른쪽 흉곽 안으로 뻗어 있는 것이 보였다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 오른쪽 바늘 흉강감압
B. 기관내 삽관
C. 윤상갑상막 절개술
D. 흉부 CT

## 해설

의식·환기·산소화와 혈압이 유지되어 즉각적인 기도 확보나 긴장성 기흉 감압을 뒷받침하지 않는다. 박힌 칼은 고정한 채 임의로 제거하지 않고 외상외과와 평가하며, 안정된 관통 흉부외상의 손상 범위·경로를 파악하는 흉부 CT(D)가 보기 중 적합하다. 수술/마취가 필요할 수 있다는 사실이 현재 응급실에서 무조건 삽관해야 한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원문에서도 정상 기도·산소화·대칭 호흡음으로 즉시 삽관 적응증이 제시되지 않았다. 현행 안정 관통 흉부외상 영상 권고에 따라 B에서 D로 교정.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC12522690/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003479
