---
type: qbank
schema_version: 1
id: medqa-us-validation-000295
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:b5a5a56f7a29e919675e32cf1826eb8994ebbfc0a7f51c8737240fcf7d217136
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "파르보바이러스 B19"
  - "바이러스성 관절염"
  - "대칭성 다발관절통"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
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
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

27세 여성이 여러 관절의 통증으로 응급실에 왔다. 어제 시작되어 악화되는 대칭성 관절통이 손목, 팔꿈치, 어깨에 있다. 주관적 발열과 피로도 있지만 다른 증상은 없다. 학교 교사이며 대체로 건강하다. 남성 2명과 성관계를 하고 콘돔은 가끔 사용한다. 활력징후와 검사실 수치는 정상이다. 중수지관절, 근위지간관절, 손목의 관절 경직과 통증이 있다. 이부프로펜을 처방받고 퇴원했으며 4주 후 증상이 호전되어 더 이상 약을 복용하지 않았다. 가장 가능성 높은 진단은?

## 선택지

A. 임균성 관절염
B. 파르보바이러스 B19 감염
C. 류마티스관절염
D. 일과성 활막염

## 해설


젊은 여성의 급성 대칭성 MCP·PIP·손목 관절통, 학교 노출과 수 주 내 자연호전은 parvovirus B19(B)에 부합한다. 성인에서는 전형적 소아 발진이 없을 수 있고 관절 증상은 수 주 이상 지속될 수도 있다. 만성 지속 관절염의 류마티스관절염이나 주로 단관절 화농성 양상인 임균성 관절염보다 이 경과가 맞는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000295 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 교사 노출·급성 대칭 소관절통과 자연호전은 B19 B. 본문에 없는 인후통을 덧붙이지 않고 호전 기간을 1–2주로 고정하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000295
