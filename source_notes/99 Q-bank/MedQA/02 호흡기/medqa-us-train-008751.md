---
type: qbank
schema_version: 1
id: medqa-us-train-008751
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:79eadfaaf46c1cfb5e7d6f4e47fffc906d90a64303238bd33a5c6644d574d889
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "pneumonia"
  - "ventilation-perfusion mismatch"
  - "A-a gradient"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Y-Q66C0IChQbmV1bW9uaWEpLm1k
question_type: mechanism
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남성이 2일 동안 황색 가래를 동반한 기침으로 응급실에 내원했다. 발열, 오한, 점점 심해지는 호흡곤란이 있었다. 10년 동안 고혈압과 고지혈증이 있었고 음주와 흡연은 하지 않는다. 아토르바스타틴, 암로디핀, 메토프롤롤을 복용한다. 체온 38.9°C(102.0°F), 맥박 105회/분, 호흡수 27회/분, 혈압 110/70mmHg이다. 경미한 호흡곤란이 있고 왼쪽 하폐야에 수포음이 들린다. 백혈구 15,000/mm³(분절 호중구 87%)이다. 실내 공기 동맥혈가스에서 pH 7.44, pO₂ 68mmHg, pCO₂ 28mmHg, HCO₃⁻ 24mEq/L, 산소포화도 91%이다. 흉부 X선에서 왼쪽 하엽에 경화가 보인다. 환자를 왼쪽 측와위로 눕히면 다음 중 어떤 변화가 가장 잘 나타나는가?

## 선택지

A. 오른쪽 폐 관류 증가
B. 저산소혈증 호전
C. 왼쪽 폐 환기 감소
D. A-a 산소분압 차이 증가

## 해설

좌하엽 폐렴으로 환기가 저하된 왼쪽 폐를 아래로 두면 중력에 의해 그쪽 관류가 증가하여 낮은 V/Q와 단락 효과가 커질 수 있다. 따라서 D처럼 A–a 산소분압 차이가 증가하고 산소화가 악화될 수 있다. 이는 단순히 병변 폐의 환기만 더 줄기 때문이라는 설명과 다르다. 원문의 pH, PaCO2, HCO3 조합은 서로 완전히 맞지 않아 혈액가스 수치는 별도 확인이 필요하지만, 이 체위 변화의 생리적 원리는 구별할 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 병변 폐를 아래로 둘 때 산소화 악화의 주된 기전을 환기 감소보다 관류 증가로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008751
