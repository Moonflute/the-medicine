---
type: qbank
schema_version: 1
id: medqa-us-validation-000134
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:1d8b294caf583a6fde1d255ce2f849a34b17d0622486e6cefa734de547cbd540
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "철결핍성 빈혈"
  - "자궁근종 출혈"
  - "철분 보충"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
  - MTMg67aA7J246rO8L-yekOq2geq3vOyihSAoVXRlcmluZSBGaWJyb2lkcykubWQ
question_type: management
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

32세 여성이 전신 피로로 진료를 받으러 왔다. 최근 비건 식단을 시작했고 쉽게 피로하며 자궁근종 병력이 있다. 혈색소 10g/dL, MCV 78µm³, ferritin 10(영어 원문 단위 mg/mL로 기재되어 확인 필요), TIBC 620µg/dL이다. 가장 적절한 다음 처치는?

## 선택지

A. 비타민 B9
B. 비타민 B12
C. 철분
D. 우울증 평가

## 해설


소구성 빈혈과 높은 TIBC, 식이 및 자궁근종 병력을 고려하면 선택지 중 철분 보충(C)이 적절하다. 최근 비건 식단만으로 원인을 확정하지 말고 월경 출혈 등 원인도 평가한다. 영어 원문의 ferritin은 10mg/mL라는 부적절한 단위로 기재되어 있어 통상 단위의 낮은 ferritin으로 임의 확정할 수 없다. 철 상태 수치·단위를 확인하며 반응을 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000134 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 소구성·높은 TIBC의 철결핍 치료 iron C 유지. 한국어에서 자궁근종 병력을 누락하고 철결핍 확정으로 과장한 부분 복원. 영어 ferritin10mg/mL의 부적절 단위는 임의 ng/mL 치환하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://gastro.org/clinical-guidance/management-of-iron-deficiency-anemia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000134
