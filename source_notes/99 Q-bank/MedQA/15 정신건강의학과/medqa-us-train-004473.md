---
type: qbank
schema_version: 1
id: medqa-us-train-004473
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3c16c22ca512b9b7a60cfe8319e2297f7cef6b9eaf171f7aa00a0774cadc05e8
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "자살 시도"
  - "자살 위험 평가"
  - "이전 자살 시도"
question_type: risk_factor
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2hsb3J0aGFsaWRvbmUubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9HbGltZXBpcmlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

60세 백인 남성이 타이레놀 한 병을 복용했다는 말을 들은 룸메이트와 함께 응급실에 왔다. 갑자기 슬프고 매우 외로워져 주변에 있던 약을 충동적으로 과량 복용했다고 한다. 곧바로 구토를 유도해 대부분의 약을 토해내고 룸메이트에게 도움을 요청했다. 과거력으로 고혈압과 당뇨병이 있다. 클로르탈리돈, 메타돈과 글리메피리드를 규칙적으로 복용한다. 가족 없이 혼자 방에 살며 대부분 혼자 지낸다. 활력징후는 정상이고 신체검사에서 이상은 없다. 환자는 여전히 삶을 즐기고 있으며 약을 과량 복용하려 했던 것을 후회한다고 말한다. 며칠 동안은 괜찮겠지만 다시 슬퍼지면 복용할 약이 한 병 더 있다고 말한다. 다음 중 향후 자살을 다시 시도할 가능성을 가장 잘 예측하는 요인은 무엇인가?

## 선택지

A. 이전에 자살을 시도한 적이 있음
B. 자살 계획이 있음
C. 인종
D. 사회적 지지 부족

## 해설

과거 자살 시도는 재시도 위험과 강하게 관련되어 선택지 A가 출제 의도에 부합한다. 그러나 이 환자는 다시 복용할 약이 있다고 말해 현재의 계획·수단 접근성도 중요하다. 후회·도움 요청·정상 활력징후만으로 안전을 보장할 수 없고 유도 구토로 중독 위험이 제거됐다고 볼 수도 없다. NICE는 단일 점수나 전반적 위험 등급으로 미래 자살을 예측하거나 치료·퇴원을 결정하지 말고 개인의 즉각적·장기적 안전 필요를 평가하도록 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 자살 시도력이라는 시험의 위험인자 답을 유지하되 단일 예측인자로 현재의 구체적 계획과 약물 접근성을 무시하지 않도록 현행 NICE 안전 원칙을 명시했다.
- https://www.nice.org.uk/guidance/ng225/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004473
