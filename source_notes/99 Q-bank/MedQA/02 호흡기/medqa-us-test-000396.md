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

천식 병력이 있는 6세 남아가 필요할 때 알부테롤 흡입기를 사용하고 있다. 어머니는 지난 한 달 동안 흡입기 사용이 주 4회로 늘었다고 하며, 이번 달 밤에 증상 때문에 세 번 깼다고 한다. 아이는 운동장에서 친구들을 항상 따라갈 수 없어 속상하다고 한다. 알레르기성 비염 병력이 있다. 체온 98°F(36.6°C), 혈압 110/70 mmHg, 맥박 88회/분, 호흡 18회/분, 실내 공기 산소포화도 98%였다. 폐 청진에서 양측 늦은 호기성 천명음이 들렸다. 현재 천식 치료요법을 어떻게 변경해야 하는가?

## 선택지

A. 현재 치료를 유지한다
B. 플루티카손을 매일 추가한다
C. 살메테롤을 하루 두 번 추가한다
D. 질류톤을 하루 두 번 추가한다

## 해설

정답은 B이다. 6세 소아가 주 4회 구제 흡입기를 사용하고 야간 각성·활동 제한이 있어 SABA 단독 치료로는 조절이 충분하지 않다. 매일 저용량 흡입 corticosteroid인 fluticasone을 추가하는 것이 제시된 선택지 중 적합하다. 소아 GINA 체계에서 매일 저용량 ICS는 대표적인 Step 2 선택지이며 이를 자동으로 Step 3라고 부르지 않는다. salmeterol 단독 추가는 피하고 흡입기 사용법·순응도·노출도 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 매일 ICS 추가는 유지하되 저용량 ICS를 3단계라 한 해설 교정.
- https://ginasthma.org/reports/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000396
