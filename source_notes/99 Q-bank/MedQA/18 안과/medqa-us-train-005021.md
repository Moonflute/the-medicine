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

65세 남자가 며칠 동안 눈 주위의 화끈거림과 가려움이 있었고 전날부터 안와 주위에 수포성 발진이 생겼다. 당뇨병, 천식, 계절성 알레르기, 고혈압 병력이 있다. 다음 중 가장 적절한 처치는?

## 선택지

A. 아시클로버
B. 경구 스테로이드
C. 국소 무피로신
D. 국소 스테로이드

## 해설

정답은 A, 아시클로버이다. 고령 환자의 눈 주위 작열감과 수포성 발진은 안부대상포진을 의심하게 하며, 적절한 전신 항바이러스 치료를 신속히 시작한다. 안구 표면이나 전방의 침범 여부를 확인하기 위한 안과 평가가 중요하며, 초기 진찰이 정상이어도 추적이 필요할 수 있다. 경구 또는 국소 스테로이드만 단독 투여하거나 무피로신으로 대체하지 않는다. 안구 염증에 스테로이드가 필요한 경우에도 안과 전문의가 항바이러스 치료와 함께 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 안주위 수포와 작열감은 안부대상포진 의심. acyclovir A 유지, 전신 항바이러스 및 신속 안과평가 필요와 스테로이드 단독 금지 보완.
- 공식/학회 근거: https://www.aad.org/public/diseases/a-z/shingles-treatment
- 공식/학회 근거: https://eyewiki.aao.org/Herpes_Zoster_Ophthalmicus

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005021
