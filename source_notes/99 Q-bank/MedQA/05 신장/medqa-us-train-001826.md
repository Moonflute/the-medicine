---
type: qbank
schema_version: 1
id: medqa-us-train-001826
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b0e698c1ddba3fc0295600f4f7d43c39ed867de1574bc57bb33983c6acb948f8
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "chronic kidney disease G3a"
  - "hyperkalemia"
  - "albuminuria"
related_disease_slugs:
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRnVyb3NlbWlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

알부민뇨가 있는 만성콩팥병 환자가 에날라프릴을 복용하고 있다. 용혈 없는 재검에서도 K 5.6 mmol/L, 중탄산염 24 mmol/L, 심전도는 정상이다. 최근 염화칼륨을 함유한 저염 소금으로 바꿨다. 신장 보호 효과가 있는 약을 유지할 수 있는지 판단하기 위해 첫 조치는?

## 선택지

A. 에날라프릴을 영구 중단하고 추적은 생략한다
B. 응급 혈액투석부터 한다
C. 칼륨 함유 대체 소금을 중단하고 혈청 칼륨을 조기에 재검한다
D. 인 결합제인 세벨라머만 추가한다

## 해설

칼륨 섭취원과 필요 없는 약제부터 확인하고 교정 후 반복 검사한다. 가능한 경우 고칼륨혈증을 조절해 레닌–안지오텐신계 차단제를 유지하되, 교정되지 않으면 감량이나 중단을 검토한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: patiromer를 저칼륨 치료제라고 한 반대 설명 교정.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bf002984-d6c9-46df-aecb-a07733f763c1

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001826
- https://doi.org/10.1016/j.kint.2023.10.016
