---
type: qbank
schema_version: 1
id: medqa-us-train-009925
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dd4dacdafdac1c131760273ad36117a240745f93486722216d20c313f3d1359a
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "척수 압박"
  - "유방암 척추 전이"
  - "수술적 감압"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: management
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

유방암 병력이 있는 63세 여성이 양쪽 하지의 점점 심해지는 운동 약화와 보행 곤란으로 내원했다. 진찰에서 다리 근력은 4/5이고 슬개건 반사가 과도하다. 2주 전 신경학적 검사는 정상이었다. MRI를 포함한 영상검사에서 전이 병변이 척수를 심하게 압박하고 T12 척추가 완전히 침식되어 있다. 내장 전이는 없고 종양 전문의는 기대 여명이 1년 이상이라고 한다. 가장 적절한 치료는?

## 선택지

A. 완화적 통증 관리 상담
B. 방사선치료만 시행
C. 화학요법만 시행
D. 수술적 감압 및 수술 후 방사선치료

## 해설


새 양측 하지 위약·과반사와 MRI의 척수압박 및 T12 추체 파괴는 종양성 척수압박 응급상황이다. 신속한 전문팀 평가와 신경 증상에 대한 dexamethasone 등을 시행하고 안정성·전신 상태·종양 특성을 고려한다. 이 케이스는 예상 생존이 길고 파괴성 병변과 신경 손상이 있어 감압/안정화 수술 후 방사선 D가 적절한 선택이다. 예상 생존 1년만으로 수술을 일률 결정하지 않으며 수술이 부적합한 환자에서는 방사선도 중요한 치료다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009925 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 신경학적 척수압박·추체 파괴와 양호한 예후에서 감압 후 방사선 D 유지; 생존 1년만으로 일률 수술하는 일반화 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng234/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009925
