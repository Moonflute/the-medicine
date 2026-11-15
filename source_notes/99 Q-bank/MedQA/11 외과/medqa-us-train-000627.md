---
type: qbank
schema_version: 1
id: medqa-us-train-000627
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:83fcf68d24a6c05d900a0ca537f874deddc6933a52db13009d14a03d1bb50e1c
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "pulmonary contusion"
  - "whiplash injury"
  - "umbilical hernia"
  - "retroperitoneal hemorrhage"
related_disease_slugs:
  - MTEg7Jm46rO8L-uwsOq8vSDtg4jsnqUgKFVtYmlsaWNhbCBIZXJuaWEpLm1k
  - MjEg7J2R6riJ7J2Y7ZWZL-uLpOuwnOyZuOyDgSAoUG9seXRyYXVtYSkubWQ
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9TZXJ0cmFsaW5lLm1k
---

# MedQA US 임상문제

## 문제

교통사고 뒤 옆구리 통증과 멍이 심해진 66세 여성의 혈색소가 11.2에서 7.9 g/dL로 떨어졌다. 처음과 반복 FAST에서 복강 내 자유액은 없고 현재 혈압은 안정적이다. 후복막 출혈을 평가할 검사는?

## 선택지

A. 복부 단순 X선만 반복
B. 복강 내 혈액이 없으므로 더 평가하지 않는다
C. 정맥 조영 복부·골반 CT
D. 복강세척으로 후복막 출혈을 확인한다

## 해설


FAST는 복강 내 액체 확인을 위한 검사여서 음성이라고 후복막 출혈이 배제되지는 않는다. 혈역학적으로 안정되면 조영 CT로 위치와 활동성 출혈을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000627 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문에 있는 복부 팽만을 부정하던 오류를 제거하고 후복막 출혈·마비성 장폐색의 실제 단서를 연결했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000627
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8896237/
