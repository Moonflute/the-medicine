---
type: qbank
schema_version: 1
id: medqa-us-train-004324
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d5fc9ee5093c7f6de8cf0a69f259e5f0504273576c215afc31fde49bcf483e12
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "수술 후 폐렴"
  - "폐 합병증 예방"
  - "유발성 폐활량계"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
question_type: 임상증례 객관식
difficulty: simple
answer: "C"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 폐합병증 예방을 기구 단독 사용에서 복합 관리로 교정."
curation_status: "revised"
curation_reason: "폐합병증 예방을 기구 단독 사용에서 복합 관리로 교정."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

56세 여성이 상복부 수술을 받고 다음 날 침대에서 쉬고 있다. 통증 때문에 깊게 숨을 쉬거나 기침하기 어려워한다. 호흡기 감염 소견은 없다. 수술 후 폐 합병증을 줄이기 위한 조치는?

## 선택지

A. 예방 목적으로 정맥 항생제를 계속 투여한다
B. 통증이 없어질 때까지 침상 안정을 유지하고 기침을 억제한다
C. 통증을 조절하고 가능한 일찍 움직이며 심호흡·기침을 돕는다
D. 심호흡 훈련 없이 흡입 기관지확장제만 매일 투여한다

## 해설

수술 후 통증과 부동은 얕은 호흡과 분비물 정체를 일으킬 수 있다. 적절한 진통, 조기 활동, 폐 확장 및 기침을 돕는 관리를 함께 시행한다. 호흡 훈련 기구나 예방 항생제 하나만으로 이 관리를 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 폐합병증 예방을 기구 단독 사용에서 복합 관리로 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.aarc.org/wp-content/uploads/2014/08/10.11.1600.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004324
- https://pubmed.ncbi.nlm.nih.gov/41956522/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
