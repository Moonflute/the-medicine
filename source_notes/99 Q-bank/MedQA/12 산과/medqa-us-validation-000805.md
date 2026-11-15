---
type: qbank
schema_version: 1
id: medqa-us-validation-000805
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:2b6c3efa4ecb1456adde8b17a38ac13524e388d86470f665654ceedef4fef984
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "융모양막염"
  - "조기 양막 파수"
  - "양막 감염"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-ycteuqqCDslpHrp4nsl7wgKENob3Jpb2Ftbmlvbml0aXMpLm1k
  - MTIg7IKw6rO8L-yhsOq4sCDslpHrp4kg7YyM7IiYIChQcmVtYXR1cmUgUnVwdHVyZSBvZiBNZW1icmFuZXMpLm1k
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
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0JldGFtZXRoYXNvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 35주 산모가 파수 2일 뒤 진통 중 39.5°C 고열과 자궁 압통을 보인다. 자궁경부가 완전히 열렸고 태아 심박수는 분당 180회다. 다음 조치는?

## 선택지

A. 아기 폐성숙을 위해 분만을 48시간 미룬다
B. 양막내 감염이 의심되면 그 자체로 즉시 제왕절개한다
C. 열이 떨어질 때까지 자궁수축억제제를 준다
D. 정맥 암피실린과 겐타마이신을 시작하고 분만을 진행한다

## 해설

장시간 파수 후 고열과 태아 빈맥은 양막내 감염을 시사한다. 즉시 광범위 정맥 항생제를 투여하고 분만을 진행하면서 신생아팀에 알린다. 감염 자체만으로 제왕절개가 필수인 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: ‘2세대 세균성 감염’이라는 비의학적 분류 삭제.
- https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/08/intrapartum-management-of-intraamniotic-infection

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000805
