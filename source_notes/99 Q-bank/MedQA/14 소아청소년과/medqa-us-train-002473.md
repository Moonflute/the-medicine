---
type: qbank
schema_version: 1
id: medqa-us-train-002473
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8229eb828f87c1391038154dd9dcb41e20b61098bbd06a4dea264e4527ab7e84
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "laryngomalacia"
  - "infantile stridor"
  - "supraglottic collapse"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: A
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

6개월 영아의 내시경에서 후두연화증이 확인됐다. 수유할 때 청색증이 반복되고 체중 백분위수가 계속 떨어진다. 잠잘 때 무호흡도 관찰됐다. 다음 조치는?

## 선택지

A. 중증으로 판단해 소아 기도 전문팀에 신속히 의뢰하고 성문상부성형술 필요성을 평가한다
B. 산소포화도가 한 번 정상이면 수개월 뒤 예약만 한다
C. 엎드려 재우고 체중만 추적한다
D. 위산억제제를 먼저 수개월 사용하고 이후에 기도를 평가한다

## 해설

반복 청색증, 무호흡, 수유 곤란과 성장부진은 중증 후두연화증의 단서다. 호흡과 수유 안전을 평가하고 성문상부성형술 등 전문 치료를 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 자세에 따른 후두연화증 단서를 유지하되 사례의 엎드려 재우기를 안전한 수면 처방으로 오해하지 않도록 AAP 권고를 명시했다.
- https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022-Recommendations-for-Reducing-Infant-Deaths-in-the-Sleep-Environment

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002473
- https://pubmed.ncbi.nlm.nih.gov/27107728/
