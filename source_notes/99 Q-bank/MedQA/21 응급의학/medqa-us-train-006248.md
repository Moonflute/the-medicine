---
type: qbank
schema_version: 1
id: medqa-us-train-006248
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f142432f5668b773c237b75765d866f7bfb76beb3921e940bd9f0d011e2c3bcc
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "급성 후두개염"
  - "세균성 후두개염"
  - "기도 폐쇄"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6riJ7ISxIO2bhOuRkOqwnOyXvCAoQWN1dGUgRXBpZ2xvdHRpdGlzKS5tZA
difficulty: standard
answer: A
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

4세 남아가 발열, 연하통, 두통 및 목 경직으로 응급실에 내원했다. 증상은 잠에서 깬 직후 시작되었다. 지난 일주일 동안 인후통이 있었으나 오늘 아침 갑자기 악화되었다. 중대한 질환을 앓은 적은 없고 복용 중인 약도 없다. 어머니와 함께 집에서 살며, 형은 천식이 있다. 예방접종은 최신 상태이다. 아이는 급성 병색을 보인다. 체온은 38.4°C(101.2°F), 맥박은 분당 95회, 호흡수는 분당 33회, 혈압은 93/60 mm Hg이다. 침을 흘리고 목이 뻣뻣하며 신전이 제한되어 있다. 보조 호흡근을 사용하며 호흡이 힘들어 보인다. 흉부 청진에서 흡기성 협착음이 들린다. 심장 진찰은 정상이다. 구강인두 진찰에서 후인두벽이 돌출되어 있다. 정맥로를 확보하고 검사실 검사를 의뢰했다. 다음 중 이 환자의 처치로 가장 적절한 것은?

## 선택지

A. 기관내 삽관
B. 정맥 항생제 투여
C. 혈액 배양
D. 정맥 코르티코스테로이드 투여

## 해설

발열, 연하통, 침 흘림, 목의 신전 제한과 후인두벽 팽윤은 후인두농양을 시사한다. 천명과 보조 호흡근 사용은 상기도 폐쇄가 진행 중임을 보여 주므로 보기 중 기도 확보(A)가 우선이다. 소아 기도에 숙련된 마취과·이비인후과 팀을 즉시 호출하여 조절된 환경에서 기도를 확보하며, 불필요하게 인두를 자극하거나 검사 때문에 이를 지연하지 않는다. 이후 정맥 항생제와 농양 배액 필요성을 평가한다. 이 사례를 후두개염으로 단정하는 해설은 적절하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 인두 뒤쪽 팽윤과 경부 강직은 후인두농양을 시사한다. 후두개염으로 잘못 연결한 설명을 교체하며 심한 상기도 폐쇄에서 기도 확보 우선이라는 A를 유지한다.
- 공식/학회 근거: https://www.rch.org.au/clinicalguide/guideline_index/Acute_upper_airway_obstruction/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006248
