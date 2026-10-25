---
type: qbank
schema_version: 1
id: medqa-us-train-003489
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0a1de71fe2836ed4b4919f5fb0ca2babc95fe6edd6830b1695799eeb3b4cf19c
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "ruptured abdominal aortic aneurysm"
  - "hemorrhagic shock"
  - "pulsatile abdominal mass"
  - "emergency laparotomy"
question_type: management
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uzteu2gCDrjIDrj5nrp6XrpZggKEFiZG9taW5hbCBBb3J0aWMgQW5ldXJ5c20pLm1k
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
difficulty: complex
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

69세 남성이 30분간 지속된 왼쪽 옆구리로 퍼지는 심한 복통으로 응급실에 왔다. 통증 시작 후 서있을 수 없었고 병원으로 오는 길에 두 차례 구토했다. 혈압은 82/56 mmHg, 맥박은 131회/분이었고 복부에서 압통이 있는 박동성 종괴가 만져졌다. 정맥 수액 소생을 시작했다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 복부 앙와위 및 기립 X선
B. 응급 개복수술
C. 농축 적혈구 수혈
D. 대장내시경

## 해설

쇼크·심한 복통·압통성 박동 종괴는 파열 AAA를 강하게 시사한다. 보기 중 긴급 출혈 조절 수술(B)을 지체하지 않는 것이 적합하며 혈액제제 소생도 병행한다. 실제 개복 또는 혈관내 치료, 초음파/CTA의 사용은 안정성과 시설·해부학적 조건에 따라 결정하며 불필요한 영상으로 출혈 조절을 지연해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 파열 AAA의 응급 수술 B 유지하되 모든 환자가 영상 없이 반드시 개복만 한다는 단정 교정.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng156/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003489
