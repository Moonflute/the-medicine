---
type: qbank
schema_version: 1
id: medqa-us-test-001123
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:bfad0771c6447137ccdb736b985c4bd565ec64ee5691c96ed44c2b3a0bf7f5ba
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "간헐적 파행"
  - "말초동맥질환"
  - "실로스타졸"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2lsb3N0YXpvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 남성이 200 m 이상 걸으면 왼쪽 종아리가 아파 진료를 받으러 왔다. 8개월간 지속되고 쉬면 호전된다. 당뇨병은 잘 조절되고 2014년 관상동맥 중재술을 받았으며 인슐린과 아스피린을 복용한다. 80갑년 흡연력과 하루 4잔 음주가 있다. 심폐 진찰은 정상이다. 증상을 개선하는 적절한 치료는?

## 선택지

A. 실로스타졸
B. 대퇴동맥 색전절제술
C. 대퇴-오금동맥 우회술
D. 혈관내 중재치료

## 해설

정답은 A이다. 일정 거리 보행 때 생기고 쉬면 호전되는 종아리 통증은 PAD의 간헐적 파행에 합당하다. cilostazol은 보행거리와 증상 개선에 사용할 수 있어 제시된 선택지 중 적합하다. 구조화된 운동치료·금연·심혈관 위험 관리도 중요하며 약 한 가지가 이를 대신하지 않는다. 심부전 환자에게는 cilostazol을 투여하지 않는다. 생활 제한 증상이 적절한 비침습 치료에도 지속되면 재혈관화 여부를 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: cilostazol을 모든 파행의 유일한 1차 치료라고 한 과장을 교정하고 운동/금연 및 HF 금기 보완.
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001123
