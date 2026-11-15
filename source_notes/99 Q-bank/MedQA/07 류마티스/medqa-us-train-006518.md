---
type: qbank
schema_version: 1
id: medqa-us-train-006518
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:519b3c5b13d1843f66ed5c6e3202ad3969a20b033db140d1f5b5c807dfa23b11
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "재발성 통풍"
  - "고요산혈증"
  - "알로푸리놀 예방요법"
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FsbG9wdXJpbm9sLm1k
---

# MedQA US 임상문제

## 문제

56세 남성이 1년 동안 결정으로 확인된 통풍 발작을 네 차례 겪었다. 현재 발작은 가라앉았고 신기능은 정상이다. 알로푸리놀 금기는 없고 HLA-B*58:01도 음성이다. 적절한 장기 계획은?

## 선택지

A. 증상이 있을 때만 NSAID를 쓰고 요산은 추적하지 않는다
B. 아스피린을 요산저하제로 시작한다
C. 페글로티케이스부터 사용한다
D. 저용량 알로푸리놀을 시작해 혈청 요산 6 mg/dL 미만을 목표로 조절한다

## 해설


잦은 발작은 장기 요산저하 치료의 적응증이다. 알로푸리놀은 낮은 용량부터 시작해 목표 요산에 맞춰 조절하며, 시작 초기에는 금기가 없다면 발작 예방 항염증 치료도 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006518 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Aspirin을 통풍 급성기 약으로 권하고 대안 요산저하제를 모두 부작용 약으로 취급한 설명을 교정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10563586/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006518
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10493448/
- https://doi.org/10.1002/acr.24180
