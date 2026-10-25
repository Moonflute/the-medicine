---
type: qbank
schema_version: 1
id: medqa-us-train-004440
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ec2f4f05ec404ac2a7268b920f4b9079b935920711d48ba155d8516d43b289e1
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "에를리키아증"
  - "Ehrlichia 감염"
  - "진드기 매개 감염"
related_disease_slugs:
  - MDgg6rCQ7Je8L-udvOyehOuzkSAoTHltZSBEaXNlYXNlKS5tZA
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

33세 남성이 발열과 피로로 응급실에 왔다. 앨라배마에서 하이킹을 다녀온 뒤부터 몸이 좋지 않았다고 한다. 전반적으로 건강하고 다른 질환은 없다. 체온은 101°F (38.3°C), 혈압은 127/85 mmHg, 맥박은 분당 108회, 호흡수는 분당 14회, 실내 공기 산소포화도는 99%이다. 피부를 포함한 전체 신체검사는 특이사항이 없다. 검사 결과는 다음과 같다.
헤모글로빈 13 g/dL
헤마토크릿 39%
백혈구 2,200/mm3 (감별계산 정상)
혈소판 77,000/mm3

혈청:
Na+ 139 mEq/L
Cl- 100 mEq/L
K+ 4.3 mEq/L
HCO3- 24 mEq/L
BUN 19 mg/dL
포도당 98 mg/dL
크레아티닌 1.3 mg/dL
Ca2+ 10.2 mg/dL
AST 92 U/L
ALT 100 U/L

가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 에를리키아증
B. 인플루엔자
C. 라임병
D. 로키산 홍반열

## 해설


미국 남동부 야외 노출 뒤 발열·백혈구감소·혈소판감소와 AST/ALT 상승은 Ehrlichia chaffeensis 관련 ehrlichiosis A에 부합한다. 발진이 없어도 가능하다. Lyme이나 influenza만으로 이 조합을 더 잘 설명하기 어렵지만 지역 노출 하나만으로 균종을 확진하지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004440 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Ehrlichia chaffeensis 균명 오기 교정; 백혈구/혈소판 감소·transaminase의 A 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/ehrlichiosis/treatment/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004440
