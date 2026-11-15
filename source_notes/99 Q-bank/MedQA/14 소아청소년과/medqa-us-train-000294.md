---
type: qbank
schema_version: 1
id: medqa-us-train-000294
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:49e457c4fee334dac6b16204e8bf877a5b33079163af471de4ac2ef83b65709e
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "anemia of prematurity"
question_type: management
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

재태 27주에 태어난 생후 25일 영아가 창백하고 빈맥을 보인다. 현재 호흡 보조는 받지 않는다. 혈색소는 6.5g/dL로 떨어졌고 망상적혈구는 낮다. 출혈·용혈·감염도 평가하면서 빈혈에 취할 조치는?

## 선택지

A. 철분 보충만 늘리고 1주 뒤 혈색소를 재검한다
B. 에리스로포이에틴으로 오늘 혈색소를 올린다
C. 광선치료를 시작한다
D. 신생아팀에서 농축 적혈구를 수혈한다

## 해설

아주 이른 미숙아의 수혈 기준은 출생 후 주수와 호흡 보조 여부에 따라 다르다. 생후 3주 이상이고 호흡 보조가 없는 경우에도 6.5g/dL는 권고 역치 7g/dL보다 낮다. 철분은 당장 이 정도의 빈혈을 교정하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미숙아 빈혈을 미성숙 신장 기능 하나로만 설명한 해설을 상대적 EPO 생성·저산소 반응 부족과 적혈구 생성 감소로 명확히 했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000294
- https://pubmed.ncbi.nlm.nih.gov/38874929/
