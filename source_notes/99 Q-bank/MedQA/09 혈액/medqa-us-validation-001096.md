---
type: qbank
schema_version: 1
id: medqa-us-validation-001096
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7892b3cbc89b74b6f956ec45d136b36749f4981a2ee83b7d1ee442757eb31e28
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "수혈 후 용혈"
  - "비포합 고빌리루빈혈증"
  - "빌리루빈 생성 증가"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_ri7Trj4Tqs4Qg7KeI7ZmYLm1k
question_type: investigation
difficulty: complex
answer: B
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
---

# MedQA US 임상문제

## 문제

농축적혈구 수혈 10일 뒤 환자에게 황달이 생기고 혈색소가 다시 떨어졌다. 출혈은 없고 간접 빌리루빈과 LDH가 상승했다. 지연성 용혈성 수혈반응을 확인하는 데 가장 적절한 검사는?

## 선택지

A. 비포합 빌리루빈만 반복
B. 직접항글로불린검사와 새로 생긴 적혈구 동종항체 검사
C. 정맥혈 배양만 채취
D. 분변 잠혈검사

## 해설


수혈 며칠 뒤 혈색소가 다시 낮아지고 용혈 소견이 생기면 지연성 용혈성 수혈반응을 의심한다. 혈액은행과 함께 직접항글로불린검사와 항체 동정으로 원인을 찾는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001096 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수혈/혈종 분해 후 간접bilirubin 증가의 생산 증가 C 유지. 원문 복강 내 흡수 중 혈종을 복원하고 지연성 면역용혈을 확인 없이 확정하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001096
- https://www.transfusion.or.kr/KOR/images/file/2022_5.pdf
- https://profedu.blood.ca/en/transfusion/clinical-guide/transfusion-reactions
