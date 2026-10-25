---
type: qbank
schema_version: 1
id: medqa-us-train-001217
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:00bb392f4c535e22b67233b1905a0f9430f19673b0fdf18269f430f1833e87ad
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Parkinson disease"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tjIztgqjsiqgg7Kad7ZuE6rWwIChQYXJraW5zb25pc20pLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 여성이 지난 5개월간 지속된 손의 불수의적이고 리듬감 있는 움직임으로 내원하였다. 증상은 처음에 왼쪽 손에만 나타났으나 현재는 양손 모두에서 나타난다. 환자는 증상이 안정 시에 더 악화되며 신발 끈을 묶거나 글씨를 쓰는 것과 같은 작업을 수행하기가 더 어려워졌다고 보고한다. 남편은 환자가 최근 더 내성적으로 변했다고 생각한다. 환자는 지난 18년간 매일 셰리주 반 병을 마셨으나 지난 1년간은 술을 마시지 않았다. 만성 간 질환, 고혈압, 말초동맥질환이 있다. 현재 복용 중인 약물은 아스피린과 프로프라놀롤(propranolol)이다. 환자는 불안해 보인다. 시간, 장소, 사람에 대한 지남력이 있다. 체온은 37°C, 맥박은 98회/분, 혈압은 144/82 mm Hg이다. 진찰 결과 왼쪽 손에서 더 두드러지는 리듬감 있는 저주파 진전(tremor)이 관찰된다. 팔과 다리의 관절 가동 범위는 정상이다. 왼쪽 상지에서 수동적 굴곡 및 신전에 대한 저항 증가가 있다. 근력은 모든 사지에서 4/5이다. 통각 및 가벼운 촉각에 대한 감각은 보존되어 있다. 손가락-코 검사(finger-to-nose test)는 양측 모두 정상이다. 이 환자 증상의 가장 가능성 있는 근본 원인은 무엇인가?

## 선택지

A. 기저핵 내 구리 축적
B. 혈청 유리 T4 수치 증가
C. 적색핵(red nucleus)의 경색
D. 흑질(substantia nigra)의 퇴행

## 해설

5개월간 진행한 비대칭 안정떨림, 수동운동 저항 증가(강직), 세밀 동작의 어려움은 파킨슨증을 시사한다. 선지 중 흑질 도파민성 신경세포 퇴행(D)이 가장 적절하다. 파킨슨병 진단에 5년 이상의 경과가 필요한 것은 아니며 단순한 근력저하가 정의적 소견도 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원문 5개월을 5년 이상으로 바꾸고 근력저하를 진단 핵심으로 적은 해설을 교정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001217
