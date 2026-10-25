---
type: qbank
schema_version: 1
id: medqa-us-train-006699
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b80487fd8be1bf2d16b7c9d4c45c005e8f9c9673c807a09f7125334991d71730
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "병원획득폐렴"
  - "중증 폐렴"
  - "경험적 광범위 항생제"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmZXBpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRXJ0YXBlbmVtLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

충수절제술로 입원한 지 3일 된 69세 여성에게 기침과 호흡곤란이 발생했다. 소량의 녹색 가래를 동반한 기침이 있고 체온은 39.0°C(102.2°F), 맥박은 분당 107회, 호흡수는 분당 31회, 혈압은 89/68 mm Hg이다. 실내 공기에서 산소포화도는 87%이고 폐 진찰에서 미만성 수포음과 거친 수포음이 들린다. 흉부 X선에서 왼쪽 상엽 침윤이 보인다. 혈액 배양 두 세트를 채취했다. 결과를 기다리는 동안 다음 중 약물치료로 가장 적절한 것은?

## 선택지

A. 아목시실린-클라불라네이트와 클라리트로마이신
B. 아지트로마이신과 세프트리악손
C. 세페핌과 반코마이신
D. 에르타페넴과 겐타마이신

## 해설

입원3일후 새침윤·발열·농성가래·저산소는 HAP에 부합한다. 제시 중 cefepime+vancomycin C가 녹농균과 MRSA를 포함한 적절한 경험치료 선택이다. 실제로는 이전IV항생제·지역내성·쇼크/환기필요에 따라 추가 항녹농균 약제가 필요할 수 있고 배양/반응으로 축소한다. 호흡/순환 소생을 병행한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: HAP의 C 경험요법은 유지하되 모든 중증도/내성환경에2약으로 충분하다는 일반화 제한.
- https://www.idsociety.org/practice-guideline/hap_vap/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006699
