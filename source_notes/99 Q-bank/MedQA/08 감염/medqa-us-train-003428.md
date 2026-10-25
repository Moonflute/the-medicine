---
type: qbank
schema_version: 1
id: medqa-us-train-003428
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:06ebc81916c1f577b35ba4b92ddbd5039d9a613cb75fc262e4d3c38ef7f5dfe6
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Clostridioides difficile infection"
  - "antibiotic-associated diarrhea"
  - "pseudomembranous colitis"
  - "oral vancomycin"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qxsOynk-uniSDqsrDsnqXsl7wgKFBzZXVkb21lbWJyYW5vdXMgQ29saXRpcykubWQ
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdGF6aWRpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

49세 남성이 3일간 지속된 아래다리 피부의 급성 통증과 발적을 주소로 응급실에 왔다. 제2형 당뇨병이 12년간 있었지만 약물 복용은 불규칙했다. 급성 봉와직염으로 진단되어 정맥 세프타지딤을 투여받던 중 5일째에 심한 물설사, 발열, 복통이 발생했다. 백혈구는 1만4천/mm3였다. 다음 중 가장 적절한 초기 치료는?

## 선택지

A. 정맥 반코마이신
B. 경구 반코마이신
C. 경구 메트로니다졸
D. 경구 시프로플록사신

## 해설


최근 항균제 노출 뒤 새로 발생한 지속 물설사는 C. difficile 감염을 의심하게 한다. 적절한 설사 검체로 독소/분자 검사 알고리즘을 적용하고 탈수·중증도를 평가한다. 선택지 중 경구 vancomycin이 유효한 치료이며 정주 vancomycin은 장내 CDI 치료를 대신하지 못한다. 현행 성인 초기 비전격 CDI에서는 사용 가능하면 fidaxomicin이 선호되고 경구 vancomycin은 허용 대안이다. Metronidazole이 전혀 활성이 없는 것은 아니지만 우선약은 아니다. 이 환자는 항생제 5일째 발열·복통과 백혈구 14,000/mm³가 실제로 있으며, 백혈구는 중증 기준인 15,000/µL보다 낮지만 크레아티닌이 제시되지 않아 중증도를 확정할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003428 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 항생제 노출 후 의심 CDI의 경구 vancomycin 정답 유지; fidaxomicin 우선 권고·검사 필요성과 metronidazole 무효/설사 횟수만으로 중증이라는 과장 교정. 추가 QA: 이 환자는 항생제 5일째 발열·복통과 백혈구 14,000/mm³가 실제로 있으며, 백혈구는 중증 기준인 15,000/µL보다 낮지만 크레아티닌이 제시되지 않아 중증도를 확정할 수 없다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/clostridioides-difficile-2021-focused-update/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003428
