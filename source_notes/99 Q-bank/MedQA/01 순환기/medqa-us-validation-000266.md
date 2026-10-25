---
type: qbank
schema_version: 1
id: medqa-us-validation-000266
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:77a3a481a904f1da887a0a796cbdaf75f58c342cde49e4094426aa6085305769
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "대동맥판막 협착증"
  - "수축기 잡음"
  - "쪼그려 앉기"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDtmJHssKkgKEFvcnRpYyBTdGVub3NpcykubWQ
question_type: mechanism
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
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

79세 남성이 2개월 동안 점점 심해지는 운동 시 호흡곤란으로 일차진료를 받으러 왔다. 처음에는 정원에서 일할 때 숨을 돌려야 했지만 이제는 집 계단을 멈추지 않고 오를 수 없다. 30년 동안 제2형 당뇨병이 있어 메트포르민과 시타글립틴을 복용한다. 혈압 110/50 mmHg, 체온 37.1°C, 요골맥박 80회/분으로 규칙적이다. 진찰에서 오른쪽 흉골 상연에 큰 수축기 잡음이 들리고 경동맥으로 방사된다. 다음 중 이 잡음의 강도를 증가시키는 것은?

## 선택지

A. 쪼그려 앉기
B. 앉은 자세에서 일어서기
C. 이뇨제
D. 혈액량 감소

## 해설

경동맥으로 방사되는 우측 상흉골연의 박출성 잡음은 대동맥판 협착을 시사한다. 쪼그려 앉으면 정맥환류와 전방 혈류가 증가하여 협착 판막을 통과하는 잡음이 커질 수 있으므로 A가 적합하다. 배출량이 감소할수록 잡음이 커진다는 일반화는 잘못이며, 동적 유출로 폐쇄인 HCM의 반응과 구별한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: AS 잡음이 배출량 감소로 커진다는 역방향 설명을 유량 증가 기전으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000266
