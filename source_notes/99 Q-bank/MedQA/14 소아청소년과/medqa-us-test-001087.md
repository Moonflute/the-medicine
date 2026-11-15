---
type: qbank
schema_version: 1
id: medqa-us-test-001087
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:e7945ec0751695c46d57ab1ad94293dcaf0b8ef2b31727953081a00afbfccf2c
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "미숙아 뇌실내 출혈"
  - "신생아 경련"
  - "두개 초음파"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv66-47IiZ7JWEIOustO2YuO2doSAoQXBuZWEgb2YgUHJlbWF0dXJpdHkpLm1k
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

재태 29주에 태어난 생후 3일 미숙아에게 경련과 팽팽한 대천문이 나타났다. 호흡·순환 안정화와 경련 처치를 진행하고 있다. 뇌실내출혈을 확인할 첫 침상 영상은?

## 선택지

A. 경천문 두개 초음파
B. 조영증강 뇌 MRI
C. 뇌혈관조영술
D. 두개골 단순촬영

## 해설

대천문을 통한 초음파는 미숙아의 뇌실내출혈을 신속히 확인할 수 있다. 환아를 영상실로 옮기거나 방사선을 사용하지 않아도 되고, 소생보다 촬영을 우선하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: CT/MRI가 침습적이라 부적절하다는 오류 삭제. 미숙아 뇌실내출혈의 침상 경천문초음파 장점과 안정화 우선 명시. B 유지.
- https://cps.ca/en/documents/position/routine-imaging-of-preterm-neonatal-brain

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001087
- https://pubmed.ncbi.nlm.nih.gov/33106343/
