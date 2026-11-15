---
type: qbank
schema_version: 1
id: medqa-us-train-003734
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:703be0b73b6623598ea7b55e5bd0f4d403bfdf0ff018bc1e8a0669866a401de7
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "low pretest probability"
  - "noncardiac chest pain"
  - "coronary artery disease evaluation"
  - "no further testing"
related_disease_slugs: []
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9idXRhbWluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

39세 여성이 한 달째 반복되는 왼쪽 가슴 통증으로 왔다. 상체를 비틀거나 한 지점을 누르면 평소 통증이 그대로 재현되고, 평지 걷기나 계단 오르기는 영향을 주지 않는다. 활력징후와 심전도는 정상이며 당뇨병·흡연 등 관상동맥 위험인자는 없다. 현재 관상동맥 평가로 적절한 것은?

## 선택지

A. 관상동맥 CT 혈관조영술을 즉시 시행한다
B. 핵의학 심근관류검사를 시행한다
C. 관상동맥 검사는 일단 보류하고 흉벽 통증을 평가한다
D. 도부타민 부하 심초음파를 시행한다

## 해설


움직임과 국소 압박으로 같은 통증이 재현되고 운동과 무관하며 관상동맥 위험이 매우 낮아 흉벽 원인이 우선이다. 이처럼 안정적인 환자에서는 관상동맥 검사를 일률적으로 시행하지 않는다. 급성 악화, 운동 유발 통증 등 양상이 변하면 다시 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 39세의 만성 비운동성 비방사 흉통·저사전확률에서 선택지상 추가 CAD 검사 없음 C. 급성 변화 시 재평가는 별도.
- https://www.jacc.org/doi/10.1016/j.jacc.2021.07.053

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003734
- https://doi.org/10.1093/eurheartj/ehae177
