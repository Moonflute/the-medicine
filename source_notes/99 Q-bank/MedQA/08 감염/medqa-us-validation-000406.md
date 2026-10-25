---
type: qbank
schema_version: 1
id: medqa-us-validation-000406
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:ef22ef712f784b00bc3366e0ce2a78b20ca12b4d097870a1b901f9c41a061e11
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "말라리아"
  - "용혈성 빈혈"
  - "혈액도말검사"
related_disease_slugs:
  - MDgg6rCQ7Je8L-unkOudvOumrOyVhCAoTWFsYXJpYSkubWQ
  - MDkg7ZiI7JWhL-yaqe2YiOyEsSDruYjtmIggKEhlbW9seXRpYyBBbmVtaWEpLm1k
question_type: investigation
difficulty: complex
answer: C
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
---

# MedQA US 임상문제

## 문제

55세 남성이 일주일간의 두통, 발열, 오한, 호흡곤란, 복통으로 응급실에 왔다. 2주 전 보츠와나 여행에서 돌아왔고 황달, 간비대, 빈혈, 혈소판감소증, 저혈당이 있다. 소변에서 혈액 3+인데 적혈구는 0~1/고배율시야이고 pH 7.31이다. 가장 적절한 다음 단계는?

## 선택지

A. 쿰스 검사
B. 혈액배양
C. 혈액도말검사
D. 혈청검사

## 해설


보츠와나 여행 후 발열·빈혈·혈소판감소와 혈색소뇨를 시사하는 소변 blood 양성/적혈구 부족은 말라리아를 의심하게 한다. 즉시 후층·박층 혈액도말(C)을 시행하여 기생충·종·기생충혈증을 확인한다. 더 빠르게 가능하면 신속검사를 병행하되 도말도 필요하다. 원문 크레아티닌은 0.9mg/dL로 급성 신부전이 입증된 것은 아니다. 초기 도말 음성이라도 의심이 높으면 반복 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000406 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 여행 후 발열·혈관내 용혈에서 말라리아 긴급 후·박층 도말 C 유지. 원문 Cr0.9인데 신부전이라고 덧붙인 오류와 1시간 보장/무조건 가장 빠른 검사 단정 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/malaria/hcp/clinical-guidance/evaluation-and-diagnosis.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000406
