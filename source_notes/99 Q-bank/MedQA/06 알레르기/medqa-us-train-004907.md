---
type: qbank
schema_version: 1
id: medqa-us-train-004907
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d54eaafc7a245e6d0e29a4ac3fb579893ad07ff57a87083d3e8f86fe36ba675e
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "기관지경련"
  - "환경 항원"
  - "천명"
  - "Allergic asthma"
related_disease_slugs: []
question_type: mechanism
difficulty: complex
answer: A
original_answer: D
answer_change_reason: "무의식·구토물 노출 직후 천명은 흡인을 지지하며 환경항원 노출 단서가 없다. 정상 초기 흉부사진으로 흡인을 배제한 원정답 D를 A로 변경. 임상 추론과 BTS 근거를 기록."
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

과거력이 알려지지 않은 27세 남자가 급성 중독 상태로 응급실에 이송되었다. 공원에서 구토물과 소변에 뒤덮인 채 의식을 잃고 발견되었다. 체온 37.2°C, 혈압 107/68 mmHg, 맥박 120회/분, 호흡수 13회/분, 산소포화도 95%이며 양쪽 폐야에 수포음 없이 천명음이 들린다. 비강 캐뉼라 산소와 정맥 수액을 시작했고 AST 200 U/L, ALT 100 U/L이다. 초기 흉부 X선은 정상이다. 이 환자의 폐 증상을 가장 잘 설명하는 것은?

## 선택지

A. 흡인 사건
B. 세균 감염
C. 탄력조직 파괴
D. 환경 항원에 의한 기도 과민반응

## 해설


급성 중독으로 의식을 잃고 구토물에 뒤덮여 발견된 점은 위 내용물 흡인의 강한 단서이다. 흡인에 의한 기도 자극·기관지경련은 천명으로 나타날 수 있으며 초기 흉부사진이 정상이라고 흡인을 배제할 수 없다. 특정 환경항원 노출이나 천식 병력이 제시되지 않아 D보다 흡인 사건(A)이 타당하다. 이는 제시된 임상 정보에 대한 검수 판단이다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-004907`와 직접 대조했다.
- 판정: 무의식·구토물 노출 직후 천명은 흡인을 지지하며 환경항원 노출 단서가 없다. 정상 초기 흉부사진으로 흡인을 배제한 원정답 D를 A로 변경. 임상 추론과 BTS 근거를 기록.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://thorax.bmj.com/content/78/Suppl_1/s3

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004907
