---
type: qbank
schema_version: 1
id: medqa-us-train-003343
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c8f84f4fa23da478b3967ebc76685e427759221a805c0c56029411a9b9c780bf
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "tuberculous pleuritis"
  - "exudative pleural effusion"
  - "lymphocytic pleural fluid"
  - "RIPE therapy"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-qysO2VteyEsSDtnYnrp4nsl7wgKFR1YmVyY3Vsb3VzIFBsZXVyaXN5KS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRXRoYW1idXRvbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
  - ZHJ1ZzowOCDqsJDsl7wvUmlmYW1waW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

60세 남성이 국제 여행 후 호흡곤란, 기침, 발열로 내원했다. 취미로 닭장을 관리하며 증상은 며칠 전 시작되었고 양측 흉막삼출이 관찰되었다. 흉수는 삼출액이며 포도당 25 mg/dL로 낮고 림프구가 우세했다. 다음 중 가장 적절한 치료는?

## 선택지

A. 아지트로마이신과 세프트리악손
B. 아지트로마이신과 반코마이신
C. 푸로세미드
D. 리팜핀, 이소니아지드, 피라진아미드, 에탐부톨

## 해설


흉수 단백비0.8·LDH비0.75는 삼출액이고 림프구 우세·낮은 포도당은 결핵성 흉막염을 의심하게 하므로 선택지 중 D의 초기 다제 항결핵 요법이 출제의도에 가장 부합한다. 다만 이런 흉수는 악성종양 등에서도 가능하여 흉수/흉막의 미생물·조직 검사, ADA 등과 역학을 통합하고 약제 감수성에 맞춰 치료한다. 원문은 닭장을 취미로 관리한다고 했을 뿐 청소 직후 발병을 명시하지 않았다. 이 노출을 이유로 결핵을 확진하거나 다른 감염을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003343 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 닭장을 관리한다는 병력을 청소 직후 발병으로 바꾼 축약 오류 교정; 림프구성 저당 삼출의 TB D는 감별·검체 확인을 전제로 설명.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/tb/hcp/testing-diagnosis/clinical-and-laboratory-diagnosis.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003343
