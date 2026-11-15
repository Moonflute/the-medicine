---
type: qbank
schema_version: 1
id: medqa-us-train-008487
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2d801daf49472b39b595dfe15a82b547e5f3db15a441e7c4562e6856d8520690
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "lichen sclerosus"
  - "balanitis xerotica obliterans"
  - "urethral meatal stenosis"
question_type: investigation
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-q3gOuRkCDtj6ztlLzsl7wgKEJhbGFub3Bvc3RoaXRpcykubWQ
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

37세 남성의 귀두와 포피에 하얗고 위축된 판이 있고 요도 입구가 좁아졌다. 기존 판 위로 두껍고 잘 낫지 않는 미란이 생겼다. 악성 변화를 배제할 다음 조치는?

## 선택지

A. 항진균제만 처방한다
B. 소변세포검사만 한다
C. 미란 주변의 의심 병변을 생검한다
D. 발진 사진만 찍은 뒤 1년 후 재진한다

## 해설

생식기 경화태선에서 지속하는 미란이나 국소 비후가 새로 생기면 편평세포암 등의 악성 변화를 배제하기 위해 의심 부위를 생검한다. 전형적인 경화태선에 모두 생검하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 경화태선 병명 오역과 모든 병변에 생검 필수라는 단정 완화. 진단검사를 묻는 이 선지에서 C 유지.
- 공식/학회 근거: https://www.bad.org.uk/pils/lichen-sclerosus-in-males

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008487
