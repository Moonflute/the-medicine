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
answer: D
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

67세 남성이 3개월 동안 오른쪽 흉부의 점점 심해지는 작열통과 간헐적인 전기 충격 같은 통증으로 내원했다. 2주 전부터 옷도 견디기 어려울 정도로 심해졌다. 3개월 전 오른쪽 유두와 겨드랑이 주위에 발진이 생겼다가 일주일 후 사라졌다. 2년 전 심근경색 병력이 있고 47년 동안 하루 한 갑을 피웠다. 오른쪽 흉부의 가벼운 접촉 감각이 증가되어 있다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 설하 질산염
B. 경구 삼환계 항우울제
C. 경구 팜시클로버
D. 경구 가바펜틴

## 해설

피부절발진 후3개월 지속되는 작열통·전기충격통/접촉통은 대상포진후신경통이다. 가바펜틴(D)은 적절한 신경병성통증 치료이며 과거심근경색은 TCA의 심장부작용을 더 신중하게 고려할 이유이다. 이미사라진발진에 팜시클로버를 시작해 만성신경통을 치료하는 것은 아니다. 가바펜틴도 신장기능에 맞춰 사용하고 졸림/낙상위험을 감시하며 모든대안보다 항상 우월한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. gabapentin이 모든PHN에서 가장효과적이라는 과장 수정. 심근경색병력에서TCA보다 선택할 이유를 설명.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg173/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001739
