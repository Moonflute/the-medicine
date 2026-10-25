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
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoCDspJEg6rCQ7Je8Lm1k
difficulty: standard
answer: B
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

임신 24주인 25세 G2P1 여성이 산전진료를 받으러 왔다. 최근 피로와 다리 부종이 있다. 한 달 전 미열, 콧물, 관절통 및 인후통이 있었으나 저절로 호전되었다. 첫 임신과 분만은 합병증이 없었고 흡연, 음주 및 약물 사용을 하지 않는다. 활력징후는 정상이고 자궁은 임신 24주 크기이며 양측 발목 주위에 부종이 있다. 골반초음파에서 태아 두피 내 액체와 양측 흉수가 보인다. 다음 중 이러한 소견의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 단순포진바이러스
B. 파보바이러스 B19
C. 리스테리아 모노사이토제네스
D. 톡소플라스마 곤디

## 해설

관절통과 가벼운 바이러스 증상 이후 태아 두피부종·흉수가 나타나 비면역 태아수종을 시사하며 선택지 중 파보바이러스 B19(B)가 적합하다. B19는 적혈구 전구세포를 감염시켜 적혈구 생성을 억제하고 심한 태아 빈혈·고박출성 심부전과 수종을 유발할 수 있다. 본문에 발진은 제시되지 않았고 다른 감염도 수종을 일으킬 수 있어 ‘다른 바이러스는 이런 양상을 보이지 않는다’고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 적혈구파괴보다적혈구전구세포억제인B19기전수정,본문에없는발진삭제. B유지.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006035
