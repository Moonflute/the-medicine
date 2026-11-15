---
type: qbank
schema_version: 1
id: medqa-us-train-006035
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:40c9399bc420ef38c57bfd8f90ef4984bd6403b56a748391beb32191997092c8
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "파보바이러스 B19"
  - "태아 수종"
  - "임신 중 바이러스 감염"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoCDspJEg6rCQ7Je8Lm1k
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 20주 산모가 새로운 파보바이러스 B19 감염으로 확인됐다. 현재 태아 초음파에서 수종은 없다. 태아 빈혈 합병증을 놓치지 않기 위한 계획은?

## 선택지

A. 별다른 증상이 없으면 분만까지 초음파를 하지 않는다
B. 모체 혈액검사만 반복하면 태아 빈혈을 배제할 수 있다
C. 전문팀에서 연속 초음파와 중대뇌동맥 도플러로 빈혈·수종을 감시한다
D. 감염이 확인된 모든 산모에게 즉시 자궁 내 수혈을 한다

## 해설

감염 뒤 태아 빈혈과 수종이 나중에 생길 수 있다. 초음파와 중대뇌동맥 혈류를 일정 기간 추적하며 중증 빈혈이 의심되면 태아 치료 전문팀에서 침습 평가와 수혈을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 적혈구파괴보다적혈구전구세포억제인B19기전수정,본문에없는발진삭제. B유지.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006035
- https://www.smfm.org/parvovirus-b19
