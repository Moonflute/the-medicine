---
type: qbank
schema_version: 1
id: medqa-us-validation-001217
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e285ba62c3abf2a8fe20a4e8a43c6527024260f33463a379f11db4884f4b4a08
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "전신홍반루푸스"
  - "나비모양 발진"
  - "항핵항체"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTTEUpIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzIChTTEUpKS5tZA
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzKS5tZA
question_type: investigation
difficulty: complex
answer: C
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
---

# MedQA US 임상문제

## 문제

22세 여성이 3주 전 여름 하이킹 뒤 시작된 얼굴 발진, 아침에 악화되는 손·손목 통증과 구강궤양으로 진료를 받으러 왔다. 발진은 비순구를 침범하지 않고, 중수지관절 압통과 정상적혈구성 빈혈 및 혈소판감소증이 있다. 진단을 위한 가장 적절한 다음 검사는?

## 선택지

A. 항카디오리핀 항체
B. 항이중가닥 DNA 항체
C. 항핵항체
D. 항Smith 항체

## 해설


광노출 뒤 malar rash, 구강궤양·염증성 관절 증상과 혈구감소는 SLE를 의심하게 하므로 초기 ANA C가 적절하다. ANA는 민감하지만 비특이적이며 anti-dsDNA와 anti-Sm은 보다 특이적인 확인 검사로 임상상에 맞춰 사용한다. 다른 항체가 특정 상황에서만 의미 없다는 식으로 배제하거나 ANA단독으로 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001217 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: ANA의 특이도 과장 교정, 햇빛노출 뒤 발진이라는 원문 맥락복구.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://doi.org/10.1093/rheumatology/keag223

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001217
