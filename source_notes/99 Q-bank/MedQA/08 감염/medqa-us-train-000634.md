---
type: qbank
schema_version: 1
id: medqa-us-train-000634
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f40a2bbefd1878e2ba3d23b3d835e8df69b3fb682ea2252460e02cced402903d
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "severe acute asthma exacerbation"
  - "fever"
  - "right lower lobe consolidation"
  - "Ventilator-associated pneumonia"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: mechanism
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

24세 여성이 중증 급성 천식 악화 관리로 중환자실에 입원 중이다. 환자는 현재 기관 내 삽관 및 진정 상태이며, 정맥 주사 스테로이드, 지속적 분무 베타 작용제, 그리고 호흡기 치료를 통한 항콜린성 요법을 받고 있다. 입원 2일째, 38.9°C(102.0°F)의 새로운 발열이 발생했다. 흉부 X-선 검사에서 우하엽 경화가 관찰된다. 혈액 배양 검사를 시행하였고, 경험적으로 정맥 주사 세페핌(cefepime)과 답토마이신(daptomycin) 투여를 시작했다. 입원 4일째에도 환자는 여전히 발열이 지속되며, 흉부 X-선 검사에서 우하엽 혼탁이 악화된 소견을 보인다. 이 환자에서 치료 실패의 가장 가능성 있는 원인은 무엇인가?

## 선택지

A. 신장에 의한 약물의 비정상적으로 빠른 제거
B. 간에 의한 약물의 비정상적으로 빠른 대사
C. 표적 조직 내 약물의 불활성화
D. 약물의 낮은 생체이용률

## 해설


중증 천식 악화 환자에서 폐렴이 발생했을 때, 베타‑락탐계 항생제는 폐 조직 내 베타‑락타마제에 의해 분해될 수 있다. 이는 약물이 목표 조직에서 비활성화되는 메커니즘으로 치료 실패를 초래한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000634
