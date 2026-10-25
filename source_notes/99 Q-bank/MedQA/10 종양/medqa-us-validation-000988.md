---
type: qbank
schema_version: 1
id: medqa-us-validation-000988
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:3f07ac1b1e69c7b9912d1faf38ff72d27a45542cf1d4f79e745aba43ff35116b
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "암성 통증"
  - "오피오이드 내성"
  - "하이드로모르폰"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shoztmZTquLAg7JWULm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9ab2xwaWRlbS5tZA
  - ZHJ1ZzoxNCDqt7zqs6jqsqnCt-2GteymncK366eI7LeoL0tldG9yb2xhYy5tZA
---

# MedQA US 임상문제

## 문제

4기 췌장암 병력이 있는 61세 여성이 수개월간 지속되다 최근 몇 주 동안 악화된 난치성 명치 통증으로 잠을 못 자 응급실에 왔다. 이미 하이드로코돈과 이부프로펜을 복용하고 있으며 지난 한 달간 진통제 복용 횟수가 하루 2회에서 4회로 늘었다. 통증 조절을 위한 가장 적절한 다음 처치는?

## 선택지

A. 하이드로코돈과 이부프로펜을 중단하고 정맥 케토롤락을 시작
B. 하이드로코돈을 하이드로모르폰으로 변경
C. 에스조피클론을 졸피뎀으로 변경
D. 하이드로코돈과 이부프로펜을 4시간마다 복용하도록 허용

## 해설


현재 hydrocodone/ibuprofen 복합제를 증량해도 암성통증이 조절되지 않아 더 유연하게 적정 가능한 강한 opioid로 전환하는 B가 선택지 중 적절하다. 전환 시 기존 총 일일 opioid량을 계산하고 등가진통용량과 불완전 교차내성을 고려하여 시작 용량을 보수적으로 조정한 뒤 통증·진정·호흡·장기기능을 추적하며 적정한다. Hydromorphone과 hydrocodone은 mg 대 mg로 교환할 수 없고 효력이 높다는 사실 자체가 내성을 자동 극복하지 않는다. 진통 부족·종양 진행·부작용을 재평가하고 수면제 추가나 NSAID 복합제 무작정 증량으로 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000988 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 암성통증 조절 실패에서 hydromorphone B로의 opioid rotation 유지하되 고효능 약이면 무조건 내성 극복·동일 mg 투여라는 위험 설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/about-cancer/treatment/side-effects/pain/pain-hp-pdq
- https://ascopubs.org/doi/10.1200/JCO.22.02198

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000988
