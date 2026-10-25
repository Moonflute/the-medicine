---
type: qbank
schema_version: 1
id: medqa-us-validation-001109
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7c14526d2e13efe1d11ee51820b297734978187fc101d2fb4612ba3b6ed3a095
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "팔로 4징"
  - "청색 발작"
  - "무릎-가슴 자세"
  - "Tetralogy of Fallot"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7YyU66GcIOyCrOynlSAoVGV0cmFsb2d5IG9mIEZhbGxvdCkubWQ
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

이전에 건강하던 생후 3개월 여아가 배변 중 입술이 파래지고 계속 울어 응급실에 왔다. 산소포화도는 실내공기에서 70%이며 100% 산소 투여 후 81%로 증가한다. 입 주위 청색증과 늑골 하부 함몰, 좌측 상흉골연의 거친 2/6 수축기 강도 증가-감소형 잡음이 있다. 증상을 가장 잘 호전시킬 처치는?

## 선택지

A. 무릎-가슴 자세
B. 앙와위
C. 하지 거상
D. 복와위

## 해설

배변·울음에 유발된 청색증과 폐유출로 수축기 잡음은 Fallot 등의 과청색 발작을 시사한다. 무릎–가슴 자세(A)는 전신혈관저항을 증가시켜 우좌단락을 줄이고 폐혈류를 개선한다. 진정·산소·응급 심장 평가를 병행하며 신생아 RDS에서 횡격막을 내리는 기전으로 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 무릎가슴 자세의 효과를 RDS의 폐용적 증가로 오연결한 해설을 청색 발작의 SVR 기전으로 교체.
- https://www.rch.org.au/clinicalguide/guideline_index/Cyanotic_episodes_in_congenital_heart_disease/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001109
