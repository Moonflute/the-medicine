---
type: qbank
schema_version: 1
id: medqa-us-test-000898
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:47601549e08c7718d63cab3b34206035e05cb946a81122e2f0cb409802afcecc
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "출혈성 방광염"
  - "시클로포스파마이드"
  - "메스나"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-y2nO2YiOyEsSDrsKnqtJHsl7wgKEhlbW9ycmhhZ2ljIEN5c3RpdGlzKS5tZA
question_type: prevention
difficulty: standard
answer: B
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2hsb3JvcXVpbmUubWQ
---

# MedQA US 임상문제

## 문제

37세 여성이 다리의 통증과 부종으로 진료를 받으러 왔다. 6주 전부터 부종이 시작되어 점점 심해졌고 걷기 어렵고 신발도 맞지 않았다. 전신홍반루푸스 병력이 있어 이부프로펜과 하이드록시클로로퀸을 복용한다. 체온 99°F(37.2°C), 혈압 153/86 mmHg, 맥박 88회/분이고 양쪽 무릎까지 함요부종과 단백뇨가 있었다. 면역억제제를 시작했으나 이틀 후 혈뇨가 생겼다. 요검사에서 적혈구가 보였고 방광경에서 방광점막의 광범위한 삼출과 신생혈관이 관찰되었다. 다음 중 이 상태를 예방할 수 있었던 것은?

## 선택지

A. 이포스파마이드
B. 메스나
C. 메토트렉세이트
D. 니트로푸란토인

## 해설


루푸스 신염에 사용된 cyclophosphamide의 아크롤레인 등 요로독성 대사산물은 출혈성 방광염을 유발할 수 있다. Mesna(B)는 이를 결합·불활성화해 예방하는 약이며 cyclophosphamide와 같은 약이 아니다. 메스나를 피해야 예방된다는 기존 해설은 반대이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000898 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 메스나 B 정답인데 피하라고 권한 정반대 해설을 교체. cyclophosphamide와 mesna를 동일 약물로 혼동한 오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/publications/dictionaries/cancer-drug/def/mesna

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000898
