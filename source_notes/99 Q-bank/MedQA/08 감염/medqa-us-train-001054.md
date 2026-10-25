---
type: qbank
schema_version: 1
id: medqa-us-train-001054
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c5582ae365e818cef0e0599d6d5d6bf6a18e6c0e49869416c614d9e2c349bd1d
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Nocardiosis"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uFuOy5tOultOuUlOyVhOymnSAoTm9jYXJkaW9zaXMpLm1k
question_type: management
difficulty: complex
answer: C
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRXJ5dGhyb215Y2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

71세 남성이 2주간의 피로감과 혈담을 동반한 기침으로 내원하였다. 지난 한 달 동안 5.0kg의 체중 감소가 있었다. 고혈압과 제2형 당뇨병이 있다. 8개월 전 신장 이식을 받았다. 환자는 흡연하지 않는다. 현재 복용 중인 약물은 lisinopril, 인슐린, prednisone, mycophenolate mofetil이다. 체온은 38.9°C, 맥박은 88회/분, 혈압은 152/92 mmHg이다. 청진 시 우측 하엽에서 수포음(rhonchi)이 들린다. 왼쪽 팔뚝에 작은 궤양이 있다. 흉부 X-선 검사에서 우측 폐 종괴와 엽성 폐렴(lobar consolidation)이 보인다. Levofloxacin을 이용한 항생제 치료를 시작하였다. 3일 후 환자에게 발작이 발생하였고 왼손의 움직임 조절에 어려움을 겪는다. 뇌 MRI에서 주변부 고리 조영 증강(peripheral ring enhancement)을 보이는 실질 내 병변이 확인되었다. 기관지 내시경 및 기관지 폐포 세척술(bronchoalveolar lavage) 결과, 약하게 항산성(weakly acid-fast)을 띠며 가지를 치는 사상형(branching, filamentous)의 그람 양성 세균이 검출되었다. 가장 적절한 초기 약물 치료는 무엇인가?

## 선택지

A. Vancomycin
B. Piperacillin/tazobactam
C. Trimethoprim/sulfamethoxazole
D. Erythromycin

## 해설


이식 후 면역억제 상태에서 폐 병변, 피부 궤양과 뇌농양이 생기고 약한 항산성을 보이는 가지 모양 그람양성 세균이 확인되어 파종 nocardiosis가 시사된다. TMP-SMX는 핵심 약제로 보기 중 C가 적절하다. 다만 CNS 침범 또는 중증 파종감염의 실제 초기 치료는 감수성 평가와 함께 적어도 두 가지 활성 약제의 병합을 권고하므로 TMP-SMX 단독으로 충분하다고 해석하면 안 된다. 뇌 병변은 악성종양의 전이가 아니라 혈행성 감염이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001054 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CNS 침범 파종 Nocardia에 TMP-SMX 단독이 완결 치료라는 오해를 방지; 항산 염색·전이 표현 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://onlinelibrary.wiley.com/doi/abs/10.1111/ctr.13509

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001054
