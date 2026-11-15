---
type: qbank
schema_version: 1
id: medqa-us-train-007280
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cd098ef52a309b7093133b3caa13efd4de49a492f4a87ef539667983c63efecf
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "신동맥 협착"
  - "이차성 고알도스테론증"
  - "일측 신장 위축"
  - "난치성 고혈압"
related_disease_slugs:
  - MDQg64K067aE67mEL-yVjOuPhOyKpO2FjOuhoOymnSAoQWxkb3N0ZXJvbmlzbSkubWQ
  - MDUg7Iug7J6lL-yLoO2YiOq0gOyEsSDqs6DtmIjslZUgKFJlbm92YXNjdWxhciBIeXBlcnRlbnNpb24pLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRmVsb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
curation_status: "revised"
curation_reason: "이차성 고알도스테론증 전반이 아니라 죽상경화성 신동맥 협착의 허혈 소견을 설명."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

64세 남성이 죽상경화성 중증 양측 신동맥 협착이 있고 약을 복용하는데도 급성 폐부종으로 두 차례 입원했다. 좌심실 박출률은 보존돼 있고 다른 뚜렷한 유발 원인은 없다. 안정화 후 고려할 계획은?

## 선택지

A. 신동맥 재개통 적합성을 전문팀에 의뢰해 평가한다
B. 양측 신동맥을 색전한다
C. 조영제 사용 위험과 무관하게 진단 즉시 모든 환자에게 스텐트를 넣는다
D. 폐부종과 신동맥 협착은 무관하므로 추가 평가하지 않는다

## 해설

죽상경화성 신동맥 협착은 발견만으로 스텐트 치료를 하지 않는다. 양측 중증 협착과 반복되는 급성 폐부종은 재개통을 선별적으로 평가할 상황이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007280
- https://doi.org/10.1161/HYP.0000000000000217

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 이차성 고알도스테론증 전반이 아니라 죽상경화성 신동맥 협착의 허혈 소견을 설명.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
