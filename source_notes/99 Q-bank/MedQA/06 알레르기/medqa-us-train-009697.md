---
type: qbank
schema_version: 1
id: medqa-us-train-009697
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7400c59fbd0d41d62a007def0291a23a965089773ffabc2a83273cbe5ab57759
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "chronic granulomatous disease"
  - "만성 육아종성 질환"
  - "dihydrorhodamine test"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv66eM7ISxIOycoeyVhOyiheyEsSDsp4jtmZggKENocm9uaWMgR3JhbnVsb21hdG91cyBEaXNlYXNlKS5tZA
question_type: investigation
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

1세 남아가 반복되는 피부·간 농양에 이어 침습성 아스페르길루스 폐렴을 앓았다. 호중구 수는 정상이다. 만성 육아종성 질환을 의심할 때 호중구 기능을 평가할 검사는?

## 선택지

A. 혈중 면역글로불린 정량만 시행
B. 디하이드로로다민 유세포분석
C. 호중구 CD18 발현 검사
D. 혈청 총 보체 활성도 검사

## 해설


만성 육아종성 질환에서는 호중구 수가 정상이더라도 산화 폭발이 저하된다. 디하이드로로다민 검사로 호중구의 산화 기능을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-009697`와 직접 대조했다.
- 판정: 반복 화농감염·Aspergillus와 CGD 산화폭발 평가 DHR 검사 B의 연결이 일치. 원문 대조; 감염 치료는 검토범위 밖.
- 검수 범위: 내용·번역·해설 연결 검토(content-reviewed). 최신 치료·용량의 전면 근거 검증을 뜻하지 않는다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009697
- https://www.ncbi.nlm.nih.gov/books/NBK99496/
