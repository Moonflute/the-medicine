---
type: qbank
schema_version: 1
id: medqa-us-test-000016
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:f90c580b0144f8ec5c36dcd912f21cdd59a844bdc332a1c3c40faec771a2ebe8
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "담낭암"
  - "석회화 담낭 종괴"
  - "담석증"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_ri7Trgq3slZQgKEdhbGxibGFkZGVyIENhbmNlcikubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sk7jqsJzrj4wgKEdhbGxzdG9uZSkubWQ
question_type: diagnosis
difficulty: complex
answer: B
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

59세 과체중 여성이 2시간 동안 지속된 심한 복통으로 긴급진료센터에 내원했다. 둔한 등 통증과 여러 차례의 오심·구토도 있다. 통증은 음식과 관련이 없고 과거력으로 담석증에 의한 반복 복통이 있다. 아버지는 60세에 복부암으로 사망했다. 체온 37°C, 호흡수 분당 15회, 맥박 분당 67회, 혈압 122/98 mmHg이며 진찰은 특이사항이 없다. 복부 CT에서 담낭 근처에 석회화된 종괴가 보인다. 다음 중 우선 배제해야 할 진단은?

## 선택지

A. 급성 담낭염
B. 담낭암
C. 총담관결석
D. 췌장염

## 해설

담석 병력이 있는 환자의 담낭 주변 석회화 종괴는 결석·담낭벽 석회화와 종양성 병변 등을 구별해야 한다. 이 문항은 확진이 아니라 먼저 배제할 진단을 묻고 있으므로 보기 중 B, 담낭암을 평가해야 한다. 석회화가 보인다는 사실만으로 암이 확진되거나 석회화 담낭의 대부분이 암이라는 뜻은 아니다. 담낭벽과 종괴의 관계, 조영 양상 등을 추가 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 B 유지. 석회화 종괴가 곧 흔한 암 소견이라고 단정한 설명을 담낭 주변 종괴의 악성 감별 필요로 수정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000016
