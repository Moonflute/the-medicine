---
type: qbank
schema_version: 1
id: medqa-us-train-003056
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d92705c6bb0a3f7f15e5775a91640f40f7088e63a350805afa6c4574d5edd129
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "HPV vaccination"
  - "cervical cancer prevention"
  - "vaccination age recommendation"
  - "pregnancy planning"
question_type: prevention
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gOyVlCAoQ2VydmljYWwgQ2FuY2VyKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: D
answer_change_reason: "27–45세HPV백신공동결정현행권고로D에서A로변경;음성임신검사필수아님."
---

# MedQA US 임상문제

## 문제

28세 여성이 HPV 백신 1차 접종을 받은 뒤 임신 8주임을 알게 됐다. 이제 2차 접종 예정일이 됐다. 남은 접종은 어떻게 하는 것이 적절한가?

## 선택지

A. 출산 후 남은 회차부터 이어서 접종한다
B. 예정대로 임신 1분기에 2차 접종한다
C. 임신 3분기로 미뤄 2차 접종한다
D. 출산 후 1차부터 다시 접종한다

## 해설

임신 중에는 HPV 백신 접종을 연기한다. 임신 전에 시작한 접종은 출산 후 남은 회차부터 이어가며 처음부터 다시 시작할 필요는 없다. 모유 수유 중에도 남은 접종을 받을 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 27–45세HPV백신공동결정현행권고로D에서A로변경;음성임신검사필수아님.
- https://www.cdc.gov/hpv/hcp/vaccination-considerations/
- https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-11-human-papillomavirus.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003056
- 질병관리청 국가건강정보포털, 임신 중 예방접종: https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=6953
