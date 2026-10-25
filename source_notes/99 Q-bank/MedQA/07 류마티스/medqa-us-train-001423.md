---
type: qbank
schema_version: 1
id: medqa-us-train-001423
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3ba35e9ec1216f6e182eb7ce81ac3716c8843e39f81fe95bf040b87ffed7ed19
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "acute gout"
  - "podagra"
  - "hyperuricemia"
  - "Gout"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-2Gte2SjSAoR291dCkubWQ
question_type: management
difficulty: complex
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0NlbGVjb3hpYi5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0NvbGNoaWNpbmUubWQ
---

# MedQA US 임상문제

## 문제

55세 남성이 오른쪽 발 통증으로 급성진료소에 내원했다. 통증이 심해 신발과 양말을 벗어야 했고 통증 정도는 10점 만점에 6점이다. 외상이나 최근 감염은 없다. 고혈압 병력이 있고 히드로클로로티아지드, 에날라프릴 및 종합비타민을 복용한다. 가족력은 특이사항이 없고 술은 적당히 마신다. 식사는 주로 붉은 고기와 흰쌀이다. 혈압은 137/85 mm Hg, 심박수는 74회/분, 호흡수는 12회/분, 체온은 36.9°C (98.4°F)이다. 오른쪽 첫 번째 발허리발가락관절에 종창, 발적 및 압통이 있다. 피부 병변은 없다. 관절천자를 시행할 예정이다. 다음 중 가장 가능성 높은 약물치료는 무엇인가?

## 선택지

A. 프로베네시드 단독
B. 경구 메틸프레드니솔론과 멜록시캄
C. 콜히친과 셀레콕시브
D. 디클로페낙 단독

## 해설


전형적인 제1중족지관절 급성 단관절염과 thiazide·식이 요인은 통풍을 시사한다. 관절액 결정과 감염 여부를 평가하면서, 금기가 없다면 NSAID 단독 치료인 diclofenac(D)이 적절하다. 현재 지침에서 NSAID·저용량 colchicine·glucocorticoid는 모두 환자 조건에 따라 선택 가능한 1차 항염증 치료이다. 이 정도의 단관절 발작에서 처음부터 NSAID와 전신 steroid를 병용할 필요는 없으며 probenecid는 급성 통증 치료제가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001423 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 급성 통풍의 여러 1차 항염증 치료 중 diclofenac 단독이 적합함을 설명하고 특정 NSAID만 유일한 1차약이라는 표현을 수정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10563586/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001423
