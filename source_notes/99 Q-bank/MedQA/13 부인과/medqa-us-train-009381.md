---
type: qbank
schema_version: 1
id: medqa-us-train-009381
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:98d42a830450e477cff5c41261ccae7fbbfdf01062c3b2804cf68d81a674627f
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "lactational mastitis"
  - "수유성 유방염"
  - "Staphylococcus aureus"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yImOycoOq4sCDsnKDrsKnsl7wgKExhY3RhdGlvbmFsIE1hc3RpdGlzKS5tZA
  - MDgg6rCQ7Je8L-2PrOuPhOyVjOq3oCDqsJDsl7wgKFN0YXBoeWxvY29jY2FsIEluZmVjdGlvbikubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 여성이 4일 동안 오른쪽 유방이 붓고 권태감과 수유 시 통증이 있어 내원했다. 3주 전 건강한 3500 g(7.7 lb) 여아를 출산했다. 중증 질환 병력은 없고 어머니가 55세에 유방암으로 사망했다. 유일한 약물은 종합비타민이다. 체온 38°C이며 오른쪽 유방이 단단하게 붓고 발적되며 압통이 있다. 왼쪽 유방은 정상이다. 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 디클록사실린 투여와 수유 지속
B. 수유 지속, 냉찜질, 이부프로펜
C. 수유 중단 및 유방촬영술
D. 수유 중단 및 유방 생검

## 해설

4일간 국소 염증과 발열·권태감이 지속되어 세균성 수유 유방염이 의심된다. 디클록사실린(A)은 MSSA를 표적으로 하는 항포도알균 페니실린이다. 수유를 지속하고 냉찜질·진통 등도 병행한다. 항생제나 수유 후 호전이 없으면 배양·농양을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 유방염의 디클록사실린·수유 지속 A 유지. 디클록사실린은 1세대 세팔로스포린이 아니라 항포도알균 페니실린이다.
- https://www.bfmed.org/assets/ABM%20Protocol%20%2336.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009381
