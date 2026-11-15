---
type: qbank
schema_version: 1
id: medqa-us-validation-001019
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:03d74ae893df1f994592b59dbedfb7edf345b3680bb1696fade38ff3756e02fd
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "클로스트리디오이데스 디피실 감염"
  - "항생제 관련 설사"
  - "글루타메이트 탈수소효소"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qxsOynk-uniSDqsrDsnqXsl7wgKFBzZXVkb21lbWJyYW5vdXMgQ29saXRpcykubWQ
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
---

# MedQA US 임상문제

## 문제

최근 항생제를 복용한 62세 환자가 첫 C. difficile 감염으로 진단됐다. 대변 독소 양성, 백혈구 9,800/μL, 크레아티닌 0.9mg/dL이며 저혈압이나 장마비가 없다. 피닥소마이신을 사용할 수 없을 때 적절한 대안은?

## 선택지

A. 경구 반코마이신
B. 정맥 반코마이신
C. 정맥 메트로니다졸 단독
D. 경구 시프로플록사신

## 해설


비전격성 첫 감염에는 피닥소마이신을 우선 고려하지만 사용이 어렵다면 경구 반코마이신이 적절하다. 정맥 반코마이신은 장관 내 감염 치료를 대신하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001019 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 항균제 후 새 설사에서 GDH EIA C는 선별 단계로 적절하나 단독 독소생성균/활동성 CDI 확진이 아니다. 가장 민감이라는 과장 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/clostridium-difficile/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001019
- https://www.idsociety.org/practice-guideline/clostridioides-difficile-2021-focused-update/
