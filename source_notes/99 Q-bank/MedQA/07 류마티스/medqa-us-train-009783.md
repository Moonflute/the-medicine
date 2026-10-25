---
type: qbank
schema_version: 1
id: medqa-us-train-009783
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ac5a7e7f73cdf2142bcd12cfe76251063653695f81c60efb6ca1758354b7ef18
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "베체트병"
  - "구강 궤양"
  - "생식기 궤양"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-uyoOyytO2KuOuzkSAoQmVow6dldCdzIERpc2Vhc2UpLm1k
question_type: diagnosis
difficulty: standard
answer: C
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
---

# MedQA US 임상문제

## 문제

28세 남성이 지난 1년 동안 다섯 차례 발생한 통증성 구강 궤양으로 내원했다. 이 기간에 통증성 생식기 궤양도 두 차례 생겼지만 치료 없이 치유되었다. 전신적인 관절통, 권태감, 미열이 자주 있다고 한다. 중대한 질환의 개인력이나 가족력은 없다. 4년 전 가족과 함께 시리아에서 미국으로 이주했다. 한 여성 파트너와 성관계를 하고 콘돔은 사용하지 않는다. 복용 약물은 없다. 체온 38°C, 맥박 분당 90회, 혈압 130/80 mmHg이다. 진찰에서 구강 협점막에 통증성 궤양 세 개가 보인다. 골반 진찰에서 외부 생식기에 치유 중인 흉터가 여러 개 보인다. 나머지 진찰은 정상이다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 연성하감
B. 단순포진바이러스 감염
C. 베체트병
D. 전신홍반루푸스

## 해설


반복적인 통증성 구강·생식기궤양, 생식기 흉터와 전신염증 증상은 Behçet disease C를 가장 지지한다. 고전적으로 구강궤양·생식기궤양·안구염증이 삼징으로 알려져 있지만 모든 요소가 동시에 있어야 하는 것은 아니다. 이 환자에게 눈염증이 관찰되었다고 덧붙이지 않고 감염 등 감별을 포함한 임상 기준으로 판단한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009783 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 구강·생식기궤양과 전신증상을 전형삼징이라 부른 부분을 실제 고전삼징(눈염증)과 구분.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009783
