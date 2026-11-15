---
type: qbank
schema_version: 1
id: medqa-us-train-005603
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1576c49155b69cac849aee7b1084e9190c1c0ae258bb18106223ecdd7ce5807b
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "응급피임"
  - "구리 자궁 내 장치"
  - "청소년 피임 상담"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geuCtOyepey5mCAoSW50cmF1dGVyaW5lIERldmljZSkubWQ
difficulty: simple
answer: D
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
---

# MedQA US 임상문제

## 문제

26세 여성이 피임 없이 성관계를 한 지 4일 됐다. 응급피임과 장기간 비호르몬 피임을 한 번에 원한다. 시술 금기는 없다. 선택은?

## 선택지

A. 울리프리스탈 복용 후 주기법
B. 레보노르게스트렐 경구약만 복용
C. 복합 경구피임약 지속 복용
D. 구리 자궁내장치 삽입

## 해설

구리 자궁내장치는 무방비 성관계 후 5일 이내 삽입하면 응급피임과 이후 장기피임을 함께 제공한다. 현재 음성 임신검사만으로 4일 전 성관계로 인한 임신을 배제할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 응급피임과 장기 피임을 함께 원하는 청소년에서 구리 IUD D 유지. 전날 임신은 음성 hCG로 배제할 수 없고 C의 단순 혈전위험 배제도 수정.
- https://www.cdc.gov/contraception/hcp/usspr/emergency-contraception.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005603
- https://www.who.int/news-room/fact-sheets/detail/emergency-contraception
