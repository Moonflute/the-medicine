---
type: qbank
schema_version: 1
id: medqa-us-train-006915
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1d13657ad09b59af7607612ba910e01136c4ee091aaa921a71937fc07d6dbc8a
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "급성 신우신염"
  - "당뇨병 합병 요로감염"
  - "경구 항생제 전환"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsi6DsmrDsi6Dsl7wgKEFjdXRlIFB5ZWxvbmVwaHJpdGlzKS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTWVyb3BlbmVtLm1k
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

조절이 잘 안 되는 당뇨병 병력이 있는 64세 여성이 오심과 구토로 응급실에 내원했다. 어제 시작되어 점점 악화되었고 먹을 수 없다. 체온은 102°F(38.9°C), 혈압은 115/68 mmHg, 맥박은 분당 120회, 호흡수는 분당 17회, 산소포화도는 98%이다. 왼쪽 늑골척추각 압통이 있고 소변검사에서 세균뇨와 농뇨가 보인다. 입원하여 정맥 세프트리악손을 시작했다. 입원 3일째 발열이 없고 먹고 마실 수 있으며 호전되었다. 퇴원 시 외래에서 시작하거나 계속해야 할 항생제 요법은?

## 선택지

A. 아목시실린
B. 메로페넴
C. 니트로푸란토인
D. 트리메토프림-설파메톡사졸

## 해설


임상적으로 안정되고 경구섭취가 가능하면 유효한 경구약으로 전환할 수 있어 선택지 중 TMP-SMX D가 적절한 옵션이다. 배양 감수성을 확인하여 선택하며 ceftriaxone에 호전되었다고 TMP-SMX 내성이 없다는 뜻은 아니다. Nitrofurantoin은 신실질 치료에 적절하지 않고 meropenem은 일반적인 경구 퇴원약이 아니다. 전체 유효 치료기간은 반응·합병증·현행 지침에 맞추며 무조건 최소1주 추가라는 규칙으로 정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006915 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 신우신염 경구전환 D 유지; ceftriaxone 반응이 TMP-SMX 감수성을 보장한다는 설명과 임의 기간 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/complicated-urinary-tract-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006915
