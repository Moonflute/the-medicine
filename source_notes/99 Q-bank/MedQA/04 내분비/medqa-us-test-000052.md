---
type: qbank
schema_version: 1
id: medqa-us-test-000052
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:df5eb36b2bfce1435e84022e4072fc11a2c40d582b7227f422d949ae01b05927
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "일차성 알도스테론증"
  - "저칼륨혈증"
  - "대사성 알칼리증"
related_disease_slugs:
  - MDQg64K067aE67mEL-yVjOuPhOyKpO2FjOuhoOymnSAoQWxkb3N0ZXJvbmlzbSkubWQ
  - MDUg7Iug7J6lL-yggOy5vOulqO2YiOymnSAoSHlwb2thbGVtaWEpLm1k
question_type: mechanism
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

고혈압 병력이 있는 56세 남성이 점점 심해지는 피로와 새로 발생한 근육 경련으로 내원했다. 최근 약물(히드로클로로티아지드, 리시노프릴, 암로디핀) 변화는 없다. 체온 98.0°F(36.7°C), 혈압 174/111 mmHg, 맥박 분당 70회, 호흡수 분당 12회, 산소포화도 98%이다. 심폐 및 복부 진찰은 정상이다. 혈청 Na⁺ 138, Cl⁻ 100, K⁺ 3.3, HCO₃⁻ 33 mEq/L, BUN 20 mg/dL, 포도당 129 mg/dL이다. 이 환자 고혈압의 가장 가능성 높은 기저 원인은?

## 선택지

A. 알도스테론 과다
B. 카테콜아민 분비 종괴
C. 코르티솔 과다
D. 신장 관류 장애

## 해설

고혈압에 저칼륨혈증과 대사성 알칼리증이 동반되어 보기 중 알도스테론 과다(A)를 의심한다. 알도스테론은 Na⁺ 재흡수와 함께 K⁺·H⁺ 배설을 증가시킨다. 다만 티아지드 복용이나 신관류 저하도 유사한 패턴을 만들 수 있어 전해질 소견만으로 원발성 알도스테론증을 확진하지 않는다. 실제로는 약물 영향 등을 고려한 레닌·알도스테론 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 36.7°F를 원문의 98.0°F(36.7°C)로 복원하고 HCTZ/신혈관성 원인도 전해질 패턴을 만들 수 있어 확진은 아님을 명시.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000052
