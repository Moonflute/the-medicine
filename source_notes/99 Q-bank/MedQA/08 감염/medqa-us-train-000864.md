---
type: qbank
schema_version: 1
id: medqa-us-train-000864
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:afeb0ebffdd5575c6c40a27ea5139bce71d19085a986f68820506b2a3aa1bc8d
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "urinary tract infection"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JqU66GcIOqwkOyXvCAoVXJpbmFyeSBUcmFjdCBJbmZlY3Rpb24pLm1k
question_type: prevention
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

비임신 여성이 지난 1년 동안 배양으로 확인된 방광염을 네 번 앓았다. 매번 성관계 직후에 발생했고 지금은 치료가 끝나 증상이 없다. 상담 끝에 항생제 예방을 원하며 이전 분리균은 트리메토프림/설파메톡사졸에 감수성이다. 항생제 노출을 줄이면서 쓸 예방 방법은?

## 선택지

A. 성관계 때마다 항생제를 정맥 주사한다
B. 증상이 없어도 매일 고용량 항생제를 계속 복용한다
C. 배양 결과와 무관하게 가족 모두 항생제를 복용한다
D. 성관계 후 적합한 항생제를 한 번 복용한다

## 해설


성관계와 명확히 연관된 재발성 방광염에는 성관계 전후에 적절한 항생제를 한 번 복용하는 예방 방법을 고려할 수 있다. 배양 감수성, 부작용과 내성을 고려해 약을 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000864 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 지속 예방요법이 성교 후 예방보다 일률적으로 우월하다는 오류를 제거; 배양·내성·부작용을 고려한 TMP-SMX 선택으로 한정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.auanet.org/documents/Guidelines/PDF/2025%20Guidelines/rUTI%20Update/rUTI%202025%20Unabridged%20Final.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000864
- https://www.auajournals.org/doi/full/10.1097/JU.0000000000000296
