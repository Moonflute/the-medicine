---
type: qbank
schema_version: 1
id: medqa-us-train-002545
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a8ffeca0ca959d3c6ec2cfa83706ee7a9ccc88c1783b062c1effb674a8e95701
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Crohn disease"
  - "right colon involvement"
  - "transmural inflammation"
  - "inflammatory bowel disease"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sl7zspp3shLEg7J6l7KeI7ZmYIChJQkQpIChJbmZsYW1tYXRvcnkgQm93ZWwgRGlzZWFzZSkubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
question_type: diagnosis
difficulty: complex
answer: D
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

33세 여성이 4개월간 간헐적인 하복부 경련, 설사, 팽만, 경한 오심으로 내원했다. 5 kg 체중이 감소했고 배변 후에도 완전히 비워지지 않는 느낌이 있다. 고섬유질 식사를 하며 아버지는 아슈케나지 유대인이다. 오른쪽 아래배에 경미한 압통이 있고 대변 잠혈검사는 음성이다. 혈색소 10.5 g/dL, 백혈구 12,000/mm³, 혈소판 480,000/mm³, ESR 129 mm/시간이며 바륨관장검사에서 오른쪽 대장의 궤양과 협착이 보인다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 궤양성 대장염
B. 셀리악병
C. 장 카르시노이드 종양
D. 크론병

## 해설


우측 대장에 궤양·협착이 있고 전신 염증표지자(ESR)와 혈소판 증가가 동반된 경우, 전층성 염증과 장벽 침범이 특징인 크론병이 가장 가능성 높다. 이는 궤양성 대장염과 구분되는 특징이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 우측 대장의 궤양·협착, 체중감소·빈혈·염증표지자 상승은 Crohn D. 잠혈음성이 이를 배제하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002545
