---
type: qbank
schema_version: 1
id: medqa-us-train-003251
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:62c6deac56f128ffef45267d97b7395705c1c4f7da07ee218098f586fd5db017
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "asymptomatic bacteriuria in pregnancy"
  - "urinary tract infection"
  - "Escherichia coli"
  - "nitrofurantoin"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JqU66GcIOqwkOyXvCAoVXJpbmFyeSBUcmFjdCBJbmZlY3Rpb24pLm1k
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2VwaGFsZXhpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 28주인 28세 여성(임신 2회, 출산 1회)이 일주일 동안 치골상부 통증과 빈뇨로 산과 진료를 받았다. 피부근염으로 매일 프레드니손을 복용하며 소변배양에서 대장균이 100,000 CFU 이상 나왔다. 요검사에서 백혈구에스터라제와 아질산염이 양성이고 백혈구 50~100/HPF이다. 다음 중 이 환자 상태에 가장 적절한 약물치료는?

## 선택지

A. 트리메토프림-설파메톡사졸
B. 니트로푸란토인
C. 테트라사이클린
D. 세팔렉신

## 해설

28주 급성 방광염에서 감수성·금기를 고려한 니트로푸란토인(B)은 합리적 일차 선택이다. 세팔렉신도 임신 중 사용 가능한 대안이며 3기까지 제한된다는 해설은 틀리다. TMP-SMX를 모든 초기 임신의 절대금기로 일반화하지 않는다. 니트로푸란토인은 신우신염에는 부적절하며 G6PD 결핍·분만 임박 등을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 세팔렉신을3기까지제한한다는오류 및니트로푸란토인일률안전주장수정.
- https://www.acog.org/clinical/clinical-guidance/clinical-consensus/articles/2023/08/urinary-tract-infections-in-pregnant-individuals

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003251
