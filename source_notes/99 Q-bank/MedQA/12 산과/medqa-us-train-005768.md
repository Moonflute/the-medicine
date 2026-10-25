---
type: qbank
schema_version: 1
id: medqa-us-train-005768
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7cf44697c43966d40eef6b2845029876a1880688e90abf40f54c20e0560d7e75
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "황산마그네슘 독성"
  - "자간증 치료"
  - "호흡억제"
  - "Magnesium sulfate toxicity"
question_type: management
related_disease_slugs: []
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGFiZXRhbG9sLm1k
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTWFnbmVzaXVtU3VsZmF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 G1P0 여성이 3분마다 발생하는 규칙적이고 통증이 있는 자궁수축으로 응급실에 왔다. 집에서 저녁을 준비하던 중 다리 사이로 맑은 액체가 한꺼번에 흘러내린 뒤 통증성 수축이 시작되었다. 비만 병력이 있으며 산과 추적관리는 받지 않았지만 임신 말기에 복통과 두통이 자주 있었다고 한다. 체온은 99.5°F(37.5°C), 혈압은 187/128 mmHg, 맥박은 분당 110회, 호흡수는 분당 17회, 실내 공기에서 산소포화도는 98%이다. 황산마그네슘과 라베타롤을 시작했고 2시간 후 질식분만했다. 분만실에서 환자는 현저히 졸려 하며 호흡수는 분당 6회이다. 최소한의 반응만 보이고 저환기가 있으며 심부건반사가 소실되고 상·하지 근력은 3/5이다. 다음 중 관리의 다음 최선 단계는 무엇인가?

## 선택지

A. 두부 CT
B. 현재 약물 주입 중단
C. 잔류 태아 조직 제거
D. 초음파

## 해설

황산마그네슘 투여 후 심부건반사 소실, 근력저하, 호흡수 6회는 마그네슘 독성을 강하게 시사한다. 즉시 주입을 중단(B)하면서 기도·환기를 보조하고 정맥 칼슘을 투여하며 Mg·신기능을 확인한다. 주입 중단만 하고 심한 호흡억제를 관찰해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 마그네슘 중독에서 약물 중단 외 필수 호흡지지·칼슘 해독 보강.
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2018/019316s024lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005768
