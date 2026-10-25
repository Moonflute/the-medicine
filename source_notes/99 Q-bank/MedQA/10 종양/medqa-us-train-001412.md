---
type: qbank
schema_version: 1
id: medqa-us-train-001412
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f62f66fc33ae084179c63a746c63f9fd30c5804622b5a279447ccd3191f8c711
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "Pancoast tumor"
  - "brachial plexopathy"
related_disease_slugs: []
question_type: diagnosis
difficulty: complex
answer: A
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

55세 남성 보디빌더가 오른팔의 쇠약으로 응급실에 내원했다. 몇 주 동안 증상이 있었으나 오늘 손에 힘이 없어 찻잔을 떨어뜨렸다고 한다. 당뇨병 병력이 있다. 하루 2–7잔의 술을 마시고 25세부터 하루 두 갑을 피웠다. 단백동화 스테로이드를 사용한다고 인정한다. 한 달 전 응급실에 왔을 때보다 17파운드가 빠졌다. 체온은 99.5°F (37.5°C), 혈압은 177/108 mmHg, 맥박은 90회/분, 호흡수는 17회/분, 산소포화도는 98%이다. 오른팔 감각 저하와 근력 2/5, 왼팔 근력 5/5가 보인다. 검사 중 오른팔에 둔하고 타는 듯한 통증이 있다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 폐첨부 종양
B. 뇌경색
C. 사각근 전방 증후군
D. 쇄골하동맥 도혈 증후군

## 해설


장기간 흡연과 큰 체중감소, 수주간 진행한 한쪽 팔의 통증·감각저하·근력저하는 폐첨부 종양이 상완신경총을 침범하는 Pancoast 양상을 시사한다(A). 급성 뇌경색보다 진행성 통증성 신경총병증에 더 잘 맞는다. Anabolic steroid 사용을 폐첨부 종양의 확립된 위험인자로 제시하지 않는다. 실제로는 흉부 및 신경학적 평가로 병변을 확인해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001412 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Anabolic steroid가 폐첨부암의 확립된 위험인자라는 근거 없는 주장을 제거했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001412
