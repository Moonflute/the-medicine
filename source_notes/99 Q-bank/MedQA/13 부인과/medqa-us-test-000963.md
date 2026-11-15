---
type: qbank
schema_version: 1
id: medqa-us-test-000963
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:b49901d408f5efdd2015052f221d83adf3d4a791f633e6a28d4378e6f2d8a831
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "골반염증성 질환"
  - "난관난소농양"
  - "입원 정맥항생제"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-qzqOuwmOuCtCDqsJDsl7wgKFBlbHZpYyBJbmZsYW1tYXRvcnkgRGlzZWFzZSkubWQ
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2Vmb3RldGFuLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 여성이 발열, 지속 구토와 심한 골반통으로 왔다. 임신검사는 음성이다. 질식 초음파에서 오른쪽 난관난소농양이 보이고 혈압은 안정적이다. 초기 치료는?

## 선택지

A. 경구 항생제를 하루 복용한 뒤 외래 추적한다
B. 입원해 광범위 정맥 항생제를 시작하고 배액 필요성을 평가한다
C. 농양이 있어도 항생제 없이 진통제만 준다
D. 모든 환자에서 항생제를 생략하고 즉시 양측 난소를 절제한다

## 해설

난관난소농양이 있거나 먹는 약을 견디기 어려우면 입원 정맥 치료가 필요하다. 혐기성균도 치료하며 반응이 부족하거나 파열이 의심되면 배액이나 수술을 신속히 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: TOA 의심의 입원·항생제와 임신 확인, 후속 혐기성 치료 보강.
- https://www.cdc.gov/std/treatment-guidelines/pid.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000963
