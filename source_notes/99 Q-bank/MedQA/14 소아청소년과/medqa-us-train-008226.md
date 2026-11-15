---
type: qbank
schema_version: 1
id: medqa-us-train-008226
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4eea3945a67760093d40257c9133afb08a1e6e3b4354dc7bae4a102c4b5bb921
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "neonatal respiratory distress syndrome"
  - "surfactant deficiency"
  - "gestational diabetes"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Zi47Z2h6rOk656AIOymne2bhOq1sCAoUmVzcGlyYXRvcnkgRGlzdHJlc3MgU3luZHJvbWUpLm1k
  - MTIg7IKw6rO8L-yehOyLoOyEsSDri7nrh6jrs5EgKEdlc3RhdGlvbmFsIERpYWJldGVzIE1lbGxpdHVzKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

진통 없이 계획 제왕절개로 태어난 재태 38주 신생아가 출생 직후 빠르게 호흡했다. 흉부 X선에서 양쪽 폐문 주위 선상 음영과 엽간열 액체가 보인다. 소량의 산소만 필요했고 이틀 안에 완전히 호전됐다. 진단은?

## 선택지

A. 신생아 호흡곤란증후군
B. 신생아 일과성 빈호흡
C. 태변흡인증후군
D. 선천성 횡격막 탈장

## 해설


제왕절개 뒤 폐액 흡수가 늦어지면 일과성 빈호흡이 생길 수 있다. 폐문 주위 선상 음영과 엽간열 액체, 짧은 시간 내 호전이 단서다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008226
- https://publications.aap.org/neoreviews/article/18/3/e141/88456/Transient-Tachypnea-of-the-Newborn
