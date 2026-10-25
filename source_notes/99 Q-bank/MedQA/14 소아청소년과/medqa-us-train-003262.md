---
type: qbank
schema_version: 1
id: medqa-us-train-003262
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:85a0be28e52e423faa8d6fbdb6d2e4a39ee26b8c7cd44f1e91a90bafb6c9b678
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "neonatal bacterial meningitis"
  - "Listeria monocytogenes"
  - "group B Streptococcus"
  - "ampicillin gentamicin cefotaxime"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IS46reg7ISxIOuHjOyImOunieyXvCAoQmFjdGVyaWFsIE1lbmluZ2l0aXMpLm1k
difficulty: complex
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2Vmb3RheGltZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강했던 생후 3주 영아가 6시간 전 시작된 발열과 지속되는 보챔으로 응급실에 왔다. 이틀 전부터 수유가 나쁘고 평소보다 많이 잤으며 진찰을 위해 깨우면 기면과 보챔이 있다. 체온 39°C이고 안아 올리거나 목을 굽힐 때 운다. 뇌척수액에서 개방압 255 mmH₂O, 백혈구 710/mm³(호중구 95%), 단백질 86 mg/dL, 포도당 22 mg/dL이다. 그람염색은 대기 중이다. 다음 중 가장 적절한 초기 항생제 요법은?

## 선택지

A. 암피실린과 세프트리악손
B. 겐타마이신과 세포탁심
C. 암피실린, 겐타마이신, 세포탁심
D. 반코마이신, 암피실린, 세포탁심

## 해설

신생아의 호중구성 수막염·저당 소견은 즉시 경험적 정주 항생제가 필요한 상황이다. 제시된 보기 중 ampicillin·gentamicin·cefotaxime(C)은 원인균을 폭넓게 겨냥한다. 주요 원인에는 B군 연쇄상구균, 대장균 등 그람음성균 및 Listeria가 포함된다. 현행 지침에서는 ampicillin 계열과 cefotaxime 병용 등을 사용하며, gentamicin 포함 여부는 감염 상황·기관 프로토콜·배양 결과에 따라 조정하므로 일률적 필수 삼제로 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 신생아 수막염의 원인균 및 경험적 항생제 설명을 교정. 원정답 C를 가능한 요법으로 유지하되 모든 환자의 필수 삼제요법으로 단정하지 않음.
- https://www.nice.org.uk/guidance/ng195/chapter/Meningitis-babies-with-early-onset-or-late-onset-infection-in-neonatal-units

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003262
