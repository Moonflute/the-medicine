---
type: qbank
schema_version: 1
id: medqa-us-train-006458
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2889a64994ad2219f5ef369c36a1a8aa51e26d576817b3b58f673a767d84b8b3
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "가스괴저"
  - "괴사성 근막염"
  - "클로스트리디움 퍼프린젠스"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qwgOyKpCDqtLTsoIAgKEdhcyBHYW5ncmVuZSkubWQ
  - MDgg6rCQ7Je8L-q0tOyCrOyEsSDqt7zrp4nsl7wgKE5lY3JvdGl6aW5nIEZhc2NpaXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: A
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

낫에 오른쪽 허벅지를 베어 입원하여 수술적 치료를 받은 35세 남성이 이틀 후 발열, 오한 및 심한 통증을 보였다. 상처는 부어 있다. 4개월 전 비슷한 손상을 입었으나 바시트라신 연고와 매일 드레싱으로 호전되었다. 도시 외곽 농장에서 일한다. 불안해 보인다. 체온은 38.5°C(101.3°F), 맥박은 분당 103회, 혈압은 114/76 mm Hg이다. 진찰에서 오른쪽 허벅지 안쪽에 6cm 크기의 부종성 깊은 상처가 있고 악취가 난다. 허벅지 피부는 하퇴보다 어둡고 상처 주위에 물집이 여러 개 있다. 상처 주변을 가볍게 만져도 심한 통증이 유발되며 염발음이 있다. 다음 중 원인균으로 가장 가능성 높은 것은?

## 선택지

A. 클로스트리디움 퍼프린젠스
B. 녹농균
C. 리조푸스 오리자에
D. 황색포도알균

## 해설


토양 오염 가능 깊은 외상 뒤 급격한 심한 통증·수포·변색·염발음은 clostridial myonecrosis/gas gangrene을 의심하게 하며 A가 가장 부합한다. C.perfringens는 가스괴저의 대표 원인이지 모든 괴사성 근막염의 보편적 단일 원인은 아니다. 다른 균/혼합감염도 가스를 만들 수 있으며 실제로 즉각적 외과 평가·변연절제와 적절한 항균치료가 필요한 응급상황이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006458 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Gas gangrene의 C.perfringens A 유지; 모든 괴사근막염의 흔한 단일균이라는 일반화 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006458
