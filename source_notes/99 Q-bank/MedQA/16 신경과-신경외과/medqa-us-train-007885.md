---
type: qbank
schema_version: 1
id: medqa-us-train-007885
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1c2fff1cac30504057c66f60a041823fc1967ae0fc472aa53e32d119f86719a5
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "concussion"
  - "mild traumatic brain injury"
  - "return-to-play protocol"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsp4Ttg5UgKENvbmN1c3Npb24pLm1k
difficulty: standard
answer: "D"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QaGVueXRvaW4ubWQ
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 뇌진탕 후 고정 기간 제한을 증상 기반 단계적 복귀로 교정"
curation_status: "revised"
curation_reason: "뇌진탕 후 고정 기간 제한을 증상 기반 단계적 복귀로 교정"
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

15세 남아가 미식축구 연습 중 머리를 다친 지 1시간 후 응급실에 왔다. 마우스가드와 헬멧을 착용한 채 다른 선수와 정면으로 충돌했다. 충돌 직후 혼란스러웠지만 적절한 단어를 사용했고 눈을 자발적으로 뜨며 지시에 따랐다. 의식소실은 없었다. 두통, 어지럼, 오심도 있었지만 도착 시에는 더 이상 혼란스럽지 않고 상태가 좋다. 활력징후는 정상이며 의식이 명료하고 지남력이 있다. 말은 정돈되어 있고 주의력, 기억력, 균형을 평가하는 과제를 모두 수행한다. 신경학적 검사도 정상이다. 머리 꼭대기에 경미한 압통이 있으나 피부 손상이나 골절 징후는 없다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 활동 제한 없이 퇴원
B. 예방적 페니토인 투여 후 24시간 관찰
C. 퇴원시키고 1주일간 모든 신체활동 금지
D. 위험도에 따라 관찰·재평가하고 보호자에게 악화 신호를 교육한 뒤, 24–48시간 상대적 휴식과 단계적 학업·운동 복귀 계획을 제공

## 해설

일시적인 혼란·두통·어지럼은 의식소실 없이도 발생하는 뇌진탕에 합당하다. 임상 위험도에 따라 관찰과 영상검사 필요성을 판단하며 모든 환자에게 고정 6시간 관찰이나 CT를 요구하지 않는다. 초기 1–2일은 상대적으로 쉬고, 증상을 크게 악화시키지 않는 범위에서 일상·학업 활동을 점차 늘린다. 당일 경기 복귀는 금지하며 접촉 스포츠는 운동 시에도 증상이 없고 단계적 복귀를 거쳐 의료진의 허가를 받은 뒤 재개한다. 단순히 1주가 지났다고 복귀시키거나 모든 활동을 장기간 금지하는 것은 부적절하다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 뇌진탕 후 고정 기간 제한을 증상 기반 단계적 복귀로 교정
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.cdc.gov/traumatic-brain-injury/hcp/clinical-guidance/pediatric-mtbi.html
- https://www.cdc.gov/heads-up/hcp/clinical-guidance/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007885

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
