---
type: qbank
schema_version: 1
id: medqa-us-train-005633
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:995cdfb1ead185c977e397a0c418d490af9e6347c3c6d8c5288605a375ffc481
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "자폐 스펙트럼 장애"
  - "발달 평가"
  - "불필요한 추가검사"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yekO2PkCDsiqTtjpntirjrn7wg7J6l7JWgIChBdXRpc20gU3BlY3RydW0gRGlzb3JkZXIpLm1k
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

자폐스펙트럼장애로 진단받은 4세 아이의 신경학적 진찰은 정상이다. 발작으로 의심되는 사건이나 발달 기술의 퇴행은 없다. 보호자가 모든 자폐 아동에게 뇌파검사가 필요한지 묻는다. 가장 적절한 설명은?

## 선택지

A. 현재는 필요 없으며 발작 의심 소견이나 비전형적 퇴행이 생기면 평가한다
B. 자폐가 진단되면 증상과 무관하게 뇌파검사를 한다
C. 언어 지연이 있으면 수면 뇌파검사를 반드시 한다
D. 지적장애가 없는 자폐 아동은 발작이 의심되어도 뇌파검사가 필요 없다

## 해설

뇌파검사는 자폐스펙트럼장애의 일률적 검사로 권하지 않는다. 발작 의심 소견, 비전형적인 퇴행 또는 다른 신경학적 단서가 있을 때 적응증을 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 보기의 불필요한 MRI/EEG/MECP2 검사 배제와 자폐의 전체 평가 불필요를 구분.
- https://publications.aap.org/pediatrics/article/145/1/e20193447/36917/Identification-Evaluation-and-Management-of?autologincheck=redirected%23sec-8

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005633
- https://doi.org/10.1542/peds.2019-3447
- https://www.nice.org.uk/guidance/cg128
