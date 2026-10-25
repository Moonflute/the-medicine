---
type: qbank
schema_version: 1
id: medqa-us-train-009119
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d68923178f9624e747ea8e9ed386d025a886addf3411175447a6fc64fa36beb4
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "sickle cell disease"
  - "겸상적혈구병"
  - "pneumococcal vaccination"
question_type: prevention
related_disease_slugs:
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
difficulty: simple
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

4세 여아가 정기 검진을 위해 소아과에 내원했다. 지난해 손발가락염(dactylitis)으로 겸상적혈구병을 진단받았다. 하이드록시우레아를 시작한 후 통증성 발작이나 급성 흉부 증후군은 없었다. 이 환자에게 적절한 예방 조치는 무엇인가?

## 선택지

A. 비장절제술
B. 폐렴구균 백신
C. 비강 내 인플루엔자 생백신
D. 사람유두종바이러스(HPV) 백신

## 해설

겸상적혈구병은 기능적 무비장으로 침습성 폐렴구균 감염 위험이 높으므로 연령·기존 접종력에 맞는 폐렴구균 백신(B)이 필요하다. 현재 소아 접종에서는 PCV15/PCV20과 필요한 추가 위험군 접종을 일정에 맞춰 선택하며, PPSV23이 필요한 경우에도 반드시 5세 이후에만 시작하는 것은 아니다. 접종력을 확인해 보완한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 4세에게 5세 이후 다당체 접종만 설명한 오류를 현행 위험군 폐렴구균 접종으로 교정.
- https://www.cdc.gov/pneumococcal/hcp/vaccine-recommendations/risk-indications.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009119
