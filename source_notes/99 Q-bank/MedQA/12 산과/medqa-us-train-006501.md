---
type: qbank
schema_version: 1
id: medqa-us-train-006501
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b03baa279375bd4935072695a766cb8480979939ba09ed97cd5766eb9a0632e0
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "수유성 유선염"
  - "산후 유방 감염"
  - "모유수유 지속"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yCsOyaleq4sCDsnKDrsKnsl7wgKFB1ZXJwZXJhbCBNYXN0aXRpcykubWQ
difficulty: standard
answer: C
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

36세 여성(Gravida 3, Para 3)이 왼쪽 유방 통증으로 산후 진료실에 내원했다. 3주 전 출산했고 유방 통증은 어제 시작되었다. 출생 후 아기에게 모유만 먹이고 있다. 지난 2일 동안 몸이 좋지 않았고 피로감과 근육통이 있었다. 체온은 38.3°C(101°F)이다. 진찰에서 왼쪽 유방 바깥쪽이 붉고 따뜻하다. 다음 중 처치로 가장 적절한 것은?

## 선택지

A. 입원 조치
B. 항생제를 처방하고 증상이 사라질 때까지 모유수유 중단
C. 항생제를 처방하고 모유수유를 계속하도록 설명
D. 이 감염은 보통 며칠 내에 저절로 호전된다고 안심시키고 모유수유 계속 권고

## 해설

발열·전신 증상과 국소 유방 발적·열감은 세균성 수유성 유선염을 의심하게 한다. 선택지 중 항생제와 모유수유 지속(C)이 적절하며 대부분 입원이나 수유 중단이 필요 없다. 평소 영아 요구에 맞춰 수유하고 과도한 펌핑·강한 마사지를 권하지 않는다. 악화·농양 의심 또는 호전 없으면 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원문 나이36을35로 오역; 세균성 유선염 치료와 정상 수유 지속·과도한 배출 회피.
- https://www.bfmed.org/assets/ABM%20Protocol%20%2336.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006501
