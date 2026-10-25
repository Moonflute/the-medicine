---
type: qbank
schema_version: 1
id: medqa-us-train-008272
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:93241a4a48adeda7a3d9d959d5ca23ff830d6234af0e3eaa5aefc9db81e5903f
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "hepatic adenoma rupture"
  - "hemoperitoneum"
  - "oral contraceptive use"
  - "Hepatic adenoma"
related_disease_slugs: []
question_type: diagnosis
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

27세 여성이 갑자기 발생한 우상복부 통증으로 응급실에 왔다. 식사 중 시작되었고 이후 어지러워졌다. 응급실에서 혈압 75/40 mmHg, 맥박 100회/분, 발열은 없다. 너무 어지러워 걷지 못하고 우상복부 압통이 있으며 장음은 정상이다. 불안정해 영상검사는 시행하지 못하고 최근 경미한 복통으로 방문했을 때의 복부 X선과 CT를 검토했다. 가장 가능성 높은 진단을 뒷받침하는 병력은?

## 선택지

A. 15갑년 흡연력
B. 피임을 위한 경구피임약 사용
C. 기름진 식사 후 시작된 증상
D. 엡스타인-바 바이러스 감염과 럭비 참여력

## 해설


젊은 여성의 갑작스러운 우상복부 통증과 심한 저혈압은 간 종괴의 파열 출혈을 의심하게 한다. 선택지 중 경구피임약 사용(B)은 간세포선종의 위험인자로 가장 부합한다. 간세포선종은 간세포 유래 양성 종양이며 혈관종과 동일하지 않다. 과거 영상이 누락되어 실제 종괴 형태를 확인한 것은 아니므로 임상에서 출혈 원인을 별도 확인해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008272 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 젊은 여성의 RUQ급통증·쇼크와 OCP B는 출혈성 간선종 의도에 부합. 간선종을 혈관종/혈관 종양으로 분류한 오류 교정; 누락 영상 확인을 주장하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008272
