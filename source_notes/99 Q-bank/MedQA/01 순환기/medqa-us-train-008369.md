---
type: qbank
schema_version: 1
id: medqa-us-train-008369
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:263881b1d662d4cc24fad5b1300ff31ef67dc4c8c5fad845a32f566bbb889977
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "ST-elevation myocardial infarction"
  - "prehospital aspirin"
  - "percutaneous coronary intervention"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL1NU67aE7KCIIOyDgeyKuSDsi6zqt7zqsr3sg4nspp0gKFNURU1JKSAoU1QtRWxldmF0aW9uIE15b2NhcmRpYWwgSW5mYXJjdGlvbikubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

협심증 병력이 있는 57세 남자가 좌측 팔로 방사되는 심한 작열성 흉골뒤 통증을 느끼기 시작했다. 설하 니트로글리세린을 5분 간격으로 두 번 복용했지만 호전되지 않아 구급차를 불렀다. 도착 시 혈압 85/50 mm Hg, 심박수 96회/분, 호흡수 19회/분, 체온 37.1℃, 실내 공기 산소포화도 89%이다. 산소와 정맥로를 확보하고 심전도에서 급성 심근경색 소견이 보인다. 적절한 병원 전 처치는?

## 선택지

A. 아스피린 81 mg 투여 후 PCI 센터로 이송
B. 병원 전 혈전용해 후 PCI 센터 여부와 관계없이 응급실 이송
C. 아스피린 325 mg 투여 후 PCI 센터로 이송
D. 니트로글리세린 투여 후 PCI 센터로 이송

## 해설

허혈성 흉통이 지속되는 ACS 의심 환자에서는 금기가 없으면 아스피린을 부하용량으로 투여하고 재관류가 가능한 체계로 신속히 이송한다. C의 325 mg은 권고 부하용량 162–325 mg 범위에 포함된다. 이는 이후 유지용량과 다르며, 혈압 85/50 mmHg에서 니트로글리세린을 더 투여하지 않는다. 누락된 ECG의 구체적인 경색 위치는 판독하지 않았다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 아스피린 급성 부하용량과 유지용량을 구별하고 저혈압에서 추가 질산염을 피함.
- https://www.ahajournals.org/hyp/doi/pdf/10.1161/CIR.0000000000001309

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008369
