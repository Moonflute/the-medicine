---
type: qbank
schema_version: 1
id: medqa-us-train-009557
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9b62242a291f60d42399500048bd4ba7d1b459e6594d741c9afd3c219ff3da21
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "mumps"
  - "유행성이하선염"
  - "orchitis and infertility"
question_type: prognosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67O86rGw66asIChNdW1wcykubWQ
  - MTMg67aA7J246rO8L-u2iOyehCAoSW5mZXJ0aWxpdHkpLm1k
difficulty: complex
answer: D
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

14세 남자가 2일 전 시작된 발열, 권태감, 양측 얼굴 통증과 부종으로 내원했다. 심각한 질환 병력이나 복용약은 없다. 인도에서 태어났고 어머니는 산전 진찰을 받지 않았으며 소아기 예방접종력은 불확실하다. 3주 전 인도를 방문했다. 체온 38.2°C이고 양측 이하선에 발적, 부종, 압통이 있다. 백혈구 13,000/mm³, 혈색소 13.0 g/dL, 헤마토크릿 38%, 혈소판 180,000/mm³이다. 가장 위험한 합병증은 무엇인가?

## 선택지

A. 당뇨병
B. 안면신경마비
C. 안면골 골수염
D. 생식능력 저하

## 해설

사춘기 남아의 볼거리는 고환염과 고환 위축·생식능력 저하(D)를 일으킬 수 있다. 이는 보기 중 관련된 합병증이지만 영구적 불임이 흔하거나 반드시 생긴다는 뜻은 아니다. CDC는 볼거리 고환염 후 불임과의 확정적 연관은 입증되지 않았고 hypofertility 가능성을 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 볼거리 고환염이 영구 불임을 흔히 초래한다는 과장을 생식능력 감소 가능성으로 교정.
- https://www.cdc.gov/mumps/hcp/clinical-signs/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009557
