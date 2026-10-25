---
type: qbank
schema_version: 1
id: medqa-us-train-009707
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:835b1c58b3d0728cbe7dd7f6a9e3437bb8aa8c3cf01b0c5a4d063219aa7baa7f
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "decreased fetal movement"
  - "태동 감소"
  - "biophysical profile"
  - "Fetal distress"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoOyEsSDri7nrh6jrs5EgKEdlc3RhdGlvbmFsIERpYWJldGVzIE1lbGxpdHVzKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzoxMSDsgrDrtoDsnbjqs7zCt-yGjOyVhC9PeHl0b2Npbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 30주인 28세 G1P0 여성이 최근 5일 동안 아기 움직임이 감소하여 산전검진을 받으러 왔다. 한 시간 동안 태동을 8번만 느꼈다고 한다. 피리독신이 필요할 정도의 입덧 병력이 있고 2분기 초음파에서 태반 부착 이상은 없었다. 활력징후와 신체검사는 정상이며 자궁저 높이는 28 cm, 태아 맥박은 140회/분이다. 외부 태아 모니터링 중 진동음 자극으로 2시간 동안 8회의 움직임을 느꼈다. 다음으로 가장 적절한 처치는 무엇인가?

## 선택지

A. 분만 유도
B. 옥시토신 도전검사
C. 생물리학적 계수
D. 입원 모니터링

## 해설

지속적 태동 감소로 NST/초음파 평가가 필요하며 초기 감시가 충분히 안심되지 않으면 BPP(C)로 확장 평가한다. BPP는 NST와 태아 호흡운동·큰 몸 움직임·근긴장·양수량을 평가한다. 태동 수만으로 NST를 양성/음성으로 분류하거나 즉시 분만을 결정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: ‘비생물학적 프로파일’ 등 잘못된 검사명·구성 수정.
- https://www.acog.org/womens-health/faqs/special-tests-for-monitoring-fetal-well-being

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009707
