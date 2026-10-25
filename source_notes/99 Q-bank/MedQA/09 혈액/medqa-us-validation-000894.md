---
type: qbank
schema_version: 1
id: medqa-us-validation-000894
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:44ed9bebc39746089a745f4fe9b26e549adaa87dfbc1fd55444d498336d49f85
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "급성 통풍"
  - "고요산혈증"
  - "종양융해증후군"
related_disease_slugs:
  - MTAg7KKF7JaRL-yiheyWkeuCtOqzvC5tZA
question_type: prevention
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FsbG9wdXJpbm9sLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0NvbGNoaWNpbmUubWQ
---

# MedQA US 임상문제

## 문제

급성 골수성 백혈병으로 화학요법(벤다무스틴)을 받는 64세 여성이 2일째 오른쪽 엄지발가락의 심한 통증을 호소했다. 첫 중족지관절이 따뜻하고 붉고 부으며 압통이 있고, 관절액에서 음성 복굴절의 바늘 모양 결정이 보인다. 적절한 정맥 수액 외에 어떤 약물을 미리 투여했으면 증상을 예방할 수 있었을까?

## 선택지

A. 아세타졸아미드
B. 알로푸리놀
C. 콜히친
D. 코르티코스테로이드

## 해설


항암 후 핵산 대사로 요산 생성이 증가하여 통풍이 촉발될 수 있다. 선택지 중 xanthine oxidase 억제제 allopurinol(B)이 요산 생성 예방에 맞는다. 실제 TLS 예방은 종양량·신기능 등 위험도에 맞추며 고위험/이미 높은 요산에서는 rasburicase 등을 고려한다. 원문의 AML에 bendamustine 단독 2일이라는 기재는 일반적인 AML 유도요법으로 받아들이지 말고 확인해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000894 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 항암 후 요산 생성 예방 allopurinol B 유지. 모든 환자에 동일 TLS 예방법으로 단정하지 않고 AML의 bendamustine 단독 기재가 통상 요법 아님을 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://onlinelibrary.wiley.com/doi/10.1111/bjh.70092

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000894
