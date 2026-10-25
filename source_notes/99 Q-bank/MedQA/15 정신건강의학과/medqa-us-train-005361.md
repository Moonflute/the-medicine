---
type: qbank
schema_version: 1
id: medqa-us-train-005361
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f25613a8775e75ede4550b655d83b82abccf2248e89e102b272787465d09c5f2
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "카바 간독성"
  - "허브 보충제"
  - "약물 유발 간손상"
question_type: adverse_effect
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rj4XshLEg6rCE7Je8IChUb3hpYyBIZXBhdGl0aXMpLm1k
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
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

46세 여자가 1년 동안 불안이 심해져 업무에 지장이 있고 심리치료 효과가 적어 허브 치료로 카바를 복용하기 시작했다. 과거 정맥주사 약물과 알코올 남용력이 있으나 1년 넘게 사용하지 않았다고 하며 만성 긴장성 두통으로 아세트아미노펜을 자주 복용한다. 이전 건강검진은 정상이었고 새 검사에서 AST 82 U/L, ALT 90 U/L이다. 검사 이상을 가장 잘 설명하는 원인은?

## 선택지

A. 아세트아미노펜
B. 알코올성 간염
C. 만성 C형간염 감염
D. 식이 보충제

## 해설

새로 시작한 카바 보충제는 드물지만 심한 간손상과도 관련되어 제시된 선택지 중 새 간효소 상승의 가능한 원인이다. 다만 이것만으로 인과관계가 확정되지는 않으며, 아세트아미노펜의 실제 총량·바이러스 간염·기타 보충제와 음주 등을 함께 평가한다. 과거 주사약 사용력이 있으므로 카바를 의심한다는 이유로 간염 검사를 생략하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005361

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 카바 간독성 원정답 유지. 1년 이상 알코올·주사약 미사용 및 새 검사 이상이라는 원문 감별 맥락 복원, 다른 간손상 원인 자동 배제는 하지 않음.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nccih.nih.gov/health/kava
