---
type: qbank
schema_version: 1
id: medqa-us-validation-001216
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:f6dc6c9b10b3afa1ea664924420e1137cd8ec34f1bc1aa631f78a37a006e9a4c
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심부전"
  - "에플레레논"
  - "알도스테론 길항제"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: prognosis
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlnb3hpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBsZXJlbm9uZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSXZhYnJhZGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmVyYXBhbWlsLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

69세 남성이 9개월간 악화되는 운동 시 호흡곤란과 야간뇨로 진료를 받으러 왔다. 고혈압과 제2형 당뇨병이 있으며 메트포르민, 리시노프릴, 아스피린, 심바스타틴을 복용한다. 맥박은 61회/분이고 혈압은 120/75 mmHg이다. 양측 폐기저부에 미세 수포음과 하지 부종이 있고 심전도에서 기존 T파 역전이 보인다. 다음 중 장기 생존을 가장 개선할 약물은?

## 선택지

A. 에플레레논
B. 이바브라딘
C. 베라파밀
D. 디곡신

## 해설

심부전이 의심되는 환자에서 제시된 선택지 중 에플레레논(A)은 수축기 기능저하 심부전의 생존을 개선하는 MRA이다. 실제 투여에는 EF와 eGFR, 칼륨 확인이 필요하며, 이 문항의 임상 증상만으로 적응증과 안전성이 모두 확인된 것은 아니다. 이바브라딘은 동율동·심박수 등 별도 조건이 있고 현재 맥박 61회/분에서는 적합하지 않다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 에플레레논 A의 생존 이득을 모든 심부전으로 일반화하지 않고 필요한 EF·신기능·K 평가를 명시. 영어 원문의 맥박 61회/분과 복용약 누락을 복원.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001216
