---
type: qbank
schema_version: 1
id: medqa-us-train-009884
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:414a5e0082f2afd28e96143a49e18bd6c54764d9beea6359f3db70ca7431b7eb
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "실데나필-질산염 상호작용"
  - "저혈압"
  - "급성 심근경색"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
question_type: mechanism
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSXNvc29yYmlkZU1vbm9uaXRyYXRlLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

64세 남성이 최근 이소소르비드 모노니트레이트를 처방받았다. 오늘 평소 쓰던 실데나필을 복용한 뒤 실신했고 혈압은 80/50 mmHg이다. 가장 가능성 높은 원인은?

## 선택지

A. 항혈소판제에 의한 간독성
B. 질산염과 실데나필의 병용으로 인한 과도한 혈관확장
C. 베타차단제 급중단에 의한 반동성 고혈압
D. 인슐린 과다에 의한 저혈당

## 해설

질산염이 늘린 cGMP를 실데나필이 분해되지 않게 하므로 혈관확장이 증폭되어 심한 저혈압을 일으킬 수 있다. 질산염과 PDE5 억제제의 병용은 금기다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 저혈압 상호작용의 원인 약물을 클로피도그렐이 아닌 질산염-실데나필 병용으로 교정.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a1c3a2a2-8cf5-41c3-9c86-54290570d916

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009884
