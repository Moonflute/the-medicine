---
type: qbank
schema_version: 1
id: medqa-us-train-004634
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4530c0b8230e3e1f07da24d8c608d552e1b70871751f3ded77e3e156c02017f9
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "간경변성 복수"
  - "자발성 세균성 복막염"
  - "복수천자"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snpDrsJzshLEg7IS46regIOuzteunieyXvCAoU3BvbnRhbmVvdXMgQmFjdGVyaWFsIFBlcml0b25pdGlzKS5tZA
question_type: investigation
difficulty: complex
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

C형간염 간경변과 복수가 있는 45세 남성이 발열과 새 복통으로 응급실에 왔다. 이전과 달리 복부 전반에 압통이 있다. 초기 소생 중이며 초음파에서 안전하게 천자할 수 있는 복수가 확인됐다. 자발성 세균성 복막염을 확인할 검사는?

## 선택지

A. 복부 단순 X선
B. 상부위장관 내시경
C. 복수천자로 호중구 수와 배양을 확인한다
D. 혈액배양이 음성이면 복막염을 배제한다

## 해설

간경변성 복수 환자에게 발열, 복통 또는 의식 변화가 있으면 진단적 복수천자를 신속히 한다. 복수 호중구가 250개/mm³ 이상이면 다른 복강 내 감염원 여부와 함께 자발성 세균성 복막염을 판단한다. 패혈증이면 검체 채취가 지연된다고 항생제 투여를 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 복수·발열·의식저하에서 C는 진단적 복수천자이며 단순 배액치료라는 해설을 교정.
- https://aasldpubs.onlinelibrary.wiley.com/doi/full/10.1002/hep.31884

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004634
- https://doi.org/10.3350/cmh.2026.0281
