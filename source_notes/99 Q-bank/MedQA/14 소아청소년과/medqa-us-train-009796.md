---
type: qbank
schema_version: 1
id: medqa-us-train-009796
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e2f3a7874433de0c034e7f0ef83f0cda4c295d4c04a0d2aa397797e4f09f17ce
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "연쇄상구균 인두염"
  - "편도 삼출"
  - "신속 항원 검사"
  - "Streptococcal pharyngitis"
question_type: investigation
related_disease_slugs:
  - MDgg6rCQ7Je8L-yCrOyKrOyVjOq3oCDsnbjrkZDsl7wgKFN0cmVwdG9jb2NjYWwgUGhhcnluZ2l0aXMpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

7세 남아가 인후통 평가를 위해 소아과에 내원했다. 인후통은 4일 전에 시작되어 점점 악화되었다. 주관적 발열, 삼킬 때 통증, 기침, 피로가 동반된다. 환자는 기침이나 콧물은 없다고 한다. 활력징후는 체온 38.6°C, 심박수 분당 88회, 혈압 115/67 mmHg, 호흡수 분당 14회, 산소포화도 99%이다. 진찰에서 화농성 편도 삼출물이 보이나 경부 림프절병증은 없다. 다음 중 이 환자에게 가장 적절한 처치는?

## 선택지

A. 10일간 페니실린 처방
B. 증상 완화를 위해 아세트아미노펜 권고
C. 아시클로버 처방
D. 신속 항원 검출검사 시행

## 해설

발열·인후통·편도 삼출이 있어 GAS를 의심할 때 신속 항원검사(D)가 적절하며 소아에서 음성이면 필요한 인두 배양으로 확인한다. 다만 원문은 기침을 동반증상으로 쓰면서 다음 문장에서 부인하여 모순이 있다. 이를 임의로 정하지 않고 임상 확인이 필요함을 남기며, 뚜렷한 바이러스성 특징이 확인되면 검사 적응증도 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원문 자체의 기침 있음/없음 모순을 표시하고 검사 전 항생제 확정 대신 GAS 확인 원칙 유지.
- https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/scarlet-fever.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009796
