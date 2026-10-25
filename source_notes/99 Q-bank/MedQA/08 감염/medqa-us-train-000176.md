---
type: qbank
schema_version: 1
id: medqa-us-train-000176
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:89735340bb85f600b9c51a46c5d9a4cb0e0e926c356b820dd0769fcd5f4679f3
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "tuberculosis"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOqysO2VtSAoUHVsbW9uYXJ5IFR1YmVyY3Vsb3NpcykubWQ
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

27세 남성이 첫 진료를 위해 일차 진료 의사를 방문했다. 그는 최근 교도소에서 출소했다. 환자는 취업을 앞두고 건강 검진을 원한다. 그는 최근 매우 피곤하고 기침이 난다고 말한다. 지난 3주 동안 약 15파운드(약 6.8kg)의 체중이 감소했다. 그는 이를 교도소에서의 정맥 주사 약물 사용 탓으로 돌린다. 체온은 99.5°F(37.5°C), 혈압은 127/68 mmHg, 맥박은 100회/분, 호흡수는 18회/분, 실내 공기에서의 산소 포화도는 98%이다. 환자는 적절한 치료를 시작했다. 다음 중 이 환자의 치료를 중단해야 하는 가장 가능성 높은 적응증은 무엇인가?

## 선택지

A. 간 효소 수치 상승
B. 고요산혈증
C. 말초 신경병증
D. 붉은색 체액 배설

## 해설


선지 중 간독성에 해당하는 간효소 상승(A)이 항결핵 간독성 약물 중단·재평가의 대표적 이유이다. 다만 모든 경미한 상승이 중단 적응증은 아니다. 보통 ALT가 간염 증상과 함께 정상상한의 3배 이상이거나 무증상으로 5배 이상이면 간독성 약제를 중단하고 평가한다. 부작용별 조치는 임상 상태에 따라 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000176 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 항결핵약 간독성 A 유지. 무증상 경미 효소상승도 모두 중단하라는 잘못된 해설을 증상·배수 기준과 재평가로 제한.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000176
