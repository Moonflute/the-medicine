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
answer: B
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

생후 3일 된 남아가 경련으로 신생아 중환자실에 입원했다. 임신 31주에 제왕절개로 태어났고 출생체중은 1,400 g이었다. 전신 저혈압, 서맥, 저환기가 있으며 의식수준 저하, 자발운동 감소, 근긴장저하, 팽팽한 대천문, 청색증이 보였다. 다음 중 가장 적절한 처치는?

## 선택지

A. 전혈구검사
B. 두개 초음파
C. 두부 CT
D. 두부 MRI

## 해설

미숙아에게 생후 초기에 경련, 의식·근긴장 저하, 팽팽한 대천문과 심폐 불안정이 나타나면 뇌실내출혈 등 급성 뇌손상을 평가해야 한다. 기도·호흡·순환 안정화와 경련 처치를 병행하면서 침상에서 경천문 두개 초음파(B)를 시행할 수 있다. 초음파는 방사선 노출이나 불안정한 환자의 이동 없이 뇌실과 출혈을 확인할 수 있다. CT와 MRI 자체가 침습적 검사인 것은 아니며, MRI는 추가 뇌손상 평가에 유용할 수 있지만 이 상황의 첫 영상검사로는 초음파가 적합하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: CT/MRI가 침습적이라 부적절하다는 오류 삭제. 미숙아 뇌실내출혈의 침상 경천문초음파 장점과 안정화 우선 명시. B 유지.
- https://cps.ca/en/documents/position/routine-imaging-of-preterm-neonatal-brain

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001087
