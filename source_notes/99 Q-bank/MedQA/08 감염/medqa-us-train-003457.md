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

55세 남성이 3일간 매일 10회 정도의 비혈성 물설사로 내원했다. 최근 피부 농양과 봉와직염으로 치료를 마쳤고 활력징후에서 맥박은 105회/분이었다. 복부는 전반적으로 불편하지만 국소 압통은 없었고 직장검사와 잠혈검사는 정상이었다. 다음 중 가장 적절한 초기 치료는?

## 선택지

A. 클린다마이신
B. 메트로니다졸
C. 경구 수분보충 후 귀가
D. 반코마이신

## 해설


최근 항균제 노출 뒤 새로 발생한 지속 물설사는 C. difficile 감염을 의심하게 한다. 적절한 설사 검체로 독소/분자 검사 알고리즘을 적용하고 탈수·중증도를 평가한다. 선택지 중 경구 vancomycin이 유효한 치료이며 정주 vancomycin은 장내 CDI 치료를 대신하지 못한다. 현행 성인 초기 비전격 CDI에서는 사용 가능하면 fidaxomicin이 선호되고 경구 vancomycin은 허용 대안이다. Metronidazole이 전혀 활성이 없는 것은 아니지만 우선약은 아니다. 이 환자는 하루 약 10회의 설사와 빈맥이 있으나 발열·백혈구 수치는 제시되지 않았으므로 이를 만들어 넣거나 설사 횟수만으로 중증을 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003457 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 항생제 노출 후 의심 CDI의 경구 vancomycin 정답 유지; fidaxomicin 우선 권고·검사 필요성과 metronidazole 무효/설사 횟수만으로 중증이라는 과장 교정. 추가 QA: 이 환자는 하루 약 10회의 설사와 빈맥이 있으나 발열·백혈구 수치는 제시되지 않았으므로 이를 만들어 넣거나 설사 횟수만으로 중증을 확정하지 않는다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/clostridioides-difficile-2021-focused-update/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003457
