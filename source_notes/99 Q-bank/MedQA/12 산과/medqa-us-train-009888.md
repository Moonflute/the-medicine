---
type: qbank
schema_version: 1
id: medqa-us-train-009888
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7a838b0fdb2a9f8299051b7bf34a56009ce18d6beb09ab1e632c37f4822eebdc
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "절박유산"
  - "임신 초기 질출혈"
  - "생존 자궁 내 임신"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-ygiOuwlSDsnKDsgrAgKFRocmVhdGVuZWQgQWJvcnRpb24pLm1k
  - MTIg7IKw6rO8L-yehOyLoCDspJEg7KeI7Lac7ZiILm1k
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 8주 초임부가 소량의 질출혈 뒤 진료받았다. 활력은 정상이고 자궁경부는 닫혀 있으며 초음파에서 자궁내 태아 심박이 확인됐다. 이전 유산 병력은 없다. 적절한 관리는?

## 선택지

A. 출혈이 멈출 때까지 일률적으로 절대 침상안정
B. 자궁내용물을 흡인해 출혈을 막는다
C. 모든 초기 질출혈에 프로게스테론을 일률 사용한다
D. 현재 임신이 유지된다고 설명하고 경과와 재내원 기준을 안내한다

## 해설

자궁내 임신이 살아 있고 출혈이 가볍고 안정적이면 경과를 볼 수 있다. 과다출혈·심한 통증·실신 시 즉시 재평가한다. 침상안정의 유산 예방 효과는 입증되지 않았고, 과거 유산력이 있는 일부 환자의 프로게스테론 고려와 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: ‘대부분 자연적으로 진행’이 유산 진행으로 오해되지 않도록 절박유산 설명 명료화.
- https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/11/early-pregnancy-loss

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009888
- https://www.nice.org.uk/guidance/ng126/chapter/management-of-miscarriage
