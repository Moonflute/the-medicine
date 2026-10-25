---
type: qbank
schema_version: 1
id: medqa-us-train-009385
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:240d7f503b7059d16bbed2a25b4786c7f67d6605219726c865cf62f8c41843ba
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "hemophilia"
  - "혈우병"
  - "hemarthrosis"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2YiOyasOuzkSAoSGVtb3BoaWxpYSkubWQ
question_type: prevention
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9EZXNtb3ByZXNzaW4ubWQ
---

# MedQA US 임상문제

## 문제

13세 남자가 오른쪽 무릎 관절통으로 내원했다. 평생 양쪽 무릎의 통증과 삼출이 여러 번 있었고 쉽게 멍이 들었다. 대부분 커피 테이블에 무릎을 부딪힌 것 같은 가벼운 외상 후 발생했지만 때로는 자발적으로 생겼다. 외삼촌과 할아버지도 비슷한 문제가 있었다. 최근 외상은 없고 현재 통증은 둔하다고 한다. 장거리 달리기 선수로 자주 조깅하며 육상대회를 준비 중이다. 관절은 따뜻하지만 발적은 없고 큰 삼출이 있으며 능동 및 수동 운동 모두 통증이 있다. 이 합병증을 예방할 수 있었던 예방적 치료는 무엇인가?

## 선택지

A. 데스모프레신
B. 동결침전제
C. 응고인자 농축제
D. 증상 발작 사이의 추가 휴식

## 해설


가벼운 외상 또는 자발적으로 반복되는 혈관절증과 남성 가족력은 혈우병을 시사한다. 선택지 중 적절한 예방은 정기 응고인자 농축제(C)이며, 관절 손상을 줄이기 위해 출혈 예방 목표에 맞추어 개별화한다. 휴식만으로 응고인자 결핍을 보완할 수 없다. DDAVP는 반응이 확인된 일부 경증 혈우병 A에서 제한적으로 쓰며 모든 혈우병의 장기 관절출혈 예방을 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009385 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원정답 C 응고인자 농축제와 달리 해설이 D 휴식을 정답으로 주장한 명백한 불일치. 반복 관절출혈 예방은 정기 지혈 예방요법이며 휴식 단독이 아님.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www1.wfh.org/publication/files/pdf-1863.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009385
