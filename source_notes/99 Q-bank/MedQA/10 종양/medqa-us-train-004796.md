---
type: qbank
schema_version: 1
id: medqa-us-train-004796
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a3e3050c400559eda48ab875a35004efcc674d7fc318cc7a1f04d93c68e1e1bd
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "BI-RADS 3"
  - "유방촬영술 추적검사"
  - "유방 병변"
related_disease_slugs: []
question_type: management
difficulty: complex
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
---

# MedQA US 임상문제

## 문제

51세 여성이 연례 건강검진을 받으러 왔다. 건강하고 특별한 걱정은 없다고 한다. 과거력으로 리튬, 리시노프릴과 메트포르민으로 관리 중인 양극성장애, 고혈압과 제2형 당뇨병이 있다. 아버지는 고혈압과 제2형 당뇨병이 있었고 67세에 폐암으로 사망했다. 활력징후와 신체검사는 정상이다. 유방촬영술 결과는 BI-RADS 3(아마도 양성)로 분류되었다. 관리에서 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 1년 후 유방촬영술 추적
B. 6개월 후 유방촬영술 추적
C. 생검
D. 치료

## 해설


BI-RADS 3는 악성 가능성이 낮은 probably benign 소견으로 통상 6개월 뒤 단기 추적 유방촬영을 권고하므로 B이다. 이를 CT 같은 단층촬영으로 바꾸어 설명하면 안 된다. 영상·임상 소견이 새롭게 의심스럽거나 변하면 생검 등으로 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004796 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: BI-RADS3의 6개월 유방촬영 추적 B 유지; 단층촬영으로 바꾼 검사명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/breast/screening/mammograms

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004796
