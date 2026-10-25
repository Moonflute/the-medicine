---
type: qbank
schema_version: 1
id: medqa-us-validation-001195
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:03cf2a4128cda0a20909486502b8b821d5bcce6e75985c1bfda9fc6ebbbee1b6
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "폐렴구균 수막염"
  - "비장절제술"
  - "무비증"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IS46reg7ISxIOuHjOyImOunieyXvCAoQmFjdGVyaWFsIE1lbmluZ2l0aXMpLm1k
question_type: mechanism
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

32세 남성이 발열, 두통, 혼돈과 경부강직으로 응급실에 왔다. 과거 교통사고 후 비장절제술을 받았고, 뇌척수액에서 단백질 상승, 포도당 감소와 그람양성 쌍구균이 보인다. 이 환자의 기저 질환 위험을 높인 요인은?

## 선택지

A. 선천성 체액성 면역결핍
B. 단일 장기의 기능장애
C. 여러 장기의 기능장애
D. 진단되지 않은 바이러스 감염

## 해설


비장은 혈액 내 미생물과 항원을 제거하는 기능을 담당한다. 비장절제로 인한 단일 장기의 면역기능 상실(무비증)이 폐렴구균 같은 그람양성 쌍구균 감염 위험을 크게 높인다. 정답은 단일 장기의 기능장애이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001195 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 비장절제 후 피막균 폐렴구균 수막염 위험은 단일장기 면역기능 상실 B. 선천성 체액결핍으로 바꾸지 않고 원사례 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001195
