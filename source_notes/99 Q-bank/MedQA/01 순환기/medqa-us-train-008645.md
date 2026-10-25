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

고혈압과 발작성 심방세동이 있는 65세 남성이 최근 메토프롤롤로 심박수 조절을 시작한 뒤 추적 진료를 위해 심장내과에 내원했다. 심전도에서 심방 박동수는 분당 260회, 심실 박동수는 불규칙한 바탕선에서 분당 50회이다. 이전 방문의 심초음파에서 운동저하나 비대는 없었고 판막 기능도 보존되어 있었다. 음주는 하지 않으며 이전 검사에서 간기능 이상도 없었다. 이 환자의 리듬 조절에 가장 적절한 약물은 무엇인가?

## 선택지

A. 베라파밀
B. 플레카이니드
C. 프로카인아미드
D. 아미오다론

## 해설

문항은 심박수 조절이 아니라 발작성 심방세동의 리듬 조절 약제를 묻는다. 이전 심근경색이나 유의한 구조적 심질환이 없는 환자에서는 class Ic 약제인 플레카이니드(B)를 동율동 유지에 사용할 수 있다. 제시된 정상 심초음파는 이 선택을 지지한다. 베라파밀은 주로 방실결절 전도를 억제해 심박수를 조절하며, 아미오다론은 장기 독성 때문에 다른 적합한 선택이 있으면 보통 우선하지 않는다.

플레카이니드는 이전 심근경색, 유의한 구조적 심질환 또는 좌심실 수축기능 저하가 있으면 피한다. 1:1 심방조동 전도를 막기 위해 방실결절 차단제 병용을 고려하지만, 이 환자는 이미 심실박동수 50회/분의 서맥이 있으므로 실제 처방 전 증상, 심전도와 메토프롤롤 용량을 재평가해야 한다. 단순히 약물을 추가하라는 의미는 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Cushing 검사 해설을 구조적 심질환 없는 발작성 AF의 리듬조절 해설로 교체. 원정답 B 유지, 오연결 덱사메타손 링크 제거 및 기존 서맥 주의 명시.
- https://www.jacc.org/doi/10.1016/j.jacc.2023.08.017

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008645
