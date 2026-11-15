---
type: qbank
schema_version: 1
id: medqa-us-train-007446
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b3ccba473de52f2f6a57b90b4ffe6e22709259e5e8d15d0de62c1f1ba91da4f7
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "침습성 아스페르길루스증"
  - "호중구감소증"
  - "갈락토만난 항원"
  - "보리코나졸"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yVhOyKpO2OmOultOq4uOujqOyKpOymnSAoQXNwZXJnaWxsb3NpcykubWQ
  - MDgg6rCQ7Je8L-2YuOykkeq1rOqwkOyGjOymnSAoTmV1dHJvcGVuaWEpLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdGF6aWRpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVm9yaWNvbmF6b2xlLm1k
  - ZHJ1ZzoxMCDsooXslpEvT3hhbGlwbGF0aW4ubWQ
---

# MedQA US 임상문제

## 문제

급성 골수성 백혈병 유도항암 뒤 호중구가 장기간 감소한 환자가 항세균제를 받는 중에도 발열과 객혈이 있다. 폐 CT에서 간유리음영이 둘러싼 결절이 보이고 기관지폐포세척액 갈락토만난이 양성이다. 침습성 폐아스페르길루스증에 우선 사용할 항진균제는?

## 선택지

A. 플루코나졸
B. 보리코나졸
C. 미카펀긴 단독
D. 플루시토신 단독

## 해설


지속적인 호중구감소, 영상과 갈락토만난 소견은 침습성 폐아스페르길루스증을 지지한다. 보리코나졸은 초기 1차 약제이며 약물 상호작용과 혈중농도를 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007446 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Voriconazole을 베타-디아민오레이트라고 부른 오류 교정; IPA 표적 D 유지하되 FN/저산소의 전체 처치와 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/aspergillosis/
- https://www.idsociety.org/practice-guideline/neutropenic-patients-with-cancer/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007446
