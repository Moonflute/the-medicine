---
type: qbank
schema_version: 1
id: medqa-us-test-000741
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:aae951c7af95e4a338f13d8fe28b9c119539c8449a33fdcfcff1c2c4342e39e5
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "소모기 현상"
  - "야간 저혈당"
  - "인슐린 과다"
related_disease_slugs:
  - MDQg64K067aE67mEL-yGjOuqqOq4sCDtmITsg4EgKFNvbW9neWkgUGhlbm9tZW5vbikubWQ
question_type: management
difficulty: simple
answer: D
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

제1형 당뇨병 환자가 취침 전 지속형 인슐린의 용량을 늘린 뒤 새벽 2–4시에 식은땀이 난다. 연속혈당측정과 손끝 검사에서 같은 시간에 48–58 mg/dL가 반복됐다. 아침 혈당은 높은 날도 있다. 어떤 조정이 적절한가?

## 선택지

A. 아침 혈당만 보고 지속형 인슐린을 더 늘린다.
B. 증상을 확인했지만 다음 검사까지 용량을 유지한다.
C. 기저 인슐린을 완전히 끊는다.
D. 야간 저혈당을 일으킨 기저 인슐린 용량을 낮추고 혈당 패턴을 다시 본다.

## 해설

반복된 야간 저혈당이 확인되면 원인으로 보이는 기저 인슐린을 조정한다. 아침 고혈당만으로 야간 저혈당이나 반동을 단정할 수 없다. 제1형 당뇨병에서는 기저 인슐린을 완전히 중단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 아침 고혈당만으로 야간 과량 인슐린을 확정하지 않고 야간 저혈당 확인 및 해당 용량 재평가를 설명.
- https://diabetesjournals.org/care/article/49/Supplement_1/S183/163934/9-Pharmacologic-Approaches-to-Glycemic-Treatment

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000741
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
