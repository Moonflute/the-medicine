---
type: qbank
schema_version: 1
id: medqa-us-test-000886
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:4424bb15c02909a5cdf000d54faca425376f7db464cf1204f1f5e01d89d3f69e
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "디히드로에르고타민 독성"
  - "약물 유발 혈관경련"
  - "국소 신경학적 결손"
  - "Ergotamine toxicity"
question_type: mechanism
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_snbzqs7zshLEg7ZeI7ZiIIOuwnOyekSAoVHJhbnNpZW50IGlzY2hlbWljIGF0dGFjaykubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

환자가 심한 두통으로 응급실에 왔다. 럭비 연습 후 1시간 전에 통증이 시작되었다. 평소 심한 두통에 특별한 약을 복용하지만 이번에는 두 번 복용해도 호전이 없었다. 기억나는 현재 약물은 수마트립탄과 나프록센이다. 최근 공황발작과 자살 시도로 여러 번 입원했다. 체온 99.2°F(37.3°C), 혈압 129/65 mmHg, 맥박 90회/분, 호흡 15회/분, 산소포화도 98%였다. 디히드로에르고타민, 정맥 수액, 100% 산소를 투여했지만 2시간 후 말이 어눌해지고 왼쪽 입이 처졌으며 왼쪽 상지 근력은 2/5였다. 두부 CT를 시행할 예정이다. 현재 증상의 가장 가능성 높은 원인은?

## 선택지

A. 출혈성 뇌졸중
B. 혈전으로 인한 허혈성 뇌졸중
C. 약물 반응
D. 심인성 증상

## 해설

정답은 C, 약물 반응이다. 수마트립탄을 복용한 뒤 디히드로에르고타민을 투여하면 혈관수축 효과가 중첩되어 혈관연축·허혈 위험이 증가한다. 두 약은 서로 24시간 이내 병용이 금기이다. 핵심은 수마트립탄–에르고트 상호작용이며, 나프록센을 같은 기전의 혈관수축제로 설명해서는 안 된다. 새로 생긴 국소 신경결손은 실제 뇌졸중 응급 평가가 필요하고, 약물 반응이라는 추정만으로 영상이나 치료를 지연해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 나프록센을 triptan 같은 혈관수축제로 분류한 오류 수정. 수마트립탄 직후 dihydroergotamine 병용 금기와 혈관연축 위험을 실제 원인으로 설명. C 유지.
- 공식/학회 근거: https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/020148s026lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000886
