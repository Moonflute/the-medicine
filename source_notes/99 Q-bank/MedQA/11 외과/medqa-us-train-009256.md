---
type: qbank
schema_version: 1
id: medqa-us-train-009256
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:217420006c435c2c7bfd30d6f486421a1f4ab07523914ac6e6d43a2c5264087a
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "pancreatic fistula"
  - "췌장루"
  - "postoperative enterocutaneous fistula"
related_disease_slugs:
  - MTEg7Jm46rO8L-yepSDriITqs7UgKEVudGVyb2N1dGFuZW91cyBGaXN0dWxhKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL1RpbW9sb2wubWQ
---

# MedQA US 임상문제

## 문제

복부 수술 12일 뒤 상처로 담즙성 장액이 하루 900 mL씩 나온다. CT에서 장피부누공이 확인되었으나 복막염과 배액이 필요한 농양은 없다. 경구·경장으로 필요량을 공급할 수 없을 때 초기 관리 계획은?

## 선택지

A. 누공을 막기 위해 상처만 바로 봉합한다
B. 배액량을 기록하고 피부·수분·전해질을 관리하면서 정맥영양을 시작한다
C. 소변량과 전해질에 관계없이 수액을 제한한다
D. 안정적이어도 누공을 즉시 절제하고 영양 평가는 미룬다

## 해설


고배액 장피부누공에서는 장액 손실에 따른 탈수와 전해질 이상을 교정하고 피부를 보호한다. 경구·경장영양이 부족하면 정맥영양을 사용하고 감염·농양과 누공 위치를 함께 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009256 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 전췌장절제 후 배액을 췌장누공으로 단정한 오류를 장피부누공/장내용물 누출로 교체하고 ostomy pouch 의미를 바로잡았다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://aspenjournals.onlinelibrary.wiley.com/doi/full/10.1177/0148607116680792

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009256
- https://doi.org/10.1177/0148607116680792
