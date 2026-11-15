---
type: qbank
schema_version: 1
id: medqa-us-train-003447
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:110114724d850c1fd2f4bce7956d2f284cdebc210a0994f13077e95201e3032b
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "galactorrhea"
  - "hyperprolactinemia"
  - "antipsychotic medication"
  - "hypothyroidism"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoO2UhOuhnOudve2LtO2YiOymnSAoSHlwZXJwcm9sYWN0aW5lbWlhKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
question_type: management
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

31세 여성이 리스페리돈을 시작한 뒤 무월경과 양측 유즙 분비가 생겼다. 프로락틴은 복용 전 정상이었으나 두 차례 78 ng/mL로 측정됐다. 임신 검사는 음성이고 TSH와 신기능은 정상이다. 두통과 시야 변화는 없다. 다음 처치는?

## 선택지

A. 리스페리돈을 즉시 중단한다
B. 리스페리돈을 유지하며 카베르골린을 우선 추가한다
C. 정신건강의학과와 용량 조절이나 약제 변경을 상의한다
D. 약을 유지하며 뇌하수체 수술을 의뢰한다

## 해설

시간 관계와 검사 결과가 리스페리돈에 의한 고프로락틴혈증을 뒷받침한다. 증상이 있으면 처방팀과 협의해 조절하고, 설명되지 않는 상승이 지속되거나 두통·시야 변화가 생기면 뇌하수체 병변을 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. TSH가 모든 유즙분비에서 유일한 첫 검사라는 과도한 일반화를 교정하고 임신·프로락틴/약물 평가 및 정신과 약 임의중단 금지 설명.
- https://academic.oup.com/jcem/article/96/2/273/2709487

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003447
- https://www.nature.com/articles/s41574-023-00886-5
