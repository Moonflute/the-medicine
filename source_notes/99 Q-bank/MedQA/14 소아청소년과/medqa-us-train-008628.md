---
type: qbank
schema_version: 1
id: medqa-us-train-008628
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c7bb241af336a96d0240e3d70a3785f2aef423282935f66837412d7b94acfafd
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "infectious mononucleosis"
  - "Epstein-Barr virus"
  - "heterophile antibody"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KCE7Je87ISxIOuLqO2Vteq1rOymnSAoSW5mZWN0aW91cyBNb25vbnVjbGVvc2lzKS5tZA
  - MDgg6rCQ7Je8L-yXoeyKpO2DgOyduC3rsJQg67CU7J2065-s7IqkIOqwkOyXvCAoRUJWKSAoRXBzdGVpbi1CYXJyIFZpcnVzIEluZmVjdGlvbiAoRUJWKSkubWQ
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

16세 남성이 2개월 동안 지속된 발열, 비생산성 기침, 피로, 식욕부진, 인후통으로 어머니와 함께 내원했다. 고등학교의 다른 학생 몇 명도 비슷한 증상을 앓았다. 신체검사에서 구인두에 흰색 막이 있고 양측 경부 림프절이 커져 있으며 비장이 약간 커져 있다. 다음 중 이 상태를 진단할 가능성이 가장 높은 검사는 무엇인가?

## 선택지

A. 인후 배양
B. 소변 배양
C. 효소결합면역흡착검사
D. 모노스팟 검사

## 해설

인후염·경부 림프절병증·비장비대의 청소년에서는 전염성 단핵구증을 의심하며 보기의 Monospot(D)은 이종친화항체를 검출해 전형적 사례를 뒷받침할 수 있다. 그러나 EBV 특이 확진이나 가장 민감한 검사는 아니고 위양성·위음성이 있어, 의심이 지속되거나 확진이 필요하면 VCA IgM/IgG·EBNA 등 EBV 특이 혈청검사를 해석한다. CDC는 Monospot의 일반적 사용을 권하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 전염성 단핵구증 명칭·heterophile 용어 및 Monospot 최고 민감도 주장을 교정.
- https://www.cdc.gov/epstein-barr/php/laboratories/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008628
