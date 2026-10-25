---
type: qbank
schema_version: 1
id: medqa-us-train-005620
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:92c52b2314606efeb34cf6a2b46fb68e571f90a633a82cc238c5e6148f091325
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "다발골수종"
  - "M 단백"
  - "용해성 골병변"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uLpOuwnOqzqOyImOyihSAoTU0pIChNdWx0aXBsZSBNeWVsb21hIChNTSkpLm1k
question_type: other
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
---

# MedQA US 임상문제

## 문제

69세 여성이 한 달 전부터 지속된 요통과 우측 흉통으로 내원했다. 통증은 움직일 때 악화된다. 지난 2개월 동안 피로감이 점점 심해졌다. 어머니가 유방암으로 사망했다. 환자는 고혈압과 위식도 역류질환이 있으며 현재 메토프롤롤과 오메프라졸을 복용 중이다. 활력징후는 정상이다. 근력은 정상이지만 하부 척추와 우측 흉곽 외측을 누르면 압통이 있다. 그 외 신체검사는 정상이다. 검사에서 혈색소 9.5 g/dL, 백혈구 7,300/mm³, 혈소판 230,000/mm³, 혈청 Na⁺ 137 mEq/L, K⁺ 3.5 mEq/L, 크레아티닌 1.3 mg/dL가 확인되었다. 심전도에는 허혈 소견이 없다. 흉부 X선에서 두 개의 갈비뼈에 용해성 병변이 보인다. 혈액도말에서 적혈구가 서로 뭉쳐 있다. 면역고정 전기영동에서 M 단백 스파이크가 보인다. 이 환자의 질환은 다음 중 어떤 소견과 가장 관련이 있는가?

## 선택지

A. 요로감염
B. 백혈병성 공백
C. 비장비대
D. 리히터 변환

## 해설


M단백·용해성 골병변·빈혈은 MM을 시사한다. 정상 다클론 면역글로불린 기능 저하 등으로 세균 감염 위험이 증가하여 선택지 A의 요로감염과 연관될 수 있다. 이를 단순 신장 단백 침착이 직접 요로감염을 만든다고 설명하면 안 된다. Richter 전환은 CLL의 고등급 림프종 전환을 뜻한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005620 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: MM의 감염 위험을 신장 단백 침착만으로 설명한 오류 교정; UTI A 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005620
