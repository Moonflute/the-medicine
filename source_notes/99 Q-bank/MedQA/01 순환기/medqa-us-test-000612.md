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

52세 남성이 호흡곤란과 음식 역류·연하곤란을 함께 호소한다. 중남미 유행 지역에서 오래 살았다. 심초음파에서 확장성 심근병증, 식도조영에서 확장된 식도와 운동 저하가 보인다. 두 장기의 소견을 함께 설명할 감염은?

## 선택지

A. 톡소플라스마 감염
B. 폐렴구균 감염
C. 크루스파동편모충 감염(샤가스병)
D. 엡스타인–바 바이러스 감염

## 해설

중남미 유행 지역 노출과 확장성 심근병증에 식도 운동장애가 동반되면 만성 샤가스병을 의심할 수 있다. 심근 손상과 장관 신경 손상으로 서로 다른 장기 증상이 함께 나타날 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. 본문에 없는 복부팽창을 제거하고 멕시코 노출·심부전과 식도 증상을 샤가스병 기전으로 연결.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000612
