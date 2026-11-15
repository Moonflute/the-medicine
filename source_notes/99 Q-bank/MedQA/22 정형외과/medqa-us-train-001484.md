---
type: qbank
schema_version: 1
id: medqa-us-train-001484
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:09b110e9050529248592ce0ed5c86284f15ef8440af1ff006484ddc0785a7bb6
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "fluoroquinolone tendinopathy"
  - "Achilles tendonitis"
question_type: management
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yVhO2CrOugiOyKpCDqsbTrs5Hspp0gKEFjaGlsbGVzIFRlbmRpbm9wYXRoeSkubWQ
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTW94aWZsb3hhY2luLm1k
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0xvcmF0YWRpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

세균 감염으로 플루오로퀴놀론을 복용하던 환자가 새로 생긴 아킬레스건 통증과 부종을 호소한다. 가장 적절한 조치는?

## 선택지

A. 약을 유지하고 통증을 참고 운동한다
B. 약을 중단하고 부하를 피하면서 힘줄 손상과 대체 항생제 필요성을 평가한다
C. 진통제를 추가하고 기존 약 용량을 늘린다
D. 아킬레스건에 먼저 스테로이드를 주사한다

## 해설

플루오로퀴놀론 관련 건염이나 파열이 의심되면 약을 중단한다. 힘줄에 부담을 주지 말고 손상 정도를 확인하며, 필요하면 원래 감염에 맞춰 다른 항생제를 고른다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Fluoroquinolone 관련 건병증 A는 맞으나 갑자기 심한 통증이 발생한 원문을 급성 통증 없음으로 뒤집은 설명을 교정한다.
- 공식/학회 근거: https://www.fda.gov/media/119537/download
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=18b77b31-baf3-416f-b3b7-a631c8e46d20&type=display

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001484
- https://www.gov.uk/drug-safety-update/fluoroquinolone-antibiotics-must-now-only-be-prescribed-when-other-commonly-recommended-antibiotics-are-inappropriate
