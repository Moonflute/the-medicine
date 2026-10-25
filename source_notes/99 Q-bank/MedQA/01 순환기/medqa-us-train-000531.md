---
type: qbank
schema_version: 1
id: medqa-us-train-000531
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:be5b37f8ab3dc26780fdab54437c2b1a2fe477140542091914ec2c7e32d5c12f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "diabetes"
  - "hypertension"
  - "myocardial infarction"
  - "obesity"
  - "acute decompensated heart failure"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDsi6zrtoDsoIQgKEFjdXRlIEhlYXJ0IEZhaWx1cmUpLm1k
question_type: mechanism
difficulty: standard
answer: "D"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRnVyb3NlbWlkZS5tZA
medical_review_status: "content-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 중복으로 참인 약물 효과를 장기 신장 적응이라는 질문으로 명확화."
curation_status: "revised"
curation_reason: "중복으로 참인 약물 효과를 장기 신장 적응이라는 질문으로 명확화."
curation_reviewed_at: "2026-10-25"
wrong_notes_review_status: "reviewed"
curation_disposition: "selected"
---

# MedQA US 임상문제

## 문제

57세 남성이 가족과 저녁 식사를 하던 중 심한 호흡곤란이 생겨 응급실에 왔다. 당뇨병, 고혈압, 두 차례 심근경색과 비만이 있다. 양측 폐 수포음과 경정맥 팽창이 있으며 흉부 X선에서 심장 확대와 늑골횡격막각 둔화가 보인다. 급성 울혈에 대한 약물치료 2시간 후 증상은 크게 호전되었지만 심장 확대는 남아 있다. 이 상황에서 흔히 사용하는 루프 이뇨제를 만성적으로 반복 투여할 때 나타날 수 있는 신장 내 변화는?

## 선택지

A. 호흡중추 억제
B. 투여 직후의 정맥 확장과 전부하 감소
C. 심근 수축력과 후부하 증가
D. 원위 네프론의 나트륨 재흡수 증가 등 보상성 적응

## 해설

급성 울혈성 심부전에서 빠른 이뇨를 위해 흔히 사용하는 루프 이뇨제는 Na-K-2Cl 공동수송을 억제한다. 반복 투여하면 원위 네프론의 나트륨 재흡수 능력이 증가하는 적응이 생겨 이뇨 반응이 약해질 수 있다. 정맥 확장과 전부하 감소도 초기 효과이지만 질문은 만성 반복 투여에 따른 신장 적응을 묻는다. 이뇨 뒤 증상이 좋아져도 심장 확대가 곧바로 사라지는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 중복으로 참인 약물 효과를 장기 신장 적응이라는 질문으로 명확화.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000531

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
