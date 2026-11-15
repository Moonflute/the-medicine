---
type: qbank
schema_version: 1
id: medqa-us-train-009046
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:29c46210409b17cda21969f6ab50768ff1a29e329bcf2220c1c70a5564391a64
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "achondroplasia"
  - "foramen magnum stenosis"
  - "hydrocephalus"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Jew6rOoIOustO2YleyEseymnSAoQWNob25kcm9wbGFzaWEpLm1k
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

연골무형성증이 있는 7개월 영아에게 새로 근력 저하와 양쪽 다리의 반사항진이 나타났다. 잠잘 때 호흡 정지도 관찰된다. 가장 시급한 영상 평가는?

## 선택지

A. 뇌와 두개경추 접합부의 MRI
B. 요추 단순 X선
C. 손목 X선을 이용한 골연령 측정
D. 대천문 초음파 단독

## 해설

신경 증상과 무호흡은 대후두공 협착에 의한 뇌줄기·상부 척수 압박의 경고 신호다. 두개경추 MRI와 전문 신경외과 평가가 시급하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 질환명 오역과 뇌실만 보는 접근을 교정. CT의 뼈 평가와 압박 의심 시 MRI 필요성을 명시.
- https://publications.aap.org/pediatrics/article/145/6/e20201010/76908/Health-Supervision-for-People-With-Achondroplasia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009046
- https://pubmed.ncbi.nlm.nih.gov/37501185/
- https://pubmed.ncbi.nlm.nih.gov/37674051/
