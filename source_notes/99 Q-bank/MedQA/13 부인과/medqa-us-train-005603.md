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

17세 여아가 전날 피임 없이 성관계를 가져 의사를 찾아왔다. 13세에 초경을 한 이후 월경은 28일 간격으로 규칙적이었다. 마지막 월경은 12일 전이었다. 신체검사에서 이상은 없고 소변 임신검사는 음성이다. 환자는 대학을 졸업할 때까지 임신을 원하지 않으며, 이번 방문 사실을 부모에게 알리고 싶어 하지 않는다. 다음 중 가장 적절한 관리 단계는 무엇인가?

## 선택지

A. 울리프리스탈 아세테이트 투여
B. 프로게스틴 함유 자궁 내 장치 삽입
C. 복합 경구피임약 투여
D. 구리 함유 자궁 내 장치 삽입

## 해설

전날 피임 없는 성관계에 대해 구리 IUD를 5일 이내 삽입하면 응급피임과 지속 피임이 가능하다(D). 현재 음성 hCG는 전날 관계로 인한 임신을 배제하지 못한다. 울리프리스탈도 응급피임 선택지지만 지속 피임을 별도로 계획해야 한다. 복합 경구피임약을 단지 청소년의 혈전위험 때문에 배제하는 설명은 부적절하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 응급피임과 장기 피임을 함께 원하는 청소년에서 구리 IUD D 유지. 전날 임신은 음성 hCG로 배제할 수 없고 C의 단순 혈전위험 배제도 수정.
- https://www.cdc.gov/contraception/hcp/usspr/emergency-contraception.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005603
