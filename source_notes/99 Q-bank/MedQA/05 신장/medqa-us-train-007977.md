---
type: qbank
schema_version: 1
id: medqa-us-train-007977
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a41e8b25839d2e2b09572aa44ce62abc70269c47756ba2bea3c2927e408473a0
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "uremic bleeding"
  - "end-stage renal disease"
  - "hemodialysis"
related_disease_slugs:
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
question_type: management
difficulty: complex
answer: "B"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "요산 축적이 요독성 출혈 원인이라는 해설을 교정하고 GI 출혈 안정화를 생략하지 않음."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

33세 남자가 피가 섞인 구토로 응급실에 왔다. 지난 2일 동안 호흡곤란이 점점 심해졌다. 지난해 소화성궤양질환을 진단받았고 말기콩팥병으로 2년째 정기 혈액투석을 받고 있다. 예상치 못한 출장으로 마지막 투석을 건너뛰었다. 간질환 병력은 없다. 누운 자세 혈압 110/80 mm Hg, 기립 혈압 90/70 mm Hg, 맥박 110회/분, 호흡수 22회/분, 체온 36.2°C(97.2°F)이다. 말단이 차갑고 팔을 뻗으면 퍼덕이기 떨림이 보인다. 비위관 세척에서 피가 나오지만 생리식염수 세척 후 맑아진다. 정맥 등장성 식염수와 고용량 양성자펌프억제제를 시작하고 중환자실에 입원시켰다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 이중 풍선 탐포네이드
B. 혈액투석
C. 중환자실에서 관찰
D. 농축적혈구 수혈

## 해설

투석을 빠진 말기 신부전 환자의 asterixis·의식 변화 및 출혈 경향에서는 요독성 합병증을 고려하며 선택지 중 혈액투석이 적합하다. 요독성 독소에 의한 혈소판 기능 장애를 단순 요산 축적으로 설명하지 않는다. 저혈압과 토혈은 별도로 즉시 소생·출혈 평가가 필요하고 투석이 위장관 출혈의 평가·지혈을 대신하지는 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007977

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 요산 축적이 요독성 출혈 원인이라는 해설을 교정하고 GI 출혈 안정화를 생략하지 않음.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
