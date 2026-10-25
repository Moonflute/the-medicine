---
type: qbank
schema_version: 1
id: medqa-us-train-004497
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a4724edef574e06bf2fc5ac59abe3aa7b23d514e33911dcc9eba29a06080b761
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "C형 간염"
  - "정맥주사 약물 사용"
  - "만성 바이러스 간염"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: investigation
difficulty: simple
answer: B
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

60세 록 음악가가 6개월 동안 점점 피곤해져서 내원했다. 정맥주사 약물 사용과 알코올 남용의 병력이 있다. 상당히 피곤하지만 그 외에는 호소하는 증상이 없다. 신체검사에서 특이사항은 없다. 검사실 수치는 중등도로 상승한 간효소 외에는 정상이다. 다음 중 어떤 추가 검사를 먼저 시행해야 하는가?

## 선택지

A. A형 간염 바이러스 특이 IgM 항체
B. C형 간염 바이러스 RNA
C. D형 간염 바이러스 특이 IgG 항체
D. E형 간염 바이러스 특이 IgM 항체

## 해설


과거 주사약물 사용은 HCV 노출 위험으로, 제시된 선택지 중 현재 감염을 검출하는 HCV RNA B가 가장 적절하다. 일반 선별 알고리즘은 anti-HCV 후 양성이면 reflex RNA이며 최근 노출/면역저하 등에서는 RNA를 직접 사용한다. 음주는 간 손상을 악화시키지만 그 자체가 혈액매개 HCV 전파 경로는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004497 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 선택지 중 현재 HCV 감염 확인 RNA B 유지; 음주 자체가 HCV 전파 위험이라는 설명 및 모든 선별 첫 RNA라는 일반화 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/hepatitis-c/hcp/diagnosis-testing/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004497
