---
type: qbank
schema_version: 1
id: medqa-us-train-004846
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f9f9eb42ed86822ed2f58c676c42d9ae2211bb06cf0f573f37ff1f08d18faf8b
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "메켈 게실"
  - "소아 무통성 하부위장관 출혈"
  - "테크네튬-99m 퍼테크네테이트 스캔"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv66mU7LyIIOqyjOyLpCAoTWVja2VsJ3MgRGl2ZXJ0aWN1bHVtKS5tZA
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

2세 아이가 복통이나 설사 없이 검붉은 변을 여러 차례 봤다. 지금 출혈은 멎었고 혈색소는 9 g/dL이다. 멕켈 게실의 이소성 위점막을 찾을 검사는?

## 선택지

A. 대변 세균배양
B. 경구 우유단백 유발검사
C. 테크네튬-99m 퍼테크네테이트 스캔
D. 복부 초음파로 장중첩만 검사

## 해설

소아의 무통성 위장관 출혈은 멕켈 게실을 의심하는 단서다. 이 검사는 이소성 위점막을 검출하며 활동성 출혈 자체를 추적하는 표지 적혈구 검사와 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Meckel 스캔을 모든 소아 출혈의 최고 민감도 검사로 일반화한 설명을 보정.
- https://tech.snmjournals.org/content/42/3/163

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004846
- https://snmmi.org/Web/Web/Clinical-Practice/Procedure-Standards/Standards/Meckel-Diverticulum-Scintigraphy-2-0.aspx
- https://pghn.org/DOIx.php?id=10.5223%2Fpghn.2013.16.1.41
