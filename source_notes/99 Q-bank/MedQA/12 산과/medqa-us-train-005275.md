---
type: qbank
schema_version: 1
id: medqa-us-train-005275
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:81dbfcaf1218de14d87a70fc336c37a7a4ae138825c49625879d4b086878cb80
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "그레이브스병"
  - "임신 초기 갑상샘항진증"
  - "프로필티오우라실"
question_type: management
related_disease_slugs:
  - MDQg64K067aE67mEL-q3uOugiOydtOu4jOyKpOuzkSAoR3JhdmVzJyBEaXNlYXNlKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRlbm9sb2wubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9Qcm9weWx0aGlvdXJhY2lsLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 10주인 21세 초임부가 3주 동안 진행하는 피로와 임신 후 3.2 kg 체중 감소, 식욕 증가, 불안, 불면으로 내원했다. 맥박 120회/분, 혈압 150/70 mmHg, 안구돌출, 단단하고 미만성으로 커진 갑상샘, 손의 미세한 안정시 떨림, TSH 0.1 μU/mL가 있다. 다음 중 가장 적절한 처치는?

## 선택지

A. 루골 요오드
B. 갑상샘절제술
C. 프로필티오우라실
D. 아테놀롤

## 해설

안구돌출·미만성 갑상선종·체중감소와 빈맥은 Graves 갑상선항진증을 시사한다. 유리 T4/T3와 TRAb 등으로 평가하고, 임신 1기 약물치료가 필요하면 메티마졸 태아병 위험을 고려해 PTU(C)를 선호한다. PTU도 태반을 통과하고 간독성·태아 갑상선억제 위험이 있어 최소 유효 용량으로 감시한다. 베타차단제는 필요한 경우 단기 증상 조절용이며 원인 치료를 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: PTU가 태반 통과하므로 안전하다는 역논리 수정.
- https://www.thyroid.org/hyperthyroidism-in-pregnancy/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005275
