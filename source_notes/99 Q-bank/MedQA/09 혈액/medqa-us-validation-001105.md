---
type: qbank
schema_version: 1
id: medqa-us-validation-001105
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:923fe936493e5831436abd83dee172f265367740a4c15177b15fedcbd289f582
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "용혈성 요독 증후군"
  - "분절 적혈구"
  - "시가독소"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yaqe2YiOyEsSDsmpTrj4Ug7Kad7ZuE6rWwIChIZW1vbHl0aWMgVXJlbWljIFN5bmRyb21lLCBIVVMpLm1k
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

6세 남아가 생일파티 후 시작된 일주일간의 때때로 혈성인 설사로 입원했다. 무기력하고 먹거나 마시지 못하며 점상출혈이 있다. BUN 72 mg/dL, 크레아티닌 8.1 mg/dL, 혈소판 10,000/μL 미만이고 PT와 PTT는 정상이다. 말초혈액도말에서 예상되는 소견은?

## 선택지

A. 연전 형성
B. 분절 적혈구
C. 가시적혈구
D. 거대 혈소판

## 해설


용혈성 요독 증후군에서는 파괴된 적혈구가 비정상적인 형태인 분절 적혈구(schistocytes)를 보인다. 이는 미세혈관 내에서 기계적 파괴에 의한 특징적인 소견이다. 따라서 말초혈액도말에서 분절 적혈구가 예상된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001105 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 설사 후 AKI·혈소판감소·정상응고는 HUS의 MAHA와 fragmented RBC B. 응고이상 DIC 및 rouleaux 등과 대조.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001105
