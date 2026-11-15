---
type: qbank
schema_version: 1
id: medqa-us-test-000414
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:0c40fc680030415d6b347d587a703f4aee31e3b652b61e05af6d362356d49efb
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "저혈량성 고나트륨혈증"
  - "수술 후 체액 소실"
  - "탈수"
related_disease_slugs:
  - MDUg7Iug7J6lL-qzoOuCmO2KuOulqO2YiOymnSAoSHlwZXJuYXRyZW1pYSkubWQ
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

췌장 수술 후 배액량이 사흘간 하루 1 L를 넘었다. 환자는 점막이 마르고 의식이 둔하다. 혈압 85/52 mmHg, 맥박 120회/분, 혈청 Na 154 mmol/L다. 지금 가장 먼저 투여할 수액은?

## 선택지

A. 0.9% 생리식염수
B. 5% 포도당액
C. 0.45% 식염수
D. 3% 고장성 식염수

## 해설

저혈압을 동반한 저혈량성 고나트륨혈증에서는 등장성 결정질로 순환을 먼저 회복시킨다. 혈압이 안정되면 자유수 결핍과 계속되는 손실에 맞춰 수액을 조절하고 혈청 Na를 추적한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 수술 후 큰 배액 손실과 빈맥·건조 소견은 저혈량 우선 교정을 지지. 정상 Cl/HCO3만으로 순수 수분 손실을 확정한 해설 제거. 체온의 섭씨 단위 오기도 교정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6013691/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000414
- https://www.kjim.org/journal/view.php?doi=10.3904%2Fkjim.2022.346
