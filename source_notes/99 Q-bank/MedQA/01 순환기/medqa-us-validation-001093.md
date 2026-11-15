---
type: qbank
schema_version: 1
id: medqa-us-validation-001093
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:01fae1da1f5fdcd9655c67a540cc86bca43aa38e639a4d0e6b708d7cb1988302
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심부전"
  - "알도스테론 길항제"
  - "스피로놀락톤"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQmlzb3Byb2xvbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 남성이 박출률 30% 심부전으로 치료받고 있다. 스피로놀락톤 추가를 고려하던 날 혈청 칼륨은 5.6 mEq/L, eGFR은 24 mL/min/1.73 m²였다. 가장 적절한 조치는?

## 선택지

A. 스피로놀락톤을 고용량으로 즉시 시작한다
B. 같은 날 칼륨 보충제와 함께 시작한다
C. 시작을 보류하고 고칼륨혈증과 신장기능을 평가한다
D. 에플레레논으로 바꾸면 검사 없이 바로 투여할 수 있다

## 해설

미네랄코르티코이드 수용체 길항제는 적절한 박출률 감소 심부전에서 예후를 개선하지만 고칼륨혈증과 신기능 악화 위험이 있다. 현재 칼륨과 eGFR은 안전하게 새로 시작하기에 부적절하다. 에플레레논도 같은 위험을 공유한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: MRA의 생존효과 C를 HFrEF와 신기능·칼륨 기준에 연결하여 모든 심부전으로 일반화하지 않음.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001093
- 대한심부전학회 심부전 치료 진료지침: https://e-kcj.org/DOIx.php?id=10.4070%2Fkcj.2023.0047
