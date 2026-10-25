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
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
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

고열·국소 발적·통증·화농성 분비물은 세균성 수유 유방염에 합당하다. 디클록사실린은 일반적인 감수성 포도알균에 대한 1차 약제이며 수유를 지속할 수 있다(A). MRSA에는 효과가 없다. 과도하게 짜내거나 깊은 마사지를 하지 않고 호전이 없으면 배양·농양 평가를 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 세균성 수유 유방염의 디클록사실린·수유 지속 A 유지. 베타락타메이스 저항성 균주라는 잘못된 표현을 제거.
- https://www.bfmed.org/assets/ABM%20Protocol%20%2336.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003545
