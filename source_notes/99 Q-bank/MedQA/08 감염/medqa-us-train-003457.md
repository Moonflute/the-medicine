---
type: qbank
schema_version: 1
id: medqa-us-train-003457
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a1bef0af2bfa8ad6e78f6e1779fc1568fb8e8daf55746344cddb26e936c4bf87
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Clostridioides difficile infection"
  - "antibiotic-associated diarrhea"
  - "severe diarrhea"
  - "oral vancomycin"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qxsOynk-uniSDqsrDsnqXsl7wgKFBzZXVkb21lbWJyYW5vdXMgQ29saXRpcykubWQ
question_type: management
difficulty: standard
answer: D
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

첫 C. difficile 감염에 경구 반코마이신을 받고 회복했던 환자가 4주 뒤 물설사와 대변 독소 양성으로 다시 진단됐다. 저혈압이나 장마비는 없고 피닥소마이신을 사용할 수 있다. 첫 재발에 우선 고려할 치료는?

## 선택지

A. 정맥 반코마이신
B. 메트로니다졸 단독
C. 리팍시민 단독
D. 경구 피닥소마이신

## 해설


첫 재발에는 피닥소마이신을 우선 고려한다. 경구 반코마이신 감량·간헐 요법도 가능한 대안이지만 정맥 반코마이신은 장내 감염을 치료하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003457 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 항생제 노출 후 의심 CDI의 경구 vancomycin 정답 유지; fidaxomicin 우선 권고·검사 필요성과 metronidazole 무효/설사 횟수만으로 중증이라는 과장 교정. 추가 QA: 이 환자는 하루 약 10회의 설사와 빈맥이 있으나 발열·백혈구 수치는 제시되지 않았으므로 이를 만들어 넣거나 설사 횟수만으로 중증을 확정하지 않는다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/clostridioides-difficile-2021-focused-update/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003457
