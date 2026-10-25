---
type: qbank
schema_version: 1
id: medqa-us-test-000843
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:9f8e6ff5cbfbfc39f5a630b23b6f0bf4f3e63c4d81a0efcffd2ccc95968f5d39
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Bacillus cereus 식중독"
  - "구토형 식중독"
  - "독소 매개 위장염"
related_disease_slugs:
  - MDgg6rCQ7Je8L0JhY2lsbHVzIGNlcmV1cyDsi53spJHrj4UubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

20세 남자 대학생이 새벽 4시에 2시간 전부터 시작된 복부 경련, 오심, 구토, 설사로 응급실에 왔다. 전날 밤 시험공부를 하다가 배가 고파 오후에 먹다 남은 음식을 한동안 데워 먹었고, 먹은 지 한 시간 후 증상이 시작되었다. 체온 37°C(98.6°F), 호흡 15회/분, 맥박 106회/분, 혈압 90/78 mmHg였다. 탈수 징후 외에는 진찰이 정상이었다. 가장 가능성 높은 진단은?

## 선택지

A. 크립토스포리디움증
B. C. difficile 대장염
C. Bacillus cereus 감염
D. 노로바이러스 감염

## 해설


재가열한 음식을 먹고 약 1시간 뒤 급성 구토·복통이 생긴 것은 미리 형성된 내열성 독소에 의한 B. cereus 구토형 식중독(C)과 맞는다. 밥이 대표적 매개 음식이지만 본문에 음식 종류는 명시되지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000843 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 재가열 음식 후 1시간의 구토형 B. cereus C 유지. 원문에 없는 쌀밥을 반드시 먹었다고 단정한 해설 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000843
