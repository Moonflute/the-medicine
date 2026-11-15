---
type: qbank
schema_version: 1
id: medqa-us-train-002034
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5cac3224bfb4a4fb002bf2d2575c3a9d409fa08a7a5f95b201d2b90f684c689d
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "fifth disease"
  - "parvovirus B19"
  - "erythema infectiosum"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KCE7Je87ISxIO2ZjeuwmCAoRXJ5dGhlbWEgSW5mZWN0aW9zdW0pLm1k
difficulty: complex
answer: B
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

9세 아이가 감기 증상을 앓은 뒤 양쪽 뺨이 붉어지고 팔다리에 그물 모양 발진이 생겼다. 전염성 홍반으로 판단했고, 지금은 열이나 전신 증상이 없다. 면역저하나 혈액질환도 없다. 등교에 대해 어떻게 설명할까?

## 선택지

A. 발진이 완전히 없어질 때까지 등교하지 않는다
B. 대개 발진이 생길 때 전염기가 지나, 몸 상태가 좋으면 등교할 수 있다
C. 혈청 IgM이 음성으로 바뀐 뒤에만 등교한다
D. 예방 항바이러스제를 시작한 뒤 이틀간 쉰다

## 해설

면역이 정상인 아이는 대개 발진이 생기기 전에 전파력이 가장 높다. 발진만 남았고 몸 상태가 좋다면 발진 소실을 기다릴 필요는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 파보 B19 발진기의 등교 C 유지. 구순 홍반 오역을 뺨 발진으로 교정.
- https://www.cdc.gov/parvovirus-b19/prevention-treatment/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002034
