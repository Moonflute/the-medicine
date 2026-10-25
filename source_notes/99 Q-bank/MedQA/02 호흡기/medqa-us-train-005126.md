---
type: qbank
schema_version: 1
id: medqa-us-train-005126
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:55daea3a91d10a2223d95c919158d3f03e2bc8859a09686bd3a76e62317b72a2
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "소아 경증 지속성 천식"
  - "흡입 코르티코스테로이드"
  - "알부테롤 사용 증가"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvQnVkZXNvbmlkZS5tZA
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
  - ZHJ1ZzowMiDtmLjtnaHquLAvU2FsbWV0ZXJvbC5tZA
  - ZHJ1ZzowMiDtmLjtnaHquLAvVGlvdHJvcGl1bS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

천식과 계절성 알레르기가 있는 13세 남아가 알부테롤을 사용하고 있다. 최근 몇 주 동안 알부테롤 사용이 주 1~2일에서 주 4회로 증가했지만 매일 증상이 있지는 않다. 현재 치료요법에 추가할 약물은?

## 선택지

A. 살메테롤 하루 2회 추가
B. 플루티카손 하루 1회 추가
C. 포르모테롤+부데소니드 하루 2회 추가
D. 티오트로피움 추가

## 해설

잦아진 SABA 사용에는 ICS 포함 치료가 필요하며 B의 매일 fluticasone은 합리적인 대안이다. LABA 단독은 피한다. 현행 GINA의 청소년 선호전략인 필요시 저용량 ICS/formoterol 등과 제시 C의 정기 복합요법은 구별하며 B만 유일한 전략이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ICS B 추가는 가능한 전략이나 유일한 현행 천식전략으로 일반화하지 않도록 한정.
- https://ginasthma.org/reports/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005126
