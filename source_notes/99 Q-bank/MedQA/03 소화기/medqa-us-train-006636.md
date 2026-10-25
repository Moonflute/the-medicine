---
type: qbank
schema_version: 1
id: medqa-us-train-006636
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4d773f6149f6d06deb222a00ff796295047dfe6988f7fadd9c2ca5a381a69eb3
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 췌장염"
  - "알코올성 췌장염"
  - "리파아제 상승"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

51세 노숙인 남성이 3시간 동안 지속된 심한 복통과 경련으로 응급실에 내원했다. 등으로 방사되고 여러 차례 구토했다고 한다. 알코올 중독과 복통으로 반복 입원한 병력이 있다. 체온은 103.8°F(39.8°C), 호흡수는 분당 15회, 맥박은 분당 107회, 혈압은 100/80 mm Hg이다. 통증이 심해 신체진찰을 거부한다. 검사에서 알부민 3.2 g/dL, 알칼리성 인산분해효소 150 U/L, ALT 76 U/L, AST 155 U/L, γ-GT 202 U/L, 리파아제 800 U/L이다. 가장 가능성 높은 진단은?

## 선택지

A. 담낭염
B. 췌장염
C. 총담관결석
D. 십이지장 소화성 궤양

## 해설

음주력과 등방사 상복통·구토·lipase상승은 췌장염 B를 가장 지지한다. 고열은 감염과 다른 복부원인/합병증도 평가해야 하는 소견이다. 담관결석이 언제나 황달을 동반하거나 통증위치만으로 다른 원인이 완전히 배제되는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 췌장염 B를 지지하되 담관결석은 항상황달·담낭염은 통증위치만으로 배제한 설명 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006636
