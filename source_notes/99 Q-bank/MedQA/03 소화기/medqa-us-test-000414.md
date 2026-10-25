---
type: qbank
schema_version: 1
id: medqa-us-test-000414
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:0c40fc680030415d6b347d587a703f4aee31e3b652b61e05af6d362356d49efb
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "저혈량성 고나트륨혈증"
  - "수술 후 체액 소실"
  - "탈수"
related_disease_slugs:
  - MDUg7Iug7J6lL-qzoOuCmO2KuOulqO2YiOymnSAoSHlwZXJuYXRyZW1pYSkubWQ
question_type: management
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

췌장암으로 췌십이지장절제술을 받은 56세 남성이 외과 중환자실에서 회복 중이다. 이후 3일 동안 배액량이 하루 1 L를 초과했다. 수술 후 4일째 이른 아침 간호사는 환자를 깨우기 어렵다고 했다. 체온 99.5°F(37.5°C), 혈압 107/88 mmHg, 맥박 120회/분, 호흡 17회/분, 실내 공기 산소포화도 98%였다. 진찰에서 피부와 점막이 건조했다. 혈청 나트륨 154 mEq/L, 염소 100 mEq/L, 칼륨 4.3 mEq/L, 중탄산염 27 mEq/L, BUN 20 mg/dL, 포도당 99 mg/dL, 크레아티닌 1.1 mg/dL였다. 다음 중 가장 적절한 처치는?

## 선택지

A. 0.9% 생리식염수 정맥 투여
B. 5% 포도당 정맥 투여
C. 5% 포도당과 0.45% 생리식염수 정맥 투여
D. 경구 자유수 보충

## 해설

정답은 A이다. 지속적인 다량 배액, 빈맥, 건조한 피부·점막과 의식저하는 고나트륨혈증을 동반한 체액량 감소를 시사한다. 우선 혈관 내 용적을 회복하도록 등장성 수액을 사용한 뒤, 순환이 안정되면 자유수 결핍과 계속되는 손실에 맞추어 수분 보충을 조정한다. 정상 Cl 또는 HCO3만으로 순수한 수분 손실이라고 확정할 수 없다. 의식저하 환자에게 경구 수분만 제공하는 것은 부적절하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 수술 후 큰 배액 손실과 빈맥·건조 소견은 저혈량 우선 교정을 지지. 정상 Cl/HCO3만으로 순수 수분 손실을 확정한 해설 제거. 체온의 섭씨 단위 오기도 교정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6013691/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000414
