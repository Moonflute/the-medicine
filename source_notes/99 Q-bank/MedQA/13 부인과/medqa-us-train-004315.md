---
type: qbank
schema_version: 1
id: medqa-us-train-004315
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c9d3dde7ccbd6c717915512ad23818bc0eaaf40fdf7f22469f990ca95b38b633
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "HELLP 증후군"
  - "임신성 고혈압 질환"
  - "간 피막 신장"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L0hFTExQIOymne2bhOq1sCAoSEVMTFAgU3luZHJvbWUpLm1k
  - MTIg7IKw6rO8L-yehOyLoOyEseqzoO2YiOyVlSAoR2VzdGF0aW9uYWwgSHlwZXJ0ZW5zaW9uKS5tZA
difficulty: complex
answer: D
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

임신 30주에 HELLP 증후군으로 치료 중인 산모가 갑자기 우상복부와 오른쪽 어깨의 심한 통증을 호소한다. 혈압이 급격히 떨어지고 혈색소도 감소한다. 특히 의심할 합병증은?

## 선택지

A. 역류성 식도염
B. 급성 담도 산통
C. 임신성 간내담즙정체
D. 간피막하 혈종의 파열 및 복강내 출혈

## 해설

HELLP 환자에서 갑자기 심해지는 우상복부·어깨 통증과 쇼크, 급격한 빈혈은 간피막하 출혈 또는 파열의 경고 신호다. 소생과 긴급 영상·다학제 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: HELLP와 연관된 상복부 통증의 간 피막 신장 C 유지. 피막 신장을 HELLP 자체의 병리 정의로 둔 오류 교정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004315
- https://easlcampus.eu/sites/default/files/2023-07/EASL%20CPG%20management%20of%20liver%20diseases%20in%20pregnancy.pdf
