---
type: qbank
schema_version: 1
id: medqa-us-test-000893
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:72aefda6c92bd9659ca2e7963129949ee523d8b5ae9178a302bd39cd749b5853
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "울혈성 심부전"
  - "신장 나트륨 저류"
  - "레닌-안지오텐신-알도스테론계"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: mechanism
difficulty: complex
answer: "D"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: "content-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 원래 심부전 사례·RAAS 목표를 유지하고 질문을 신세뇨관 반응으로 한정하여 GFR 저하도 참일 수 있는 이중정답을 교정했다."
curation_status: "revised"
curation_reason: "원래 심부전 사례·RAAS 목표를 유지하고 질문을 신세뇨관 반응으로 한정하여 GFR 저하도 참일 수 있는 이중정답을 교정했다."
curation_reviewed_at: "2026-10-25"
wrong_notes_review_status: "reviewed"
curation_disposition: "selected"
---

# MedQA US 임상문제

## 문제

55세 남성이 운동 시 호흡곤란과 마른기침을 호소했다. 베개를 여러 개 사용하고 지난 한 달 동안 숨이 차서 두 번 잠에서 깼다. 20년 동안 매일 술 5~8잔을 마셨고 복용약은 없다. 체온 37.1°C, 혈압 135/115 mmHg, 맥박 85회/분, 호흡 24회/분이며 양측 함요부종과 폐기저부 수포음이 있다. 이 환자의 심부전에서 유효 동맥혈량 감소에 대한 보상으로 나타나 부종을 악화시키는 신세뇨관 수준의 변화는?

## 선택지

A. 사구체여과율 감소
B. 세포외액 용적 감소
C. 신혈류 증가
D. 신세뇨관 나트륨 재흡수 증가

## 해설

심부전에서는 전체 체액이 많아도 신장이 인지하는 유효 동맥혈량이 감소해 교감신경과 RAAS가 활성화될 수 있다. 이에 따른 세뇨관 나트륨 재흡수 증가는 수분 저류와 울혈을 악화시킨다. GFR 감소도 동반될 수 있지만, 질문은 여과 기능이 아니라 부종을 악화시키는 세뇨관 반응을 묻는다. 세포외액 용적 감소나 신혈류 증가는 이 소견을 설명하지 못한다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 원래 심부전 사례·RAAS 목표를 유지하고 질문을 신세뇨관 반응으로 한정하여 GFR 저하도 참일 수 있는 이중정답을 교정했다.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000893

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
