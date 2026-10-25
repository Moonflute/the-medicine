---
type: qbank
schema_version: 1
id: medqa-us-train-004977
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fa275ed68c02f3096a3ec0ff9d4957c10816c39db9929979db141434078cd6fe
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "셀리악병"
  - "글루텐 제한 식이"
  - "철결핍성 빈혈"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shYDrpqzslYXrs5EgKENlbGlhYyBEaXNlYXNlKS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45,X 증후군이 있는 24세 여자가 4개월 동안 설사, 복부팽만, 메스꺼움과 배변 후에도 지속되는 복부 불편감으로 내원했다. 6개월 동안 피로하고 일상적인 집안일을 할 수 없었다. 동남아시아 배낭여행을 다녀온 지 7개월 되었다. 빈혈과 소구성 적혈구, 낮은 페리틴, 양성 IgA 조직 트랜스글루타미나제 항체가 있다. 진단 확인을 위한 생검을 권유했지만 환자가 거부한다. 위장관 증상에 대한 다음 단계 치료는?

## 선택지

A. 메트로니다졸 치료
B. 유제품 회피
C. 정맥 면역글로불린 치료
D. 글루텐 제한 식이

## 해설

설사·철결핍성 빈혈·Turner증후군·양성 tTG는 셀리악병을 강하게 시사하고 D의 gluten-free diet가 치료이다. 다만 성인에서 항체 양성만으로 모든 경우 확진되는 것은 아니며 생검 거부 시 진단 불확실성을 설명한다. 식이를 먼저 제한하면 후속 혈청/조직검사 민감도가 낮아질 수 있음을 논의한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 양성 tTG와 생검거부 상황의 GFD D를 진단한계 설명과 연결.
- https://www.niddk.nih.gov/health-information/digestive-diseases/celiac-disease/diagnosis
- https://www.niddk.nih.gov/health-information/digestive-diseases/celiac-disease/treatment

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004977
