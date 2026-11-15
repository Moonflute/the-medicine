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

55세 남성이 트레드밀에서 일정 거리를 걸으면 오른쪽 종아리가 조이고 쉬면 수분 내 좋아진다고 한다. 당뇨병과 오랜 흡연력이 있다. 대퇴동맥 맥박은 양쪽에서 만져지지만 오른쪽 발 맥박은 약하다. 만성 하지 말초동맥질환이 의심될 때 첫 검사로 적절한 것은?

## 선택지

A. 안정 시 발목상완지수 측정
B. 하지 정맥 압박초음파
C. 요추 MRI
D. 바로 카테터 혈관조영술

## 해설


운동으로 재현되고 휴식으로 가라앉는 종아리 통증과 발 맥박 감소는 동맥성 파행을 시사한다. 안정 시 발목상완지수로 먼저 평가한다. 수치가 정상인데 의심이 높거나 혈관이 압박되지 않는 경우에는 대상에 따라 운동 후 검사나 발가락상완지수를 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/4선지/정답 A/해설 읽음. 운동성 종아리 파행, 거상 시 창백, 보존된 대퇴맥과 소실된 족부맥으로 대퇴-슬와동맥 협착이 합당하고 정맥혈전/신경인성 파행과 구별됨. 기초 진단 내용 검토.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000048
- ACC/AHA 하지 말초동맥질환 진료지침(2024): https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251
