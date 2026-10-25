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

15세 남아가 2개월 전 갑자기 시작되어 최근 2주 동안 악화된 왼쪽 고관절 통증으로 진료를 받으러 왔다. 키는 165 cm, 체중은 85 kg으로 BMI는 31.2 kg/m²이다. 절뚝거리며 걷고 왼쪽 서혜부 압통과 고관절 내회전 제한이 있으며, 고관절을 굴곡하면 외회전·외전된다. 골반 X선 영상이 제시되어 있다. 가장 적절한 처치는?

## 선택지

A. 장하지 석고붕대
B. 대퇴골두 수술적 핀 고정
C. 관절 내 리도카인
D. 근위 대퇴골 절골술

## 해설

정답은 B, 대퇴골두의 수술적 핀 고정이다. 비만한 청소년에서 고관절 통증·절뚝거림·내회전 제한과 굴곡 시 외회전·외전은 대퇴골두 골단분리증(SCFE)을 강하게 시사한다. 체중부하를 중단하고 신속하게 정형외과 평가 후 고정하여 추가 전위를 막는다. 보행 가능한 안정형에서는 대개 in-situ 고정이 표준적이며, 실제 수술 방법은 안정성·중증도에 따라 결정한다. 원문은 골반 X선을 언급하지만 현재 이미지는 없으므로 보이지 않는 전위 정도를 추정하지 않았다. 본문에 특징적인 임상 소견이 있어 제시된 치료 선지 중 B를 판단할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. SCFE에 특징적인 청소년·비만·고관절 굴곡 시 의무적 외회전으로 영상 없이도 임상 의도 판단 가능. 원문 BMI/악화기간 누락 복원, 단순 골절예방보다 골단 안정화/추가전위 방지 목적과 비체중부하 보완. 원정답 B 유지.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/slipped-capital-femoral-epiphysis-scfe

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000622
