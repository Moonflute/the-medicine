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
explanation_status: "manual-reviewed"
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

항응고제를 복용하지 않는 심방세동 환자에게 갑자기 매우 심한 배꼽 주위 통증이 생겼다. 통증에 비해 배는 부드럽고 압통이 약하며 복막 자극은 없다. 젖산은 상승했고 혈압은 유지된다. 장간막 허혈이 의심될 때 즉시 시행할 검사는?

## 선택지

A. 복부 단순 X선
B. 복부 도플러 초음파
C. 복부 CT 혈관조영술
D. 하부위장관 내시경

## 해설


통증에 비해 가벼운 초기 복부 진찰 소견과 심방세동은 장간막 동맥 폐색의 단서다. 의심하면 CT 혈관조영으로 혈관 폐색과 장 손상 여부를 지체 없이 평가한다. 젖산이 정상이라고 초기 허혈이 배제되는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 진찰에 비해 심한 복통·높은lactate·혈관 위험으로 급성 장간막허혈 의심; 지연 없는 CTA C.
- https://wjes.biomedcentral.com/counter/pdf/10.1186/s13017-022-00443-x

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003215
- https://doi.org/10.1186/s13017-022-00443-x
