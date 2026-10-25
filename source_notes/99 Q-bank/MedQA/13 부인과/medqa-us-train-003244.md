---
type: qbank
schema_version: 1
id: medqa-us-train-003244
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:469e7a5476ce366d490158163e2abf9ef75293c0a0779530a60d599b2013f950
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "emergency contraception"
  - "copper intrauterine device"
  - "postcoital contraception"
  - "unprotected intercourse"
question_type: prevention
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geuCtOyepey5mCAoSW50cmF1dGVyaW5lIERldmljZSkubWQ
  - MTMg67aA7J246rO8L-ydkeq4ie2UvOyehOuylSAoUG9zdGNvaXRhbCBDb250cmFjZXB0aW9uKS5tZA
difficulty: complex
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

22세 여성(임신 1회, 출산 1회)이 ‘사후피임약’에 대해 상담하러 왔다. 어젯밤 남자친구와 성관계를 했는데 콘돔이 찢어진 것 같고 다른 피임법은 사용하지 않는다. 마지막 월경은 10일 전이며 주기는 규칙적이다. 비만, 천식, 알레르기비염이 있고 알부테롤과 가끔 비강 스테로이드를 사용한다. 성병 병력과 비뇨생식기 증상은 없으며 골반검사도 정상이다. 대학원에 복귀해 또 아이를 가질 여유가 없어 걱정한다. 다음 중 가장 효과적인 응급피임법은?

## 선택지

A. 구리 자궁내장치
B. 고용량 경구피임약 요법
C. 레보노르게스트렐 정제
D. 울리프리스탈 정제

## 해설

구리 IUD(A)는 피임 실패 후 5일 이내 삽입 가능한 매우 효과적인 응급피임이며 지속 피임에도 사용한다. 주로 수정을 방해하고 제거 후 가임력은 회복된다. UPA도 120시간 이내 사용하며 LNG 등 경구법도 24시간이 지나면 모두 무효가 되는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: CuIUD는72시간제한/비가역환경변화가아니며경구응급피임24시간제한도틀림.
- https://www.cdc.gov/contraception/hcp/usspr/emergency-contraception.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003244
