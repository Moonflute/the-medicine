---
type: qbank
schema_version: 1
id: medqa-us-train-008950
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:18dbab6efdc9b0d4ec67ce5713b99f892a63879baa3c2d5a0926b3bf2c48bdc3
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "aplastic crisis"
  - "parvovirus B19"
  - "sickle cell disease"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

20세 남성이 2일 동안 지속된 발열과 기면으로 응급실에 내원했다. 간헐적으로 두근거림과 호흡곤란도 있었다. 천식과 겸상적혈구병이 있으며 알부테롤 흡입제, 하이드록시우레아, 엽산을 복용한다. 피곤해 보이고 체온 38.4°C(101.1°F), 맥박 122회/분, 호흡수 25회/분, 혈압 110/72mmHg이다. 결막이 창백하고 심장검사에서 중간 수축기 박출성 심잡음이 들린다. 혈색소 6.5g/dL, 백혈구 5,000/mm³, 혈소판 165,000/mm³, MCV 82μm³, 망상적혈구 0.2%이다. 다음 중 이러한 소견의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 적혈구막 단백질 기능 이상
B. 비장 격리 위기
C. 바이러스 감염
D. 약물 이상반응

## 해설


바이러스 전구증상 후 갑자기 악화된 빈혈과 매우 낮은 망상적혈구 수는 parvovirus B19에 의한 일시적 무형성 위기(C)를 시사한다. B19가 적혈구 전구세포를 감염시켜 적혈구 생산을 억제하는 것이 핵심이다. 평소 용혈 때문에 적혈구 수명이 짧은 SCD 환자에서는 생산 중단만으로도 심한 빈혈이 생긴다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008950 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: SCD에서 급격한 빈혈과 망상적혈구 0.2%는 B19 일시적 무형성 위기 C. 적혈구 파괴가 주기전이라는 설명을 생산 억제로 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008950
