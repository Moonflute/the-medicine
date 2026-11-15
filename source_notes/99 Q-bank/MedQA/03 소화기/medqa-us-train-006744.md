---
type: qbank
schema_version: 1
id: medqa-us-train-006744
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:af0095d3df41f81c9941f961718892f0627dad6aefa096fb790274d965fa94d0
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 담낭염"
  - "담낭관 폐쇄"
  - "담석"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7JO46rCc7Je8IChBY3V0ZSBDaG9sZWN5c3RpdGlzKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 여성이 식후 시작돼 8시간째 가라앉지 않는 오른쪽 윗배 통증과 발열로 왔다. 촉진 중 깊이 들이쉴 때 통증으로 숨을 멈춘다. 빌리루빈은 정상이고 초음파에서 담석, 담낭벽 비후와 담낭 주위 액체가 보인다. 가장 가능성 높은 진단은?

## 선택지

A. 급성 담관염
B. 급성 췌장염
C. 합병증 없는 담도산통
D. 급성 결석성 담낭염

## 해설

지속해서 아픈 오른쪽 윗배, 발열, 머피 징후와 담낭벽 비후는 급성 담낭염에 잘 맞는다. 단순 담도산통과 달리 염증 소견이 있다. 총담관 확장과 뚜렷한 담즙정체가 있으면 담관염이나 총담관결석도 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 담낭관결석 D 병인은 유지하되 모든 초음파에서 관내결석을 직접확인할 수 있다는 과장 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006744
- https://www.jshbps.jp/modules/en/index.php?content_id=47
