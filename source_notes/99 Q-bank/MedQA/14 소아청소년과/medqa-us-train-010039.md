---
type: qbank
schema_version: 1
id: medqa-us-train-010039
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ca3b7f188ff63bb1ec83a684dec51db72f40c536aa134c16f2504c71d1be4e82
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "아동학대"
  - "비우발적 손상"
  - "다발성 골절"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7JWE64-Z7ZWZ64yAIOuwjyDruYTsmrDrsJzsoIEg7IaQ7IOBLm1k
difficulty: complex
answer: C
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

17개월 아이의 팔 골절을 치료하던 중 회복 시기가 다른 갈비뼈 골절이 발견됐다. 병력으로 설명되지 않아 학대가 의심된다. 안전 확보와 신고를 진행하면서, 다른 부위의 숨은 골절을 찾기 위한 검사로 가장 적절한 것은?

## 선택지

A. 다친 팔만 X선 추가 촬영
B. 한 장의 전신 X선 촬영
C. 부위별 표준 전신 골격 조사
D. 골밀도 검사

## 해설

24개월 미만에서 신체학대가 의심되면 표준화된 여러 부위의 X선으로 골격 조사를 한다. 국소 촬영이나 한 장의 전신 영상은 이를 대신하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 선지 B의 중국어 잔재만 원문 뜻으로 수정. 서로 다른 시기 골절의 학대 의심·신고 A 유지.
- https://publications.aap.org/pediatrics/article-lookup/doi/10.1542/peds.2015-0356

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010039
- https://pubmed.ncbi.nlm.nih.gov/41860516/
- https://law.go.kr/LSW/lsLinkCommonInfo.do?lsJoLnkSeq=1033213513
