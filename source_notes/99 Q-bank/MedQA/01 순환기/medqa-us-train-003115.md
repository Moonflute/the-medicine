---
type: qbank
schema_version: 1
id: medqa-us-train-003115
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2efc8cf8b935053eb022fa4fb06466eb21ab7c9e932aa01fba5b16c0209485aa
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "acute aortic dissection"
  - "widened mediastinum"
  - "transesophageal echocardiography"
  - "unstable patient imaging"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpSDrsJXrpqwgKEFvcnRpYyBEaXNzZWN0aW9uKS5tZA
question_type: investigation
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

43세 남성이 2시간 동안 지속된 심한 허리 통증으로 응급실에 왔다. 견갑골 사이를 찌르는 듯한 통증이 10점 만점에 9점이고 한 차례 구토했다. 고혈압과 제2형 당뇨병이 있고 18개월 동안 의사를 보지 않았다. 발한이 심하고 체온 37.3°C, 맥박 100회/분, 호흡수 20회/분, 혈압 210/130 mmHg이다. 시간·장소·사람에 대한 지남력이 없고 왼쪽 요골맥박이 감소되어 있다. 혈청 크레아티닌 3.9 mg/dL, 코카인 양성 소변독성검사, 심전도는 허혈 소견이 없으며 흉부 X선에서 종격동 확장이 보인다. 다음 중 가장 적절한 관리 단계는?

## 선택지

A. 가돌리늄 조영 MRA
B. 조영증강 CT 혈관조영술
C. 경식도 심초음파
D. 대동맥조영술

## 해설

격렬한 견갑간 통증·맥박 비대칭·종격동 확장으로 급성 대동맥박리를 강하게 의심한다. 의식장애와 신기능 저하가 있는 상황에서 신속히 시행 가능한 bedside TEE C는 합리적인 진단법이다. BP210/130 자체가 저혈압성 불안정을 의미하지는 않는다. CTA도 일반적으로 중요한 초기 검사이며 생명을 위협하는 박리에서 신기능 저하만으로 무조건 지연/배제하지 않고 검사 가용성·위험과 정보를 함께 판단한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 대동맥박리 의심의 TEE C는 유지. 고혈압 환자를 저혈압성 불안정으로 단정하고 CTA가 신기능 저하에 절대금기인 듯한 설명 수정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003115
