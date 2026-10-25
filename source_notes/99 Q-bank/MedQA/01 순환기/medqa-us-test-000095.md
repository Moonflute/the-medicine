---
type: qbank
schema_version: 1
id: medqa-us-test-000095
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:c9abc1eb91b833ef3f3fddb3478674cc274f1dbace01b916f0224147d57cff36
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심장눌림증"
  - "심낭삼출"
  - "기맥"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOyepSDriIzrprzspp0gKENhcmRpYWMgVGFtcG9uYWRlKS5tZA
question_type: diagnosis
difficulty: complex
answer: "C"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 흉부 자상·압전이라는 원래 사례를 유지하고 질문 시점을 이미 원문에 있는 삽관 전 자발호흡 상태로 명시해 양압환기와 기이맥의 충돌을 해소했다."
curation_status: "revised"
curation_reason: "흉부 자상·압전이라는 원래 사례를 유지하고 질문 시점을 이미 원문에 있는 삽관 전 자발호흡 상태로 명시해 양압환기와 기이맥의 충돌을 해소했다."
curation_reviewed_at: "2026-10-25"
wrong_notes_review_status: "reviewed"
curation_disposition: "selected"
---

# MedQA US 임상문제

## 문제

24세 남성이 왼쪽 흉부 자상을 입은 지 15분 후 응급실에 왔다. 빠르고 얕게 자발호흡하며, 맥박 135회/분, 호흡 30회/분, 촉지 수축기 혈압 80 mmHg이다. 이후 삽관과 기계환기, 생리식염수 주입을 시행했으나 5분 후에도 혈압 82/45 mmHg이다. 외부 출혈은 없고 왼쪽 쇄골중앙선 제4늑간에 2.5 cm 자상이 있으며, 심음 감소와 경정맥 팽창이 있고 호흡음은 정상이다. 이 환자에서 의심되는 질환이라면, 삽관 전 자발호흡 중 관찰될 수 있는 전형적 추가 소견은?

## 선택지

A. 기관이 오른쪽으로 편위
B. 객혈
C. 흡기 중 수축기 혈압 14mmHg 감소
D. 호흡 시 흉벽 일부의 역설적 움직임

## 해설

관통상 뒤 저혈압·경정맥 팽창·심음 감소는 심장압전을 시사한다. 자발흡기 때 우심실 충만 증가가 제한된 심낭 내 좌심실 충만을 더 감소시켜 수축기 혈압이 10 mmHg 이상 떨어지는 기이맥이 나타날 수 있다. 이 문항은 삽관 전 자발호흡을 묻는다. 양압환기 중에도 동일한 방향의 호흡성 혈압 변동이 반드시 나타난다고 일반화하면 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 흉부 자상·압전이라는 원래 사례를 유지하고 질문 시점을 이미 원문에 있는 삽관 전 자발호흡 상태로 명시해 양압환기와 기이맥의 충돌을 해소했다.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://academic.oup.com/eurheartj/article/46/40/3952/8234483

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000095

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
