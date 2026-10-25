---
type: qbank
schema_version: 1
id: medqa-us-validation-000854
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:256ca1ece5986e843ee717b5a4fa8349bd23b1fbb80fc99854932c4732c7085e
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "배란통"
  - "중간주기 통증"
  - "더글라스와 액체"
  - "Ovulation pain"
question_type: diagnosis
related_disease_slugs: []
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

18세 여성이 6시간 동안 지속된 오른쪽 아랫배 통증으로 응급실에 왔다. 월경은 규칙적인 28일 주기이며 마지막 월경은 2주 전이었다. 지난달에도 비슷한 통증이 있었고 골반 초음파에서 자궁 뒤쪽 더글라스와에 소량의 액체가 보인다. 임신검사 결과는 대기 중이다. 가장 가능성 높은 진단은?

## 선택지

A. 충수염
B. 자궁내막증
C. 배란통
D. 파열된 자궁외임신

## 해설

규칙적 28일 주기의 중간 시점인 마지막 월경 2주 후 발생한 일측 골반통과 소량의 골반 액체, 전월 유사 증상은 배란통(C)을 시사한다. 그러나 소량 복강액과 통증은 비특이적이며 다른 보기도 급성 통증으로 나타날 수 있다. 임신검사가 대기 중이므로 자궁외임신이 실제로 배제됐다고 단정해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 배란통 판단의 핵심인 규칙적 28일 월경·마지막 월경 2주 전이 번역에서 빠져 복원하고 급성 통증만으로 다른 진단을 배제한 해설을 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000854
