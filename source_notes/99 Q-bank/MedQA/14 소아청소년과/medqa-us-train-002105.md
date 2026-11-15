---
type: qbank
schema_version: 1
id: medqa-us-train-002105
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c6c3a66916915cda7e58da2124ddedc357ddea04d4c054438dca9e16f386b7d6
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "trisomy 18"
  - "Edwards syndrome"
  - "chromosomal karyotyping"
  - "oligohydramnios sequence"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yWkeyImCDqs7zshozspp0gKE9saWdvaHlkcmFtbmlvcykubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7JeQ65Oc7JuM65OcIOymne2bhOq1sCAoRWR3YXJkcyBTeW5kcm9tZSkubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

남아 신생아에게 산전 양수과소증과 출생 뒤 양측 수신증, 두꺼운 방광벽이 확인됐다. 카테터로 감압한 뒤 호흡과 순환이 안정됐다. 후부요도판막을 확인할 검사는?

## 선택지

A. 배뇨중방광요도조영술
B. 정맥 신우조영술
C. 신장 도플러 초음파만 반복
D. 신장 동위원소 검사만 시행

## 해설

감압과 안정화 뒤 배뇨중방광요도조영술로 배뇨 시 후부요도 확장과 폐쇄 소견, 방광요관역류를 평가한다. 초음파만으로는 판막을 확진할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 양측 요로확장·양수과소 Potter 연쇄의 VCUG A 유지. Edwards·핵형검사로 잘못 연결한 해설 교체.
- https://uroweb.org/guidelines/paediatric-urology/chapter/congenital-lower-urinary-tract-obstruction

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002105
