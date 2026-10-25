---
type: qbank
schema_version: 1
id: medqa-us-test-000048
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:da9463ad14c257058956b021b53162d7114f76f0310a0e70ab27c348f2368e81
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "말초동맥질환"
  - "대퇴-슬와동맥 협착"
  - "간헐적 파행"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
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

55세 남성이 운동 중 오른발을 가슴 높이보다 들어 올릴 때 6주 동안 발바닥에 저리고 찌르는 통증이 있어 내원했다. 2개월 전부터 규칙적으로 운동했고 트레드밀 경사 기능을 사용하면 오른쪽 종아리에 경련이 생겨 자주 쉬어야 한다. 몇 분 쉬면 통증은 완전히 사라진다. 8년 동안 제2형 당뇨병이 있고 34년 동안 매일 담배 두 갑을 피웠다. 유일한 약물은 메트포르민이다. 맥박 분당 82회, 혈압 170/92 mmHg이고 하지직거상검사에서 오른발 창백과 저린 통증이 유발된다. 허리 통증은 없고 근력은 정상이다. 대퇴동맥 맥박은 만져지지만 오른쪽 발 맥박은 없다. 가장 가능성 높은 진단은?

## 선택지

A. 대퇴-슬와동맥 협착
B. 오른쪽 슬와정맥 급성 혈전증
C. 요추 척추관 협착증
D. 대동맥-장골동맥 협착

## 해설


운동 시 발목 상승 시 나타나는 증상과 대퇴동맥 맥박은 존재하지만 발맥박이 없으며, 혈압 상승은 말초동맥질환을 시사한다. 대퇴‑슬와동맥 협착이 가장 가능성 높은 진단이다. 다른 선택지는 정맥 혈전증 등과는 증상이 다르다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/4선지/정답 A/해설 읽음. 운동성 종아리 파행, 거상 시 창백, 보존된 대퇴맥과 소실된 족부맥으로 대퇴-슬와동맥 협착이 합당하고 정맥혈전/신경인성 파행과 구별됨. 기초 진단 내용 검토.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000048
