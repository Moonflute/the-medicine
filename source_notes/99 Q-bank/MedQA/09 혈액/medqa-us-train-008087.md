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
answer: D
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

5세 여아가 6일 동안 지속된 복통, 구토, 설사로 응급실에 왔다. 지난 24시간 동안 발진과 소변량 감소가 생겼다. 한 달 전 3일간 고열과 인후통이 있었지만 치료 없이 호전되었다. 쇠약해 보이며 체온 37.7°C(99.8°F), 맥박 120회/분, 호흡수 28회/분, 혈압 114/72 mm Hg이다. 몸통에 점상출혈과 피부 황달이 있고 복부는 전반적으로 압통이 있지만 복막자극 징후는 없다. 헤모글로빈 8 g/dL, 백혈구 16,200/mm³, 혈소판 38,000/mm³, BUN 43 mg/dL, 크레아티닌 2.9 mg/dL, pH 7.0이다. 소변에서 혈액과 단백이 양성이고 혈액도말에서 분열적혈구가 보인다. 지지요법 외에 가장 적절한 다음 처치는?

## 선택지

A. 디아제팜 치료
B. 적혈구 수혈
C. 혈소판 수혈
D. 혈액투석

## 해설


미세혈관성 용혈·혈소판감소·신손상은 HUS에 부합한다. 핍뇨와 pH7.0의 심한 산염기 이상은 신장 전문팀의 긴급 평가와 교정을 필요로 하며 선택지 D의 신대체요법이 가장 적절하다. 투석은 생명위협성/치료 불응 산염기·전해질·체액 문제에 시행하며 신장이 영구 회복 불가능하다는 판정을 기다리는 치료가 아니다. 회복되면 중단할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008087 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: pH7.0·핍뇨 HUS의 투석 D 유지;신기능 회복 불가능할 때만 투석한다는 오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://kdigo.org/wp-content/uploads/2016/10/KDIGO-2012-AKI-Guideline-English.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008087
