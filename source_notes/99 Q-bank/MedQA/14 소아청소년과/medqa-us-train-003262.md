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

생후 18일 만삭 신생아가 고열과 수유 저하로 왔다. 뇌척수액에서 호중구가 증가하고 포도당이 낮다. 배양은 진행 중이며 병원 내 감염 위험은 없다. 신생아 세균성 수막염의 경험적 정맥 항생제 조합으로 적절한 것은?

## 선택지

A. 암피실린과 세포탁심
B. 세포탁심 단독
C. 암피실린과 경구 아지트로마이신
D. 반코마이신 단독

## 해설

신생아 수막염이 의심되면 암피실린으로 B군 연쇄상구균과 리스테리아 등을, 세포탁심으로 주요 그람음성균을 포함해 치료할 수 있다. 배양 결과와 기관의 내성·약제 상황에 맞게 조정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 신생아 수막염의 원인균 및 경험적 항생제 설명을 교정. 원정답 C를 가능한 요법으로 유지하되 모든 환자의 필수 삼제요법으로 단정하지 않음.
- https://www.nice.org.uk/guidance/ng195/chapter/Meningitis-babies-with-early-onset-or-late-onset-infection-in-neonatal-units

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003262
- https://publications.aap.org/book/chapter-pdf/1750605/rbo2024_tab.pdf
