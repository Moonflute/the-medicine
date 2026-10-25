---
type: qbank
schema_version: 1
id: medqa-us-validation-000141
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:0e5fc221268a652a8a124ba20fd8408990b425714e7814d254e5be2b462592a8
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "비대성 유문협착증"
  - "에리트로마이신"
  - "영아 분출성 구토"
question_type: mechanism
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE64yAIOuCoOusuCDtmJHssKnspp0gKEh5cGVydHJvcGhpYyBQeWxvcmljIFN0ZW5vc2lzKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 6주 된 남아가 4일간 매번 수유 후 분출성 구토로 소아과에 왔다. 생후 1주에 백일해양 기침을 동반한 호흡기 감염으로 에리트로마이신을 받았다. 현재 기면, 탈수, 함몰된 대천문과 상복부의 단단한 무통성 종괴가 있다. 증상의 가장 가능성 높은 원인은?

## 선택지

A. 산화질소 합성효소 결핍
B. 항생제 사용
C. 장신경총의 불충분한 신경지배
D. 근위 장의 원위부 내강으로의 함입

## 해설

수유 후 분출성 구토·탈수와 상복부 올리브양 종괴는 비후성 유문협착을 시사한다. 생후 이른 시기의 에리트로마이신 노출과 관련이 보고되어 B가 가장 적절하다. 에리트로마이신은 모틸린 작용과 관련된 위장운동 촉진 성질이 있어 단순히 장신경총을 억제해 위장운동을 감소시킨다고 설명하면 안 된다. CDC는 마크롤라이드와 유문협착 연관성을 경고하지만, 어린 영아 백일해에서는 중증 감염 치료 이득도 함께 고려하도록 하므로 이 문항만으로 필요한 항생제 치료를 피하라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 생후 1주 항생제 노출을 내원 1주 전으로 잘못 옮긴 시간 오류와 에리트로마이신이 장운동을 억제한다는 역방향 설명을 교정했다.
- https://www.cdc.gov/pertussis/hcp/clinical-care/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000141
