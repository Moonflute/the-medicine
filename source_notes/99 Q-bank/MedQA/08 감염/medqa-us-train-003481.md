---
type: qbank
schema_version: 1
id: medqa-us-train-003481
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e6a6983d37422106d48bdbdd3f61042d947e301d8e24758700e9686244308e31
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "acute hepatitis A"
  - "hepatitis A immunity"
  - "up-to-date vaccination"
  - "postexposure prophylaxis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEgQe2YlSDqsITsl7wgKEFjdXRlIEhlcGF0aXRpcyBBKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: prevention
difficulty: complex
answer: A
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

급성 A형간염으로 진단된 보호자와 살던 4세 아이가 5일 전에 마지막으로 노출됐다. 아이는 건강하고 A형간염 접종 기록이 없다. 적절한 노출 후 예방은?

## 선택지

A. 지금 A형간염 백신을 접종한다
B. B형간염 면역글로불린을 투여한다
C. 아이가 황달을 보일 때 처음 A형간염 백신을 접종한다
D. 건강한 아이에게 항바이러스제를 먼저 투여한다

## 해설


건강한 12개월 이상 미접종 밀접 접촉자는 노출 후 2주 이내 A형간염 백신을 접종한다. 면역저하나 만성간질환 등이 있으면 면역글로불린 병용 여부도 따로 판단한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003481 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 어머니의 anti-HBs를 아이 검사로 오독하고 HepB 접종으로 HAV 예방을 설명한 오류 교정; 최신 소아 HAV 접종 완료 맥락의 B 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/yellow-book/hcp/travel-associated-infections-diseases/hepatitis-a.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003481
- https://www.kdca.go.kr/bbs/kdca/55/304417/download.do
