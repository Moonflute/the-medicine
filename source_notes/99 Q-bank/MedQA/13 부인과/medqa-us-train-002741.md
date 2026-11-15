---
type: qbank
schema_version: 1
id: medqa-us-train-002741
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:340753a521f6b62612d0a17dcddd1f737336da0a80cb76d6752bcbeed0a0e5c4
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "postdural puncture headache"
  - "epidural analgesia"
  - "postpartum headache"
  - "epidural blood patch"
question_type: management
related_disease_slugs: []
difficulty: standard
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

분만 중 경막천자가 확인된 산모가 이틀 뒤 앉으면 심해지고 누우면 호전되는 심한 두통을 호소한다. 발열·고혈압·신경 결손은 없고, 진통과 보존 치료에도 신생아를 돌보기 어렵다. 다음 처치는?

## 선택지

A. 마취통증의학과에서 경막외 혈액패치를 고려
B. 요추천자로 다시 뇌척수액을 배액
C. 예방적 항생제만 투여
D. 며칠 더 절대 침상 안정만 시행

## 해설

전형적인 경막천자 후 두통이 보존 치료에도 기능을 크게 제한하면 경막외 혈액패치를 고려한다. 비전형적인 두통이나 국소 신경 소견이 나타나면 다른 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: PDPH혈액패치적응증과다른산후두통·응고안전성평가보강.
- https://rapm.bmj.com/content/49/7/471.full

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002741
- https://pubmed.ncbi.nlm.nih.gov/37582578/
