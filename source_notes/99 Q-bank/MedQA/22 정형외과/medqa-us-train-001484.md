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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTW94aWZsb3hhY2luLm1k
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0xvcmF0YWRpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

30세 남성이 왼쪽 발목 통증으로 일차진료에 내원했다. 가라테 연습 중 갑자기 심한 발목 통증을 느껴 중단했다고 한다. 제1형 당뇨병 병력이 있고 목시플록사신으로 급성 세균성 부비동염을 치료 중이다. 최근 혈당 조절이 잘 되지 않아 인슐린 용량을 늘렸다. 두통에는 이부프로펜, 계절성 알레르기에는 로라타딘을 복용한다. 건강해 보이고 급성 고통은 없다. 왼발을 발등굽힘하면 아킬레스건 부위에 통증이 유발되고 저항에 맞서 발바닥굽힘을 하면 통증이 생긴다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 항생제를 바꾸고 운동을 피한다
B. 이부프로펜과 휴식
C. 정형외과용 발목 보조기
D. 재활운동과 허용되는 범위의 활동

## 해설

Moxifloxacin 투여 중 갑작스러운 아킬레스 부위 통증은 fluoroquinolone 관련 건염·건파열 가능성을 우려하게 한다. 약물을 즉시 중단하고 비퀴놀론 항생제 필요성을 재평가하며 운동과 해당 부위의 부하를 피하는 A가 적절하다. 급성 통증이 없었던 것이 아니며 파열 여부도 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Fluoroquinolone 관련 건병증 A는 맞으나 갑자기 심한 통증이 발생한 원문을 급성 통증 없음으로 뒤집은 설명을 교정한다.
- 공식/학회 근거: https://www.fda.gov/media/119537/download
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=18b77b31-baf3-416f-b3b7-a631c8e46d20&type=display

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001484
