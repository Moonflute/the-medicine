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
answer: A
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

임신 12주인 23세 초임부가 일주일 동안 발한 증가와 두근거림으로 내원했다. 며칠 전 여러 차례 구토를 했고 현재는 멎었지만 증상이 지속된다. 목은 커져 있지 않고 갑상선은 만져지지 않았다. 체중은 임신 전 54 kg에서 55 kg으로 증가했고 맥박 113회/분, 미세한 안정시 손떨림, TSH <0.1 mU/L, 총 T4 178 nmol/L, 유리 T4 31 pmol/L이다. 다음 중 적절한 처치는?

## 선택지

A. 수분을 충분히 공급하고 베타차단제 처방
B. 프로필티오우라실로 치료
C. 메티마졸 처방
D. 방사성 요오드 절제 권고

## 해설

12주 구토와 연관된 일시적 갑상선중독증, 갑상선종·안구병증 부재는 hCG 매개 임신성 일과성 갑상선중독증을 시사한다. 선택지 중 수분 공급과 필요시 단기간 베타차단제(A)가 적절하다. Graves와 구별해 추적하며, Graves의 현성 항진증에서는 항갑상선제가 필요할 수 있다. 베타차단제 장기 사용을 일률 권하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 모든 임신성 항진증에 항갑상선제를 쓰지 않는다는 일반화 수정; 갑상선 진찰 원문 복원.
- https://www.thyroid.org/hyperthyroidism-in-pregnancy/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005303
