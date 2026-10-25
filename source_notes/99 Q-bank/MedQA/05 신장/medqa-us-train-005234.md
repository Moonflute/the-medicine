---
type: qbank
schema_version: 1
id: medqa-us-train-005234
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3335d0c384f62f85d29d5248dd4c7907306d0f6c179366dac2d14d7d48b2d693
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "수술 후 급성신손상"
  - "도뇨관 폐색"
  - "신후성 급성신손상"
related_disease_slugs:
  - MDUg7Iug7J6lL-y9qe2Mpe2bhCDquInshLEg7L2p7YylIOyGkOyDgSAoUG9zdHJlbmFsIEFjdXRlIEtpZG5leSBJbmp1cnkpLm1k
  - MjAg67mE64eo6riw6rO8L-yalOuhnCDtj5Dsg4kgKFVyaW5hcnkgdHJhY3Qgb2JzdHJ1Y3Rpb24pLm1k
question_type: management
difficulty: complex
answer: "B"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: "content-reviewed"
medical_reviewed_at: 2026-10-25
curation_status: "revised"
curation_reason: "도뇨관 폐색을 수술 후 AKI 전체의 흔한 확정 원인으로 단정하지 않도록 수정."
curation_reviewed_at: "2026-10-25"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

급성 담낭염으로 복강경 담낭절제술을 받은 63세 남자가 수술 다음 날 크레아티닌이 0.98에서 1.46 mg/dL로 상승하고 BUN은 37 mg/dL이다. 유치도뇨관에서 지난 몇 시간 동안 소변이 거의 나오지 않는다. 다음 중 가장 적절한 처치는?

## 선택지

A. 소변검사 시행
B. 유치도뇨관 폐색 평가
C. 정맥 수액 급속 투여
D. 응급 혈액투석 시작

## 해설

유치도뇨관에서 갑자기 소변이 거의 나오지 않으면 먼저 관의 꼬임·막힘·위치와 방광 팽만을 확인한다. 쉽게 교정 가능한 배액 문제를 배제하면서 체액 상태·신기능과 다른 수술 후 AKI 원인을 평가한다. 이것이 모든 수술 후 AKI의 원인이 폐색이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 도뇨관 폐색을 수술 후 AKI 전체의 흔한 확정 원인으로 단정하지 않도록 수정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005234

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
