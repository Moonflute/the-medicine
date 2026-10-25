---
type: qbank
schema_version: 1
id: medqa-us-train-005515
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0585111ec2fb9714b3ba6cd0994782e4decbe36cfa16364d29bd4b4ca44895c8
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "자발성 세균성 복막염"
  - "간경변성 복수"
  - "세포탁심"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snpDrsJzshLEg7IS46regIOuzteunieyXvCAoU3BvbnRhbmVvdXMgQmFjdGVyaWFsIFBlcml0b25pdGlzKS5tZA
question_type: management
difficulty: simple
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2Vmb3RheGltZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

C형간염 간경변, 식도정맥류, 복수와 간성뇌증이 있는 49세 여자가 일주일 동안 악화된 복부 불편감으로 내원했다. 복수천자에서 백혈구 1,196/μL, 호중구 85%가 확인되었다. 가장 적절한 치료는?

## 선택지

A. 푸로세미드와 스피로놀락톤 증량
B. 경정맥 간내 문맥전신 단락술
C. 세포탁심
D. 메트로니다졸

## 해설

복수 PMN은1196×0.85로 약1017/μL여서 SBP를 지지한다. C의 cefotaxime은 제시 선택지 중 적절한 3세대 cephalosporin이며 ceftriaxone과는 다른 약이다. 지역 내성·의료관련 감염 여부·배양과 반응에 따라 항생제와 기간을 정한다. 모든 환자에서 반드시 1주일 이상이라는 설명은 부정확하며 albumin 병용 적응증도 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: PMN약1017의 SBP에서 cefotaxime C는 적절하나 ceftriaxone과 약명동일시·일률1주이상 치료 설명을 교정.
- https://aasldpubs.onlinelibrary.wiley.com/doi/full/10.1002/hep.31884

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005515
