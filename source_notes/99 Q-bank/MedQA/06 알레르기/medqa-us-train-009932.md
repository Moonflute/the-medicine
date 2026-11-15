---
type: qbank
schema_version: 1
id: medqa-us-train-009932
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f038a99651cca7bd28f00f4b990b3edd7f3c8b64af8ea668f20000cfd8302aa1
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "인플루엔자 예방접종"
  - "달걀 알레르기"
  - "백신 알레르기"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVjOugiOultOq4sC5tZA
  - MDgg6rCQ7Je8L-yduO2UjOujqOyXlOyekCAoSW5mbHVlbnphKS5tZA
question_type: prevention
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvT3NlbHRhbWl2aXIubWQ
---

# MedQA US 임상문제

## 문제

인플루엔자 예방접종을 받으러 온 성인이 달걀을 먹었을 때 두드러기만 생긴 적이 있다고 말한다. 백신이나 다른 백신 성분에 중증 반응을 보인 적은 없다. 국내 지침에 따른 조치는?

## 선택지

A. 일반 접종 절차로 적합한 인플루엔자 백신을 접종한다
B. 평생 인플루엔자 예방접종을 피한다
C. 접종 대신 계절 내내 오셀타미비르를 복용한다
D. 달걀 피부검사가 음성이 될 때까지 매년 접종을 미룬다

## 해설


질병관리청은 달걀에 두드러기만 나타났던 경우 접종할 수 있다고 안내한다. 달걀에 중증 반응을 보였거나 백신 자체에 중증 반응을 보인 경우는 별도로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-009932`와 직접 대조했다.
- 판정: 달걀 알레르기만으로 인플루엔자 접종을 미루지 않는 A 유지. 불활화만 안전하다는 오해 방지 및 다른 금기 구별.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.cdc.gov/flu/vaccines/egg-allergies.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009932
- https://nip.kdca.go.kr/irhp/infm/goVcntInfo.do?menuCd=1112&menuLv=1
