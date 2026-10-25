---
type: qbank
schema_version: 1
id: medqa-us-train-004802
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fd169c473138e80a6962415f5668929862526b29642d562b6676440c9877d948
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "로키산 홍반열"
  - "Rickettsia rickettsii"
  - "진드기 매개 감염"
related_disease_slugs:
  - MDgg6rCQ7Je8L-udvOyehOuzkSAoTHltZSBEaXNlYXNlKS5tZA
question_type: management
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

특별한 과거력이 없는 26세 남성이 버지니아에서 친구들과 캠핑을 다녀왔다. 돌아온 지 며칠 후 발열, 두통, 근육통과 권태감이 생겼고 손목과 발목에 발진이 생겼다(그림 A). 이 상태의 치료로 무엇을 시작해야 하는가?

## 선택지

A. 피라진아미드
B. 반코마이신
C. 아지스로마이신
D. 독시사이클린

## 해설


버지니아 야외 노출 뒤 발열·두통·근육통과 손목/발목에서 시작한 발진은 RMSF를 시사한다. Doxycycline D는 의심 시 검사 결과를 기다리지 않고 시작할 약이다. Lyme은 Borrelia에 의한 다른 감염이며 RMSF와 같은 이름으로 묶어 설명하면 안 된다. 그림이 없어도 본문의 분포와 전신 증상으로 경험적 치료 필요성을 판단할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004802 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: RMSF를 Lyme과 혼동한 설명 교정; doxycycline D 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/rocky-mountain-spotted-fever/hcp/clinical-care/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004802
