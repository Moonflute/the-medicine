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
question_type: prevention
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

24세 여성이 전날 남자친구와 피임 없이 성관계를 하여 병원에 왔다. 12세 초경 이후 월경은 규칙적이며 마지막 월경은 3주 전이었다. 중대한 질환 병력은 없으나 특정 장신구와 금속 합금에 알레르기가 있다. 약물은 복용하지 않으며 소변 임신검사는 음성이다. 6개월 후 대학을 졸업할 때까지 임신을 원하지 않는다. 다음 중 가장 적절한 처치는?

## 선택지

A. 구리 함유 자궁내장치 삽입
B. 미페프리스톤 투여
C. 울리프리스탈 아세테이트 투여
D. 데포 메드록시프로게스테론 아세테이트 투여

## 해설

전날 피임 없는 성관계 후 임신을 원치 않으면 울리프리스탈(C)을120시간 이내 가능한 빨리 투여할 수 있다. 이는 응급피임이지 장기 피임은 아니므로 이후 방법을 상담한다. UPA 후 프로게스틴 피임 시작은 보통5일 뒤이며 그동안 장벽 피임이 필요하다. 금속 알레르기는 종류를 확인해야 하지만 구리IUD에 금속이 없다는 기존 설명은 틀리다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 정답C를 구리IUD로 잘못 매핑한 해설 및 금속 없는 구리IUD라는 오류 수정.
- https://www.cdc.gov/contraception/hcp/usspr/emergency-contraception.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000402
