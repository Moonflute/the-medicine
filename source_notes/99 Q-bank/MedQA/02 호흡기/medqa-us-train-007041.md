---
type: qbank
schema_version: 1
id: medqa-us-train-007041
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:831eb26b2e636a962e87b0cef5c5163a015ef3084e0d0ede5dd5c7b6a8081382
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "만성 기관지염"
  - "폐쇄성 폐질환"
  - "폐기능검사"
  - "DLCO"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 여자가 지난 4개월 동안 지속된 만성 생산성 기침으로 내원했다. 지난 몇 년 동안 비슷한 증상이 4~5개월씩 반복되었다고 한다. 흡연한 적은 없지만 집에서 상당한 간접흡연에 노출되었다. 발열은 없고 가끔 호흡곤란이 있으며, 걸쭉하고 흰 가래를 자주 뱉는 지속적인 기침이 있다. 활력징후는 체온 37.1°C, 심박수 88회/분, 혈압 136/88 mmHg, 호흡수 18회/분, 실내 공기 산소포화도 94%이다. 신체검사에서 양측 호기 말기의 천명, 입술과 구강 점막의 푸른색, 술통형 흉곽이 보인다. 이 환자의 폐기능검사에서 예상되는 결과 조합은 무엇인가?

## 선택지

A. FEV1 감소, FEV1/FVC 비 감소, TLC 증가, DLCO 감소
B. FEV1 감소, FEV1/FVC 비 감소, TLC 증가, DLCO 정상
C. FEV1 감소, FEV1/FVC 비 정상, TLC 감소, DLCO 감소
D. FEV1 감소, FEV1/FVC 비 증가, TLC 감소, DLCO 정상

## 해설


만성 기관지염(COPD)에서는 FEV1 감소, FEV1/FVC 비 감소, TLC 증가, DLCO 정상이 특징이다. 따라서 정답은 B이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 만성기관지염 우세의 폐쇄성생리에는 FEV1/비율감소·과팽창과 보존DLCO B가 가장 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007041
