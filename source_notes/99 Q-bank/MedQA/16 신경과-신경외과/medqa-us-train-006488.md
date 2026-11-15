---
type: qbank
schema_version: 1
id: medqa-us-train-006488
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0b74eee0c241158a7ebf5793d316cf94bf3b651f4556f02a1e606e26e2e87bdd
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "양성 돌발성 체위성 현훈"
  - "체위성 안진"
  - "전정 억제제"
  - "Benign paroxysmal positional vertigo"
question_type: investigation
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-ydtOyEneymnSAoQmVuaWduIHBhcm94eXNtYWwgcG9zaXRpb25hbCB2ZXJ0aWdvKS5tZA
difficulty: complex
answer: B
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
publication_reason: "직접 재검수 후 복구: BPPV의 수평안진 평가와 치료 선택지를 교정"
curation_status: "revised"
curation_reason: "BPPV의 수평안진 평가와 치료 선택지를 교정"
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

55세 여성이 침대에서 돌아눕고 나면 30초 정도 현훈이 있다. 다른 신경학적 이상은 없고 딕스–홀파이크 검사에서 회선성 대신 수평 안진이 보인다. 어느 검사를 다음으로 시행할까?

## 선택지

A. 청력역치검사
B. 누운 자세 머리회전검사
C. 기립경 검사
D. 머리충동검사만 반복

## 해설

병력은 이석증에 맞지만 딕스–홀파이크에서 수평 안진이 나오면 누운 자세 머리회전검사로 수평반고리관 침범을 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: BPPV의 수평안진 평가와 치료 선택지를 교정
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.entnet.org/resource/aao-hnsf-updated-cpg-bppv-press-release-fact-sheet/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006488
- https://pubmed.ncbi.nlm.nih.gov/28248609/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
