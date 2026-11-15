---
type: qbank
schema_version: 1
id: medqa-us-train-007265
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2c812a1e2d3acf0464ea3e9d52e27da231a20aadb4de6e9059518c3cb4f59d81
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "폐경이행기"
  - "비만"
  - "말초 에스트로겐 생성"
  - "무월경"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-ustOyblOqyvSAoQW1lbm9ycmhlYSkubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 여성이 폐경 2년 뒤 심한 안면홍조로 잠을 못 잔다. 자궁은 있고 BMI는 34 kg/m²다. 설명되지 않는 출혈·유방암·혈전 병력은 없고 전신 호르몬 치료를 선택했다. 적절한 조합은?

## 선택지

A. 경피 에스트라디올과 자궁내막 보호용 프로게스토겐
B. 경구 에스트로겐 단독
C. 경피 에스트라디올 단독
D. 저용량 질 에스트로겐 단독

## 해설

자궁이 있으면 전신 에스트로겐에 프로게스토겐을 병용해 내막을 보호한다. 비만처럼 정맥혈전 위험을 높이는 요인이 있다면 경구보다 경피 경로를 우선 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 비만이 무월경 자체를 일으키는 이유가 아니라 다른 저에스트로겐 증상이 적은 이유를 묻는다는 점을 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007265
- https://www.e-jmm.org/DOIx.php?id=10.6118%2Fjmm.25103
