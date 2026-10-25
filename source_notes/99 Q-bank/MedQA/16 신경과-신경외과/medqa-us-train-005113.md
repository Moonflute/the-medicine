---
type: qbank
schema_version: 1
id: medqa-us-train-005113
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a5b6713aeefa70f9de48fceadf015debdfc6e81883bc9e729073f6637ac5a097
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "브라운-세카르 증후군"
  - "척수 반절 병변"
  - "척수 압박"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC9Ccm93bi1TZXF1YXJkIOymne2bhOq1sCAoQnJvd24tU2VxdWFyZCBzeW5kcm9tZSkubWQ
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

54세 남자가 5개월 동안 점점 걷기 어려워지고 왼쪽 다리가 저려 내원했다. 처음에는 보행이 불안정했고 이후 오른쪽 다리 근력저하가 진행되었다. 오른쪽 다리는 근긴장도가 증가하고 근력 3/5, 바빈스키 반사는 신전되며 오른쪽 발의 진동감각과 관절위치감각이 감소한다. 배꼽 아래 왼쪽의 통각이 감소한다. 병변은 신경계의 어느 부위에 있을 가능성이 가장 높은가?

## 선택지

A. 왼쪽 척수 반쪽
B. 오른쪽 전두엽
C. 오른쪽 척수 반쪽
D. 오른쪽 교뇌

## 해설

오른쪽 피질척수로 손상은 병변 아래 동측 상위운동신경원 위약·경직·Babinski 징후를, 오른쪽 후주 손상은 동측 진동·위치감각 저하를 만든다. 척수시상로 섬유는 들어온 뒤 척수에서 교차하므로 오른쪽 반척수 병변은 반대쪽인 왼쪽 통각·온도감각을 저하시킨다. 이 조합은 Brown–Séquard 양상의 오른쪽 척수 반쪽(C) 병변에 합당하다. 감각 전체가 반대쪽에서 소실되는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 척수 반절 병변의 반대쪽 감각저하를 모든 감각으로 뭉뚱그린 해설을 운동·후주·통각온도 각각의 교차 위치로 구별했다. 오른쪽 반척수 C를 유지한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005113
