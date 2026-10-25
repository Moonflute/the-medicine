---
type: qbank
schema_version: 1
id: medqa-us-train-006386
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ea8a16c53d7e2b750e516b4d796ab66e141b1c7716aefa5494a9697e0371374f
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "포상기태"
  - "완전 포상기태"
  - "임신성 융모성 질환"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-2PrOyDgeq4sO2DnCAoTW9sYXIgUHJlZ25hbmN5KS5tZA
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강했던 29세 대만인 여성이 몇 시간 전부터 발생한 질출혈과 골반 압박감으로 응급실에 내원했다. 지난 2주 동안 간헐적인 오심과 구토가 있었다. 10주 전 가정용 소변 임신검사가 양성이었지만 산전 진찰은 받지 않았다. 맥박은 분당 80회, 혈압은 150/98 mm Hg이다. 진찰에서 피부가 따뜻하고 습하다. 양쪽 폐 청진은 깨끗하다. 복부는 부드럽고 팽만되지 않았다. 양손 진찰에서 자궁은 배꼽 높이까지 만져진다. 혈청 β-hCG 농도는 110,000 mIU/mL이다. 소변 시험지에서 단백과 케톤이 양성이다. 질식 초음파에서 저에코 공간을 포함한 중앙 자궁내 종괴가 보이며 태아 심박동은 확인되지 않는다. 흉부 X선은 정상이다. 다음 중 처치로 가장 적절한 다음 단계는?

## 선택지

A. 인슐린 치료
B. β-hCG 연속 측정
C. 흡인 소파술
D. 메토트렉세이트 치료

## 해설

자궁 크기 증가, 높은 hCG, 구토·고혈압과 낭성 공간을 포함한 자궁내 종괴는 포상기태를 시사한다. 임신검사가 10주 전에 양성이었다는 정보는 현재 임신 10주라는 뜻이 아니다. 흡인 소파술(C)로 제거하고 병리 및 연속 hCG 추적으로 지속 영양막질환을 감시한다. hCG 추적만 하거나 초기 포상기태에 메토트렉세이트를 일률 투여하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 양성 임신검사 10주 전을 임신10주로 혼동한 오류 수정.
- https://www.cancer.gov/types/gestational-trophoblastic/patient/gtd-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006386
