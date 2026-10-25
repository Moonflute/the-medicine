---
type: qbank
schema_version: 1
id: medqa-us-train-004889
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7c45b8918e100a043a7bfb5b931fdb52c83a505ad8691bb3d8ad4ade7790fb87
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "심인성 성장장애"
  - "성장부진"
  - "성장곡선"
question_type: diagnosis
related_disease_slugs: []
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

30개월 남아가 아버지가 사망한 약 1년 전부터 식욕이 나빠졌다며 추적 진료를 받으러 왔다. 구토, 음식 거부, 설사, 변비, 반복되는 기침과 감기, 천명, 빠른 호흡, 발열 또는 감염은 없다. 신체검사와 혈액검사, 혈청 단백, 간기능검사, 소변검사는 정상이다. 18개월 때 체중은 90백분위수, 키는 75백분위수였고 현재 성장곡선을 그려 심인성 성장장애를 의심했다. 다음 중 어떤 성장곡선 소견이 이를 뒷받침하는가?

## 선택지

A. 현재 성별 연령별 체중이 90~75백분위수 사이
B. 현재 성별 연령별 체중이 75~50백분위수 사이
C. 현재 성별 연령별 키가 90~75백분위수 사이
D. 현재 성별 키 대비 체중이 90~95백분위수 사이

## 해설

이전 체중이 연령별 90백분위수였으므로 현재 50~75백분위수 사이인 B가 제시된 선택지 중 가장 큰 체중 성장 둔화를 보여 준다. A는 더 작은 변화이고, C와 D는 체중 증가 둔화를 직접 뒷받침하지 않는다. 다만 B의 범위만으로 특정 성장부진 진단 기준을 모두 충족한다거나 심리사회적 원인이 확정되는 것은 아니다. 반복 측정과 성장속도, 식사·가족·발달·의학적 평가를 함께 해석해야 한다. 아버지 사망 이후 식욕 저하는 심리사회적 평가의 단서이지 단독 확진 근거가 아니다. 반응성관절염이나 성매개감염 검사는 이 사례와 무관하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 반응성관절염 오연결 해설 교체. B가 선택지 중 체중 증가 둔화를 가장 지지하지만 성장곡선만으로 심리사회적 원인 확정하지 않음을 명시.
- https://publications.aap.org/pediatrics/article/doi/10.1542/peds.2025-075764/206901/Clinical-Practice-Guideline-for-Diagnosis-and?searchresult=1

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004889
