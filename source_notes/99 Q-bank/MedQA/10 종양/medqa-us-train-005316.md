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
question_type: diagnosis
difficulty: complex
answer: D
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

70세 남성이 소세포폐암 진단 후 항암치료 전 검사에서 Na 126 mmol/L, 혈청 삼투압 260 mOsm/kg, 소변 삼투압 310 mOsm/kg, 소변 Na 65 mmol/L였다. 체액량은 정상이고 신장·갑상샘·부신기능이 정상이며 이뇨제는 쓰지 않는다. 저나트륨혈증의 원인은?

## 선택지

A. 구토에 의한 체액량 감소
B. 일차성 다음증
C. 수액 과다에 의한 고혈량 상태
D. 항이뇨호르몬 부적절분비증후군(SIADH)

## 해설


혈청은 저장성인데 소변이 희석되지 않고 소변 Na가 높으며 정상 체액량을 보인다. 다른 원인을 배제하면 SIADH에 해당하고, 소세포폐암에서는 이소성 항이뇨호르몬 분비가 원인일 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005316 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 감별 약물 lithium/bupropion 등 원문 복약·신기능·정상 glucose가 번역에서 누락되어 복구. SCLC-SIADH 기전 A 유지하되 약물 전면배제 단정 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005316
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9351400/
