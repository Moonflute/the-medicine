---
type: qbank
schema_version: 1
id: medqa-us-train-000729
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:77a60a654d49195f6002ad4e2f3333329b0c865eb86984fa1da6ea9e7fe61602
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "type 2 diabetes mellitus"
  - "hypertension"
  - "chronic atrial fibrillation"
  - "ischemic cardiomyopathy"
  - "hyperkalemia"
  - "chronic renal failure"
  - "renal tubular acidosis"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
  - MDEg7Iic7ZmY6riwL-yLrOq3vOuzkeymnSAoQ2FyZGlvbXlvcGF0aHkpLm1k
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
  - MDUg7Iug7J6lL-y9qe2MpeyEuOq0gCDsgrDspp0gMe2YlSAoUmVuYWwgVHVidWxhciBBY2lkb3NpcyBUeXBlIDEpLm1k
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRnVyb3NlbWlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvU3Bpcm9ub2xhY3RvbmUubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

64세 남성이 정기 검진을 위해 일차 진료 의원을 방문했다. 과거력상 제2형 당뇨병, 고혈압, 만성 심방세동, 허혈성 심근병증이 있다. 3개월 전 마지막 방문 시 고칼륨혈증이 발견되어 당시 복용 중이던 lisinopril과 spironolactone을 중단했다. 현재 복용 중인 약물은 coumadin, aspirin, metformin, glyburide, metoprolol, furosemide, amlodipine이다. 체온은 37도, 혈압 154/92 mmHg, 심박수 80회/분, 호흡수 16회/분이다. 신체 검진상 경정맥압 상승, S3 심음, 1+ 함요 부종이 관찰된다. 이번 방문 시 시행한 반복 검사 결과는 다음과 같다: 나트륨 138 mEq/L, 칼륨 5.7 mEq/L, 염화물 112 mEq/L, 중탄산염 18 mEq/L, BUN 29 mg/dL, 크레아티닌 2.1 mg/dL. 이 환자의 산-염기 및 전해질 이상을 유발한 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. Furosemide
B. 만성 신부전
C. 신세뇨관 산증
D. Amlodipine

## 해설

정답은 C이다. 음이온차는 138−112−18=8로 정상범위이며 고칼륨성 비음이온차 대사산증은 DM 관련 저레닌성 저알도스테론증/type IV RTA에 합당하다. CKD가 함께 있을 수 있어 두 상태를 완전히 배타적으로 취급하지 않는다. furosemide는 loop 이뇨제로 통상 K 소실·알칼리증 방향으로 작용하며 급성 RTA로 단정할 시간 정보도 없다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: DM 관련 typeIV RTA와 CKD의 공존을 설명하고 급성 RTA·이소성이뇨제 오표현 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000729
