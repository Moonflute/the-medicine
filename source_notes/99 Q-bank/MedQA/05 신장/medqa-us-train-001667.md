---
type: qbank
schema_version: 1
id: medqa-us-train-001667
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a69f3eafe83add5ed6d8f03ccebdf2b775e162d29b68a0b41a0954757417e5df
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "Goodpasture syndrome"
  - "anti-GBM disease"
  - "pulmonary-renal syndrome"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyGjSDsp4Ttlokg7Yag66as7L2p7Yyl7Je8IChSYXBpZGx5IFByb2dyZXNzaXZlIEdsb21lcnVsb25lcGhyaXRpcykubWQ
  - MDUg7Iug7J6lL-2PkOyLoOyepSDspp3tm4TqtbAgKFB1bG1vbmFyeS1SZW5hbCBTeW5kcm9tZSkubWQ
question_type: mechanism
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

27세 남성이 며칠 동안의 호흡곤란과 가래 기침으로 응급실에 내원했다. 가래는 대부분 노란색이고 작은 붉은 반점이 섞여 있다. 발열, 오한, 최근 체중 감소, 관절통, 여행이나 아픈 사람 접촉은 없다. 하루 한 갑을 피우고 지난 1년 동안 성 파트너가 3명이다. 체온은 37°C (98.6°F), 혈압은 110/70 mm Hg, 맥박은 98회/분, 호흡수는 20회/분이다. 양측 폐야에 미만성 수포음이 있고 HIV 검사는 음성이다. 헤모글로빈 12 g/dL, BUN 26 mg/dL, 크레아티닌 2.3 mg/dL이며 소변에서 단백질 미량, 혈액 양성, 백혈구·아질산염 음성이다. 현재 상태의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 폐색전증
B. 심부전
C. 기저막 항체
D. 파열된 폐포 수포

## 해설

객혈을 시사하는 혈담·호흡곤란과 신기능 저하·혈뇨의 조합은 폐-신장 증후군을 고려하게 한다. 보기 중 C, 항사구체기저막 항체에 의한 폐포/사구체 기저막 손상이 가장 합당하다. 이는 감염성 폐렴이라고 단정하는 것이 아니며, 실제로는 anti-GBM 항체·소변 침사와 다른 폐-신장 질환을 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. 폐신장증후군을 감염성 출혈성 폐렴처럼 표현한 오류 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001667
