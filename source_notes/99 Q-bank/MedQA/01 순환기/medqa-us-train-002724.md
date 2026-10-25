---
type: qbank
schema_version: 1
id: medqa-us-train-002724
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5d2f38c976996b0859de14668a0c0c85c26ddae9264c6e368c106e316b50cab4
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "peripheral artery disease"
  - "intermittent claudication"
  - "lifestyle modification"
  - "smoking cessation"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: management
difficulty: standard
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 파행 증상 개선 목표를 명확히 하여 항혈소판 예방치료와 구분."
curation_status: "revised"
curation_reason: "파행 증상 개선 목표를 명확히 하여 항혈소판 예방치료와 구분."
curation_reviewed_at: "2026-10-25"
wrong_notes_review_status: "reviewed"
curation_disposition: "selected"
---

# MedQA US 임상문제

## 문제

70세 남성이 2개월간 심해진 보행 시 종아리 통증으로 왔다. 안정 시에는 아프지 않고 쉬면 호전된다. 30갑년 흡연력, 고혈압, 고지혈증, 관상동맥 스텐트를 받은 심근경색 병력이 있다. 하퇴 피부는 윤기가 나고 털이 없으며 양측 발등동맥 맥박이 약하다. 심혈관 예방 약물치료와 함께, 이 환자의 파행 및 보행능력 개선을 위해 우선 시행할 비침습적 치료는?

## 선택지

A. 구조화된 보행 운동과 금연을 포함한 생활습관 교정
B. 클로피도그렐만 투여하고 운동은 금한다
C. 즉시 혈관성형술 및 스텐트 삽입술
D. 즉시 동맥 우회술

## 해설

간헐적 파행은 보행 시 발생하고 휴식으로 호전되는 허혈성 통증이다. 구조화된 보행 운동과 금연은 기능과 보행능력을 개선하는 기본 치료다. clopidogrel 등 항혈소판제와 statin도 심혈관 위험 감소를 위해 병행 평가해야 하며, 증상이 심해질 때까지 미루는 약이 아니다. 침습적 재관류는 적절한 약물·운동치료 후에도 생활을 제한하는 증상 등이 남을 때 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 파행 증상 개선 목표를 명확히 하여 항혈소판 예방치료와 구분.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002724

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
