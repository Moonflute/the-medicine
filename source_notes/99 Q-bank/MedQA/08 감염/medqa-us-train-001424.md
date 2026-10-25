---
type: qbank
schema_version: 1
id: medqa-us-train-001424
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:529d54a1a2c39bd316630fa8f3a38a30e115522088afea30b57cf17f46890c1c
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "infective endocarditis"
  - "intravenous drug use"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

37세 남성이 지속되는 발열로 응급실에 내원했다. 일주일 동안 몸이 좋지 않았고 열이 나는 느낌이 있었다. 자살 시도와 알코올남용 병력이 있으나 현재 약물은 복용하지 않는다. 헤로인과 코카인을 사용하고 하루 5–8잔의 술을 마신다. 체온은 103°F (39.4°C), 혈압은 92/59 mmHg, 맥박은 110회/분, 호흡수는 20회/분, 실내 공기 산소포화도는 96%이다. 심폐 진찰에서 왼쪽 흉골 가장자리에서 가장 크게 들리는 수축기 잡음이 있다. 팔오금에 주사 자국 흉터가 보인다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 혈액배양
B. CT 검사
C. 초음파
D. 반코마이신과 겐타마이신

## 해설


IV 약물 사용자는 심내막염 위험이 높으며, 지속적인 발열과 새 심잡음은 감염성 심내막염을 시사한다. 혈액배양은 진단에 필수적인 초기 검사이다. 따라서 혈액배양이 가장 적절한 다음 단계이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001424 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 주사 약물 사용·발열·심잡음 환자의 초기 혈액배양 A를 유지. 저혈압이 있어 배양 채취가 소생 및 적절한 경험적 항생제를 지연시키면 안 됨.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/eurheartj/article/44/39/3948/7243107

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001424
