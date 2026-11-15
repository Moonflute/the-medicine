---
type: qbank
schema_version: 1
id: medqa-us-train-000300
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2176c0dbe78cd8b28bb1410849c22f9d956d689942f80262f85b1a23385b2bdd
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "rheumatoid arthritis"
  - "conjunctivitis"
  - "septic arthritis"
  - "Lyme arthritis"
  - "reactive arthritis"
  - "syphilitic arthritis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
  - MTgg7JWI6rO8L-qysOyEseyXvCAoQ29uanVuY3Rpdml0aXMpLm1k
  - MDcg66WY66eI7Yuw7IqkL-uwmOydkeyEsSDqtIDsoIjsl7wgKFJlYWN0aXZlIEFydGhyaXRpcykubWQ
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
  - MDgg6rCQ7Je8L-udvOyehOuzkSAoTHltZSBEaXNlYXNlKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

17세 남성이 치료받지 않은 요도염을 앓은 지 3주 뒤 한쪽 무릎과 반대쪽 발목이 부었다. 결막염과 아킬레스건 부착부 압통도 있다. 항생제를 쓰기 전에 채취한 관절액과 혈액 배양에서 균이 자라지 않았고 결정도 없다. 가장 가능성 높은 진단은?

## 선택지

A. 화농성 관절염
B. 류마티스관절염
C. 반응성 관절염
D. 전신홍반루푸스

## 해설


요도염 이후에 시작된 하지 비대칭 관절염에 결막염과 부착부염이 동반되면 반응성 관절염을 고려한다. 지속되는 생식기 감염을 따로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-train-000300` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 요도염·결막염·비대칭 관절염·부착부염의 반응성관절염 C 유지. 미제시 혈액배양 음성을 추가하고 음성 Gram으로 감염 배제한 해설 교정.
- 범위: content-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000300
- https://www.nhs.uk/conditions/reactive-arthritis/
