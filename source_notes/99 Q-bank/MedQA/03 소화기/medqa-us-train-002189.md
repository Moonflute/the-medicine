---
type: qbank
schema_version: 1
id: medqa-us-train-002189
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c918840f9b9b824d0ddacf8601ca87ffd552c1eae740ca6de0894e79517f55ae
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "primary biliary cholangitis"
  - "cholestatic liver disease"
  - "osteoporosis"
  - "DEXA scan"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sm5DrsJzshLEg64u07KaZ7ISxIOuLtOq0gOyXvCAoUEJDKSAoUHJpbWFyeSBCaWxpYXJ5IENob2xhbmdpdGlzKS5tZA
  - MDQg64K067aE67mEL-qzqOuLpOqzteymnSAoT3N0ZW9wb3Jvc2lzKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITslZQubWQ
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQWNldHlsY3lzdGVpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

폐경 뒤의 58세 여성이 원발성 담즙성 담관염을 진단받아 우르소데옥시콜산을 시작했다. 몸무게가 적고 최근 키가 줄었다. 질환과 관련된 골다공증 위험을 평가할 기본 검사는?

## 선택지

A. 요추·고관절 이중에너지 X선 흡수계측(DXA)
B. 혈청 칼슘 단독 검사
C. 뼈 신티그래피
D. 흉부 X선

## 해설


담즙정체성 간질환은 골밀도 감소와 관련된다. 특히 폐경 등 추가 위험이 있으면 DXA로 골밀도를 평가한다. 정상 칼슘 수치로 골다공증을 배제할 수 없다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: PBC의 간내 소담관 파괴·소양증·sicca에 담즙정체성 골질환 평가 DXA A가 선택지상 적절.
- https://www.aasld.org/practice-guidelines/primary-biliary-cholangitis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002189
- https://doi.org/10.1002/hep.30145
