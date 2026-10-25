---
type: qbank
schema_version: 1
id: medqa-us-train-010014
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a318adb18512fda3d0606dc9f4212ebc90316651eb6571e7c261134d82fce654
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "절박유산"
  - "생존 태아"
  - "임신 중 질출혈"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-ygiOuwlSDsnKDsgrAgKFRocmVhdGVuZWQgQWJvcnRpb24pLm1k
  - MTIg7IKw6rO8L-yehOyLoCDspJEg7KeI7Lac7ZiILm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

30세 G3P1011 여성이 하복부 통증과 질 출혈 평가를 위해 산과 클리닉에 내원했다. 임신 1분기 초음파를 기준으로 임신 15주이다. 임신 초기에 소량 출혈이 있었지만 다른 문제는 없었다. 경미하게 불안해 보이고 활력징후는 심박수 분당 120회를 제외하면 정상이다. 복부 압통은 없고 자궁경부 외구는 닫혀 있으며 질 내에 소량의 혈액이 고여 있다. 태아 조직은 보이지 않는다. 정량적 β-hCG를 위한 혈액을 채취하고 초음파를 시행했으며 정상 심박수를 가진 생존 태아가 보였다. 산과의사는 휴식하고 성관계를 포함한 신체활동을 피하라고 안내해 귀가시켰다. 출혈이 많아지면 응급실로 오라고 했다. 이 환자가 오늘 경험한 상태는?

## 선택지

A. 불완전 유산
B. 불가피 유산
C. 절박 유산
D. 완전 유산

## 해설

임신 15주에 질출혈이 있지만 자궁경부가 닫혀 있고 초음파에서 태아 심장활동이 확인되므로 선택지 중 절박유산(C)이 가장 적절하다. 진행 중인 불가피유산이나 이미 태아가 사망한 경우와 구분한다. 출혈이 곧 태아 사망을 뜻하지는 않는다. 원문의 침상 안정·활동 및 성관계 제한은 사례 서술이며, 일률적 침상 안정이 유산을 예방한다는 근거는 없으므로 이를 예방 효과가 입증된 표준 치료로 해석하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 폐쇄된 자궁경부와 생존 태아가 있는 출혈의 절박유산 진단을 유지하고, 원문에 서술된 일률적 안정 처방을 유산 예방 근거로 오인하지 않도록 구분했다.
- https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/11/early-pregnancy-loss
- https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/04/physical-activity-and-exercise-during-pregnancy-and-the-postpartum-period

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010014
