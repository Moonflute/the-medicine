---
type: qbank
schema_version: 1
id: medqa-us-train-001402
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:54796f9f646e15ecc079330699d59450d9f64e11b08888cb0adaf08c614a9b18
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "peripheral artery disease"
  - "revascularization"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2lsb3N0YXpvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 남성이 7개월 동안 걸을 때 양측 종아리 경련이 생긴다고 일차진료의에게 내원했다. 걷기를 멈추면 통증이 사라지지만 우편배달원 업무에 지장이 있다. 제2형 당뇨병, 고지혈증 및 25갑년 흡연력이 있다. 발목-상완지수(ABI)는 0.70이다. 경증에서 중등도의 말초동맥질환으로 진단받아 3개월 감독하 운동 프로그램, 아스피린 및 실로스타졸을 시작했다. 호전이 없다면 다음 중 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 헤파린
B. 혈관재개통술
C. 절단술
D. 수술적 감압

## 해설


중등도 말초동맥질환에서 약물·운동 치료가 효과가 없을 경우 혈관재개통술(혈관우회술·혈관성형)이 다음 단계이다. 이는 증상 개선에 가장 효과적이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 직업을 제한하는 PAD파행이 감독운동/약물에도 호전 없을 때 해부/위험 평가 후 재혈관화 B 고려. 급성색전용 heparin/절단과 구별.
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001402
