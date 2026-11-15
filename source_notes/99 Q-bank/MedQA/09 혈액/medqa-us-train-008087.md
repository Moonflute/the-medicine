---
type: qbank
schema_version: 1
id: medqa-us-train-008087
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aeb6efdceec212e8cd03d80fa0fa11f346355991ee7cf5a78fc6755f71c3cddb
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "hemolytic uremic syndrome"
  - "acute kidney injury"
  - "hemodialysis"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Jqp7ZiI7ISxIOyalOuPhSDspp3tm4TqtbAgKEhlbW9seXRpYyBVcmVtaWMgU3luZHJvbWUpLm1k
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
---

# MedQA US 임상문제

## 문제

혈성 설사 뒤 용혈성요독증후군으로 입원한 아이의 소변량이 줄었다. 초기 처치에도 폐부종과 호흡곤란이 심해지고 산증이 지속된다. 신장 진료팀과 우선 할 처치는?

## 선택지

A. 부종이 있어도 수액만 계속 늘린다
B. 신대체요법을 신속히 시작한다
C. 혈소판 수만 낮다는 이유로 예방적 혈소판 수혈을 한다
D. 신기능이 영구적으로 회복되지 않는지 확인할 때까지 기다린다

## 해설


용혈성요독증후군에서 치료에 반응하지 않는 폐부종이나 심한 산증은 신대체요법 적응증이다. 투석을 시작하기 위해 콩팥 손상이 영구적인지 확인할 필요는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008087 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: pH7.0·핍뇨 HUS의 투석 D 유지;신기능 회복 불가능할 때만 투석한다는 오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://kdigo.org/wp-content/uploads/2016/10/KDIGO-2012-AKI-Guideline-English.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008087
- https://www.cdc.gov/ecoli/hcp/guidance/
