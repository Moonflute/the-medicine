---
type: qbank
schema_version: 1
id: medqa-us-train-009641
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:364862462b98181e3a2e725a3312cf2dc9c1fa23f5c50b604fb8dcf99137abdc
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "folate deficiency"
  - "엽산 결핍"
  - "megaloblastic anemia"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qxsOuMgOygge2YiOuqqOq1rCDruYjtmIggKE1lZ2Fsb2JsYXN0aWMgQW5lbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

영양 섭취가 부족한 환자의 혈액도말에서 큰 타원형 적혈구와 과분엽 호중구가 보인다. 신기능은 정상이다. 호모시스테인은 높지만 메틸말론산은 정상이고 비타민 B12는 정상 범위다. 가장 가능성 높은 결핍은?

## 선택지

A. 철분
B. 비타민 B1
C. 비타민 B12
D. 엽산

## 해설


엽산과 B12 결핍은 모두 거대적아구성 빈혈과 높은 호모시스테인을 일으킬 수 있다. B12가 정상이고 메틸말론산이 상승하지 않은 점은 엽산 결핍을 더 지지한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009641 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: homocysteine↑/MMA 정상/과분엽 호중구는 엽산결핍 A. 말초도말을 골수라고 한 위치 오류 수정하고 신경 삼징은 동반 thiamine 결핍 가능성과 구분.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009641
- https://www.nice.org.uk/guidance/ng239/chapter/recommendations
