---
type: qbank
schema_version: 1
id: medqa-us-train-000499
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:45618aaf71fbead99c362045adbfef2ed3378f3bcca1523d4c5fe6d3216548c5
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "stress urinary incontinence"
  - "cystocele"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-yalOyLpOq4iCAoVXJpbmFyeSBJbmNvbnRpbmVuY2UpLm1k
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

61세 G4P3 여성이 5년 전부터 기침, 재채기, 신체 활동 시 발생하는 불수의적 소변 유출을 주소로 내원하였다. 야간 소변 유출은 없다고 한다. 51세에 폐경하였다. 그 외 건강하며 호르몬 대체 요법을 포함한 어떠한 약물도 복용하고 있지 않다. 체중은 78kg, 키는 156cm이다. 활력 징후는 정상 범위 내에 있다. 신체 검진상 늑골척추각 압통은 없다. 신경학적 검사는 정상이다. 부인과 검진에서 창백하고 얇아진 외음부 및 질 점막이 관찰되었다. 요도구는 정상으로 보이며, 환자에게 기침을 시켰을 때 소변 유출이 관찰된다. Q-tip 검사는 양성이다. 양손 검진에서 통증 없는 전질벽 팽윤이 관찰된다. 방광내압측정(cystometry)에서 가장 나타날 가능성이 높은 소견은 무엇인가?

## 선택지

A. 정상 잔뇨량, 최대 방광 충만 시 불수의적 배뇨근 수축
B. 정상 잔뇨량, 최소 방광 충만 시 불수의적 배뇨근 수축
C. 증가된 잔뇨량, 최대 방광 충만 시 불수의적 배뇨근 수축
D. 정상 잔뇨량, 불수의적 배뇨근 수축 없음

## 해설

기침·재채기 때 누출되고 Q-tip 검사가 양성이므로 요도 과이동성과 관련된 복압성 요실금이 가장 적합하다. 방광내압검사에서 정상 잔뇨량과 불수의적 배뇨근 수축이 없는 D가 예상된다. Q-tip은 요도 이동성을 평가하는 것이지 질벽 손상 자체를 확인하는 검사는 아니다. 전질벽 팽윤은 골반지지 결함이 함께 있음을 시사한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Q-tip양성을질벽손상검사처럼서술한오류교정. 요도과이동성과복압성요실금D.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000499
