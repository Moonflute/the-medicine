---
type: qbank
schema_version: 1
id: medqa-us-train-006310
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5fe942064aaa72a8c0e6a692a3e4ea9823097aa2660c3a200a1f264437a54336
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "모유량 감소"
  - "불충분한 유방 비우기"
  - "프로락틴"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0NldGlyaXppbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

출산 2개월 된 여성이 직장에 복귀한 뒤 근무 중 수유나 유축을 하지 못했고 모유량이 줄었다. 아기는 적절히 자라고 유방 통증이나 발열은 없다. 모유량을 유지하기 위해 먼저 권할 것은?

## 선택지

A. 양쪽 유방에 냉찜질만 반복한다
B. 수유 횟수를 더 줄여 유방을 쉬게 한다
C. 유즙 제거를 늘리기 전에 약물부터 쓴다
D. 아기가 보통 먹는 간격에 맞춰 근무 중에도 유축한다

## 해설

모유 생산은 규칙적인 유즙 제거 자극에 반응한다. 직접 수유할 수 없는 시간에는 평소 수유 간격에 맞춰 유축을 계획한다. 필요하면 젖 물리기와 유축기 사용도 함께 점검한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 젖이 남아 직접 프로락틴을 억제한다고 단순화한 설명을 수유 자극 감소와 국소 분비 조절로 바로잡았다.
- https://womenshealth.gov/breastfeeding/learning-breastfeed/making-breastmilk
- https://www.cdc.gov/infant-toddler-nutrition/breastfeeding/how-much-and-how-often.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006310
- https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=6586
- https://www.cdc.gov/infant-toddler-nutrition/breastfeeding/returning-to-your-workplace.html
