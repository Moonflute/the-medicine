---
type: qbank
schema_version: 1
id: medqa-us-train-000220
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6f83fb2b839d99852608f6d459daf3f416b6a5022a071fd8d2f701d6d0312766
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "C. difficile infection"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qxsOynk-uniSDqsrDsnqXsl7wgKFBzZXVkb21lbWJyYW5vdXMgQ29saXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmaXhpbWUubWQ
---

# MedQA US 임상문제

## 문제

67세 남성이 심한 수양성 설사와 함께 발열 및 복부 경련성 통증을 주소로 내원하였다. 환자는 호흡기 감염 치료를 위해 약 일주일간 세픽심(cefixime) 항생제 과정을 복용 중이었다. 진료실에서 측정한 맥박은 112회/분, 혈압은 100/66 mm Hg, 호흡수는 22회/분, 체온은 38.9°C였다. 구강 점막은 건조해 보였고 복부는 부드러우며 모호한 전반적인 압통이 있었다. 직장 수지 검사는 정상이었다. 검사실 검사 결과는 다음과 같다: 혈색소 11.1 g/dL, 헤마토크릿 33%, 총 백혈구 수 16,000/mm3, 혈청 젖산 0.9 mmol/L, 혈청 크레아티닌 1.1 mg/dL. 진단을 확진하기 위해 가장 적절한 것은 무엇인가?

## 선택지

A. 대변 내 C. difficile 독소 확인
B. 대장내시경
C. 복부 X-선
D. 복부 CT 스캔

## 해설


항생제 사용 후 급성 설사와 발열, 복부 불편감은 C. difficile 감염이 흔히 나타난다. 확진을 위해서는 대변에서 독소를 검출하는 것이 가장 민감하고 특이도 높은 검사이다. 따라서 대변 내 C. difficile 독소 확인이 정답이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000220
