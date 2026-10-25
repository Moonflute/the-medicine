---
type: qbank
schema_version: 1
id: medqa-us-train-003215
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:36d01e4aceed39311aaedf7e6dce5ceedfc06b4745ba4194bf196c407ed0f7b9
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute mesenteric ischemia"
  - "mesenteric artery embolism"
  - "pain out of proportion"
  - "CT angiography"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_quInshLEg7J6l6rCE66eJIO2XiO2YiCAoQWN1dGUgTWVzZW50ZXJpYyBJc2NoZW1pYSkubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

고혈압, 말초동맥질환, 편두통 병력이 있는 74세 여성이 2시간 동안 지속된 심한 복통으로 응급실에 왔다. 배꼽 주위의 날카로운 통증이 있고 최근 식후 간헐적 복부 불편감이 있었지만 비슷한 에피소드는 없었다. 발열, 오한, 오심, 구토, 설사는 없고 전날 저녁 정상적으로 배변했다. 체온 37.1°C, 맥박 110회/분, 혈압 140/80 mmHg, 호흡수 20회/분이며 복부는 부드럽고 팽창되지 않았지만 배꼽 주위에 미만성 압통이 있다. 혈청 젖산은 7.0 mmol/L이다. 다음 중 진단에서 가장 적절한 다음 단계는?

## 선택지

A. 복부 단순 방사선촬영
B. 탐색적 개복술
C. CT 혈관조영술
D. 복부 이중 초음파

## 해설


복통이 통증과 양상에서 ‘통증이 과도하게 심함’은 장간막 혈류 부족을 시사한다. 급성 장간막 허혈은 CT 혈관조영술로 진단이 확정된다. 따라서 다음 단계는 CT 혈관조영술이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 진찰에 비해 심한 복통·높은lactate·혈관 위험으로 급성 장간막허혈 의심; 지연 없는 CTA C.
- https://wjes.biomedcentral.com/counter/pdf/10.1186/s13017-022-00443-x

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003215
