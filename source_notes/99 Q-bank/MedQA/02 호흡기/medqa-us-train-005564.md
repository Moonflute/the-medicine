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

56세 남성이 기침, 객혈과 체중 감소로 내원했다. 45갑년 흡연력이 있고 흉부 CT에서 폐문 종괴가 보인다. 부종이나 탈수는 없고 혈청 나트륨 123 mEq/L, 혈청 삼투압 262 mOsm/kg, 소변 삼투압 460 mOsm/kg, 소변 나트륨 58 mEq/L이다. 콩팥·갑상샘·부신 기능은 정상이고 이뇨제를 복용하지 않는다. 저나트륨혈증에 가장 잘 맞는 설명은?

## 선택지

A. 나트륨 섭취 감소에 의한 저혈량성 저나트륨혈증
B. 요붕증에 의한 자유수 소실
C. 정상 콩팥의 수분 희석 반응을 동반한 일차성 다음증
D. 종양과 연관된 항이뇨호르몬 부적절 분비

## 해설

혈청 삼투압이 낮은데 소변이 부적절하게 농축돼 있고 체액량은 정상이다. 콩팥·갑상샘·부신 이상과 약제 등의 다른 원인이 없으면 항이뇨호르몬 부적절 분비증후군(SIADH)에 부합한다. 소세포폐암과 연관될 수 있지만 저나트륨혈증만으로 폐암의 조직형을 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 중심부 병변·저Na의 소세포암 D는 유지하되 저Na만으로 SIADH 확진한 해설 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005564
