---
type: qbank
schema_version: 1
id: medqa-us-test-000458
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:fd8c57d4c028dc205b036c029caab27dcc829934fe06ab89a17cc4295530d7fc
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "간성뇌증"
  - "간경변"
  - "상부 위장관 출혈"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITshLEg64eM7KadIChIZXBhdGljIEVuY2VwaGFsb3BhdGh5KS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sg4HrtoAg7JyE7J6l6rSAIOy2nO2YiCAoVXBwZXIgR2FzdHJvaW50ZXN0aW5hbCBUcmFjdCkubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 간경변 환자가 흑색변과 새 혼돈으로 왔다. 날개떨림이 있어 간성뇌증을 의심하며 출혈을 평가 중이다. 암모니아 검사를 어떻게 해석하는 것이 적절한가?

## 선택지

A. 암모니아가 높으면 의식 변화의 다른 원인을 확인할 필요가 없다
B. 암모니아 한 수치로 확진하지 않고 출혈·감염·혈당 등 다른 원인과 유발 요인을 확인한다
C. 암모니아가 높을수록 의식 변화가 반드시 더 심하다
D. 암모니아가 높으면 기저 간질환 없이도 간성뇌증으로 확진한다

## 해설


간성뇌증은 임상 양상과 기저 간질환을 종합해 판단한다. 암모니아 상승만으로 확진하거나 중증도를 정할 수 없으며, 위장관 출혈과 감염·전해질 이상·저혈당 등을 함께 평가한다. 암모니아가 정상이라면 다른 원인을 더 적극적으로 검토한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 간경변·위장관 출혈 뒤 혼돈/asterixis는 간성뇌증에 합당하나 다른 원인을 배제해야 함. ammonia 하나로 확진하지 않는 B/해설 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000458
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7160350/
