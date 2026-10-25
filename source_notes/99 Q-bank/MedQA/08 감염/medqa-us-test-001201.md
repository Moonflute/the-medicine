---
type: qbank
schema_version: 1
id: medqa-us-test-001201
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:87d9dfe1c438d4fee46386db27b75d46a21754102e2c5623817c2853e0038166
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "우측 심내막염"
  - "삼첨판 심내막염"
  - "정맥주사 약물사용"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

28세 남성이 3일간 발열, 오한, 전신 쇠약으로 응급실에 왔다. 6년간 정맥 코카인과 헤로인을 사용했고 양쪽 팔오금에 주사 흔적, 중심부가 창백한 망막출혈, 하부 좌흉골연의 3/6 범수축기 잡음이 있었다. 심초음파에서 삼첨판에 여러 식생과 중등도 역류가 보였고 혈액배양을 채취했다. 다음 중 가장 적절한 처치는?

## 선택지

A. 경식도 심초음파
B. 정맥 반코마이신 치료
C. 흉부 X선
D. CT 폐혈관조영술

## 해설


주사약물 사용과 삼첨판 식생·발열은 감염성 심내막염을 지지한다. 배양을 채취한 뒤 선지 중 MRSA를 포함하는 경험적 반코마이신(B)이 적절하다. 균종·감수성이 확인되면 조정하며 MSSA에는 적절한 항포도알균 베타락탐이 일반적으로 더 선호된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-001201 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 혈액배양 후 주사약물 관련 IE 경험적 B 유지. MSSA까지 언제나 vancomycin 1차라는 해설 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/eurheartj/article/44/39/3948/7243107

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001201
