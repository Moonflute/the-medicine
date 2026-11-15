---
type: qbank
schema_version: 1
id: medqa-us-validation-001155
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:a44937561599ac409c6440cefdfaa1e59e7dfb3a2f726b46656609b170d8a860
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "이인증"
  - "외상 후 해리"
  - "정신치료"
  - "Depersonalization/derealization disorder"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

큰 사고를 목격한 뒤 환자가 가끔 자기 몸을 바깥에서 보는 것처럼 느낀다. 그때도 자신이 실제로 몸 밖에 나간 것은 아니며 느낌이 달라졌을 뿐임을 안다. 이 경험을 부르는 말은?

## 선택지

A. 환각
B. 피해망상
C. 이인성 기억상실
D. 이인감

## 해설


이인감은 자기 자신이나 몸, 감정과 분리된 듯한 경험이다. 현실검증이 유지되는 점이 망상과 다르다. 외상 직후 이런 경험만으로 이인증 장애를 확진하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001155
- https://www.ptsd.va.gov/professional/treat/essentials/dissociative_subtype.asp

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 외상 후 이인·비현실감 경험의 영한 본문·모든 선지·답·해설 확인. 정신치료가 선택지 중 적절하며 약물/물질·신경학적 감별 및 관련 외상증상은 실제 평가 필요.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
