---
type: qbank
schema_version: 1
id: medqa-us-train-007230
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fdbe7a307d977ac17c9dc3a7961ce70a1944ad82acfe037a27f218d4230d7c8b
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "복합 경구피임약"
  - "체중 증가"
  - "피임약 부작용"
  - "안심"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-qyveq1rO2UvOyehOyVvSAoT3JhbCBDb250cmFjZXB0aXZlcykubWQ
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 여자가 최근 체중 증가로 내원했다. 6개월 전 생리통과 여드름 때문에 복합 경구피임약을 시작했다. 약을 꾸준히 복용하고 매 피임약 포장의 4주째에 철회성 출혈이 있다. 여드름과 생리통은 크게 호전되었다. 3개월 전부터 매일 운동을 60분간 달리기와 웨이트 트레이닝으로 늘렸다. 6개월 전 대학에 입학했다. 수면이나 에너지 수준의 변화는 없다. 키는 162cm, 체중은 62kg이며 6개월 전에는 55kg이었다. 진찰에서 피부는 깨끗하고 다른 이상은 없다. 소변 임신검사는 음성이다. 다음 중 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. 환자를 안심시킨다
B. 혈청 TSH를 측정한다
C. 저용량 덱사메타손 억제검사를 시행한다
D. 비호르몬 피임법으로 변경한다

## 해설

임신검사와 진찰이 정상이고 다른 내분비 증상은 없다. 체중 변화와 생활·식사·운동을 검토하고 경과를 추적하며 안심시킨다(A). 복합 피임약이 체중 증가를 유발한다는 충분한 근거는 없으므로 약물 부작용으로 단정하거나 무조건 비호르몬법으로 바꾸지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 정답 A 유지. 복합 피임약이 7kg 체중 증가의 입증된 원인이라는 해설을 교정.
- https://www.nhs.uk/contraception/methods-of-contraception/combined-pill/side-effects/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007230
