---
type: qbank
schema_version: 1
id: medqa-us-train-000537
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5c62fe37da6cb6dd689229e87c6e15b0feaf3d3f2e12e555a39f5e05d6de70eb
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "septic arthritis"
  - "rheumatoid arthritis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
question_type: management
difficulty: complex
answer: A
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

50세 여성이 발열과 급성 무릎 관절염으로 왔다. 최근 이동성 관절통과 손목 힘줄집염이 있었으며 관절액에서 그람음성 쌍구균이 확인됐다. 임균성 관절염에 대한 경험적 핵심 항생제는?

## 선택지

A. 세프트리악손
B. 경구 니트로푸란토인
C. 경구 아목시실린 단독
D. 경구 아시클로버

## 해설


임균성 관절염에는 세프트리악손을 쓴다. 혈액·관절액 및 노출 부위의 임균 검사를 시행하고 클라미디아가 배제되지 않았으면 동시 치료를 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-000537`와 직접 대조했다.
- 판정: 만성 대칭성 MCP/PIP 관절염의 기저 RA와 새 임균성 관절염을 구별. D 유지하되 급성 감염만으로 이미 X선 미란이 필연적이라는 오류 제거.
- 검수 범위: 내용·번역·해설 연결 검토(content-reviewed). 최신 치료·용량의 전면 근거 검증을 뜻하지 않는다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000537
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10789534/
