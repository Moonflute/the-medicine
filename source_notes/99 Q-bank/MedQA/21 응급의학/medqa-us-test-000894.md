---
type: qbank
schema_version: 1
id: medqa-us-test-000894
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:b8877d6e733b65f906e354ad7325d6fb0310d644a60d44a2b7204db00741a8fe
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "개 물림"
  - "동물 교상"
  - "파스퇴렐라 감염"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-q1kOyDgSDqsJDsl7wgKEJpdGUgV291bmQgSW5mZWN0aW9uKS5tZA
difficulty: simple
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 남성이 이틀 전 길 잃은 개에게 손을 물려 진료를 받으러 왔다. 과거력과 처방약은 없고 음주·흡연도 하지 않는다. 활력징후는 정상이다. 손에 깨끗한 천자상 두 개와 국소 봉와직염이 보였으며 모세혈관 재충만은 2초, 손의 감각운동검사는 정상이었다. 가장 적절한 치료는?

## 선택지

A. 아목시실린
B. 아목시실린-클라불라네이트
C. 클린다마이신
D. 독시사이클린

## 해설

개 물림의 감염은 Pasteurella를 포함한 여러 호기성·혐기성 세균이 원인일 수 있다. 선지 중 이들을 포괄하는 amoxicillin-clavulanate(B)가 적절한 경구 치료이다. Clavulanate가 β-lactamase를 억제하며 amoxicillin이 항균 성분이다. 손의 깊은 구조 손상·상처 세척과 파상풍·광견병 노출 위험도 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 감염된 개 물림의 amoxicillin-clavulanate B를 유지하고 혐기성균을 아네로박터라는 특정 그람음성균처럼 적은 설명을 교정한다.
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000894
