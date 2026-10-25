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

이전에 건강했던 56세 여자가 교통사고로 오른쪽 요골과 척골 골절을 정복하고 내고정술을 받은 다음 날이다. 이 환자에서 수술 후 폐렴을 예방하는 주요 방법은 무엇인가?

## 선택지

A. 병원 내 정맥 항생제
B. 고압산소요법
C. 조기 보행, 적절한 통증 조절, 심호흡·기침을 함께 시행한다
D. 얕은 호흡 운동

## 해설

수술 후 폐합병증 예방에는 가능한 조기 보행, 적절한 통증 조절, 심호흡·기침과 분비물 배출을 함께 시행한다. Incentive spirometry를 사용하더라도 이 관리의 보조이며, 기구 단독으로 모든 수술 후 폐렴을 예방한다고 보장하지 않는다. 감염 근거 없이 정맥 항생제를 일률 투여하거나 얕은 호흡을 유도하는 것은 예방 접근이 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 폐합병증 예방을 기구 단독 사용에서 복합 관리로 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.aarc.org/wp-content/uploads/2014/08/10.11.1600.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004324

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
