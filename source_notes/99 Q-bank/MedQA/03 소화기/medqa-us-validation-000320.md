---
type: qbank
schema_version: 1
id: medqa-us-validation-000320
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:3aee83d441516a1dacf09d1127aea3af55a8a5f7a472ee218493865b8b40f699
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "복잡성 게실염"
  - "결장주위 농양"
  - "경피적 배액"
  - "Diverticulitis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsozsi6Tsl7wgKERpdmVydGljdWxpdGlzKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FsbG9wdXJpbm9sLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

55세 남성이 구불결장 게실염으로 입원했다. 적절한 정맥 항생제에도 발열이 지속된다. CT에서 결장 주변에 6 cm 농양이 있으며 안전한 경피 접근이 가능하다. 혈압은 안정적이고 범복막염은 없다. 항생제와 함께 시행할 처치는?

## 선택지

A. 농양이 커도 항생제만 계속한다
B. 영상 유도 경피적 농양 배액
C. 대장내시경으로 염증 부위를 생검한다
D. 모든 경우에 응급 개복술을 먼저 한다

## 해설


큰 게실 주위 농양은 항생제만으로 조절되지 않을 수 있다. 안정적이고 안전한 접근이 가능하면 영상 유도 배액으로 감염원을 조절한다. 범복막염이나 치료 실패가 있으면 수술 적응증을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000320 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 4cm 게실농양 B 배액+항생제는 적절한 선택이나 모든 지침에서 일률적 배액 필수라는 과장 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://doi.org/10.1097/DCR.0000000000004382
- https://doi.org/10.1186/s13017-020-00313-4

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000320
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13434530/
