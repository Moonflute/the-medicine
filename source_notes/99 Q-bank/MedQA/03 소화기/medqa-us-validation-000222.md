---
type: qbank
schema_version: 1
id: medqa-us-validation-000222
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:b4d1b4b46f42887169ed7feafc8e3d7ca639153de275e1749cc174995d857df5
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "헬리코박터 파일로리 감염"
  - "소화성 궤양"
  - "위궤양"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITqtqTslpEgKEdhc3RyaWMgVWxjZXIpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC9ILnB5bG9yaSDqsJDsl7wgKEgucHlsb3JpIEluZmVjdGlvbikubWQ
question_type: management
difficulty: complex
answer: A
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
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
---

# MedQA US 임상문제

## 문제

57세 남성의 위궤양에서 헬리코박터가 확인됐다. 아목시실린으로 아나필락시스가 있었고, 클라리스로마이신 감수성을 확인할 수 없다. 국내에서 고려할 경험적 제균요법은?

## 선택지

A. PPI, 비스무트, 테트라사이클린, 메트로니다졸
B. PPI, 아목시실린, 클라리스로마이신
C. P-CAB과 아목시실린 이중요법
D. PPI, 리파부틴, 아목시실린

## 해설


아목시실린에 중증 즉시형 알레르기가 확인되면 아목시실린이 없는 제균요법을 선택한다. 비스무트 사제요법은 이 조건에서 선택할 수 있다. 치료 뒤에는 적절한 간격을 두고 비침습 검사로 제균 성공을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000222 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: amoxicillin 알레르기 사례에서 metronidazole 포함 제균요법의 금주 주의와 제균확인 시점을 구체화; 실제 처방명 없는 부분은 조건부 표현.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=205054e1-8172-47dc-931c-a18a60e7e9f0
- https://gi.org/wp-content/uploads/2025/01/ACG-Hpylori-Guidelines-Highlights-2024-FINAL.pdf.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000222
- https://doi.org/10.1111/hel.70149
