---
type: qbank
schema_version: 1
id: medqa-us-validation-000842
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:1d5e5b57676a7c235adc274916ffd5804e2eefc24e4b6709684f203e702ba451
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "바이러스성 뇌수막염"
  - "탈수"
  - "정맥 수액"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67CU7J2065-s7Iqk7ISxIOuHjOyImOunieyXvCAoVmlyYWwgTWVuaW5naXRpcykubWQ
question_type: management
difficulty: complex
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
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
---

# MedQA US 임상문제

## 문제

65세 남성이 브라질에서 돌아오는 비행기 후 혼란, 불안, 호흡곤란, 흉통으로 왔다. 당뇨병과 만성 신장질환 병력이 있고 크레아티닌 1.8mg/dL, 칼륨 5.3mEq/L이다. CT 혈관조영술, 심초음파, 트로포닌은 정상이고 흉통은 디아제팜으로 호전되었다. 요추천자 후 아시클로버를 시작했다. 다음으로 가장 적절한 처치는?

## 선택지

A. 정맥 수액 일시주입
B. 칼슘 글루콘산
C. 혈액투석
D. 추가 처치 불필요

## 해설


IV acyclovir는 세뇨관 내 결정 침전으로 신손상을 일으킬 수 있어 적절한 수분 공급(A)이 필요하다. 특히 원문의 CKD·Cr 1.8mg/dL에서는 체액 상태에 맞춰 수액량을 정하고 신기능에 따른 용량/간격을 조절한다. 약물 자체는 최소 1시간에 걸쳐 주입하며 빠른 IV bolus로 투여하지 않는다. 수액 목적은 고혈압 환자의 혈압을 올리는 것이 아니고, 과부하가 있으면 무조건 대량 급속주입하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000842 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: IV acyclovir 관련 결정성 신손상 예방 수액 A 유지. 누락 CKD·Cr1.8을 복원하고 혈압 유지 목적이나 무조건 대량 bolus로 설명하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=b1bb347d-74f4-4976-8450-a375a271718f

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000842
