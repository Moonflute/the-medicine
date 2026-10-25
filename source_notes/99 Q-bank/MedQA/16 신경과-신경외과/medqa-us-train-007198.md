---
type: qbank
schema_version: 1
id: medqa-us-train-007198
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b4f2c2c4eb8d33519983d67bc66fd0995652971864531b0618176f743aad0590
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "코카인 유발 뇌혈관 경련"
  - "국소 발작"
  - "허혈성 뇌졸중"
  - "독세핀"
question_type: mechanism
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rsJzsnpEgKFNlaXp1cmUpLm1k
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

38세 남자가 의식 소실 에피소드가 있은 지 35분 후 응급실에 내원했다. 고객과 저녁 식사 중 갑자기 왼쪽 팔의 근력과 감각이 떨어졌다. 몇 분 뒤 몸이 뻣뻣해지고 팔다리가 심하게 경련한 다음 의식을 잃었다. 이 사건을 기억하지 못한다. 사업 컨설턴트로 일하며 천식과 주요우울장애 병력이 있다. 알부테롤 흡입기와 독세핀을 복용하며, 약이 효과가 없다고 느껴 일주일 전부터 독세핀 용량을 늘렸다. 주말에 맥주 2~3잔을 마시고 코카인을 주 4~5회 사용한다고 인정한다. 도착 시 사람·장소·시간에 대한 지남력은 정상이지만 말이 어눌하다. 체온은 37°C(98.6°F), 맥박 96회/분, 혈압 155/90 mmHg이다. 동공은 양측 동일하고 빛에 반응한다. 신경학적 검사에서 왼쪽 안면 처짐과 왼팔 근력 3/5가 보인다. 이 환자의 증상을 일으킨 가장 가능성 높은 기전은 무엇인가?

## 선택지

A. M3 수용체 길항
B. 딸기 동맥류 파열
C. 경동맥 벽 파열
D. 뇌혈관 경련

## 해설

코카인은 교감신경 작용을 증강하여 뇌혈관 수축과 고혈압을 일으킬 수 있다. 보기 중 뇌혈관연축(D)이 국소 허혈성 증상과 발작의 기전으로 가장 적합하다. 그러나 지속하는 편측 약화를 일과성 허혈발작이라고 확정할 수는 없다. 허혈성/출혈성 뇌졸중과 발작 후 마비 등도 감별해야 하며, 약물 증량에 따른 발작 역치 저하 가능성도 별도로 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 코카인 관련 뇌혈관연축 D의 기전은 유지하되 지속 결손을 이미 소실된 TIA로 단정한 오류 제거.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007198
