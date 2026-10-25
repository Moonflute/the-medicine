---
type: qbank
schema_version: 1
id: medqa-us-train-005872
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:481934d457b5b6127e3f2a9ed577f97d1414d16268478baad4f7ddfc3672e885
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "악성 외이도염"
  - "당뇨병"
  - "Pseudomonas aeruginosa"
question_type: association
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDgg6rCQ7Je8L-uFueuGjeq3oCAoUHNldWRvbW9uYXMgQWVydWdpbm9zYSkubWQ
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

64세 노숙인 남성이 2주 동안 지속된 우측 귀 통증과 청력곤란으로 응급실에 왔다. 최근 5일 동안 우측 귀에서 분비물도 있었다. 마지막으로 의사를 본 때가 언제인지 기억하지 못한다. 체온은 39.0°C(102.2°F), 혈압은 153/92 mmHg, 맥박은 분당 113회, 호흡수는 분당 18회이다. 지저분하고 악취가 나며, 웃을 때 우측 입꼬리가 좌측보다 늦게 움직이는 경미한 안면 비대칭이 있다. 우측 귓바퀴를 위로 당기면 심한 귀 통증이 발생한다. 이경검사에서 외이도의 연골부와 골부가 만나는 부위에 육아조직이 보인다. 다음 중 이 환자 상태와 가장 관련 있는 소견은 무엇인가?

## 선택지

A. 외이도 악성 상피 종양
B. 혼탁해진 유양돌기 공기세포
C. Streptococcus pneumoniae
D. 상승한 HbA1c

## 해설

심한 이통, 이루, 골-연골 접합부 육아조직과 안면신경 이상은 괴사성(전통적으로 악성) 외이도염을 시사한다. 당뇨병과 혈당 조절 불량이 중요한 위험요인이므로 D, HbA1c 상승이 가장 관련 있다. 여기서 악성은 종양이라는 뜻이 아니라 침습성 감염을 가리킨다. 단순 만성 외이도염과 같은 상태로 설명해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 육아조직·심한 이통·안면마비를 동반한 감염을 단순 만성 외이도염과 혼동하지 않도록 괴사성 외이도염으로 명확히 함.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005872
