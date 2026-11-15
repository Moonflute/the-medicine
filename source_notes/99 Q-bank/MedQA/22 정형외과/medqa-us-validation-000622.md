---
type: qbank
schema_version: 1
id: medqa-us-validation-000622
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:634635627d9774d07442f5e73ee2e76aa343996edff5f279e16a805db19e09c6
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "대퇴골두 골단분리증"
  - "청소년 비만"
  - "고관절 통증"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64yA7Ye06rOo65GQIOqzqOuLqCDrtoTrpqzspp0gKFNsaXBwZWQgQ2FwaXRhbCBGZW1vcmFsIEVwaXBoeXNpcykubWQ
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
  - ZHJ1ZzoxNCDqt7zqs6jqsqnCt-2GteymncK366eI7LeoL0xpZG9jYWluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

BMI 31 kg/m²인 15세 남아가 고관절 통증으로 절뚝거린다. 내회전이 제한되고 고관절을 굽히면 다리가 바깥쪽으로 돌아간다. 영상으로 안정형 대퇴골두 골단분리증이 확인됐다. 체중부하를 중단한 뒤 할 치료는?

## 선택지

A. 장하지 석고붕대
B. 대퇴골두 수술적 핀 고정
C. 관절 내 리도카인
D. 근위 대퇴골 절골술

## 해설

비만한 청소년의 고관절 통증, 내회전 제한, 굴곡 시 외회전은 대퇴골두 골단분리증을 시사한다. 체중부하를 금지하고 정형외과에서 핀 고정으로 추가 전위를 막는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. SCFE에 특징적인 청소년·비만·고관절 굴곡 시 의무적 외회전으로 영상 없이도 임상 의도 판단 가능. 원문 BMI/악화기간 누락 복원, 단순 골절예방보다 골단 안정화/추가전위 방지 목적과 비체중부하 보완. 원정답 B 유지.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/slipped-capital-femoral-epiphysis-scfe

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000622
