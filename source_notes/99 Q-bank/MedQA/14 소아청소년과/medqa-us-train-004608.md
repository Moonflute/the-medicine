---
type: qbank
schema_version: 1
id: medqa-us-train-004608
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:223c6dbed5bfaca0c555a845f44ee3f382dedc919eb94ad28f2be0255c7acd8e
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "모유수유 부족 황달"
  - "신생아 비포합 고빌리루빈혈증"
  - "탈수"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIO2ZqeuLrCAoTmVvbmF0YWwgSmF1bmRpY2UpLm1k
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

재태 38주로 태어난 생후 4일 영아에게 황달이 있다. 출생 체중보다 11% 줄었고 하루 젖은 기저귀는 3개이며 젖물림이 좋지 않다. 총 빌리루빈은 시간·주수별 광선치료 기준보다 높지만 교환수혈 준비 기준에는 미치지 않는다. 처치는?

## 선택지

A. 모유 황달로 보고 수유 변경 없이 추적만 한다
B. 광선치료를 시작하며 탈수와 수유량을 평가하고 필요한 수유 보충을 한다
C. 모유만 끊고 빌리루빈은 추적하지 않는다
D. 체중이 줄었으므로 빌리루빈과 관계없이 즉시 교환수혈

## 해설

첫 주의 체중 감소와 적은 배뇨는 섭취 부족 관련 고빌리루빈혈증을 시사한다. 광선치료 기준을 넘었다면 치료하고, 동시에 수유 지원과 탈수 교정이 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 10% 넘는 체중 감소·탈수와 TSB 20을 단순 생리적 황달로 설명하고 3시간 간격 수유를 무조건 낮은 빈도로 본 오류를 교정했다.
- https://publications.aap.org/pediatrics/article/150/3/e2022058859/188726/Clinical-Practice-Guideline-Revision-Management-of

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004608
- https://doi.org/10.1542/peds.2022-058859
