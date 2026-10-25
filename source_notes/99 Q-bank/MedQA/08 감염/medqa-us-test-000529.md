---
type: qbank
schema_version: 1
id: medqa-us-test-000529
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:a512d19aba748237d9ac1fcf4a2c15334b984e428049d4f81acc7626df5e9571
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "선페스트"
  - "Yersinia pestis"
  - "림프절염"
  - "plague"
related_disease_slugs: []
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
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

56세 여성이 3일 동안 왼쪽 서혜부의 심한 통증과 부종으로 병원에 왔다. 발열과 권태감이 있고, 일주일 전 마다가스카르 여행 중 왼쪽 허벅지에 통증 없는 붉은 구진 여러 개를 발견했다. 심각한 질환 병력이나 복용약은 없고 최근 동물이나 반려동물과 접촉하지 않았다. 체온 38.6℃(101.5℉), 맥박 78회/분, 호흡 12회/분, 혈압 110/65 mmHg였다. 왼쪽 서혜부가 부어 있었으나 피부 변화는 없었고, 크고 단단하며 압통이 있고 물렁한 림프절이 여러 개 만져졌다. 오른쪽 서혜부와 다른 부위 림프절은 정상이었으며 심폐·복부 진찰도 정상이었다. 서혜부 림프절 고름의 현미경검사에서 그람음성 구간균이 보였고 혈청 항-F1 역가는 4배 상승했다. 다음 중 현재 가장 적절한 약물치료는?

## 선택지

A. 아지트로마이신
B. 이미페넴
C. 스트렙토마이신
D. 약물치료를 하지 않는다

## 해설


마다가스카르 노출과 압통성 서혜부 bubo, 그람음성 구간균 및 항F1 역가 상승은 페스트를 지지한다. 선택지 중 스트렙토마이신(C)은 적절한 치료제이다. 겐타마이신·일부 fluoroquinolone 등 다른 권고 약제도 있어 유일하거나 항상 최상이라고 일반화하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000529 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: bubo·항F1 상승의 페스트에서 C 유지. 스트렙토마이신이 유일/항상 가장 효과적인 약이라는 과장 제한.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/plague/hcp/clinical-care/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000529
