---
type: qbank
schema_version: 1
id: medqa-us-validation-000314
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:9f18cd1930bacbd179aa24e1d23726edd4eb88b27f001c1696924f2cc2e795db
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "일과성 허혈발작"
  - "중증 경동맥 협착"
  - "경동맥 내막절제술"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_snbzqs7zshLEg7ZeI7ZiIIOuwnOyekSAoVHJhbnNpZW50IGlzY2hlbWljIGF0dGFjaykubWQ
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qsr3rj5nrp6Ug7ZiR7LCp7KadIChDYXJvdGlkIGFydGVyeSBzdGVub3NpcykubWQ
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
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9Fbm94YXBhcmluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

당뇨병, 이상지질혈증, 고혈압이 있는 72세 남성이 갑자기 시작된 오른쪽 얼굴 감각이상, 단어 찾기 어려움, 어지러움으로 응급실에 왔다. 증상은 식당에서 친구들과 저녁을 먹던 중 시작되었고 5분 후 저절로 사라졌다. 두부 CT와 심전도는 정상이었다. 경동맥 초음파에서 왼쪽 70~89%, 오른쪽 50% 협착이 보였다. 평가 중 실어증이 3분간 재발했고 뇌 MRI에서는 허혈이나 출혈이 없었다. 다음 처치는?

## 선택지

A. 에녹사파린
B. 혈전용해요법
C. 경동맥 내막절제술
D. 경동맥 스텐트 삽입술

## 해설

반복되는 좌측 경동맥 영역 TIA와 70~89% 좌측 협착이 있어 적절한 수술 위험을 가진 환자는 조기 경동맥내막절제술(C)을 평가한다. 특히 70세 이상에서는 스텐트보다 CEA를 선호하는 근거에 시술 전후 뇌졸중 위험 차이가 포함된다. 최적 항혈소판·지질·혈압 관리도 병행하며 수술이 이를 대신하지 않는다. 완전히 회복된 결손에 혈전용해를 시행하는 상황은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 증상성 중증 경동맥 협착의 CEA C 확인. 단순 장기 재협착 차이로만 스텐트와 비교한 설명 교정.
- 공식/학회 근거: https://www.strokebestpractices.ca/recommendations/secondary-prevention-of-stroke/management-of-extracranial-carotid-disease-and-intracranial-atherosclerosis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000314
