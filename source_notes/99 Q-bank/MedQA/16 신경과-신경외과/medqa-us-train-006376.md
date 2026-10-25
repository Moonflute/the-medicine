---
type: qbank
schema_version: 1
id: medqa-us-train-006376
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9284b96dafbb0ec60e769adfb24ec11c4b52563e151cbea655cff0aa6c97d016
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "항이뇨호르몬 부적절 분비 증후군"
  - "뇌경색 후 저나트륨혈증"
  - "혈청 요산 감소"
question_type: mechanism
related_disease_slugs:
  - MDQg64K067aE67mEL-2VreydtOuHqO2YuOultOuqrCDrtoDsoIHsoIgg67aE67mEIOymne2bhOq1sCAoU0lBREgpIChTeW5kcm9tZSBvZiBJbmFwcHJvcHJpYXRlIEFudGlkaXVyZXRpYyBIb3Jtb25lIFNlY3JldGlvbiAoU0lBREgpKS5tZA
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 여성이 딸과 함께 병원에 내원했다. 6시간 전 결혼식에서 연설하던 중 갑자기 단어를 찾기 어렵고 오른쪽 얼굴이 처졌다. 사지 근력 약화, 감각이상 또는 감각 결손은 없다. 고혈압과 제2형 당뇨병 병력이 있으며 히드로클로로티아지드와 인슐린을 복용한다. 4개월 전 마지막 HbA1c는 10.3%였다. 활력징후는 정상이다. 진찰에서 오른쪽 아래 얼굴이 처져 있지만 양쪽 눈썹은 대칭적으로 올릴 수 있다. 말이 느리고 약간 구음장애가 있으며 일부 사물의 이름을 대기 어렵다. 그 외 진찰은 정상이다. 뇌 MRI에서 왼쪽 전두부에 3.2cm 뇌경색이 보였다. 신경과에 입원하여 추가 치료를 받았다. 입원 3일째 검사 결과는 다음과 같다.
혈청 Na+ 131 mEq/L, 삼투질농도 265 mOsm/kg H2O
소변 Na+ 46 mEq/L, 삼투질농도 332 mOsm/kg H2O
이 환자에서 다음 중 어떤 소견이 추가로 나타날 가능성이 가장 높은가?

## 선택지

A. 정수압 증가
B. 혈청 요산 감소
C. 혈청 중탄산염 증가
D. 배뇨 빈도 증가

## 해설

저삼투성 저나트륨혈증에 비해 소변이 농축되어 있고 소변 나트륨이 높은 양상에서는 SIAD와 유사한 수분저류 상태를 고려하며, 보기 중 낮은 혈청 요산(B)이 동반될 수 있다. 저요산혈증은 단순 혈액 희석만이 아니라 신장 요산 재흡수 감소와 배설 증가가 관여한다. 다만 HCTZ 자체도 저나트륨혈증을 일으키므로 이 소견만으로 SIAD를 확진할 수 없다. 이뇨제 영향, 체액량, 부신·갑상선 기능 등 다른 원인을 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 저삼투성 저나트륨혈증의 저요산혈증 B 유지하되 단순 희석 설명과 HCTZ 복용 중 SIAD 확정 단정 교정.
- 공식/학회 근거: https://www.ese-hormones.org/publications/directory/ese-clinical-guideline-for-the-management-of-hyponatraemia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006376
