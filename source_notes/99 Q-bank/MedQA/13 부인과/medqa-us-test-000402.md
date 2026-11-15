---
type: qbank
schema_version: 1
id: medqa-us-test-000402
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:fdb2ddde0974f4f2008775f501f91d247906db644c03a40da140b91f2ae04fb9
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "응급피임"
  - "울리프리스탈"
  - "피임"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geuCtOyepey5mCAoSW50cmF1dGVyaW5lIERldmljZSkubWQ
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 여성이 피임 없이 성관계를 한 지 96시간 뒤 응급피임을 요청했다. 자궁내장치는 원하지 않으며 경구약을 원한다. 국내 허가된 용법에 맞는 선택은?

## 선택지

A. 레보노르게스트렐 1.5 mg 1회
B. 데포 메드록시프로게스테론 주사
C. 울리프리스탈 아세테이트 30 mg 1회
D. 에티닐에스트라디올 단독 1회

## 해설

국내 울리프리스탈 아세테이트는 무방비 성교 후 120시간 이내 가능한 빨리 복용한다. 국내 레보노르게스트렐 응급피임약 허가 시간은 72시간 이내다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 정답C를 구리IUD로 잘못 매핑한 해설 및 금속 없는 구리IUD라는 오류 수정.
- https://www.cdc.gov/contraception/hcp/usspr/emergency-contraception.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000402
- https://nedrug.mfds.go.kr/pbp/CCBFC03/getItem?tchmtrId=SU201911240034
- https://www.who.int/news-room/fact-sheets/detail/emergency-contraception
