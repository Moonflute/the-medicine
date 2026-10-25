---
type: qbank
schema_version: 1
id: medqa-us-validation-000198
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:b5feca71b93b109c83326685ba62a5d7c40cd6b7b76c424c5bcfe1054943e195
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 중 심부정맥혈전증"
  - "헤파린"
  - "대퇴정맥 혈전"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yLrOu2gOygleunpe2YiOyghOymnSAoRGVlcCBWZWluIFRocm9tYm9zaXMpLm1k
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlweXJpZGFtb2xlLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 11주인 29세 여성이 왼쪽 하지 통증과 부종으로 응급실에 왔다. 압박초음파에서 대퇴정맥의 압박이 되지 않았다. 이 환자의 가장 적절한 치료는?

## 선택지

A. 아스피린
B. 디피리다몰
C. 헤파린
D. 와파린

## 해설

압박 불가능한 대퇴정맥과 편측 부종·통증은 DVT이다. 임신 중 치료는 일반적으로 치료 용량 LMWH(C)를 사용한다. 아스피린·디피리다몰은 급성 DVT 치료를 대체하지 않으며 와파린은 이 사례의 임신 중 표준 선택이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 항혈소판제를 DVT 예방 표준으로 보이게 한 해설 수정.
- https://www.rcog.org.uk/media/wj2lpco5/gtg-37b-1.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000198
