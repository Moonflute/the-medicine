---
type: qbank
schema_version: 1
id: medqa-us-validation-000762
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:dffa1aaf85a8ede5ac28c883a53de693704544938ce5f7372264fc70e768a7ba
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "제균 실패 H. pylori"
  - "구제요법"
  - "레보플록사신"
  - "Helicobacter pylori infection"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC9ILnB5bG9yaSDqsJDsl7wgKEgucHlsb3JpIEluZmVjdGlvbikubWQ
question_type: management
difficulty: standard
answer: D
original_answer: B
answer_change_reason: "ACG 2024는 이전 bismuth 요법 후 감수성 미확인 경험적 salvage에서 rifabutin triple을 제안하고 levofloxacin은 감수성 확인 시에만 사용. 제시된 대안 D로 교정. https://doi.org/10.14309/ajg.0000000000002968"
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
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
---

# MedQA US 임상문제

## 문제

52세 여성이 클라리스로마이신 포함 요법과 비스무트 사제요법을 차례로 제대로 복용했으나, 적절한 간격을 두고 시행한 요소호기검사에서 헬리코박터 감염이 지속됐다. 페니실린 알레르기는 없다. 감수성 검사가 당장 어렵다면, 국내 지침에서 고려할 수 있는 PPI 기반 구제요법은?

## 선택지

A. 기존과 동일한 비스무트·메트로니다졸·테트라사이클린 재투여
B. 감수성 확인 없는 레보플록사신·아목시실린 병용
C. 클라리스로마이신·아목시실린 재투여
D. 리파부틴·아목시실린 병용

## 해설


비스무트 사제요법이 실패하면 이전 치료와 복약 순응도를 확인하고 가능하면 감수성에 맞춰 재치료한다. 국내 2025 개정안은 감수성 결과를 바로 얻기 어려울 때 리파부틴 삼제요법 또는 이전에 사용하지 않은 항생제를 포함한 변형 비스무트 사제요법을 고려할 수 있다고 제시한다. 보기 중 리파부틴·아목시실린·PPI가 이에 해당한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000762 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 클라리스로마이신 및 bismuth 요법 실패 후 감수성 미확인 levofloxacin B를 강제하지 않고 현행 ACG salvage rifabutin D로 정답 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://doi.org/10.14309/ajg.0000000000002968
- https://gi.org/wp-content/uploads/2025/01/ACG-Hpylori-Guidelines-Highlights-2024-FINAL.pdf.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000762
- 대한상부위장관·헬리코박터학회 2025 개정 지침, 권고 9-2: https://pmc.ncbi.nlm.nih.gov/articles/PMC13407497/
