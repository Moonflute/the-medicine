---
type: qbank
schema_version: 1
id: medqa-us-validation-000976
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:f481b2ed25112aa9540f54d10f8f38ef7d2de54fb6f90f9c8d8b9ebc5c075e99
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "바이러스성 심근염"
  - "확장성 심근병증"
  - "좌심실 전반적 운동저하"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2ZleyepeyEsSDsi6zqt7zrs5Hspp0gKERpbGF0ZWQgQ2FyZGlvbXlvcGF0aHkpLm1k
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
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

23세 남성이 5일간 점점 악화되는 호흡곤란으로 응급실에 왔다. 흡기 시 악화되는 흉통이 간헐적으로 있고 최근 상기도 감염을 앓았다. 경정맥 팽창, 전 흉곽의 흡기 수포음, S3 분마음이 있으며 트로포닌 I가 상승했다. 흉부 X선에서 심장 음영 확대와 양측 폐혈관 음영 증가, 심전도에서 미만성 T파 역전이 보인다. 심초음파에서 가장 가능성 높은 소견은?

## 선택지

A. 흔들리는 심장과 좌측 심장방 압박
B. 승모판 협착과 좌심방 확대
C. 좌심실 확장과 전반적 운동저하
D. 승모판의 증식물

## 해설


전신성 심근염은 좌심실 확장과 전반적인 수축력 저하를 초래하므로, 심초음파에서 LV 확장·운동저하가 가장 흔한 소견이다. 따라서 정답은 C이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 상기도감염 뒤 심근효소 상승·S3·울혈과 심장 확대는 심근염 관련 전반적 수축장애·좌심실 확장 C에 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000976
