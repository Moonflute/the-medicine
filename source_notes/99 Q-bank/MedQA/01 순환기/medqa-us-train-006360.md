---
type: qbank
schema_version: 1
id: medqa-us-train-006360
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8eea0bd8fbe0697e030846d1878389c1a9bcccf31f0ce9a9f52897c2a829c26d
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "울혈성 심부전 악화"
  - "이뇨제 치료"
  - "신기능 평가"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: investigation
difficulty: standard
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

70세 여성이 푸로세미드를 며칠 복용하지 못한 뒤 심부전 울혈로 입원했다. 정맥 루프 이뇨제를 시작하고 소변량과 체중을 추적 중이다. 이뇨제 치료 중 안전을 위해 반복 확인할 혈액검사는?

## 선택지

A. 크레아티닌과 전해질(특히 칼륨)
B. 항핵항체와 류마티스인자
C. 간염 바이러스 항체
D. 갑상샘 자극 호르몬 단독

## 해설

정맥 이뇨제는 울혈을 줄이지만 전해질 이상과 신기능 변화를 일으킬 수 있다. 소변량과 체중뿐 아니라 칼륨, 필요시 마그네슘, 크레아티닌을 추적한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: BMP A의 K/Mg·digoxin독성 평가를 보완하고 routine morphine/산소를 현행 표준으로 승인하지 않음.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006360
- 대한심부전학회 급성 심부전 진료지침: https://e-kcj.org/DOIx.php?id=10.4070%2Fkcj.2023.0115
