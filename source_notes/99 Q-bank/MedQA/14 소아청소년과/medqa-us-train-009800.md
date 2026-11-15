---
type: qbank
schema_version: 1
id: medqa-us-train-009800
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:11f8ce464e0eef026874897e18f7a5ae7054c164674aee1f75ca4595c1cfdcee
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "고양이 교상"
  - "골수염"
  - "파스퇴렐라 감염"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-qzqOyImOyXvCAoT3N0ZW9teWVsaXRpcykubWQ
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
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

고양이에게 물린 지 일주일 된 5세 아이가 39℃ 발열과 절뚝거림으로 왔다. 상처에 고름이 있고 MRI에서 인접 뼈의 골수염이 의심된다. 배양과 외과 평가를 진행하며 교상균과 혐기성균을 덮을 정맥 항생제는?

## 선택지

A. 암피실린–설박탐
B. 아목시실린 단독
C. 반코마이신 단독
D. 세파졸린 단독

## 해설

고양이 교상 감염은 파스퇴렐라와 여러 호기성·혐기성균을 함께 고려한다. 암피실린–설박탐은 적절한 경험적 선택이며, 중증도·MRSA 위험·배양에 따라 요법을 조정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 고양이 교상 골수염의 균을 확정하지 않고 다균성 범위·배양/전문 치료 명확화.
- https://idmp.ucsf.edu/content/bite-wound
- https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009800
