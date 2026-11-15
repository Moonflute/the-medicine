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

55세 남성이 결정으로 확인된 급성 통풍으로 오른쪽 첫 발허리발가락관절이 심하게 아프다. 감염 가능성은 낮다. 최근 출혈성 위궤양이 있었고 경구 콜히친과 중대한 상호작용이 있는 약을 복용한다. 신기능과 혈당은 안정적이다. 적절한 발작 치료는?

## 선택지

A. 경구 프로베네시드 단독
B. 디클로페낙과 멜록시캄을 함께 복용
C. 콜히친을 평소보다 증량
D. 단기간 경구 글루코코르티코이드

## 해설


국내 지침은 NSAID, 콜히친, 글루코코르티코이드 중 환자 상태에 맞춰 선택한다. 위장관 출혈 위험과 콜히친 상호작용이 있다면 짧은 스테로이드 치료가 적절한 선택지다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001423 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 급성 통풍의 여러 1차 항염증 치료 중 diclofenac 단독이 적합함을 설명하고 특정 NSAID만 유일한 1차약이라는 표현을 수정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10563586/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001423
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10493448/
