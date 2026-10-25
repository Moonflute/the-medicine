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
question_type: 임상증례 객관식
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

22세 남자가 일주일간 지속된 호흡곤란과 객혈로 내원했다. 아픈 사람과 접촉한 적은 없고 중대한 질환의 개인력이나 가족력도 없으며 복용약도 없다. 체온 37°C, 맥박 82회/분, 호흡수 22회/분, 혈압 152/90 mmHg이다. 양쪽 폐기저부에서 흡기 수포음이 들린다. 헤모글로빈 14.2 g/dL, 백혈구 10,300/mm³, 혈소판 205,000/mm³이다. 소변검사에서 단백뇨 2+, 적혈구 70/고배율시야, 백혈구 1~2/고배율시야가 보이고 흉부 X선에서 폐 침윤이 있다. 추가 평가에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 항-GBM 항체 역가 증가
B. c-ANCA 역가 증가
C. p-ANCA 역가 증가
D. 항-dsDNA 항체 역가 증가

## 해설

객혈·폐침윤과 사구체성혈뇨/단백뇨는 폐신장증후군을 시사한다. 젊은 환자에서 anti-GBM disease A가 부합하지만 ANCA혈관염 등도 감별하고 항체·신기능·생검을 통합한다. 폐침윤을 세균성 폐렴으로 단정해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 폐신장증후군의 폐출혈을 폐렴으로 잘못 명명. AntiGBM A는 선택지상 가능하나 ANCA감별도 필요.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004112
