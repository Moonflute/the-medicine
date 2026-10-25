---
type: qbank
schema_version: 1
id: medqa-us-validation-001226
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:ba8300444ee5ff2e4e2a2cbf23ff8ec5e4db8913711992673cedec8a39fecbc9
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "유방암"
  - "유방절제술"
  - "종괴절제술"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: management
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

55세 여성이 최근 진단받은 유방암의 수술 방법을 상담하러 왔다. 다음 중 유방 전체를 제거하는 수술은?

## 선택지

A. 정관절제술
B. 유방절제술
C. 종괴절제술
D. 관절성형술

## 해설


Mastectomy는 유방 조직을 제거하는 유방절제술이며 B가 맞다. Lumpectomy는 종괴와 주변 일부 조직을 제거하는 유방보존 절제술이다. Vasectomy는 정관절제술, arthroplasty는 관절성형술이다. 유양돌기절제술을 뜻하는 mastoidectomy와 유방절제술 mastectomy를 혼동하지 않아야 한다. 이 문항은 수술 명칭을 묻는 것이며 개인의 유방절제 적응증을 판단하는 사례는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001226 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 유방절제술 mastectomy를 mastoidectomy를 뜻하는 마스토이데크토미라고 부른 용어 오류 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001226
