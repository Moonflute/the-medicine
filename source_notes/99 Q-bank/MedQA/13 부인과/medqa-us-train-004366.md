---
type: qbank
schema_version: 1
id: medqa-us-train-004366
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9b9a4a0e2c86e8162d5f17be1f465f7a136bc641521722227299aa00bafd3509
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "산후 자궁내막염"
  - "제왕절개 후 감염"
  - "클린다마이신-겐타마이신"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2gSDrgrTrp4kg6rCQ7Je8IOyngOyXsCAoRGVsYXllZCBQb3N0cGFydHVtIEVuZG9tZXRyaXRpcykubWQ
  - MTIg7IKw6rO8L-yCsOyaleq4sCDsnpDqtoEg6rCQ7Je8IChQb3N0cGFydHVtIFV0ZXJpbmUgSW5mZWN0aW9uKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

제왕절개 후 자궁내막염으로 정맥 항생제를 3일 투여했는데 여전히 고열과 국소 골반통이 있다. 조영 CT에 배액 가능한 7 cm 골반 농양이 확인됐다. 추가 치료는?

## 선택지

A. 이미 항생제를 쓰므로 농양은 따로 치료하지 않는다
B. 배양을 피하기 위해 항생제를 중단한다
C. 폐색이나 잔류 태반 증거가 없어도 자궁 소파술만 시행한다
D. 항생제를 유지하고 영상 유도 배액으로 감염원을 조절한다

## 해설

적절한 항생제에도 발열이 지속되면 농양 등 감염원을 찾아야 한다. 접근 가능한 큰 골반 농양이 확인되면 항생제와 함께 배액 및 배양을 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 제왕절개 후 자궁내막염의 클린다마이신·겐타마이신 C 유지. 조합의 혐기성균·다균성 범위를 명시.
- https://www.ncbi.nlm.nih.gov/books/NBK615643/table/part2.tab65/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004366
- https://pubmed.ncbi.nlm.nih.gov/38990709/
