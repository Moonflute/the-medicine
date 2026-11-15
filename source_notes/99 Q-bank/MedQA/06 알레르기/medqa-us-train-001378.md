---
type: qbank
schema_version: 1
id: medqa-us-train-001378
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b8cac51093546be24c99ea192795d6f0a03d71a5b869b0e100f2672f46296c24
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "Wiskott-Aldrich syndrome"
  - "immunodeficiency"
  - "thrombocytopenia"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAvV2lza290dC1BbGRyaWNoIOymne2bhOq1sCAoV2lza290dC1BbGRyaWNoIFN5bmRyb21lKS5tZA
question_type: diagnosis
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

7세 남아가 유아기부터 심한 습진과 반복 호흡기 감염이 있었고 최근 잇몸 출혈이 잦다. 혈소판 수가 현저히 낮고 말초도말에서 혈소판 크기가 작다. 가장 가능성 높은 진단은?

## 선택지

A. 위스콧–올드리치 증후군
B. 만성 육아종성 질환
C. 체디아크–히가시 증후군
D. 고IgE 증후군

## 해설


남아에서 습진·반복 감염에 작은 혈소판을 동반한 혈소판감소가 있으면 위스콧–올드리치 증후군을 의심한다. 단순 면역성 혈소판감소로 보지 말고 면역 평가와 WAS 유전자 검사를 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-001378`와 직접 대조했다.
- 판정: 습진·반복감염·혈소판감소의 Wiskott-Aldrich 증후군 A 유지. 해설에 섞인 한자 오탈자만 교정.
- 검수 범위: 내용·번역·해설 연결 검토(content-reviewed). 최신 치료·용량의 전면 근거 검증을 뜻하지 않는다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001378
- https://www.ncbi.nlm.nih.gov/books/NBK1178/
