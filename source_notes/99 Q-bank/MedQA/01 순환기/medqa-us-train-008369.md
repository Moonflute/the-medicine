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
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
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


STEMI 환자에게는 즉시 항혈소판 치료가 필요하며, 325 mg 아스피린이 급성 관상동맥 폐쇄에 대한 표준 용량이다. 고용량 아스피린 투여 후 PCI 가능한 시설로 이송하면 재관류가 신속히 이루어진다. 따라서 정답은 C이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008369
