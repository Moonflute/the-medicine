---
type: qbank
schema_version: 1
id: medqa-us-train-006621
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:120ff07a60801ae463ee64e66a41541e0182f6af83fb0bb50992de26fcb16db3
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "재급식 증후군"
  - "영양 재개"
  - "저인산혈증"
question_type: prevention
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
difficulty: complex
answer: C
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

69세 남성이 여러 날 거의 먹지 못하다 영양 공급을 재개했다. 이틀 뒤 새 부종과 함께 인 1.1 mg/dL, 칼륨 2.4 mEq/L, 마그네슘 1.0 mg/dL가 확인됐다. 같은 합병증을 예방할 방법은?

## 선택지

A. 처음부터 필요 열량 전부를 공급한다
B. 정맥영양 대신 경장영양을 쓰면 감시는 필요 없다
C. 티아민과 전해질을 평가·보충하며 적은 열량부터 서서히 늘린다
D. 모든 환자에게 이뇨제를 예방 투여한다

## 해설

영양결핍 환자에게 급히 열량을 공급하면 인·칼륨·마그네슘이 떨어지는 재급식증후군이 생길 수 있다. 투여 경로와 관계없이 적은 열량부터 시작하고 티아민과 전해질을 관리한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 재급식 증후군에서 인슐린에 따른 세포 내 전해질 이동을 고인산 식품 때문이라고 설명한 오류를 교정한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg32/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006621
