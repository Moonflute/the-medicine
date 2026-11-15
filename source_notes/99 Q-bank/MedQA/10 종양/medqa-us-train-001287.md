---
type: qbank
schema_version: 1
id: medqa-us-train-001287
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7a2a0d4ea229c729e8c785c67ec49cf860a30afe68e6923d8ad5007fbc012d5e
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "multiple myeloma"
  - "hypogammaglobulinemia"
  - "hypercalcemia"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uLpOuwnOqzqOyImOyihSAoTU0pIChNdWx0aXBsZSBNeWVsb21hIChNTSkpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67KU7KCA6rCQ66eI6riA66Gc67aI66aw7ZiI7KadIChQYW5oeXBvZ2FtbWFnbG9idWxpbmVtaWEpLm1k
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: mechanism
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

71세 남성이 폐렴과 신우신염을 반복해서 앓았다. 최근 전신 뼈 통증이 있고 혈색소 9 g/dL, 혈청 칼슘 12.4 mg/dL, 크레아티닌 2.2 mg/dL다. 다발골수종으로 처음 진단됐고 아직 항암치료 전이다. 반복 감염을 가장 잘 설명하는 기전은?

## 선택지

A. 항암치료 전부터 생긴 중증 호중구감소
B. 정상 다클론 면역글로불린 생성 억제
C. 말기 신장병에 따른 요독성 면역 기능 저하
D. 최근 장기 스테로이드 사용에 따른 T세포 억제

## 해설


골수종 세포는 단클론 면역글로불린을 만들면서 정상 다클론 면역글로불린 생성을 억제한다. 치료 전에도 항체에 의한 세균 방어가 떨어질 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001287 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 골수종의 총면역글로불린 증가와 정상 다클론 면역억제를 구분하고 누락 영상을 보았다는 설명을 제거했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001287
- https://pubmed.ncbi.nlm.nih.gov/35114152/
