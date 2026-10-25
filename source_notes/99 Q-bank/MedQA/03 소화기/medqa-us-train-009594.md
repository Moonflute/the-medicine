---
type: qbank
schema_version: 1
id: medqa-us-train-009594
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4895c91153bfd7752f563f2cee87a9d47e58d4e7f0a19adbe241ee5f9b7b5905
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "carcinoid syndrome"
  - "카르시노이드 증후군"
  - "octreotide adverse effect"
related_disease_slugs:
  - MTAg7KKF7JaRL-y5tOultOyLnOuFuOydtOuTnCDspp3tm4TqtbAgKENhcmNpbm9pZCBTeW5kcm9tZSkubWQ
question_type: management
difficulty: complex
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
---

# MedQA US 임상문제

## 문제

53세 여성이 한 달 동안 머리와 목이 ‘두근거리는’ 느낌과 발 부종으로 내원했다. 특별한 유발 요인 없이 간헐적으로 전반적인 천명음이 1~2시간 지속되고 알부테롤은 효과가 없었다. 이전에는 하루 2~3블록을 걸었지만 현재는 1블록만 걸어도 어지럼, 피로, 호흡곤란이 생긴다. 최근 물 같은 비혈성 설사와 복부경련이 있었다. 식사는 균형 잡혀 있고 활력징후는 혈압 146/88 mmHg, 맥박 89회/분, 호흡수 20회/분이다. 경미한 전반적 복부 압통, 경정맥 팽창, 양측 발 부종, 가슴과 복부 모세혈관확장증이 있다. 제3~4번째 늑간 좌측 흉골연에서 심잡음이 들리고 진찰 중 얼굴이 붉어지며 천명이 시작된다. 이 상태의 1차 약물치료에서 가장 가능성 높은 부작용은 무엇인가?

## 선택지

A. 혈전색전증
B. 췌장염
C. 담석증
D. 저혈당

## 해설


정답 C. 홍조·기관지 수축·설사와 우심장 판막병은 carcinoid syndrome을 시사하며 octreotide 같은 somatostatin 유사체로 증상을 조절할 수 있다. 이 약은 담낭 수축과 담즙 배출을 억제해 담니·담석 위험을 높인다. 혈당 조절 이상(저혈당 또는 고혈당)도 생길 수 있으므로 다른 선택지의 모든 대사 부작용을 일괄 부정하지 않는다. 누락 청진 음원 없이도 텍스트의 전형적 증후군으로 약물군을 추론할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009594 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: carcinoid 치료 somatostatin 유사체의 담낭 운동 억제–담석 C를 정확히 설명; 저혈당 가능성까지 부정하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=ad30bb58-5e16-43c4-8fdc-5cef8261eb8f&type=pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009594
