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

간경변과 복수가 있는 49세 여성이 집에서 지내다 복통과 발열로 왔다. 최근 입원·항생제 사용은 없다. 복수천자에서 호중구가 1,020/μL이고 배양은 진행 중이다. 혈청 크레아티닌은 1.6 mg/dL, 총 빌리루빈은 4.2 mg/dL다. 적절한 초기 치료는?

## 선택지

A. 배양에서 균이 확인될 때까지 항생제 보류
B. 정맥 알부민 단독
C. 정맥 세포탁심과 알부민
D. 정맥 메트로니다졸과 알부민

## 해설

복수 호중구가 250/μL 이상이면 배양을 기다리지 않고 치료한다. 지역사회 획득 자발성 세균성 복막염의 경험적 치료에는 세포탁심 또는 세프트리악손을 사용한다. 이 환자처럼 신장기능이나 빌리루빈 이상이 있으면 알부민을 병용한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: PMN약1017의 SBP에서 cefotaxime C는 적절하나 ceftriaxone과 약명동일시·일률1주이상 치료 설명을 교정.
- https://aasldpubs.onlinelibrary.wiley.com/doi/full/10.1002/hep.31884

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005515
- https://doi.org/10.3350/cmh.2026.0281
