---
type: qbank
schema_version: 1
id: medqa-us-train-010117
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:69eef6e65a208771cfc4898d1b8a4d5be056ba2b5fa037c1f24c4bfefd484c93
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "횡문근융해증"
  - "압궤손상"
  - "급성 신손상"
question_type: management
related_disease_slugs:
  - MDUg7Iug7J6lL-2aoeusuOq3vOycte2VtOymnSAoUmhhYmRvbXlvbHlzaXMpLm1k
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 남성이 집에서 구조된 뒤 응급실에 내원했다. 집을 혼자 수리하던 중 벽 하나가 무너져 다리가 잔해에 약 30시간 깔려 있었다. 약간 혼란스럽고 양쪽 다리 전체의 통증을 호소한다. 점막이 건조하고 양쪽 다리 전반에 압통과 여러 표재성 찰과상이 있으나 활동성 출혈은 없다. 전신 CT에서 양쪽 경골의 작은 골절이 보이지만 혈종은 없다. 외상팀에 입원해 관찰하던 중 1일째 소변이 매우 어두워졌다. 지난 24시간 소변량은 200mL, 크레아티닌 2.7 mg/dL, 혈청 CK 29,700 IU/L이다. 다음 중 가장 적절한 처치는?

## 선택지

A. 항핵항체 역가 측정
B. 항사구체기저막 항체 역가 측정
C. 항연쇄상구균용혈소 O 역가 측정
D. 정맥 수액 시작

## 해설

정답은 D, 정맥 수액 시작이다. 장시간 압궤, 매우 높은 CK, 짙은 소변 및 급성 크레아티닌 상승은 횡문근융해증에 의한 급성 신손상을 시사한다. 탈수와 신장 저관류를 교정하기 위해 결정질 수액을 시작하되, 이미 하루 소변량이 200 mL로 적으므로 관류·소변량·폐부종 등 수액과다 징후에 따라 투여량을 조절한다. 무뇨가 지속되는데 수액만 계속 증량하면 위험하다. 칼륨·심전도·산염기 상태를 확인하고 필요한 경우 신장 전문 평가와 신대체요법을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 압궤성 횡문근융해증의 IV 수액 D 유지. 이미 핍뇨성 AKI인 환자에 무조건 대량 수액이 아니라 목표지향 소생/수액과다·고칼륨 감시 필요 보완.
- 공식/학회 근거: https://tsaco.bmj.com/content/7/1/e000836

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010117
