---
type: qbank
schema_version: 1
id: medqa-us-train-001358
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:817dc00c32e90807b8265f776fdf3f8d810e74f77376203ec5f1b3d03b2dc483
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "microinvasive cervical cancer"
  - "cervical carcinoma in pregnancy"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gOyVlCAoQ2VydmljYWwgQ2FuY2VyKS5tZA
difficulty: standard
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

임신 15주 산모의 자궁경부 표적생검에서 편평상피암의 기질 침윤이 확인됐으나 검체가 작아 범위를 정할 수 없다. 임신 유지를 원한다. 다음 조치는?

## 선택지

A. CIN과 똑같이 산후까지 추가 평가를 모두 미룬다
B. 부인종양·모체태아의학팀에서 침윤 범위와 병기를 평가하고 치료 시점을 상담한다
C. 분만 전에 결과를 확인할 필요가 없어 레이저 소작만 한다
D. 임신 주수와 병기를 평가하지 않고 모두 즉시 임신을 종료한다

## 해설

조직에서 침윤이 확인되면 임신 중 CIN과 달리 전문팀의 적시 병기 평가가 필요하다. 임신 주수, 침윤 범위와 환자의 선호에 따라 추가 조직 확인, 치료 및 분만 시점을 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 생검깊이만으로 완전절제·병기를 확정한 해설 교정.
- https://www.asccp.org/wp-content/uploads/2025/09/ASCCP_Management-of-Abnormal-Cervical-Cancer-Screening-Tests-in-Pregnancy.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001358
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10247855/
