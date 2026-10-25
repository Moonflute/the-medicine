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
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0JldGFtZXRoYXNvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 35주인 33세 여성(임신 2회, 출산 1회)이 2일간의 양수 누출 후 발열과 활발한 진통으로 입원했다. 체온 39.6°C, 맥박 125회/분, 자궁 압통, 자궁경부 완전 소실과 10 cm 개대, 태아 심박수 180회/분이다. 가장 적절한 처치는?

## 선택지

A. 양수주입
B. 암피실린과 겐타마이신
C. 정맥 베타메타손
D. 리토드린 염산염

## 해설

고열·자궁압통·장시간 파수·태아빈맥은 양막내 감염을 시사한다. 암피실린과 겐타마이신(B)을 즉시 투여하고 분만을 진행하며 신생아팀에 알린다. 완전개대 상태에서 수축억제로 분만을 미루지 않는다. 이는 다균성 감염에 대한 경험치료이지 ‘2세대 감염’이라는 분류가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: ‘2세대 세균성 감염’이라는 비의학적 분류 삭제.
- https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/08/intrapartum-management-of-intraamniotic-infection

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000805
