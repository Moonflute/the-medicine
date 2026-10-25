---
type: qbank
schema_version: 1
id: medqa-us-train-006547
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:47cfc66bd54395b0e8e868f978d8c6a95aac994b6a0158525b225835f61d6d03
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심실빈맥"
  - "무맥성 심정지"
  - "아미오다론 치료"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOyLpCDruYjrp6UgKFZlbnRyaWN1bGFyIFRhY2h5Y2FyZGlhKS5tZA
question_type: management
difficulty: simple
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1pb2Rhcm9uZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvU290YWxvbC5tZA
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 무맥성 VT에서 동기화 충격·다형성 예방이라는 원문 처치 오류 교정."
curation_status: "revised"
curation_reason: "무맥성 VT에서 동기화 충격·다형성 예방이라는 원문 처치 오류 교정."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

70세 남성이 낙상 후 무의식·무맥 상태로 응급실에 왔다. 심전도에는 넓은 단형성 QRS의 심실빈맥이 보인다. 고품질 CPR과 반복 비동기 제세동, 에피네프린에도 무맥성 심실빈맥이 지속된다. 다음 중 추가로 고려할 항부정맥제는?

## 선택지

A. 아미오다론
B. 이부틸리드
C. 소타롤
D. 프로카인아미드

## 해설

맥박이 없는 심실빈맥은 심정지 알고리즘에 따라 CPR과 비동기 제세동으로 치료한다. 반복 제세동에도 지속되는 VF/pVT에서는 amiodarone 또는 lidocaine을 고려할 수 있다. 이 선택지 중에서는 amiodarone이 해당한다. 맥박 있는 불안정 빈맥의 동기화 심율동전환과 구분하며, QT 연장성 torsades 예방약을 묻는 문제가 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 무맥성 VT에서 동기화 충격·다형성 예방이라는 원문 처치 오류 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-advanced-life-support

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006547

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
