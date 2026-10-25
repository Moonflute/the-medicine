---
type: qbank
schema_version: 1
id: medqa-us-train-003784
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bb33f5d04885fc68adff5c04b8e2e38424ea73ad28b5b7dcf2d8eac44a0c43f8
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Turner syndrome"
  - "short stature"
  - "coarctation or bicuspid aortic valve"
  - "aortic insufficiency"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7YSw64SIIOymne2bhOq1sCAoVHVybmVyIFN5bmRyb21lKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KCA7Iug7J6lIChTaG9ydCBTdGF0dXJlKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv6rCA7KGx7ISxIOuLqOyLoOymnSAoRmFtaWxpYWwgU2hvcnQgU3RhdHVyZSkubWQ
question_type: complication
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

6세 여아가 같은 반에서 가장 작고 키 때문에 놀림을 받아 내원했다. 키는 10백분위수, 낮은 헤어라인과 높은 아치형 입천장, 넓게 떨어진 유두, 손의 부종이 있었다. 다음 중 위험이 증가하는 합병증은?

## 선택지

A. 신세포암
B. 성조숙증
C. 대동맥판막 기능부전
D. 급성 림프모구성 백혈병

## 해설

저신장·낮은 헤어라인·넓은 유두간격·손의 림프부종은 Turner 증후군을 시사한다. 이첨대동맥판과 대동맥축착 등 좌심계 기형 위험이 증가하며 이첨판은 역류/협착을 유발할 수 있어 선택지 C가 부합한다. 대동맥판 기능부전 자체가 Turner에서 항상 가장 흔한 합병증이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Turner의 이첨대동맥판/축착과 선택지 AR C를 연결하되 AR가 가장 흔한 합병증이라는 단정 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003784
