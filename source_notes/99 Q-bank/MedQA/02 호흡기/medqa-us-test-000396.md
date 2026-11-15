---
type: qbank
schema_version: 1
id: medqa-us-test-000396
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:eb7a6d010899323f4a0298afe15fd3e1c50a0f2d66afba55168436b6ba14de33
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "소아 천식"
  - "조절되지 않는 천식"
  - "흡입 코르티코스테로이드"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
  - ZHJ1ZzowMiDtmLjtnaHquLAvU2FsbWV0ZXJvbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

8세 남아가 의사에게 천식을 진단받아 필요할 때만 살부타몰을 쓰고 있다. 최근 주 3–4일 기침이나 천명으로 흡입기를 쓰며 운동에 지장이 있다. 보호자는 매일 예방 흡입제를 사용할 수 있다고 한다. 장기 조절을 위해 시작할 약은?

## 선택지

A. 살부타몰을 정해진 시간마다 쓰고 다른 치료는 하지 않는다
B. 저용량 흡입 스테로이드를 매일 사용한다
C. 살메테롤을 단독으로 매일 사용한다
D. 프레드니솔론을 장기간 매일 복용한다

## 해설

학령기 소아의 증상이 주 여러 차례 반복되고 활동을 제한하면 속효성 기관지확장제만으로 관리하지 않는다. 매일 저용량 흡입 스테로이드는 대표적 초기 조절요법이다. 흡입기 사용법·순응도와 이후 증상 조절도 함께 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 매일 ICS 추가는 유지하되 저용량 ICS를 3단계라 한 해설 교정.
- https://ginasthma.org/reports/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000396
- https://new.lungkorea.org/board/guide/view/14959
- https://ginasthma.org/2026-gina-strategy-report/
