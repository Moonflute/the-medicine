---
type: qbank
schema_version: 1
id: medqa-us-train-001739
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:255cd836c7723ff66fb3d82f06b5281823c68d981b24d09ec1426a67ed5f89fa
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "postherpetic neuralgia"
  - "herpes zoster"
  - "neuropathic pain"
question_type: management
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uMgOyDgSDtj6zsp4QgKEhlcnBlcyBab3N0ZXIpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9HYWJhcGVudGluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

67세 환자가 오른쪽 갈비뼈를 따라 대상포진을 앓은 지 넉 달이 지났다. 발진은 사라졌지만 같은 부위가 화끈거리고 옷이 닿기만 해도 아프다. 신장기능은 정상이다. 통증 치료에 적절한 약은?

## 선택지

A. 경구 팜시클로버를 반복한다
B. 가바펜틴
C. 설하 니트로글리세린
D. 경구 아목시실린

## 해설

발진이 사라진 뒤에도 같은 피부절에 작열통과 이질통이 지속되면 대상포진 후 신경통을 고려한다. 가바펜틴은 치료 선택지이며 졸림·어지럼을 살피고 신기능에 맞춰 조절한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. gabapentin이 모든PHN에서 가장효과적이라는 과장 수정. 심근경색병력에서TCA보다 선택할 이유를 설명.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg173/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001739
