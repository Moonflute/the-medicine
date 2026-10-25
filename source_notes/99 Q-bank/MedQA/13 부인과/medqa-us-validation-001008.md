---
type: qbank
schema_version: 1
id: medqa-us-validation-001008
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:a3214361cf9ffb67d7ab2d57081e73487ae2938af025cd0b3d9bd66aa313cc86
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "응급피임"
  - "구리 자궁내장치"
  - "정맥혈전색전증 병력"
question_type: prevention
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geuCtOyepey5mCAoSW50cmF1dGVyaW5lIERldmljZSkubWQ
difficulty: standard
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

27세 G2P2 여성이 전날 밤 성관계 중 콘돔이 찢어진 후 임신을 걱정하여 산부인과에 왔다. 3세 미만 자녀가 두 명 있고 당분간 더 아이를 원하지 않는다. 마지막 제왕절개 후 다리 혈전으로 6개월간 항응고 치료를 받아 경구피임약은 복용할 수 없다고 한다. 가장 적절한 권고는?

## 선택지

A. 임신 가능성이 낮다고 안심시킨다
B. 낙태 클리닉으로 의뢰한다
C. 에토노게스트렐 임플란트를 권고한다
D. 구리 자궁내장치를 권고한다

## 해설

구리 IUD(D)는 5일 이내 응급피임과 장기 피임을 동시에 제공하고 혈전 위험을 높이지 않는다. 혈전 병력에서 특히 에스트로겐 함유 피임은 주의·회피 대상이나 모든 프로게스틴 단독법이나 경구 응급피임약까지 금기라는 뜻은 아니다. 에토노게스트렐 임플란트는 이미 발생한 관계의 응급피임을 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 전날 관계의 응급피임·지속피임에 구리 IUD D 유지. 모든 경구·호르몬 피임을 혈전 병력으로 금기화한 설명 수정.
- https://www.cdc.gov/contraception/hcp/usspr/emergency-contraception.html
- https://www.cdc.gov/mmwr/volumes/73/rr/rr7304a1.htm/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001008
