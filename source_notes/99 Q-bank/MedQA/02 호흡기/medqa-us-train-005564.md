---
type: qbank
schema_version: 1
id: medqa-us-train-005564
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bb825729ffbc98fade317d610e5a0403e931ed58448e28af63d7a473a642843b
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "소세포폐암"
  - "Kulchitsky 세포"
  - "부적절한 항이뇨호르몬 분비"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDshozshLjtj6zslZQgKFNtYWxsIENlbGwgQ2FyY2lub21hKS5tZA
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

56세 남자가 한 달 동안 빈뇨, 체중감소, 피로, 지속적인 기침과 객혈, 근육경련과 쇠약으로 내원했다. 혈청 나트륨 129 mEq/L, 칼륨 3.2 mEq/L이고 흉부 X선에서 중심부 결절과 폐문 비후가 보인다. 생검에서 가장 가능성 높은 조직학적 양상은?

## 선택지

A. 점액에 양성인 선세포
B. 각질진주를 동반한 편평세포
C. 다형성 거대세포
D. 과염색성 핵을 가진 Kulchitsky 세포

## 해설

중심부 폐결절과 폐문비후·체중감소·객혈·저Na는 소세포폐암을 시사하며 D의 신경내분비성 소세포/과염색핵이 적합하다. SIADH가 동반될 수 있지만 저Na 하나로 확진되는 것은 아니며 혈청/요삼투압·체액상태와 다른 원인을 확인해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 중심부 병변·저Na의 소세포암 D는 유지하되 저Na만으로 SIADH 확진한 해설 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005564
