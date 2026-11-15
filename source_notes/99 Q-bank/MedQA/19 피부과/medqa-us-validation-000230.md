---
type: qbank
schema_version: 1
id: medqa-us-validation-000230
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:3708fbae4d6cc27f2bbc0d55aee1012f02165da85740f6e658b248eabc82def1
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "봉와직염"
  - "단독"
  - "연조직 감염"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-uLqOuPhSAoRXJ5c2lwZWxhcykubWQ
difficulty: complex
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmlmZWRpcGluZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmYXpvbGluLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VwaGFsZXhpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

43세 환자가 다리 한쪽의 넓은 홍반과 압통, 고열로 입원했다. 고름이나 농양, 괴사성 감염 소견은 없고 중증 베타락탐 알레르기도 없다. 초기 정맥 항균제로 적절한 것은?

## 선택지

A. 시프로플록사신 단독
B. 세파졸린
C. 메트로니다졸 단독
D. 아시클로버

## 해설

입원이 필요한 비화농성 봉와직염에는 사슬알균과 감수성 포도알균을 고려한 세파졸린을 사용할 수 있다. 특수 노출이나 불안정, 괴사 소견이 있으면 치료 범위를 다시 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 레이노/니페디핀 해설 오연결. 발열·오한 동반 비화농성 피부감염의 정맥 cefazolin B 설명. 감염중증도에 따른 치료와 응급 재평가 한계 명시.
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000230
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5754343/
