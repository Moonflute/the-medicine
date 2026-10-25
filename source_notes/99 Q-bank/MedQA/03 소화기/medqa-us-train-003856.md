---
type: qbank
schema_version: 1
id: medqa-us-train-003856
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:13e688a299c83412d040c779697c62cbce95c85af77a93e4d527ab275c93b28e
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute appendicitis"
  - "Rovsing sign"
  - "right lower quadrant pain"
  - "laparoscopic appendectomy"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_quInshLEg7Lap7IiY7Je8IChBY3V0ZSBBcHBlbmRpY2l0aXMpLm1k
question_type: management
difficulty: simple
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
---

# MedQA US 임상문제

## 문제

29세 남성이 하루 종일 지속된 오른쪽 아랫배 통증, 식욕부진, 오심과 구토로 응급실에 왔다. 왼쪽 아랫배를 깊게 누르면 오른쪽 통증이 증가했다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 복부 방사선촬영
B. 복부 초음파
C. 대장내시경
D. 복강경 수술

## 해설

지속 RLQ 통증·식욕부진·구토와 Rovsing sign은 급성 충수염 가능성을 높이므로 선택지 중 D의 복강경 평가/충수절제 접근이 부합한다. 다만 이 징후만으로 항상 확진되는 것은 아니며 임상 위험도·검사와 진단확실성에 따라 US/CT 등 영상평가를 활용한다. 모든 환자의 영상이 불필요하다는 기존 설명은 과도하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 임상충수염의 수술 D는 선택지상 유지하되 Rovsing만으로 진단확정/모든영상 불필요라는 해설을 한정.
- https://doi.org/10.1001/jamasurg.2025.6218

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003856
