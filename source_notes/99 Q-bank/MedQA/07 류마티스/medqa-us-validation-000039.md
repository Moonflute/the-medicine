---
type: qbank
schema_version: 1
id: medqa-us-validation-000039
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:75cadd7f826234aa19d1751454aff9b19214ff7ca63b29175796f5c930d9bbdd
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "전신홍반루푸스"
  - "면역성 혈구감소증"
  - "루푸스 신염"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTTEUpIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzIChTTEUpKS5tZA
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzKS5tZA
  - MDUg7Iug7J6lL-ujqO2RuOyKpCDsvantjKXsl7wgKEx1cHVzIE5lcGhyaXRpcykubWQ
question_type: mechanism
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
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

46세 여성이 점점 심해지는 호흡곤란과 흉통으로 응급실에 왔다. 양쪽 무릎·팔꿈치·손가락 관절통, 흉막 마찰음, 양쪽 뺨과 코를 가로지르는 홍반성 발진, 혈색소9 g/dL, Hct28%, 백혈구1,500/mm³(감별정상), 혈소판80,000/mm³ 및 단백뇨가 있었다. 흉부 X선에는 작은 좌측 흉수가 보였다. 검사실 결과의 주요 원인은?

## 선택지

A. 혈액암
B. 면역매개 파괴
C. 기계적 전단
D. 바이러스 감염

## 해설


SLE를 시사하는 다기관 증상에서 빈혈·백혈구감소·혈소판감소의 주기전은 자가항체 등에 의한 immune-mediated destruction B이다. 적혈구·혈소판 같은 표면항원에 대한 제II형 반응과 사구체의 제III형 면역복합체 침착은 구별해야 한다. 모든 혈구감소를 혈관벽 면역복합체가 직접 공격해서 생기는 것으로 설명하면 부정확하다. 실제로는 약물·감염·골수원인과 용혈 여부도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000039 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 혈구감소의 제II형 자가항체 파괴와 신염의 면역복합체 기전을 구분; 누락된검사수치복구.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000039
