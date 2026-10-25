---
type: qbank
schema_version: 1
id: medqa-us-test-000902
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:381f126613c02c1961e5bc1f9c55b1b4a0b6cd4d3056d33f170c07c469bcc1f5
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "불완전 유산"
  - "임신 13주"
  - "유산 후 출혈"
related_disease_slugs:
  - MTIg7IKw6rO8L-u2iOyZhOyghCDsnKDsgrAgKEluY29tcGxldGUgQWJvcnRpb24pLm1k
question_type: management
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTWFnbmVzaXVtU3VsZmF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 G3P1010 여성이 이틀 전 시작된 다량 출혈로 산부인과에 예약했다. 마지막 월경일 기준 임신 13주이다. 어지럽고 쇠약하며 집안에서 움직이거나 일상생활을 하기 어렵다. 처음에는 소량 점상출혈이었으나 이후 증가해 지금까지 생리대 6개를 사용했다. 혈압 90/60 mmHg, 체온 37.8°C(100°F), 맥박 125회/분, 호흡 14회/분이었다. 생리식염수 주입을 시작하고 혈액과 소변 검체를 보냈다. 골반검사에서 질 내 혈액과 열린 자궁경부가 보였고 자궁경부 이동 및 부속기 압통이 있었다. 초음파에서 자궁강 아래쪽에 자궁내 임신낭이 보였고 태동이나 심장활동은 없었다. 몇 시간 안정 후 반복 촬영에서 임신낭이 약간 아래로 이동했으나 태아 상태 변화는 없었다. 다음 단계 처치는?

## 선택지

A. 항생제
B. 황산마그네슘
C. 메토트렉세이트
D. 자궁경부 확장 및 소파술

## 해설

경부가 열리고 심박동이 없는 임신낭이 하강하며 출혈·저혈압·빈맥이 있어 진행 중 유산이 의심된다. 수액·혈액 준비 등 소생과 함께 긴급 자궁 내용물 제거가 필요하므로 D가 가장 적절하다. 항생제만으로 출혈 원인을 해결할 수 없고, 감염이 의심되면 항생제도 병행한다. 반복 초음파를 위해 불안정 환자 처치를 지연해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 조직 배출 전이므로 불완전 유산 단정 대신 진행 중 유산 및 출혈성 불안정에 따른 긴급 배출 설명.
- https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/11/early-pregnancy-loss

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000902
