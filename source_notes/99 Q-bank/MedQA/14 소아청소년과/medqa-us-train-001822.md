---
type: qbank
schema_version: 1
id: medqa-us-train-001822
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1b39c12d33f323b4c0f6bc1c3aec55ca9e9fb9fedff22e3467575561ebc89566
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "cystic fibrosis"
  - "CFTR chloride channel"
  - "malabsorption"
question_type: mechanism
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
difficulty: standard
answer: A
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

2세 남아가 2주간 지속된 물설사로 소아과에 왔다. 과거에도 물설사를 몇 번 했지만 며칠 내에 호전되지 않은 것은 이번이 처음이다. 아버지는 아이의 변이 거품이 많고 특유의 악취가 난다고 한다. 설사 외에도 지난 2년 동안 독감을 여러 번 앓았고 폐렴으로 두 차례 입원했다. 저체중이고 창백하며 탈수되어 보인다. 혈압 80/50 mm Hg, 맥박 110/min, 호흡 18/min이고 폐에서 거친 연속성 호흡음(rhonchi)이 들린다. 다음 중 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 막관통 이온통로 결함
B. 일차성 섬모운동이상증
C. 분지사슬 아미노산 축적
D. 페닐알라닌 수산화효소 기능장애

## 해설

반복 호흡기 감염, 성장 부진 및 악취가 나는 거품성 변은 낭성섬유증의 호흡기·소화기 침범을 시사한다. CFTR은 염소·중탄산 이온 수송에 관여하는 막관통 통로로, 그 기능 이상(A)이 분비물과 외분비 기능에 영향을 준다. 본문은 원인 기전을 묻지 검사 선택을 묻는 것이 아니며, '전압-클램프가 표준검사'라는 해설은 해당하지 않는다. 신생아기 증상도 원문에 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: CFTR 기전을 전압-클램프 표준검사로 바꾼 잘못된 해설과 원문에 없는 신생아기 증상을 제거하고 rhonchi 번역을 명확히 했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001822
