---
type: qbank
schema_version: 1
id: medqa-us-test-000110
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:1961412ec6f220b852466c86a18307f49835d00a7c6792d466eef8c659ef32fc
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "염증성 장질환"
  - "크론병"
  - "대변 백혈구"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sl7zspp3shLEg7J6l7KeI7ZmYIChJQkQpIChJbmZsYW1tYXRvcnkgQm93ZWwgRGlzZWFzZSkubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
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

28세 남성이 5주 동안 지속된 설사와 경련성 복통으로 내원했다. 하루 최대 4회 배변하고 때때로 변에 점액성 끈이 보이며 복부 팽만이 있다. 지난달 체중이 3.2kg 감소했고 발열, 기침, 혈변은 없다. 3주 전 하지에 통증성 발진이 생겼다가 저절로 호전되었다. 체온 37.3°C, 맥박 분당 85회, 혈압 115/77 mmHg이며 복부는 부드럽고 압통이 없다. 혈색소 11.9 g/dL, MCV 79 fL, 페리틴 106 ng/dL, 혈소판 410,000/mm³이고 나머지 혈액검사는 정상이다. 이 환자 상태와 가장 관련이 높은 소견은?

## 선택지

A. 혈청 VIP 증가
B. 대변 백혈구
C. 대장 흑색증
D. 정상 장점막

## 해설

정답은 B이다. 지속되는 점액성 설사, 체중 감소, 빈혈, 혈소판 증가 및 결절홍반을 시사하는 병력은 염증성 장질환에 합당하다. 장 점막 염증에서는 대변 백혈구가 관찰될 수 있어 제시된 선택지 중 B가 가장 적합하다. 다만 대변 백혈구는 민감도와 특이도가 제한적이며 음성이라고 IBD를 배제하거나 양성만으로 확진하지 않는다. VIP 증가는 분비성 설사, melanosis coli는 주로 안트라퀴논계 완하제 사용, 정상 점막은 기능성 질환과 더 관련된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: IBD를 지지하는 임상 단서와 대변 백혈구의 비특이성을 구분; 고감도 확진검사라는 해설 과장 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000110
