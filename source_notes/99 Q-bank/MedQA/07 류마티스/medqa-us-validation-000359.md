---
type: qbank
schema_version: 1
id: medqa-us-validation-000359
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:901d3a1e904424d13c709f3ac7ba980cae33b64fa2f1c19315714c27c9de127c
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "다발근염"
  - "염증성 근병증"
  - "근위부 근력저하"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yXvOymneyEsSDqt7zrs5Hspp0gKEluZmxhbW1hdG9yeSBNeW9wYXRoeSkubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

50세 여성이 수개월간 진행된 대칭성 어깨·엉덩이 근력저하와 높은 CK로 평가받았다. 전문 평가에서 활동성 자가면역 염증성 근병증으로 확인됐고 봉입체근염과 감염은 배제됐다. 관해 유도에 기본이 되는 약제는?

## 선택지

A. 아자티오프린 단독
B. 진통제만 사용
C. 고용량 전신 글루코코르티코이드
D. 갑상선호르몬

## 해설


대부분의 활동성 자가면역 염증성 근병증에서 글루코코르티코이드가 초기 치료의 기본이다. 중증도·병형에 따라 다른 면역조절제를 함께 사용하며 봉입체근염에는 그대로 적용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000359 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 보존반사·근위위약·CK4200의 염증성 근병증 초기 glucocorticoid C를 BSR 근염지침과 대조 유지. 증상·검사로아형확정한것아님.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9398208/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000359
- https://doi.org/10.1093/rheumatology/keac115
