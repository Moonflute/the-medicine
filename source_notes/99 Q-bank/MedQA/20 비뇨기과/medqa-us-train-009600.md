---
type: qbank
schema_version: 1
id: medqa-us-train-009600
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a1868975a8e8a011c85639b9e464bbaaad2f2f7564bc91ff19c73b0fe71c8df9
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "chronic bacterial prostatitis"
  - "만성 세균성 전립선염"
  - "alpha-blocker"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yghOumveyDmOyXvCAoUHJvc3RhdGl0aXMpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EdWxveGV0aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

68세 남자가 4개월 동안 간헐적 배뇨곤란, 사정통, 경미한 하복부 통증으로 내원했다. 체중이나 대변 변화는 없고 암 가족력도 없다. 과거력으로 과민성장증후군과 고혈압이 있다. 전립선은 크기, 질감, 윤곽이 정상이나 경미한 압통이 있다. 소변검사에서 백혈구에스테라제 미량, 아질산염 음성, 혈액 음성, 현미경상 세균은 없다. 가장 적절한 치료는 무엇인가?

## 선택지

A. 시프로플록사신
B. 탐스로신과 시프로플록사신
C. 피나스테리드
D. 둘록세틴

## 해설

4개월의 골반통·사정통·배뇨 증상은 원발성 전립선통증증후군/CPPS를 고려하게 하며 요검사만으로 만성 세균성 전립선염이 확정되지는 않는다. EAU는 치료 경험이 없고 증상이 1년 미만인 선택된 환자에서 alpha 차단제와 제한된 초기 항균 치료를 고려하므로 선지 중 B가 부합할 수 있다. 실제로는 배양·이전 치료력·내성과 fluoroquinolone 위해를 확인하고 반응 없이 반복 처방하지 않는다. 모든 CPPS가 세균성이거나 모든 환자에서 이 두 약제가 일률적 표준이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 배양 확인 없는 4개월 전립선 통증을 만성 세균성 전립선염으로 확정한 오류와 모든 CPPS의 항생제 표준이라는 주장을 교정.
- 공식/학회 근거: https://uroweb.org/guidelines/chronic-pelvic-pain/chapter/management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009600
