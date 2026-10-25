---
type: qbank
schema_version: 1
id: medqa-us-train-001538
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c2992814fdf39bb531b3f5b3475b118c73e46f64bda88dc41e62708b62173b2a
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "anemia"
  - "iron deficiency anemia"
  - "reticulocyte count"
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
  - MDkg7ZiI7JWhL-yyoCDqsrDtlY0g67mI7ZiIIChJcm9uIERlZmljaWVuY3kgQW5lbWlhKS5tZA
question_type: investigation
difficulty: complex
answer: A
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Fc2NpdGFsb3ByYW0ubWQ
---

# MedQA US 임상문제

## 문제

55세 여성이 피로와 독감 유사 증상으로 내원했다. 5일 전 미열과 근육통으로 시작되어 호전되지 않았고 지난 4일 동안 오한, 인후통 및 콧물이 있었다. 유치원 교사이며 반 아이 몇 명도 비슷한 증상이 있었다. 에스시탈로프람으로 관리하는 우울증과 월경곤란증 병력이 있다. 지난 5개월 동안 전신 피로가 있었다. 체온은 38.5°C (101.3°F), 맥박은 99회/분, 혈압은 115/75 mm Hg, 호흡수는 22회/분이다. 점막이 창백하다. 검사에서 헤마토크릿 24.5%, 헤모글로빈 11.0 g/dL, 혈소판 215,000/mm3, MCV 82 fL, RDW 10.5%이다. 다음 중 가장 적절한 다음 진단검사는 무엇인가?

## 선택지

A. 망상적혈구 수
B. 혈청 엽산
C. 혈청 페리틴
D. 헤모글로빈 전기영동

## 해설


MCV82 fL의 빈혈에서 망상적혈구 수(A)는 골수의 생성 반응을 평가해 생성저하와 용혈/출혈을 구분하는 데 도움이 된다. 이것은 ferritin처럼 철 저장량을 직접 측정하는 검사가 아니다. 급성 바이러스 유사 증상과 만성 피로만으로 철결핍이나 parvovirus 골수억제를 확진하지 않는다. 원문 Hb11.0 g/dL와 Hct24.5%는 서로 비례하지 않으므로 CBC를 재확인하고 망상적혈구는 빈혈 정도를 고려해 해석한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001538 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 정구성 빈혈을 철결핍으로 확정하고 retic을 철저장검사로 설명한 오류를 교정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://medlineplus.gov/lab-tests/reticulocyte-count/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001538
