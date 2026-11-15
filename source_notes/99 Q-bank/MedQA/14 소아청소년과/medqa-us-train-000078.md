---
type: qbank
schema_version: 1
id: medqa-us-train-000078
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f6bfff0e10aade7d20536b9a452bf2be651effd7e766eeb47396bcd9f1d21e95
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases: []
related_disease_slugs: []
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 3주 신생아가 발열과 처짐으로 응급실에 왔다. 혈압은 50/30 mmHg, 모세혈관 재충전은 6초다. 산소를 공급하면서 정맥로를 몇 차례 시도했으나 신속히 확보되지 않는다. 소생 약물과 수액을 투여할 다음 접근은?

## 선택지

A. 골수강내 접근을 확보
B. 응급 수액을 근육으로 주입
C. 중심정맥관이 들어갈 때까지 약물과 수액을 미룸
D. 경구 수분만 투여

## 해설

쇼크에서는 혈관 접근을 기다리느라 소생을 미루지 않는다. 말초 정맥로를 빠르게 잡기 어렵다면 골수강내 접근으로 응급 수액과 약물을 투여할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 쇼크에서 반복 정맥 확보 실패 후 골수 접근 C 유지. 혈액 1 mL/kg 확보라는 근거 없는 설명 제거.
- https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/pediatric-advanced-life-support

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000078
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13277418/
