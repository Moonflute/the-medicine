---
type: qbank
schema_version: 1
id: medqa-us-train-004112
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d17f11f58e92a1fd6097c0905a3d0afca97c2060cd84f9d3e1b688241cfd52f8
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "굿파스처 증후군"
  - "폐-신장 증후군"
  - "항-사구체기저막 항체"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyGjSDsp4Ttlokg7Yag66as7L2p7Yyl7Je8IChSYXBpZGx5IFByb2dyZXNzaXZlIEdsb21lcnVsb25lcGhyaXRpcykubWQ
  - MDUg7Iug7J6lL-2PkOyLoOyepSDspp3tm4TqtbAgKFB1bG1vbmFyeS1SZW5hbCBTeW5kcm9tZSkubWQ
question_type: investigation
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

22세 남성이 객혈과 호흡곤란으로 내원했다. 양측 폐포 침윤이 있고 소변에서 변형 적혈구와 적혈구 원주가 보인다. 크레아티닌은 3일 사이 0.9에서 2.7 mg/dL로 올랐다. 신장내과 평가와 함께 신속히 보낼 혈청검사는?

## 선택지

A. 항사구체기저막 항체와 ANCA
B. 항갑상선 과산화효소 항체와 TSH
C. 항CCP 항체와 류마티스인자
D. 항아세틸콜린수용체 항체와 CK

## 해설

폐포출혈이 의심되면서 사구체성 혈뇨와 급성 신손상이 있으면 항사구체기저막 질환과 ANCA 연관 혈관염을 신속히 평가한다. 혈청검사와 생검을 준비하되 중증이면 전문팀 치료를 결과가 나올 때까지 미루지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 폐신장증후군의 폐출혈을 폐렴으로 잘못 명명. AntiGBM A는 선택지상 가능하나 ANCA감별도 필요.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004112
- https://kdigo.org/guidelines/gd/
