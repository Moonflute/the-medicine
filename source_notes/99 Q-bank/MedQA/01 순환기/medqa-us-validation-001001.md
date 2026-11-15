---
type: qbank
schema_version: 1
id: medqa-us-validation-001001
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:4a3c226033229f4a27d7d1767c20119505a9a4c6b4e56804cb99ddaab7001fcc
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "급성 심근경색"
  - "혈전용해요법"
  - "최근 뇌졸중"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
question_type: management
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

60세 남성이 증상 발생 1시간 안에 ST분절 상승 심근경색으로 내원했다. 적시에 관상동맥중재술을 받기 어려워 섬유소용해제를 검토한다. 다음 중 섬유소용해제의 절대 금기는?

## 선택지

A. 응급실에서 아스피린을 투여받음
B. 현재 혈압 142/86 mmHg
C. 현재 흡연 중
D. 6주 전 허혈성 뇌졸중 병력

## 해설

ST분절 상승 심근경색에서 최근 3개월 이내의 허혈성 뇌졸중은 섬유소용해제의 절대 금기다. 이 상황에서는 섬유소용해 대신 중재술이 가능한 병원으로 신속히 이송한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 출혈성 뇌졸중은 시점과 무관한 금기이고 허혈성은 3개월 경계 확인이 필요하다는 구분을 보완.
- https://www.ahajournals.org/hyp/doi/pdf/10.1161/CIR.0000000000001309

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001001
- ACC/AHA 급성관상동맥증후군 진료지침(2025): https://www.ahajournals.org/doi/10.1161/CIR.0000000000001309
