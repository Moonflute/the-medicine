---
type: qbank
schema_version: 1
id: medqa-us-train-006143
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7e141c124091875e95b619c6ba44673cfce25f167bd56587c20dc0939d614ab3
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "취약 X 증후군"
  - "CGG 반복 확장"
  - "발달 지연"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7IaM7JWEIOycoOyghOyniO2ZmC5tZA
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

6세 남아가 언어와 학습 발달이 늦고 사회적 상호작용에 어려움이 있다. 얼굴이 길고 귀가 크며, 외삼촌에게도 원인을 알 수 없는 지적장애가 있다. 취약 X 증후군을 확인할 검사는?

## 선택지

A. 말초혈액 핵형검사만 시행
B. FMR1의 CGG 반복 수를 확인하는 표적 검사
C. SMN1 결실 검사
D. 신생아 탠덤질량분석 재검

## 해설

취약 X 증후군의 흔한 원인은 FMR1의 CGG 반복 확장이다. 이를 검출할 수 있는 표적 반복 검사로 확인하며, 일반 핵형검사로는 판별하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 정상인에게도 존재하는 CGG 반복의 단순 존재가 아니라 FMR1의 병적 확장을 뜻함을 명확히 했다.
- https://medlineplus.gov/genetics/condition/fragile-x-syndrome/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006143
- https://pubmed.ncbi.nlm.nih.gov/33795824/
