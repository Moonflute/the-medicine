---
type: qbank
schema_version: 1
id: medqa-us-train-009084
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:21bf28a10bf090cfc2f67390263cc738557b73f8b773ca222338858aac31f293
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "Fanconi anemia"
  - "pancytopenia"
  - "café-au-lait lesions"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2MkOy9lOuLiCDruYjtmIggKEZhbmNvbmkgQW5lbWlhKS5tZA
question_type: investigation
difficulty: complex
answer: C
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
---

# MedQA US 임상문제

## 문제

9세 아이가 작은 키와 반복되는 점상출혈로 진료받는다. 짧은 엄지와 여러 색소 반점이 있고 대적혈구성 빈혈·호중구감소·혈소판감소가 있다. 판코니 빈혈을 확인하는 데 적절한 검사는?

## 선택지

A. 혈청 페리틴만 측정
B. 소변 포도당과 인만 측정
C. 디에폭시부탄 등으로 유발한 염색체 파손 검사
D. 직접항글로불린검사

## 해설


선천 기형과 여러 혈구 감소가 동반되면 유전성 골수부전을 고려한다. 판코니 빈혈은 염색체 파손 검사와 분자검사로 평가하며, 같은 이름의 근위세뇨관 장애와는 다른 질환이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009084 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 색소 이상·엄지 이상·성장저하·거대적혈구성 빈혈과 혈소판감소는 Fanconi 빈혈 B. 동반 근위세뇨관 장애를 Fanconi 빈혈의 정의나 보편 소견으로 혼동하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ncbi.nlm.nih.gov/books/NBK1401/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009084
