---
type: qbank
schema_version: 1
id: medqa-us-test-000887
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:c6b290c166938d2dbe9e9472a40938b1c70d5ccf5450b41198149eb736437198
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "성매개감염 선별"
  - "클라미디아"
  - "임균"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yEseunpOqwnOqwkOyXvC5tZA
difficulty: complex
answer: A
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

24세 여성이 성 파트너가 최근 클라미디아에 확진됐다는 연락을 받았다. 현재 증상은 없고 임신하지 않았다. 적절한 대응은?

## 선택지

A. 임균·클라미디아 핵산증폭검사와 노출에 따른 치료를 함께 평가한다
B. 무증상이면 증상이 생길 때까지 검사도 치료도 하지 않는다
C. 질염 예방을 위해 일반 질세정만 안내한다
D. 자궁경부 세포검사만으로 클라미디아 감염을 배제한다

## 해설

클라미디아 감염자의 최근 성 파트너는 증상이 없어도 감염될 수 있어 평가·검사와 치료가 필요하다. 임균 등 동반 감염 평가와 재감염 예방도 안내한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 모든 성생활 여성에게 일률 STI선별이 아니라25세 미만 연령 기준 명료화.
- https://www.cdc.gov/std/treatment-guidelines/screening-recommendations.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000887
- https://pubmed.ncbi.nlm.nih.gov/38454820/
- https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm
