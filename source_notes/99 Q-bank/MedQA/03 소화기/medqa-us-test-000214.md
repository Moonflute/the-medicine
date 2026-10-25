---
type: qbank
schema_version: 1
id: medqa-us-test-000214
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:c8af9e1195320cf7591736c74220855434a22591830501ea784f24d5be0b0918
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "무결석성 담낭염"
  - "담낭염"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7JO46rCc7Je8IChBY3V0ZSBDaG9sZWN5c3RpdGlzKS5tZA
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

67세 여성이 가정 호스피스에서 지내던 중 의식 상태 변화로 이송되었다. 최근 더 혼돈스러워 보였고 증상을 말로 표현하지 못했다. 체온은 102°F(38.9°C), 혈압 117/65 mmHg, 맥박 110회/분, 호흡 19회/분, 실내 공기 산소포화도 95%였다. 진찰에서 오른쪽 상복부에 종괴가 만져졌고 촉진 시 불편감을 유발했다. 초음파에서 담석은 없었으나 담낭 주위 액체와 담낭벽 비후가 보였다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 무결석성 담낭염
B. 결석성 담낭염
C. 총담관결석증
D. 기종성 담낭염

## 해설

발열과 우상복부 압통에 담낭벽 비후·주위 액체가 보이지만 담석이 없어 보기 중 A, 무결석성 담낭염이 가장 합당하다. 기종성 담낭염을 지지하는 담낭벽 가스나 총담관결석 소견은 제시되지 않았다. 이 사례의 영상 조합을 해석하는 것이며 고령 여성의 담낭염 대부분이 무결석성이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 모든 고령 여성에서 가장 흔한 원인이라는 근거 없는 일반화를 사례 내 무담석 염증 소견으로 제한.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000214
