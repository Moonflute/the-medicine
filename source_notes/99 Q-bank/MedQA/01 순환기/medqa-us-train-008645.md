---
type: qbank
schema_version: 1
id: medqa-us-train-008645
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b75c37060bad10e7723a9cf7e880998d9b56a1152d97c8bc3560681d8b24d23a
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "atrial fibrillation"
  - "rhythm control"
  - "flecainide"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
question_type: management
difficulty: simple
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1pb2Rhcm9uZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRmxlY2FpbmlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmVyYXBhbWlsLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 남성이 발작성 심방세동으로 두근거림을 반복해 동율동 유지 치료를 원한다. 현재 동율동이고 맥박은 72회/분이다. 심근경색이나 관상동맥질환 병력은 없고 유의한 구조적 심장질환이나 전도 이상도 없다. 이 환자에게 동율동 유지용으로 고려할 약은?

## 선택지

A. 디곡신
B. 플레카이니드
C. 베라파밀 단독
D. 아데노신 반복 투여

## 해설

유의한 구조적 심질환이나 이전 심근경색이 없으면 플레카이니드를 동율동 유지에 고려할 수 있다. 빠른 1:1 심방조동 전도를 막기 위한 방실결절 차단제 병용과 심전도 추적도 검토한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Cushing 검사 해설을 구조적 심질환 없는 발작성 AF의 리듬조절 해설로 교체. 원정답 B 유지, 오연결 덱사메타손 링크 제거 및 기존 서맥 주의 명시.
- https://www.jacc.org/doi/10.1016/j.jacc.2023.08.017

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008645
- ACC/AHA 심방세동 진료지침: https://professional.heart.org/en/science-news/2023-acc-aha-accp-hrs-guideline-for-the-diagnosis-and-management-of-atrial-fibrillation
