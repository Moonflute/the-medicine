---
type: qbank
schema_version: 1
id: medqa-us-train-009124
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3c57e88a7d55c3e070cc678a0e0711564f04383225ada7ad2c4407bf6432f4a7
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "complicated diverticulitis"
  - "복잡성 게실염"
  - "diverticular abscess"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsozsi6Tsl7wgKERpdmVydGljdWxpdGlzKS5tZA
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
---

# MedQA US 임상문제

## 문제

56세 남자가 3일간 지속된 왼쪽 하복부 통증으로 응급실에 왔다. 그동안 미열이 있었고 배변을 하지 못했다. 변비 병력이 있으며 53세에 담낭절제술을 받았다. 지난 30년 동안 매일 담배 한 갑을 피웠다. 체온은 38.8°C, 맥박 80회/분, 호흡수 18회/분, 혈압 130/84 mmHg이다. 복부 진찰에서 반발통이나 근육 경직 없이 좌하복부 압통이 있다. 조영증강 복부 CT에서 하행결장의 분절성 벽 비후, 여러 게실, 주변 지방 침윤 및 5.5 cm 크기의 저음영 골반 액체 저류가 보인다. 정맥 수액과 장 휴식을 시작하고 모르핀, 시프로플록사신, 메트로니다졸 정맥 투여를 시작했다. 다음으로 가장 적절한 처치는 무엇인가?

## 선택지

A. 관찰하며 연속 CT 촬영
B. 복강경 좌측 반결장절제술
C. CT 유도 경피적 농양 배액
D. 결장 분절 절제술

## 해설


정답 C. CT에서 확인된 5.5cm 게실염성 골반 농양은 항생제에 더해 접근 가능하면 영상유도 경피 배액을 고려하는 큰 농양이다. 안정적인 이 환자에게 CT 유도 배액이 적절한 다음 단계다. 배액 불가능, 치료 실패, 악화 또는 복막염이면 수술을 검토한다. 이미 투여 중인 항생제의 구체적 적절성은 지역 내성과 환자 상태에 따라 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009124 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 5.5cm 골반 농양은 크기 자체만으로 즉시 수술이 아니라 가능한 영상유도 배액+항생제 대상임을 명확화.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://doi.org/10.1186/s13017-020-00313-4

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009124
