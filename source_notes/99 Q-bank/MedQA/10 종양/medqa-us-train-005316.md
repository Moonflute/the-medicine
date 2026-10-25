---
type: qbank
schema_version: 1
id: medqa-us-train-005316
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:798cfbb5c7dbfb1abfd6e17a45168b62de9e333723dec788c0361c185fe70273
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "항이뇨호르몬 부적절 분비 증후군"
  - "소세포폐암"
  - "저나트륨혈증"
related_disease_slugs:
  - MDQg64K067aE67mEL-2VreydtOuHqO2YuOultOuqrCDrtoDsoIHsoIgg67aE67mEIOymne2bhOq1sCAoU0lBREgpIChTeW5kcm9tZSBvZiBJbmFwcHJvcHJpYXRlIEFudGlkaXVyZXRpYyBIb3Jtb25lIFNlY3JldGlvbiAoU0lBREgpKS5tZA
  - MDIg7Zi47Z2h6riwL-2PkCDshozshLjtj6zslZQgKFNtYWxsIENlbGwgQ2FyY2lub21hKS5tZA
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
question_type: mechanism
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9CdXByb3Bpb24ubWQ
---

# MedQA US 임상문제

## 문제

소세포폐암으로 항암화학요법을 받고 lithium과 bupropion으로 양극성장애를 치료 중인 70세 남자가 일주일 동안 기면과 혼돈이 악화되어 내원했다. 혈압 130/70 mmHg, 맥박 100회/분, 호흡수 17회/분, 체온 36.5°C이다. 다른 약물은 metoprolol, valsartan, metformin, insulin이며 진찰상 기면·지남력 저하 외 특이소견은 없다. 혈당 110 mg/dL, 크레아티닌 0.8 mg/dL, 혈청 나트륨 120 mEq/L, 혈청 삼투압 250 mOsm/kg, 소변 나트륨 70 mEq/L, 소변 삼투압 195 mOsm/kg이다. 다음 중 상태의 가장 가능성 높은 원인은?

## 선택지

A. 암종
B. 부프로피온
C. 감염
D. 리튬

## 해설


저삼투압성 저나트륨혈증에 비해 소변이 충분히 희석되지 않고 urine Na가 높아 SIADH에 부합한다. 소세포폐암의 이소성 ADH 분비 A가 보기 중 가장 가능성이 높다. Lithium은 보통 신성 요붕증과 다뇨를 일으키므로 이 패턴과 반대이지만, 모든 약물 관련 저나트륨혈증을 검사 없이 배제할 수는 없다. 실제 SIADH 진단은 체액 상태, 부신·갑상샘 기능과 약물 등을 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005316 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 감별 약물 lithium/bupropion 등 원문 복약·신기능·정상 glucose가 번역에서 누락되어 복구. SCLC-SIADH 기전 A 유지하되 약물 전면배제 단정 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005316
