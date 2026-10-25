---
type: qbank
schema_version: 1
id: medqa-us-train-001348
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b403e39eb29062c255fdc534494230f31c57aa8bd9bc856e942bb2396d2993cc
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hyperthyroidism"
  - "Graves disease"
  - "thyrotoxic myopathy"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVydGh5cm9pZGlzbSkubWQ
  - MDQg64K067aE67mEL-q3uOugiOydtOu4jOyKpOuzkSAoR3JhdmVzJyBEaXNlYXNlKS5tZA
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

44세 여성이 쇠약감으로 내원했다. 높은 선반에 책을 올려놓거나 앉은 자세에서 일어나기 어렵다고 한다. 근육통이나 새로운 발진은 없다. 움직일 때 악화되는 떨림이 있고 잠들거나 잠을 유지하기 어렵다. 2개월 동안 의도하지 않게 약 10 lb의 체중이 감소했다. 인슐린 펌프로 조절하는 제1형 당뇨병 병력이 있다. 어머니는 전신홍반루푸스, 아버지는 공황장애 병력이 있다. 체온은 98.6°F (37°C), 혈압은 140/85 mmHg, 맥박은 102회/분, 호흡수는 17회/분이다. 신체검사에서 약간 땀을 흘리고 안절부절못하며 눈꺼풀 후퇴와 가늘어진 머리카락이 보인다. 상하지 근위부 근력은 4/5이고 이두근 및 슬개건 반사는 3+이다. 다음 중 가장 가능성 높은 검사실 소견은 무엇인가?

## 선택지

A. 항-Mi-2 항체 양성
B. 갑상샘자극호르몬 감소
C. 적혈구 침강속도 증가
D. 검사실 결과 정상

## 해설


갑상선 기능항진(그레이브스병)에서는 TSH가 감소하고, 갑상선 자극 호르몬 수치가 낮아진다. 환자의 체중 감소, 불안, 눈꺼풀 후퇴 등은 갑상선 항진을 시사한다. 따라서 가장 가능성 높은 검사소견은 TSH 감소이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: T1DM 배경에 체중감소·서맥 아닌 빈맥/떨림·반사항진과 무통 근위부약화는 갑상샘중독성 근병증. TSH↓ B로 염증성 근염과 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001348
