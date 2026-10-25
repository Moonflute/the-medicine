---
type: qbank
schema_version: 1
id: medqa-us-test-000107
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:f25e2ad93b5e2be30fba170b8105d25b6c11e2c52c832a1e79df0f5043182f57
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "폐 결절"
  - "폐암 평가"
  - "PET 검사"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyVlCAoTHVuZyBDYW5jZXIpLm1k
question_type: investigation
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

50세 남성이 서혜부 탈장 봉합술 후 추적 진료를 받으러 왔다. 하복부나 서혜부 통증, 변비가 없고 평소 식사를 즐긴다. 흉부 방사선촬영에서 오른쪽 중엽의 음영이 보여 조영제 없는 흉부 CT를 시행했고 오른쪽 중엽 말초에 경계가 매끈하고 석회화된 8mm 결절이 보였다. 1년 후 CT에서 같은 특징을 가진 결절이 10mm로 커졌다. 다음 중 가장 적절한 처치는?

## 선택지

A. 24개월 후 조영제 없는 흉부 CT
B. 지금 흉부 양전자방출단층촬영(PET)
C. 지금 오른쪽 중엽 절제술
D. 지금 기관지경 유도 생검

## 해설


8 mm에서 10 mm로 커진 결절은 단순히 24개월을 더 기다리기보다 추가 평가가 필요해 선지 중 PET(B)를 고려할 수 있다. 다만 석회화의 양상과 실제 성장 여부·임상 위험도를 확인해야 하며 PET가 모든 작은 결절에서 가장 민감하거나 음성으로 암을 배제하는 검사는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000107 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 성장한 10mm 결절의 추가평가 PET B 유지. PET가 가장 민감하고 석회화면 저위험이라는 단정 제거; 석회화 양상·성장 재확인 필요.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pubs.rsna.org/doi/10.1148/radiol.2017161659

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000107
