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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRlbm9sb2wubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9Qcm9weWx0aGlvdXJhY2lsLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 10주인 여성이 빈맥, 체중 감소, 안구돌출로 내원했다. 유리 T4는 임신 주수 기준보다 뚜렷이 높고 TSH는 억제됐으며 TRAb가 양성이다. 항갑상샘제가 필요하다면 이 시기의 우선 약제는?

## 선택지

A. 메티마졸
B. 방사성 요오드
C. 레보티록신
D. 프로필티오우라실(PTU)

## 해설

임신 1삼분기에 치료가 필요한 그레이브스병에는 메티마졸 관련 태아 기형 위험을 고려해 PTU를 우선 쓴다. 이후 치료는 PTU 간독성 등을 고려해 조정하고, 방사성 요오드는 임신 중 사용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: PTU가 태반 통과하므로 안전하다는 역논리 수정.
- https://www.thyroid.org/hyperthyroidism-in-pregnancy/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005275
- https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=6959
