---
type: qbank
schema_version: 1
id: medqa-us-train-000367
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3759c1ff8f5d79ef68aa121d4b96facd3f97fb8237d82df2dd528ce330a3f24f
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "iron deficiency anemia"
question_type: management
related_disease_slugs:
  - MDkg7ZiI7JWhL-yyoCDqsrDtlY0g67mI7ZiIIChJcm9uIERlZmljaWVuY3kgQW5lbWlhKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

12개월 된 남아를 창백함 때문에 걱정하는 어머니가 데려왔습니다. 어머니는 환아가 원래 피부가 하얀 편이었으나 지난 한 달 동안 친척들이 환아가 더 창백해 보인다고 말했다고 합니다. 어머니는 환아가 쉽게 피로해하는 것 같지만 형과 잘 놀고 걷기 시작했다고 말합니다. 혈변이나 흑색변, 쉽게 멍이 드는 증상, 과도한 출혈은 없다고 합니다. 환아는 편식하는 편이지만 크래커와 전유(whole milk)를 좋아한다고 합니다. 신체 검진에서 결막의 창백함이 관찰됩니다. 좌측 하부 흉골연에서 가장 잘 들리는 2등급 수축기 박출성 심잡음이 있으며, 환아가 누워 있을 때 더 커집니다. 검사 결과는 다음과 같습니다: 백혈구 수: 6,500/mm^3 (정상 감별 계산), 혈색소: 6.4 g/dL, 혈소판 수: 300,000/mm^3, 평균 적혈구 용적(MCV): 71 µm^3, 망상적혈구 수: 2.0%. 혈청 철: 34 mcg/dL, 혈청 페리틴: 6 ng/mL (정상 범위 7~140 ng/mL), 총 철 결합능(TIBC): 565 mcg/dL (정상 범위 240~450 mcg/dL). 말초 혈액 도말 검사에서 소적혈구증, 저색소성, 경미한 적혈구 부동증이 관찰되며 호염기성 점무늬는 없습니다. 이 환아의 진단에 대한 다음 단계의 가장 적절한 치료는 무엇입니까?

## 선택지

A. 데페록사민(deferoxamine) 투여
B. 심장초음파
C. 우유 섭취 제한
D. 엽산 수치 측정

## 해설

낮은 페리틴·철, 높은 TIBC와 소구성 저색소 빈혈은 철결핍이다. 철분이 적은 식사를 대체하는 과도한 우유 섭취를 줄이는 C가 보기 중 맞지만 이것만으로 치료하지 않는다. Hb 6.4 g/dL의 중증 빈혈은 긴급 임상평가, 철 보충과 면밀한 추적이 필요하며 순환·심부전 증상에 따라 입원·수혈 여부를 판단한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 영양성 철결핍의 우유 제한 C 유지. Hb6.4의 중증 빈혈에서 식이조절만 우선이라는 위험한 해석 교정.
- https://www.rch.org.au/clinicalguide/guideline_index/Iron_deficiency/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000367
