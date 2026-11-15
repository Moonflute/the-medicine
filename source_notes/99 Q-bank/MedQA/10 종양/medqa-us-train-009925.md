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
answer: C
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

유방암 환자의 하지 근력이 빠르게 저하됐다. MRI에서 T12 전이로 척수가 심하게 눌리고 척추가 불안정하다. 덱사메타손을 시작했고 전신 상태는 수술을 견딜 수 있다. 다음 치료는?

## 선택지

A. 방사선치료만 시행
B. 전신 항암치료 후 재평가
C. 감압·안정화 수술 후 방사선치료
D. 보조기 착용 후 경과 관찰

## 해설


신경 기능이 떨어지고 척추가 불안정한 수술 가능 환자에서는 신속히 감압·안정화 수술을 시행하고 이후 방사선치료를 계획한다. 수술이 어렵다면 응급 방사선치료를 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009925 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 신경학적 척수압박·추체 파괴와 양호한 예후에서 감압 후 방사선 D 유지; 생존 1년만으로 일률 수술하는 일반화 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng234/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009925
