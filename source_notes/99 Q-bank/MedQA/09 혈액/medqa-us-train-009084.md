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
question_type: diagnosis
difficulty: complex
answer: B
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

9세 남아가 작은 키로 내원했다. 항상 성장곡선 약 35백분위수의 작은 키였으나 지난 1년 동안 같은 식사를 유지했는데도 곡선에서 더 떨어졌다. 저체중 출생력이 있다. 결막과 손발톱바닥이 창백하고 등에 과색소 및 저색소 반점이 여러 개 보인다. 새가슴, 대부분의 늑연골 접합부에서 뼈가 돌출된 소견, 짧은 엄지, 휜 다리, 하지 점상출혈이 있다. 혈색소 8.2g/dL, MCV 105μm³, 혈소판 35,000/mm³, 나트륨 131mEq/L, 칼륨 2.8mEq/L, 인 2.5mg/dL이다. 동맥혈가스 pH 7.30, PCO₂ 33mmHg, HCO₃⁻ 17mEq/L이고 소변 pH 5.0, 포도당 2+, 케톤 음성이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 다이아몬드-블랙판 빈혈
B. 판코니 빈혈
C. 제1형 신경섬유종증
D. 구루병

## 해설


선천성 엄지 이상, 색소 변화, 성장저하와 거대적혈구성 빈혈·혈소판감소는 Fanconi 빈혈(B)을 시사한다. 이는 DNA 복구 이상에 따른 유전성 골수부전 질환이다. 포도당뇨·저인산혈증·산증 등은 별도로 근위세뇨관 기능장애를 시사하지만, 같은 이름의 Fanconi 증후군과 Fanconi 빈혈은 동일 질환이 아니며 모든 Fanconi 빈혈 환자에게 이런 세뇨관 소견이 나타나는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009084 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 색소 이상·엄지 이상·성장저하·거대적혈구성 빈혈과 혈소판감소는 Fanconi 빈혈 B. 동반 근위세뇨관 장애를 Fanconi 빈혈의 정의나 보편 소견으로 혼동하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ncbi.nlm.nih.gov/books/NBK1401/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009084
