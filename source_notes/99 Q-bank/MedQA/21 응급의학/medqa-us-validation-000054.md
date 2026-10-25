---
type: qbank
schema_version: 1
id: medqa-us-validation-000054
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:698ac7e354dd3e6f0a1f50b189f166af3e07acbb326bad62d3d7ce8249498db6
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "화상"
  - "숙시닐콜린"
  - "고칼륨혈증성 부정맥"
question_type: mechanism
related_disease_slugs:
  - MTEg7Jm46rO8L-2ZlOyDgSAoQnVybikubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 남성이 신체 표면적 30%의 2·3도 화상으로 중환자실에 입원했다. 수액, 항생제, 진통제를 투여한 지 24시간 후 호흡곤란과 흡기성 천명이 생겨 신속연속삽관이 필요했다. 이때 숙시닐콜린을 투여하면 가장 가능성 높은 합병증은?

## 선택지

A. 지속성 근력저하
B. 악성 고체온증
C. 심장 부정맥
D. 호흡억제

## 해설

대화상 뒤에는 근육의 접합부 외 니코틴성 아세틸콜린 수용체가 증가하여 숙시닐콜린 투여 시 칼륨 유출이 커지고 치명적인 부정맥이나 심정지가 발생할 수 있다. 따라서 이 문항은 C의 고칼륨혈증성 심장 부정맥을 묻는다. 위험은 손상 후 시간에 따라 증가하며 정확한 시작과 지속 기간은 일정하지 않아, 24시간 전후를 절대적인 안전 경계로 삼아서는 안 된다. 급성기 이후 대화상은 약품 허가사항상 금기에 해당하며 다른 근이완제를 선택해야 한다. 악성 고열증도 가능한 부작용이지만 여기서 화상 병력이 강조하는 위험과는 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 대화상 뒤 숙시닐콜린의 고칼륨혈증성 부정맥 C를 유지하되 24시간이라는 절대 경계나 단순 탈분극 방해로 설명하지 않는다.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b990f84-9515-44bd-a97d-a97bbead065c

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000054
