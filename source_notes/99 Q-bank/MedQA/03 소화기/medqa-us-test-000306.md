---
type: qbank
schema_version: 1
id: medqa-us-test-000306
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:0a650f13d4cc345dc09c1b96fb2f3c377b89f53e0b027ee44327c5419e4e3ae3
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "간성뇌증"
  - "간경변"
  - "고암모니아혈증"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITshLEg64eM7KadIChIZXBhdGljIEVuY2VwaGFsb3BhdGh5KS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
question_type: management
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTmFsb3hvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 남성이 명백한 간성뇌증으로 락툴로스를 투여받았다. 의식은 회복했지만 하루 10회 이상 물설사를 하고 기립 때 어지럽다. 같은 약을 어떻게 조절하는 것이 적절한가?

## 선택지

A. 암모니아가 정상일 때까지 현재 용량으로 유지한다
B. 탈수와 전해질을 확인하고 하루 2–3회 부드러운 변을 보도록 감량·조절한다
C. 효과를 더 높이기 위해 용량을 늘린다
D. 물설사를 치료하기 위해 경구 수분을 일률적으로 제한한다

## 해설

락툴로스는 대개 하루 2–3회의 부드러운 변을 목표로 조절한다. 심한 설사는 탈수와 전해질 이상을 일으켜 오히려 간성뇌증을 악화할 수 있다. 의식과 배변 반응에 맞춰 과량을 피한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: lactulose의 장내 암모니아 포획 기전을 설명하고 11회 설사를 치료 목표처럼 해석하지 않도록 수정.
- https://doi.org/10.14309/ajg.0000000000003899

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000306
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7160350/
