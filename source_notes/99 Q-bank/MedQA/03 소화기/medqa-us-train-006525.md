---
type: qbank
schema_version: 1
id: medqa-us-train-006525
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:58165372f33f02658f1abf86cea3ab42f2f82b4d6f93c599ab278240f1c23676
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "식도정맥류 출혈"
  - "토혈"
  - "기도 보호를 위한 삽관"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_si53rj4Qg7KCV66el66WYIChFc29waGFnZWFsIFZhcmljZXMpLm1k
question_type: management
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

55세 남성이 한 시간 전 시작되었다가 가라앉은 토혈로 응급실에 내원했다. 간경변과 이전에 결찰한 식도정맥류 병력이 있다. 체온은 97.5°F(36.4°C), 혈압은 114/64 mmHg, 맥박은 분당 130회, 호흡수는 분당 12회, 산소포화도는 98%이다. 진찰 중 다시 구토하면서 심박수가 증가하고 혈압이 악화되었다. 의식 상태가 변하여 흉골을 자극해야 눈을 뜨고 팔을 굽히며 알아들을 수 없는 말을 중얼거린다. 다음 중 처치로 가장 적절한 다음 단계는?

## 선택지

A. 응급 수술
B. 기관내 삽관
C. 정맥 수액과 신선동결혈장
D. 혈액제제 수혈

## 해설

활동성 토혈과 심한 의식저하로 기도보호 능력이 떨어져 B의 기관삽관이 필요하다. 동시에 혈역학 소생·필요수혈·정맥류 약물/항생제·신속 내시경지혈을 준비한다. 모든 GI출혈에 예방삽관한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 대량토혈+의식저하의 기도보호 B는 유지하고 섭씨단위 오역 교정.
- https://www.esge.com/assets/downloads/pdfs/guidelines/2022_a-1939-4887.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006525
