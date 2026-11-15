---
type: qbank
schema_version: 1
id: medqa-us-train-009812
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:263d49c0ee3b9946ef4f2a07f3ddaa0424a90fca0eeb188be80df9908c22a2bf
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "전신홍반루푸스"
  - "루푸스 신염"
  - "자가면역성 혈소판감소"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTTEUpIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzIChTTEUpKS5tZA
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzKS5tZA
  - MDUg7Iug7J6lL-ujqO2RuOyKpCDsvantjKXsl7wgKEx1cHVzIE5lcGhyaXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

33세 여성이 여러 손 관절의 활막염, 통증 없는 구강궤양과 혈소판감소로 내원했다. 요침사에서 변형 적혈구와 적혈구 원주가 보인다. 항핵항체와 항이중가닥 DNA 항체는 양성이고 C3는 낮다. 가장 가능성 높은 진단은?

## 선택지

A. 파르보바이러스 관절염
B. 전신홍반루푸스
C. 베체트병
D. 류마티스관절염

## 해설


관절·구강·혈액·신장 침범과 항이중가닥 DNA 양성, 낮은 보체는 전신홍반루푸스를 지지한다. 활동성 요침사와 신기능 상태를 확인해 루푸스신염을 추가 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009812 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 관절·구강궤양과 빈혈/혈소판감소·혈뇨/단백뇨/신기능이상의 다기관 패턴이 SLE B와 해설을 지지함을 확인.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009812
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13711245/
