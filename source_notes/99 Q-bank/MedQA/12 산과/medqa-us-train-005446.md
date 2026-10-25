---
type: qbank
schema_version: 1
id: medqa-us-train-005446
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c9ab17fa3a8ee6e6e598535c8b25d6d50030b5f7a77b1aeda28a5f389dc862e8
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신성 신우신염"
  - "임신 중 요관 확장"
  - "프로게스테론 효과"
question_type: mechanism
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoCDspJEg6rCQ7Je8Lm1k
difficulty: complex
answer: A
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

임신 27주인 28세 초임부가 빈뇨, 배뇨 시 작열감, 옆구리 통증과 메스꺼움으로 내원했다. 오른쪽 늑골척추각에 심한 압통이 있고 소변검사에서 백혈구에스터라제와 아질산염이 양성이다. 다음 중 이 상태에 기여한 변화는?

## 선택지

A. 요관 평활근 긴장도 감소
B. 체온 상승
C. 소변량 감소
D. 요 pH 증가

## 해설

임신 중 프로게스테론 작용 등으로 요관 평활근 긴장도와 연동운동이 감소하고 요로가 확장되면 소변 배출이 지연되어 요정체와 상행성 감염에 유리해진다. 따라서 A가 적절하다. 옆구리 통증·늑골척추각 압통과 백혈구에스터라제·아질산염 양성은 요로감염을 지지한다. 요관 폐쇄가 완화되기 때문에 감염된다는 설명은 맞지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 요관 이완이 폐쇄를 완화해 감염을 유발한다는 잘못된 연결을 요정체·배액 지연으로 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005446
