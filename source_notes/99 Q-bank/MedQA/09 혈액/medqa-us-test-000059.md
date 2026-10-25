---
type: qbank
schema_version: 1
id: medqa-us-test-000059
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:025a64287e307dd1a7b197424db23f4a1218e4132eafc1a068d855c355086be2
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "용혈성 요독 증후군"
  - "시가 독소"
  - "분열적혈구"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yaqe2YiOyEsSDsmpTrj4Ug7Kad7ZuE6rWwIChIZW1vbHl0aWMgVXJlbWljIFN5bmRyb21lLCBIVVMpLm1k
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

2세 남아가 2일 동안 창백하고 점점 기면 상태가 되어 내원했다. 일주일 전 복통, 구토, 혈성 설사가 있었지만 호전되었다. 멕시코 6주 자동차 여행을 증상 때문에 일찍 돌아왔고 부모는 경구 수분보충액을 먹였다. 예방접종은 최신이다. 체온 38.4°C, 맥박 분당 130회, 호흡수 분당 35회, 혈압 95/50 mmHg이며 공막 황달이 있다. 복부는 부드럽고 압통, 경직, 반발통은 없으며 장음은 항진되어 있다. 혈색소 8.5 g/dL, MCV 94 μm³, 백혈구 18,000/mm³, 혈소판 45,000/mm³, PT 12초, PTT 34초, BUN 28 mg/dL, 크레아티닌 1.6 mg/dL, 총빌리루빈 2.5 mg/dL(직접 0.1), LDH 1,658 U/L이다. 혈액도말에서 분열적혈구가 보인다. 가장 가능성 높은 진단은?

## 선택지

A. 헤노흐-쇤라인 자반증
B. 혈전성 혈소판감소성 자반증
C. 용혈성 요독 증후군
D. 면역성 혈소판감소성 자반증

## 해설


혈성 설사 뒤 미세혈관병성 용혈성 빈혈·혈소판감소·급성 신손상이 발생해 STEC 관련 HUS(C)가 가장 타당하다. TTP도 같은 미세혈관병증을 보일 수 있어 단순 혈소판감소만의 질환은 아니며 연령·선행 설사·신장 침범을 함께 구별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000059 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 혈성 설사 뒤 MAHA·혈소판감소·AKI의 소아 HUS C 유지. TTP가 혈소판감소만 설명한다는 오답 해설 오류 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000059
