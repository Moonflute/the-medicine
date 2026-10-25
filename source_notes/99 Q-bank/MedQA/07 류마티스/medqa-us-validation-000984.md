---
type: qbank
schema_version: 1
id: medqa-us-validation-000984
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:0d2a2413f11e84d63850d0f33fc9dd29be64c29a60fb3c6a582e426daf350714
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
difficulty: standard
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

29세 여성이 3주간 손이 붓고 아침에 약 10분 지속되는 뻣뻣함이 있어 진료를 받으러 왔다. 얼굴에 나비 모양의 비창백성 발진, 경한 경부 림프절병증, 중수지관절과 근위지절관절의 압통 및 부종이 있다. Levothyroxine으로 갑상샘기능저하증을 치료 중이며 심첨부에서2/6등급 전수축기 잡음이 들린다. 가장 적절한 다음 평가 검사는?

## 선택지

A. 항이중가닥 DNA 항체
B. 항U1 리보핵단백 항체
C. 항핵항체
D. 항히스톤 항체

## 해설


SLE가 의심되는 피부·관절 소견에서 ANA C는 민감한 초기 혈청검사이다. ANA는 다른 자가면역질환과 건강인에서도 양성일 수 있으므로 특이도가 가장 높거나 단독으로 확진하는 검사는 아니다. 양성이면 임상상에 맞춰 anti-dsDNA/Sm, complement, CBC·신장·소변 등을 추가한다. Anti-U1RNP나 anti-histone은 감별 맥락에 따라 해석한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000984 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: ANA를가장민감하고특이하다고한오류를 민감하나비특이적 초기검사로 교정; 누락된심잡음·약물복구.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://doi.org/10.1093/rheumatology/keag223

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000984
