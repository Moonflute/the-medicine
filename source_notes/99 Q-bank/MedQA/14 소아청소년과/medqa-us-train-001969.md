---
type: qbank
schema_version: 1
id: medqa-us-train-001969
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fa32e021adbad959f9d59ad834fe196d78db0ed27e8132ab4e9fe64f5ef39e6f
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "child sexual abuse"
  - "sexually transmitted infection"
  - "mucopurulent discharge"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yEseunpOqwnOqwkOyXvC5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7JWE64-Z7ZWZ64yAIOuwjyDruYTsmrDrsJzsoIEg7IaQ7IOBLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

사춘기 전 아동의 분비물 검사에서 임균이 나왔고 확인 검사도 양성이다. 주산기 전파를 설명할 상황은 없다. 감염 치료와 함께 필요한 조치는?

## 선택지

A. 감염이 나으면 안전 평가 없이 진료를 마친다
B. 아동의 안전을 확보하고 학대 의심을 신고하며 전문 평가를 연결한다
C. 다른 성매개감염도 확인될 때까지 신고를 미룬다
D. 보호자가 먼저 인정하면 그때 전문 평가를 시작한다

## 해설

사춘기 전 아동의 확인된 임균 감염은 주산기 전파가 아니라면 성학대를 강하게 의심할 소견이다. 치료를 제공하면서 안전 평가·신고와 숙련된 전문팀의 평가를 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 점액농성 분비물 D는 STI 평가 근거지만 성학대 확진 소견이라는 과장 수정.
- https://www.cdc.gov/std/treatment-guidelines/sexual-assault-children.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001969
- https://law.go.kr/LSW/lsLinkCommonInfo.do?lsJoLnkSeq=1033213513
