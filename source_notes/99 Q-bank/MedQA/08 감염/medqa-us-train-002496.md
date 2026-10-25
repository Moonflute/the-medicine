---
type: qbank
schema_version: 1
id: medqa-us-train-002496
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8b308c8ec89eb2899ffb4999b1ebce3ac5c959129b424d8932fc33bc7c501062
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "tuberculin skin test"
  - "type IV hypersensitivity"
  - "delayed-type hypersensitivity"
  - "Tuberculosis"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOqysO2VtSAoUHVsbW9uYXJ5IFR1YmVyY3Vsb3NpcykubWQ
question_type: diagnosis
difficulty: standard
answer: C
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

37세 여성이 신규 직원 건강검진을 위해 직업건강 클리닉에 왔다. 미국 이민 전 의료기록은 제한적이고 현재 질환이나 중대한 과거력은 없다. 결핵 선별을 위해 왼쪽 팔 안쪽에 PPD를 주사했다. 약 36시간 후 주사 부위에 주변 홍반을 동반한 지름 15 mm의 경결이 생겼다. 다음 중 반응의 기전은?

## 선택지

A. 제1형 아나필락시스 과민반응
B. 제2형 세포독성 과민반응
C. 제4형 세포매개 지연성 과민반응
D. 제3형과 제4형 혼합 면역복합체 및 세포매개 과민반응

## 해설


PPD 항원에 감작된 T세포가 cytokine을 분비하고 단핵구·대식세포를 유도하여 국소 경결을 만드는 제IV형 지연 과민반응 C이다. 항체 매개 즉시반응이나 면역복합체 반응이 아니다. 본문의 36시간 반응 묘사는 기전을 묻는 단서이며, 결핵 피부검사의 표준 판독은 주사 후 48–72시간에 홍반이 아닌 경결의 크기를 측정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002496 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: PPD 반응의 T세포 지연형 IV형 C 유지;36시간 방문을 표준 판독시점으로 오해하지 않게 기전과 검사 판독을 구별.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/tb/hcp/testing-diagnosis/tuberculin-skin-test.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002496
