---
type: qbank
schema_version: 1
id: medqa-us-train-003545
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:acad02368a3e1cb494e87e3fe0086807bf047ec56c0f431e7d83378bc7fd665b
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "lactational mastitis"
  - "Staphylococcus aureus"
  - "breastfeeding continuation"
  - "dicloxacillin"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yImOycoOq4sCDsnKDrsKnsl7wgKExhY3RhdGlvbmFsIE1hc3RpdGlzKS5tZA
  - MDgg6rCQ7Je8L-2PrOuPhOyVjOq3oCDqsJDsl7wgKFN0YXBoeWxvY29jY2FsIEluZmVjdGlvbikubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

출산 3주 후 모유수유 중인 26세 여성이 발열과 붉고 부은 오른쪽 유방의 통증으로 내원했다. 체온은 38.8°C였고 유두에서 고름이 나왔지만 변동감은 없었다. 다음 중 올바른 관리 전략은?

## 선택지

A. 디클록사실린을 처방하고 모유수유를 계속하도록 권한다
B. 트리메토프림-설파메톡사졸로 치료하고 모유수유를 계속하도록 권한다
C. 트리메토프림-설파메톡사졸을 처방하고 감염된 유방을 비우되 수유하지 않도록 권한다
D. 클린다마이신으로 치료하고 호전될 때까지 모유수유를 중단하도록 권한다

## 해설


수유부의 급성 유방염은 주로 Staphylococcus aureus에 의해 발생하며, 베타-락타메이스 저항성 균주에 대해 디클록사실린이 1차 선택약이다. 치료와 동시에 모유수유를 지속하면 유관이 개방되고 증상이 빠르게 호전된다. 따라서 디클록사실린 처방 후 모유수유를 계속하는 것이 올바른 관리이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003545
