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
answer: A
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

44세 여성이 혼란과 초조로 경찰과 함께 응급실에 왔다. 남동생은 소화성 궤양과 고혈압이 있으며 매일 보드카 반 병 정도를 마신다고 한다. 환자는 사람·장소·시간에 대한 지남력이 없고 수평 안진과 넓은 보폭의 작은 걸음이 있다. 혈색소 9 g/dL, 혈청 호모시스테인 상승, 메틸말론산 정상, 말초도말에서 과분엽 호중구가 보인다. 빈혈의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 엽산 결핍
B. 비타민 E 결핍
C. 비타민 B1 결핍
D. 비타민 B12 결핍

## 해설


거대적아구성 빈혈을 시사하는 말초혈액도말의 과분엽 호중구, homocysteine 증가와 정상 methylmalonic acid는 엽산 결핍(A)에 맞는다. B12 결핍에서는 보통 methylmalonic acid도 증가한다. 혼란·안진·보행실조는 음주 관련 thiamine 결핍을 별도로 의심하게 하지만, 질문은 빈혈의 원인을 묻고 있으므로 이 신경증상을 엽산 결핍 하나로 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009641 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: homocysteine↑/MMA 정상/과분엽 호중구는 엽산결핍 A. 말초도말을 골수라고 한 위치 오류 수정하고 신경 삼징은 동반 thiamine 결핍 가능성과 구분.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009641
