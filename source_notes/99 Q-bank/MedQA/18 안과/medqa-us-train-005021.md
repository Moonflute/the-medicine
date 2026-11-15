---
type: qbank
schema_version: 1
id: medqa-us-train-005021
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:05b10899e3006b2434e1bc4f81487295da8761a5613813cfd00ed1e36e2a6fe6
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "안구대상포진"
  - "수두-대상포진 바이러스"
  - "각막 합병증 예방"
question_type: management
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uMgOyDgSDtj6zsp4QgKEhlcnBlcyBab3N0ZXIpLm1k
  - MDgg6rCQ7Je8L-yImOuRkC3rjIDsg4Htj6zsp4Qg67CU7J2065-s7IqkIOqwkOyXvCAoVmFyaWNlbGxhLVpvc3RlciBWaXJ1cyBJbmZlY3Rpb24pLm1k
difficulty: simple
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
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 환자의 한쪽 이마와 윗눈꺼풀에 통증성 수포가 생겼다. 발진은 정중선을 넘지 않고 코끝에도 수포가 있다. 눈이 충혈되고 빛이 불편하다. 다음 처치는?

## 선택지

A. 전신 항바이러스 치료를 신속히 시작하고 안과 평가를 진행한다
B. 국소 스테로이드만 시작한다
C. 피부 항균 연고만 바르고 관찰한다
D. 각막 침범이 확인될 때까지 항바이러스제를 미룬다

## 해설

삼차신경 첫째 가지 분포의 대상포진과 눈 증상은 각막·포도막 침범 가능성이 있다. 전신 치료와 안과 평가를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 안주위 수포와 작열감은 안부대상포진 의심. acyclovir A 유지, 전신 항바이러스 및 신속 안과평가 필요와 스테로이드 단독 금지 보완.
- 공식/학회 근거: https://www.aad.org/public/diseases/a-z/shingles-treatment
- 공식/학회 근거: https://eyewiki.aao.org/Herpes_Zoster_Ophthalmicus

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005021
- https://www.aao.org/eyenet/article/herpes-zoster-ophthalmicus-pearls
