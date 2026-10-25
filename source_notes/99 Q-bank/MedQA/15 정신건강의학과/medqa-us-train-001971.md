---
type: qbank
schema_version: 1
id: medqa-us-train-001971
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d7ef60a412b3ba3d2e2508b37c9c4f63b71b14e2d50cee75efb5aacd698163b5
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "catatonia"
  - "waxy flexibility"
  - "lorazepam challenge"
  - "Catatonia"
question_type: management
related_disease_slugs: []
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 여성이 이상하게 행동하고 말을 거부한다는 남자친구의 보고로 정신과 병동에 입원했다. 침대에 앉아 벽을 바라보며 이름을 부르거나 손을 흔들어도 반응하지 않고 자세를 바꾸려 해도 놓인 자세를 그대로 유지한다. 왼팔을 들어 천장을 가리킨 채 움직이지 않고 외부 자극을 무시하며 함구한다. 우울증 병력이 있고 phenelzine에서 fluoxetine으로 최근 변경되었다. 다음 중 최선의 초기 치료는 무엇인가?

## 선택지

A. Benztropine
B. 전기경련치료
C. Haloperidol
D. Lorazepam

## 해설

함구·외부 자극에 대한 반응 감소·자세 유지와 수동적 움직임에 대한 저항은 긴장증(카타토니아)을 시사한다. 제시된 선택지 중 초기 치료로 로라제팜을 고려하며, 로라제팜 투여 후 반응을 평가하는 도전검사가 사용될 수 있다. '베르니케-베르니케 테스트'라는 검사는 이 상황의 표준 검사가 아니다. 최근 항우울제 전환의 휴약기간과 독성, 신경학적·의학적 원인도 평가해야 한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001971

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 남자친구 자신이 이상행동한 것으로 읽히는 주어 오역과 허구 '베르니케-베르니케 테스트' 제거. 카타토니아에 로라제팜 원정답 유지.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
