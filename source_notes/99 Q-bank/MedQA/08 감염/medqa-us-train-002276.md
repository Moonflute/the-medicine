---
type: qbank
schema_version: 1
id: medqa-us-train-002276
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:edeec1d654d4c033e8173b71a4803a12ab37fce9a8e176edde3de4a0e13c7544
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Clostridioides difficile infection"
  - "antibiotic-associated diarrhea"
  - "oral vancomycin"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qxsOynk-uniSDqsrDsnqXsl7wgKFBzZXVkb21lbWJyYW5vdXMgQ29saXRpcykubWQ
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

33세 남성이 설사로 응급실에 왔다. 매우 많고 물 같은 설사가 일주일 동안 호전되지 않았다. 전반적으로 건강하지만 최근 봄방학 중 입원해 알코올 중독과 흡인성 폐렴으로 치료받았다. 방학 중 캠핑을 하며 덜 익힌 닭고기를 먹고 산에서 흐르는 물을 마셨다. 체온 100.5°F(38.1°C), 혈압 111/74 mmHg, 맥박 110회/분, 호흡 16회/분, 산소포화도 98%이다. 피곤해 보이지만 복부 압통은 없다. 다음 중 가장 적절한 치료는?

## 선택지

A. 시프로플록사신과 메트로니다졸
B. 메트로니다졸
C. 치료가 필요하지 않다
D. 반코마이신

## 해설


최근 항균제 노출 뒤 새로 발생한 지속 물설사는 C. difficile 감염을 의심하게 한다. 적절한 설사 검체로 독소/분자 검사 알고리즘을 적용하고 탈수·중증도를 평가한다. 선택지 중 경구 vancomycin이 유효한 치료이며 정주 vancomycin은 장내 CDI 치료를 대신하지 못한다. 현행 성인 초기 비전격 CDI에서는 사용 가능하면 fidaxomicin이 선호되고 경구 vancomycin은 허용 대안이다. Metronidazole이 전혀 활성이 없는 것은 아니지만 우선약은 아니다. 이 환자는 38.1°C의 발열이 실제로 있으나 백혈구·크레아티닌 수치는 없어 중증 등급을 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002276 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 항생제 노출 후 의심 CDI의 경구 vancomycin 정답 유지; fidaxomicin 우선 권고·검사 필요성과 metronidazole 무효/설사 횟수만으로 중증이라는 과장 교정. 추가 QA: 이 환자는 38.1°C의 발열이 실제로 있으나 백혈구·크레아티닌 수치는 없어 중증 등급을 확정하지 않는다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/clostridioides-difficile-2021-focused-update/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002276
