---
type: qbank
schema_version: 1
id: medqa-us-train-000139
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:337943de9974ef319c9046396b5d00e9225fa31788dc0462c7687cf4492f412c
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "deep vein thrombosis"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
question_type: mechanism
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 남성이 지난 몇 시간 동안 발생한 왼쪽 다리의 통증과 부종으로 응급실에 내원하였다. 환자는 2일 전 시드니에서 로스앤젤레스로 여행하였다. 10년 전 제2형 당뇨병을 진단받고 메트포르민(metformin)을 복용 중이다. 25년 동안 하루 한 갑씩 흡연하였다. 체온은 36.9°C, 혈압은 140/90 mm Hg, 맥박은 분당 90회이다. 신체 검진상 왼쪽 종아리 둘레가 오른쪽보다 5 cm 더 크다. 왼쪽 다리는 오른쪽보다 더 붉게 보이며 표재정맥이 확장되어 있다. 정맥 이중 초음파(venous duplex ultrasound)에서 압박되지 않는 소견이 관찰된다. 이 환자의 질환 기전으로 가장 적절한 것은 무엇인가?

## 선택지

A. 정맥 혈류 장애
B. 림프 혈류 장애
C. 심부 근막까지 확장될 수 있는 피하 연조직 감염
D. 진피 및 피하 조직의 감염

## 해설


왼쪽 종아리의 부종, 통증, 피부 발적, 표재정맥 확장, 압박되지 않는 정맥 초음파 소견은 깊은 정맥 혈전증(DVT)을 시사한다. DVT는 정맥 내 혈류 정체와 혈전 형성으로 인해 발생한다. 따라서 정답은 정맥 혈류 장애이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/4선지/정답 A/해설 읽음. 장거리 비행 후 편측 종창과 압박되지 않는 정맥은 DVT로 정맥 혈류장애/정체 기전과 일치. 치료·검사지침 검증 아닌 기초 내용 검토.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000139
