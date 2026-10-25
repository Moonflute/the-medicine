---
type: qbank
schema_version: 1
id: medqa-us-train-001137
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:89daf753bd71df94e02ed381d585af124d7460f040eda89752ebd7d845c8152a
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "duodenal ulcer"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_si63snbTsp4DsnqUg6rak7JaRIChEdW9kZW5hbCBVbGNlcikubWQ
question_type: diagnosis
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

46세 여성이 지방질 식사 후 약 4시간 뒤 발생한 복통, 구역, 구토를 주소로 응급실에 내원하였다. 환자는 이전에도 이런 증상이 있었으나 이번 에피소드가 더 심하다고 보고하였다. 구토물은 담즙이 섞이지 않았으며 혈액은 포함되어 있지 않았다. 환자는 밤중에 자주 잠을 깨우는 모호한 상복부 통증이 빈번하게 있었다고 회상한다. 과거에는 일반의약품인 오메프라졸(omeprazole)과 소량의 식사나 간식이 증상 완화에 도움이 되었다. 환자는 최근 식욕 부진과 조기 포만감도 언급하였다. 환자는 두통 때문에 일주일에 여러 번 일반의약품인 이부프로펜(ibuprofen)을 복용한다. 혈압은 125/82 mm Hg, 맥박은 102회/분, 호흡수는 19회/분이다. 신체 검진상 장음은 감소되어 있고, 복부는 육안으로 팽만되어 있으며 타진 시 고음(tympanic)이 들린다. 다음 중 십이지장 궤양(duodenal ulcer)과 가장 일치하는 것은 무엇인가?

## 선택지

A. 담즙이 섞이지 않은 구토
B. 조기 포만감
C. 오메프라졸이 증상을 완화함
D. 음식 섭취가 증상을 완화함

## 해설

정답은 D이다. 십이지장 궤양은 공복·야간 통증이 음식이나 제산제로 일시 호전되는 양상이 전형적이므로 D가 가장 적합하다. PPI 반응은 위궤양 등에서도 나타나 덜 구별적이다. 조기포만·비담즙성 구토·팽만은 유문부 폐쇄 같은 합병증도 평가해야 하며 이것만을 단순 산성 통증의 진단 기준으로 삼지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: D 음식 후 통증 완화와 반대로 악화가 특징이라 한 해설 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001137
