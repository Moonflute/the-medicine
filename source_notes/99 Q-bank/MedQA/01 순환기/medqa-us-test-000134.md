---
type: qbank
schema_version: 1
id: medqa-us-test-000134
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:85dd94931330e38c470f9eedc059fdfab0cb23bd959e4c917d3bfde9bde6c9f1
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "레리셰 증후군"
  - "대동맥-장골동맥 폐색"
  - "혈관성 발기부전"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpS3sl4nrjanrj5nrp6Ug7Y-Q7IOJIChBb3J0b2lsaWFjIE9jY2x1c2lvbikubWQ
question_type: mechanism
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

67세 남성이 일정 거리를 걸으면 양쪽 엉덩이와 허벅지에 통증이 생기고 쉬면 호전된다고 한다. 발기부전이 함께 생겼고 양측 대퇴동맥 맥박은 약하다. 이 증상 조합을 가장 잘 설명하는 병변은?

## 선택지

A. 요추 척추관 협착
B. 복부 대동맥–장골동맥 폐색
C. 양측 대퇴정맥 혈전증
D. 양측 무릎 골관절염

## 해설


엉덩이·허벅지 파행과 양측 대퇴맥박 저하는 대퇴동맥보다 위쪽의 혈류 저하를 시사한다. 골반 혈류 저하에 따른 발기부전까지 동반되면 대동맥–장골동맥 폐색이 가장 잘 설명한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/선지/정답 B/해설 읽음. 엉덩이·고관절 파행, 발기부전, 대퇴맥 감소의 Leriche 양상에서 가장 특이적 원인은 대동맥-장골동맥 죽상경화증이며 D는 비특이적 증상 범주. 내용 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000134
