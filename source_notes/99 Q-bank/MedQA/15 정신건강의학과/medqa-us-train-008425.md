---
type: qbank
schema_version: 1
id: medqa-us-train-008425
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:deccb2eccfffc6caaabeaf0ef8269e14b748c30d72ed62c779c1694b5808df99
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "alcohol withdrawal"
  - "alcohol withdrawal syndrome"
  - "delirium tremens"
question_type: prevention
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy9lOyYrCDquIjri6gg7Kad7ZuE6rWwIChBbGNvaG9sIFdpdGhkcmF3YWwgU3luZHJvbWUpLm1k
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yErOunnSAoRGVsaXJpdW0pLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTmFsb3hvbmUubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

과거 금주 중 발작으로 입원한 환자가 수술을 위해 입원했다. 평소 매일 과음했고 마지막 음주는 오늘 아침이다. 현재는 지남력이 정상이며 금단 증상이 없다. 가장 적절한 계획은?

## 선택지

A. 금단이 아직 없으므로 별도 관찰은 하지 않는다
B. 수면제를 필요할 때만 주고 음주력은 더 확인하지 않는다
C. 혈중 알코올이 남아 있으면 금단 위험은 없다고 설명한다
D. 중증 금단 고위험으로 보고 모니터링과 예방적 치료를 계획한다

## 해설

이전 금단 발작은 중증 금단의 중요한 위험요인이다. 증상이 시작되거나 발작이 재발할 때까지 기다리지 않고 입원 중 감시와 예방적 약물치료를 검토한다. 수술 전후 호흡억제 위험과 티아민 보충도 살핀다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008425

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 입원3일 경과를 6~12시간 금단으로만 설명한 과도한 시간 고정 교정. 로라제팜 정답 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.asam.org/quality-care/clinical-guidelines/alcohol-withdrawal-management-guideline
