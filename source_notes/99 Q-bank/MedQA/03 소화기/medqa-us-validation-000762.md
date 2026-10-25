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

52세 여성이 두 차례의 제균요법 후에도 요소호기검사와 생검에서 H. pylori가 확인되어 진료를 받으러 왔다. 클라리스로마이신 포함 요법과 비스무트 요법을 이미 받았다. PPI와 함께 추가할 약물은?

## 선택지

A. 비스무트 서브살리실산, 메트로니다졸, 테트라사이클린
B. 레보플록사신, 아목시실린
C. 클라리스로마이신, 아목시실린
D. 리파부틴, 아목시실린

## 해설


정답 D. 클라리스로마이신 포함 요법과 bismuth 요법 후에도 감염이 지속되면 순응도·이전 처방을 확인하고 감수성 기반 재치료를 고려한다. 현행 ACG는 이전 bismuth 사제요법 후 penicillin 알레르기가 없는 환자에서 rifabutin–amoxicillin–PPI 요법을 경험적 구제 선택지로 제안한다. Levofloxacin 요법은 감수성이 확인된 경우에 제한하므로 이 사례에서 B를 자동 선택하지 않는다. 이는 기존 실패 요법에 단순히 약을 덧붙이는 뜻이 아니라 새 제균요법으로 교체하는 것이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000762 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 클라리스로마이신 및 bismuth 요법 실패 후 감수성 미확인 levofloxacin B를 강제하지 않고 현행 ACG salvage rifabutin D로 정답 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://doi.org/10.14309/ajg.0000000000002968
- https://gi.org/wp-content/uploads/2025/01/ACG-Hpylori-Guidelines-Highlights-2024-FINAL.pdf.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000762
