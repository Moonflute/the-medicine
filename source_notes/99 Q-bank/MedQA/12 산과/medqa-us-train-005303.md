---
type: qbank
schema_version: 1
id: medqa-us-train-005303
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:68045b34adab43e4d7c3eb5291ca82c870af1177e42cf110bdbc6e960dae44f7
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신성 일과성 갑상샘항진증"
  - "임신오조"
  - "탈수"
  - "Hyperthyroidism"
question_type: management
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVydGh5cm9pZGlzbSkubWQ
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
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRoaW1hem9sZS5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9Qcm9weWx0aGlvdXJhY2lsLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 11주 초임부가 심한 구토를 한 뒤 갑상샘 검사를 받았다. TSH는 억제됐고 유리 T4는 약간 높지만 TRAb는 음성이다. 갑상샘종·안구돌출은 없고 임신 전 갑상샘 병력도 없다. 가장 적절한 대응은?

## 선택지

A. 그레이브스병으로 보고 메티마졸을 바로 시작한다
B. 수분과 구토를 치료하고 항갑상샘제 없이 갑상샘 기능을 추적한다
C. 임신 중 방사성 요오드로 치료한다
D. 임신이 끝날 때까지 고용량 베타차단제를 계속한다

## 해설

임신 초반 구토와 동반된 갑상샘중독증에서 그레이브스병을 시사할 단서가 없으면 hCG에 의한 임신성 일시적 변화일 수 있다. 구토와 탈수를 치료하고 갑상샘 기능이 정상화되는지 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 모든 임신성 항진증에 항갑상선제를 쓰지 않는다는 일반화 수정; 갑상선 진찰 원문 복원.
- https://www.thyroid.org/hyperthyroidism-in-pregnancy/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005303
- https://doi.org/10.1177/10507256261445624
