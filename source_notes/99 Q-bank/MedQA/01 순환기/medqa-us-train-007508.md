---
type: qbank
schema_version: 1
id: medqa-us-train-007508
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ab9544fc79d9f9478398ffc12d787388f77a80029d609e52c3d74a85a17eecfb
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "급성 심근경색"
  - "PCI 전 약물치료"
  - "고강도 스타틴"
  - "아토르바스타틴"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
question_type: management
difficulty: complex
answer: B
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남성이 ST분절 상승 심근경색으로 응급 관상동맥중재술을 받았다. 아스피린과 P2Y₁₂ 억제제를 시작했다. 스타틴 금기나 불내성은 없고 LDL 콜레스테롤은 95 mg/dL이다. 재발 예방을 위해 이번 입원 중 추가할 치료는?

## 선택지

A. LDL 값이 190 mg/dL 이상일 때까지 지질저하제를 미룬다
B. 고강도 스타틴을 시작한다
C. 피브레이트 단독 치료를 시작한다
D. 니트로글리세린을 정기 복용해 심근경색 재발을 예방한다

## 해설

급성관상동맥증후군에서는 LDL 콜레스테롤이 심하게 높지 않아도 재발을 줄이기 위해 고강도 스타틴을 조기에 사용한다. 피브레이트나 질산염은 이 목적의 스타틴을 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ACS에 고강도 스타틴 B를 선택하되 저혈압에서 추가 질산염을 피해야 하는 이유를 보완.
- https://www.ahajournals.org/hyp/doi/pdf/10.1161/CIR.0000000000001309

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007508
- ACC/AHA 급성관상동맥증후군 진료지침(2025): https://www.ahajournals.org/doi/10.1161/CIR.0000000000001309
