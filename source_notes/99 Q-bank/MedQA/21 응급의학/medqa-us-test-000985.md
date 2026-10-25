---
type: qbank
schema_version: 1
id: medqa-us-test-000985
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:4b0b3bc8a774d7d5b4ee978d3af46f08f63023e2de41700e09d7af5f637f76a4
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "유기인계 살충제 중독"
  - "콜린성 위기"
  - "프랄리독심"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-uLpOuwnOyZuOyDgSAoUG9seXRyYXVtYSkubWQ
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

70세 남성이 이해할 수 없는 말을 하며 아내와 함께 응급실에 왔다. 침을 흘리고 눈물이 과도하게 나며, 사탕무 밭에서 작업하다 갓 수확한 사탕무 더미 위에 쓰러져 있는 것을 아내가 발견했다. 발견된 지 10분밖에 되지 않았고 환자는 혼돈과 공격성을 보여 진찰이 어려웠다. 옷을 벗긴 후 시행할 가장 적절한 초기 처치는?

## 선택지

A. 네오스티그민
B. 피소스티그민
C. 프랄리독심
D. 기관내 삽관

## 해설

농약 노출 가능성과 침·눈물 과다·의식 변화는 유기인계 cholinergic 독성을 시사한다. Pralidoxime(2-PAM, C)은 aging 전 인산화된 acetylcholinesterase를 재활성화하는 약이다. Atropine과는 별개이며 atropine은 muscarinic 수용체를 차단해 분비·기관지 증상 등을 조절한다. 보호구·오염 제거·기도와 호흡 평가 및 atropine 등을 함께 시행하며 pralidoxime만을 단독 소생 치료로 보아서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Pralidoxime C를 atropine과 같은 약으로 적고 항콜린성 독성을 차단한다는 역전 설명을 교정한다.
- 공식/학회 근거: https://wwwn.cdc.gov/TSP/MMG/MMGDetails.aspx?mmgid=523&toxid=93

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000985
