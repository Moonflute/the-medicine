---
type: qbank
schema_version: 1
id: medqa-us-train-006345
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7b2bdc53ee3d830efe7174df3f07ccd9f85199bb0f3a26f7196f578f0d0ed4e2
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "만성질환 빈혈"
  - "철결핍성 빈혈 감별"
  - "정상적혈구성 빈혈"
related_disease_slugs:
  - MDkg7ZiI7JWhL-unjOyEsSDsp4jtmZgg67mI7ZiIIChBbmVtaWEgb2YgQ2hyb25pYyBEaXNlYXNlKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
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
---

# MedQA US 임상문제

## 문제

결핵 병력이 있는 42세 남성이 2개월 동안 지속된 피로감으로 내원했다. 혈청검사 결과는 다음과 같다.
백혈구 7,000 cells/mm³
혈색소 9.0 g/dL
헤마토크릿 25%
MCV 88 fL
혈소판 450,000 cells/mm³
비타민 B12 500 pg/mL(200~800)
엽산 17 ng/mL(2.5~20)
다음 중 이 환자의 빈혈 관리에서 가장 적절한 다음 단계는?

## 선택지

A. 철분 검사
B. 대장내시경
C. 골수 생검
D. 관찰

## 해설


MCV88fL은 정구성이며 결핵 병력이 있어 염증 관련 빈혈을 고려하되 철결핍도 초기/혼합형에서 정구성일 수 있다. 선택지 A의 ferritin·iron·TIBC/TSAT 등으로 구분한다. 정상 B12·엽산만으로 철결핍을 확진하거나 MCV를 소구성으로 바꾸지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006345 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: MCV88을 미세소구성이라고 한 오류 교정; 철결핍과 염증빈혈 구분 위한 iron studies A 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.niddk.nih.gov/health-information/blood-diseases/anemia-inflammation-chronic-disease

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006345
