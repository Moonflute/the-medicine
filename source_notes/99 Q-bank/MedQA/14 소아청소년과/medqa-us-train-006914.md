---
type: qbank
schema_version: 1
id: medqa-us-train-006914
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ebddae66a99aa5d316360c5db491ab4441f12c01c1a50e9f463c18dadc06fd99
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "예방접종 따라잡기"
  - "Tdap"
  - "Td 추가접종"
question_type: prevention
related_disease_slugs: []
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: D
answer_change_reason: "8세 catch-up Tdap 후 11–12세 추가접종이 필요하므로 구식 D를 A로 변경."
---

# MedQA US 임상문제

## 문제

11세 남아가 예방접종을 받으러 왔다. 소아기 DTaP 5차까지 제때 완료했지만 이후에는 추가 접종을 받지 않았다. 국내 표준예방접종 일정에 따른 다음 접종은?

## 선택지

A. Tdap 1회
B. DTaP 1회
C. Td 1회
D. 18세까지 추가 접종 없음

## 해설

국내 표준예방접종 일정에서 DTaP 기본·추가 접종을 마친 소아는 11~12세에 Tdap을 1회 접종한다. 이 문항은 접종 지연이나 해외 일정이 아닌 정상 접종을 완료한 아이의 표준 추가 접종을 묻는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 8세 catch-up Tdap 후 11–12세 추가접종이 필요하므로 구식 D를 A로 변경.
- https://www.cdc.gov/vaccines/schedules/downloads/child/0-18yrs-child-combined-schedule.pdf
- https://www.cdc.gov/tetanus/hcp/vaccine-recommendations/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006914
- 질병관리청, 디프테리아·파상풍·백일해 표준 접종 일정: https://nip.kdca.go.kr/irhp/infm/goVcntInfo.do?menuCd=1103&menuLv=1
