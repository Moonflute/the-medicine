---
type: qbank
schema_version: 1
id: medqa-us-train-006475
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3f45bcd3502b0fd20348ec28ef5217cffe73d0087c7061e4ef8035ea556861c9
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "만성 신장질환 빈혈"
  - "에리트로포이에틴 치료"
  - "치료 관련 고혈압"
related_disease_slugs:
  - MDkg7ZiI7JWhL-unjOyEsSDsp4jtmZgg67mI7ZiIIChBbmVtaWEgb2YgQ2hyb25pYyBEaXNlYXNlKS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
curation_status: "revised"
curation_reason: "ESA 부작용은 유지하되 철 평가 없이 모든 CKD 빈혈에 즉시 투여한다는 인상을 방지."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

69세 혈액투석 환자가 피로를 호소한다. Hb 8.8 g/dL, 페리틴 70 ng/mL, 트랜스페린 포화도 14%다. 활동성 감염과 명백한 출혈 소견은 없고 혈역학적으로 안정적이다. 조혈자극제 시작을 검토할 때 우선 교정할 것은?

## 선택지

A. 정맥 철분으로 철 결핍을 교정한다
B. 철분과 무관하게 조혈자극제를 바로 고용량 투여한다
C. 헤모글로빈을 정상으로 맞추기 위해 반복 수혈한다
D. 철분 없이 엽산만 투여한다

## 해설

투석 환자에서 낮은 페리틴과 트랜스페린 포화도는 철 부족을 지지한다. 혈액투석 환자는 정맥 철이 선호되며, 철 부족 등 교정 가능한 원인과 빈혈 증상을 고려해 조혈자극제 사용을 결정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006475
- https://kdigo.org/guidelines/anemia-in-ckd/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: ESA 부작용은 유지하되 철 평가 없이 모든 CKD 빈혈에 즉시 투여한다는 인상을 방지.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://kdigo.org/wp-content/uploads/2026/01/KDIGO-2026-Anemia-in-CKD-Guideline.pdf
