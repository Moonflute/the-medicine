---
type: qbank
schema_version: 1
id: medqa-us-train-007250
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:64b1364f1163cd10b7574432507d336042f9fbff1910136dca52cef996c86e90
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "경증 지속성 천식"
  - "천식 조절"
  - "부데소니드-포르모테롤"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: management
difficulty: complex
answer: A
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
  - ZHJ1ZzowMiDtmLjtnaHquLAvTW9udGVsdWthc3QubWQ
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL01vbWV0YXNvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

20세 남성이 가역적 기류제한이 확인된 성인 천식으로 진료 중이다. 낮에 숨이 차거나 기침하는 날이 주 1–2일이고, 지난달 야간 증상과 중증 악화는 없었다. 사용 가능한 흡입기 중, 증상이 있을 때만 쓰는 일차 항염증완화요법은?

## 선택지

A. 저용량 부데소니드/포르모테롤 흡입
B. 살부타몰 단독 흡입
C. 살메테롤 단독 흡입
D. 경구 몬테루카스트를 증상 시 복용

## 해설

성인 경증 천식에서는 필요시 저용량 흡입 스테로이드/포르모테롤로 증상을 완화하면서 기도 염증도 치료할 수 있다. 살부타몰만 쓰면 염증을 치료하지 못하고, 포르모테롤이 아닌 다른 장기작용 베타₂작용제를 임의로 완화제에 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 경증천식A를정기LABA병용만의보편1차가아닌필요시저용량ICS/formoterol로명료화.
- https://ginasthma.org/reports/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007250
- https://new.lungkorea.org/board/guide/view/14959
- https://ginasthma.org/2026-gina-strategy-report/
