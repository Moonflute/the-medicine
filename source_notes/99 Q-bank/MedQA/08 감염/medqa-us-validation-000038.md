---
type: qbank
schema_version: 1
id: medqa-us-validation-000038
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:a9be21b6b1234db100e9ac1e524ac6a937bfc535989e59024a66484315ac502a
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "여행자 설사"
  - "장독소생성 대장균"
  - "ETEC"
  - "Enterotoxigenic E. coli infection"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uMgOyepeq3oCAoRS4gY29saSkubWQ
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

31세 남성이 아프리카에서 돌아온 지 8일 후 시작된 이틀간의 수양성 설사로 진료를 받으러 왔다. 권태감과 식욕부진, 복부경련 후 설사가 있었고 혈변·절박변·테네스무스는 없었다. 체온 37°C, 맥박 107회/분, 혈압 90/68mmHg였고 정맥 수액을 시작했다. 대변검사에서 난자·기생충, 혈구, 고름은 음성이었다. 가장 가능성 높은 진단은?

## 선택지

A. 지아르디아증
B. 과민성 장 증후군
C. 노로바이러스에 의한 여행자 설사
D. ETEC에 의한 여행자 설사

## 해설


여행 후 급성 비혈성 수양성 설사에서 선택지 중 ETEC 여행자 설사(D)가 가장 흔한 원인으로 제시된다. 다만 증상만으로 균을 확진할 수 없고 단회 ova/parasite 음성도 Giardia 등을 완전히 배제하지 못한다. 이 환자는 저혈압·빈맥이 있어 수액 소생과 탈수 평가가 중요하며, 단순히 정상 진찰이라는 이유로 경증으로 판단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000038 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 여행 후 단기 비혈성 설사에서 ETEC D의 의도 유지. 음성 O&P가 모든 병원체 배제라는 오설명 교정. 한국어에서 생략된 저혈압·빈맥·수액 사실 원문 복원.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000038
