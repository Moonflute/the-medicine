---
type: qbank
schema_version: 1
id: medqa-us-train-002760
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:528024662b0565258291142db9ff33fb83c550f18631336d58485cd0ab95f845
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "pediculosis capitis"
  - "head lice"
  - "household contact treatment"
  - "topical ivermectin"
question_type: prevention
related_disease_slugs:
  - MDgg6rCQ7Je8L-q4sO2DgCDqsJDsl7zsp4jtmZgubWQ
difficulty: standard
answer: "C"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQWxiZW5kYXpvbGUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvSXZlcm1lY3Rpbi5tZA
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 머릿니 접촉자 전원 투약을 평가 후 동시 치료로 교정"
curation_status: "revised"
curation_reason: "머릿니 접촉자 전원 투약을 평가 후 동시 치료로 교정"
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

과거 머릿니 감염 외에는 특이 병력이 없는 7세 남아가 머릿니가 재감염되어 학교 보건교사의 의뢰로 내원했다. 두피 가려움이 있으나 그 외 계통문진은 음성이다. 진단을 확인하고 적절한 치료를 처방해 귀가시킨 뒤, 학교 보건교사가 재감염을 예방하는 방법을 문의했다. 다음 중 머릿니 재감염 가능성을 낮추는 가장 좋은 방법은?

## 선택지

A. 면밀히 관찰하며 경과를 지켜본다
B. 가족에게 집에서 이사하도록 권한다
C. 가족과 밀접 접촉자를 검사하고 감염 확인자 및 침상 공유자를 동시에 치료
D. 경구 알벤다졸로 치료한다

## 해설

재감염 예방의 핵심은 치료받지 않은 밀접 접촉자를 확인해 함께 관리하는 것이다. 가족과 다른 밀접 접촉자를 검사하고, 감염이 있는 사람과 침상을 공유하는 사람은 동시에 치료한다. 접촉 사실만으로 가족 모두에게 특정 약을 무조건 투여하지 않는다. 머릿니는 주로 사람의 두피와 머리카락에 살며 머리끼리의 접촉으로 전파된다. 이사나 경구 알벤다졸은 적절한 예방 대책이 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 머릿니 접촉자 전원 투약을 평가 후 동시 치료로 교정
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.cdc.gov/lice/treatment/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002760

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
