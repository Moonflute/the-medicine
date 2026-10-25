---
type: qbank
schema_version: 1
id: medqa-us-test-000953
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:4a6342193ef31f1d030e869c47b234895b93d53f2b01656a16f4b7dde39b3dae
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "셀리악병"
  - "이차성 유당불내증"
  - "글루텐 제한식"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Jyg64u5IOu2iOuCtOymnSAoTGFjdG9zZSBJbnRvbGVyYW5jZSkubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shYDrpqzslYXrs5EgKENlbGlhYyBEaXNlYXNlKS5tZA
question_type: management
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
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

한 달 동안 심한 설사와 복부팽만이 있던 34세 남성이 혈청검사와 십이지장 생검으로 셀리악병을 진단받았다. 중증 질환이나 복용약, 최근 여행력은 없고 활력징후와 진찰은 정상이었다. 퇴원하며 엄격한 글루텐 제한식을 교육받았다. 심한 설사와 복부팽만을 일시적으로 조절하기 위한 가장 적절한 권고는?

## 선택지

A. 모든 유제품을 피한다
B. 디페녹실레이트
C. 프레드니손
D. 대두 제품을 제한한다

## 해설

정답은 A이다. 활동성 celiac병의 소장 융모 손상으로 일시적인 lactase 결핍과 유당불내증이 동반될 수 있어, 심한 설사·복부팽만이 있을 때 일시적으로 유당을 제한하는 A가 제시된 선택지 중 적합하다. 장 점막이 회복되면 허용량을 재평가하며 평생 모든 유제품을 금지하는 뜻은 아니다. diphenoxylate는 효소 보충제가 아니라 장운동을 억제하는 지사제이고, 글루텐 제한식을 대신하지 못한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: diphenoxylate를 장내 효소 보충제라고 한 오류를 지사제로 교정. 일시적인 유당불내증과 평생 유제품 금지를 구별.
- https://www.niddk.nih.gov/health-information/digestive-diseases/celiac-disease/treatment

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000953
