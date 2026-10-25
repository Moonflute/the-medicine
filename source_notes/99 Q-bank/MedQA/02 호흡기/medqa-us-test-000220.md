---
type: qbank
schema_version: 1
id: medqa-us-test-000220
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:9c5333bf30dc31e3458ebff955722b5ee45a44d9f1220a8e6c3ee50feaf11d7c
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "낭성섬유증"
  - "CFTR"
  - "기관지확장증"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4sOq0gOyngCDtmZXsnqXspp0gKEJyb25jaGllY3Rhc2lzKS5tZA
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
question_type: mechanism
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4세 여아가 지속되는 기침, 발열, 구토로 응급실에 왔다. 지난 1년 동안 폐렴으로 3번 입원했다. 지난 1주일 동안 걸쭉한 화농성 기침이 있었고 가슴이 ‘무겁다’고 했다. 지난 1주일 동안 대변이 묽고 악취가 났다. 부모는 잦은 입원 때문에 체중이 거의 늘지 않은 것도 걱정하고 있다. 임신 39주에 자연 질식분만으로 태어났고 예방접종은 모두 최신이며 발달 이정표도 잘 달성하고 있었다. 체온은 39.1°C(102.4°F)였고 기면 상태이며 불편해 보였다. 양쪽 폐 기저부에서 수포음과 타진상 둔탁음이 들렸고, 작은 비강 폴립도 관찰되었다. 다음 중 이 아이 증상의 가장 가능성 높은 원인은?

## 선택지

A. 막관통 조절인자(transmembrane regulator)의 기능 이상
B. 류신·이소류신·발린 분해 장애
C. 호흡기 섬모 운동성 장애
D. 림프구 활성 저하

## 해설

반복 폐렴과 화농성 기침, 비강용종에 지방변·성장부진이 동반되어 낭성섬유증을 시사한다. CFTR(낭성섬유증 막전도 조절인자)의 기능 이상(A)으로 상피 이온·수분 이동이 달라져 점액이 끈끈해지고, 기도 감염과 췌장 외분비기능부전이 생길 수 있다. 섬모운동장애도 반복 호흡기감염을 일으킬 수 있지만 췌장성 흡수장애까지 함께 설명하는 점에서 CFTR 이상이 더 합당하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. CFTR 용어 오기를 교정하고 감염/지방흡수장애를 연결하는 기본 기전 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000220
