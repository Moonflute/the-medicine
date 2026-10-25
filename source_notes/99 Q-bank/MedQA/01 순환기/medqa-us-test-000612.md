---
type: qbank
schema_version: 1
id: medqa-us-test-000612
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:41dc573d504f76f3fd7126c284d72caa438fa029fe8af3ffc333694d7428056f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "샤가스병"
  - "확장성 심근병증"
  - "식도확장증"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2ZleyepeyEsSDsi6zqt7zrs5Hspp0gKERpbGF0ZWQgQ2FyZGlvbXlvcGF0aHkpLm1k
question_type: mechanism
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 남성이 누우면 더 심해지는 지속적인 호흡곤란으로 병원에 왔다. 격한 활동 시 두근거림도 있고 소화가 잘 안 되며 음식이 역류하고 삼키기 어렵다. 20년 전 멕시코에서 이주했으며 매년 두 번 고향을 방문한다. 혈압 120/75 mmHg, 호흡 19회/분, 맥박 100회/분이었다. 경정맥 팽창, 발목 함요부종, 양측 폐 기저부 수포음, S3 분마음이 있었다. 흉부 X선을 촬영했고 심전도는 특이 소견이 없었다. 이 신체 및 진단 소견을 가장 잘 설명하는 것은?

## 선택지

A. 알코올 남용
B. 고혈압성 변화
C. 기생충 감염
D. 세균 감염

## 해설

멕시코 거주/방문력과 심부전 징후에 연하곤란·역류가 함께 있어 Trypanosoma cruzi에 의한 샤가스병(C)을 고려한다. 만성 감염은 심근 손상에 의한 확장성 심근병증과 장관 신경계 손상에 의한 식도 운동장애를 일으킬 수 있다. 본문에 없는 복부팽창이나 특정 흉부 X선 소견을 새로 가정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. 본문에 없는 복부팽창을 제거하고 멕시코 노출·심부전과 식도 증상을 샤가스병 기전으로 연결.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000612
