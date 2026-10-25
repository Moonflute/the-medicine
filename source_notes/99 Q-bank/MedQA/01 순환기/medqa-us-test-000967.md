---
type: qbank
schema_version: 1
id: medqa-us-test-000967
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:58540047176c0eac4a5290561c67bccd147e742e8832376a750a61b60872a59e
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "재경색"
  - "CK-MB"
  - "심근경색 후 흉통"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwLyjquInsgqzspp3tm4TqtbApLm1k
question_type: investigation
difficulty: standard
answer: "D"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9BbHRlcGxhc2UubWQ
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 기존 재경색 의심 사례는 유지하고 단일 표지자 이상값 대신 연속 변화 평가를 명시했다. 현행 MI 정의에 맞춰 CK-MB 우선에서 serial troponin T로 정답·선지를 교정했다."
curation_status: "revised"
curation_reason: "기존 재경색 의심 사례는 유지하고 단일 표지자 이상값 대신 연속 변화 평가를 명시했다. 현행 MI 정의에 맞춰 CK-MB 우선에서 serial troponin T로 정답·선지를 교정했다."
curation_reviewed_at: "2026-10-25"
original_answer: "B"
answer_change_reason: "기존 재경색 의심 사례는 유지하고 단일 표지자 이상값 대신 연속 변화 평가를 명시했다. 현행 MI 정의에 맞춰 CK-MB 우선에서 serial troponin T로 정답·선지를 교정했다."
wrong_notes_review_status: "reviewed"
curation_disposition: "selected"
---

# MedQA US 임상문제

## 문제

급성 심근경색으로 입원한 지 5일째인 59세 남성에게 처음과 유사한 흉통과 왼쪽 어깨 불편감이 4시간째 지속된다. 최초 STEMI 때 알테플라제를 투여받았으며 현재 맥박 86회/분, 호흡 16회/분, 혈압 146/90 mmHg이고 심전도 판독은 어렵다. 재발성 심근허혈과 새로운 심근손상을 평가할 때 임상 소견과 함께 우선 활용할 검사 전략은?

## 선택지

A. 알칼리성 인산분해효소 1회 측정
B. CK-MB 1회 측정
C. 젖산탈수소효소 1회 측정
D. 심장 트로포닌 T 연속 측정과 변화 양상 평가

## 해설

이전 경색 뒤 troponin이 남아 있을 수 있으므로 한 번 높게 나온 값만으로 재경색을 확정하지 않는다. 새 허혈 증상·ECG 또는 영상 소견과 연속 troponin의 변화 양상을 함께 평가한다. 최신 MI 정의에서도 cardiac troponin이 우선 표지자이다. CK-MB가 더 빨리 정상화한다는 이유만으로, troponin을 사용할 수 있는 상황에서 단일 CK-MB 검사를 우선한다고 가르치지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 기존 재경색 의심 사례는 유지하고 단일 표지자 이상값 대신 연속 변화 평가를 명시했다. 현행 MI 정의에 맞춰 CK-MB 우선에서 serial troponin T로 정답·선지를 교정했다.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.jacc.org/doi/10.1016/j.jacc.2026.07.025

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000967

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
