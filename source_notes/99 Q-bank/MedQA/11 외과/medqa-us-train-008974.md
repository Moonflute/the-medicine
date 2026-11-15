---
type: qbank
schema_version: 1
id: medqa-us-train-008974
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9f20ecf2f9e3274c2061ce8a15e9061c4ccbf4e77d392e1ad0856dd0d156989d
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "femoral artery injury"
  - "penetrating extremity trauma"
  - "duplex ultrasonography"
related_disease_slugs:
  - MTEg7Jm46rO8L-2YiOq0gCDshpDsg4EubWQ
question_type: investigation
difficulty: complex
answer: C
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
---

# MedQA US 임상문제

## 문제

38세 남성이 허벅지 관통 손상 뒤 혈압이 안정적이다. 활동성 출혈이나 커지는 혈종은 없지만 오른쪽 발 맥박이 왼쪽보다 약하고 발목상완지수는 0.76이다. 신기능과 조영제 사용에 문제는 없다. 다음 검사는?

## 선택지

A. 사지 정맥 초음파
B. 상처를 봉합하고 추가 검사 생략
C. 하지 CT 혈관조영술
D. 허벅지 비조영 MRI

## 해설


뚜렷한 즉시 수술 징후가 없는 환자라도 발목상완지수가 0.9 미만이면 동맥 손상 평가가 필요하다. 혈역학적으로 안정적이고 조영제가 가능하면 CTA를 초기 검사로 사용할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008974 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 혈관 손상 의심의 duplex D를 유지하고 Cr3.1이라는 선택 근거와 초음파의 한계를 보완했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://esvs.org/wp-content/uploads/2025/01/2025-Vascular-Trauma-Guidelines.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008974
- https://www.east.org/mobile/practice-management-guideline/trauma/98
