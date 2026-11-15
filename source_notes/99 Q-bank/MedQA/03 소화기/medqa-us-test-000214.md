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

67세 여성이 큰 수술 뒤 중환자실에서 기계환기 중이다. 새 발열과 우상복부 압통이 생겼다. 초음파에서 담낭이 팽창하고 벽이 두꺼우며 담낭 주위에 액체가 보이지만 결석은 없다. 이전 검사에서 이런 변화는 없었다. 가장 가능성 높은 진단은?

## 선택지

A. 급성 무결석성 담낭염
B. 총담관결석증
C. 단순 담도산통
D. 기종성 담낭염

## 해설

중환자에게 담석 없이 새 담낭 염증 소견과 발열이 나타나면 무결석성 담낭염을 의심한다. 담낭벽 비후 하나만으로 확진하지 않고 영상 변화와 감염 소견을 종합한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 모든 고령 여성에서 가장 흔한 원인이라는 근거 없는 일반화를 사례 내 무담석 염증 소견으로 제한.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000214
- https://www.jshbps.jp/modules/en/index.php?content_id=47
