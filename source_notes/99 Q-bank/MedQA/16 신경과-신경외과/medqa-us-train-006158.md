---
type: qbank
schema_version: 1
id: medqa-us-train-006158
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:94ae800cd1c6334b150c5a505d9c03f057a4a8e0be7a71b67890be3658706855
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "마미증후군"
  - "마미 압박"
  - "안장부 감각소실"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rp4jrr7jspp3tm4TqtbAgKENhdWRhIEVxdWluYSBTeW5kcm9tZSkubWQ
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

54세 남성이 5주 동안 점점 악화된 우측 다리의 심한 통증과 쇠약으로 응급실에 왔다. 오늘까지 진료를 받지 않았으며 과거에 요통이 있었지만 수술력은 없다. 체온은 37°C(98.6°F), 혈압은 140/85 mmHg, 맥박은 분당 92회이다. 회음부와 우측 하지의 핀prick 감각이 없고 우측 하지 근력은 2/5, 좌측은 4/5이다. 우측 발목과 무릎 반사는 소실되고 좌측은 정상이다. 이 환자의 요추 MRI에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 마미 압박
B. 척수원추 압박
C. 척수 국소 탈수초
D. 천장관절염과 부착부염

## 해설

비대칭 방사통과 하지 근력저하, 회음부 감각저하 및 무릎·발목 반사 소실은 마미 신경근 압박(A)에 합당하다. 척수원추 병변보다 비대칭 하위운동신경원 소견이 두드러진다. 본문에 없는 외성기 관찰 소견을 추가할 근거는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 남성 환자의 대음순 소견을 만들어낸 해설 제거, conus medullaris 번역을 척수원추로 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006158
