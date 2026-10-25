---
type: qbank
schema_version: 1
id: medqa-us-train-003780
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3a7e0a7953edbe26918ab8e371ce9eacb8a50f23825de0a23c44d53d0553d223
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "deep vein thrombosis"
  - "acute DVT treatment"
  - "heparin bridge"
  - "warfarin"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
question_type: management
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 나이지리아 여성이 미국에 도착한 지 2일 후 오른쪽 다리 통증과 부종으로 내원했다. 도플러 초음파에서 깊은 정맥의 큰 혈전이 확인되었다. 다음 중 가장 적절한 치료 과정은?

## 선택지

A. 와파린 시작
B. 헤파린 시작
C. 조직 플라스미노겐 활성제 치료
D. 헤파린 시작 후 와파린으로 브리징

## 해설

급성 DVT에서 warfarin을 선택한다면 빠르게 작용하는 UFH/LMWH로 시작하고 warfarin과 최소5일 중첩하며 치료범위 INR 달성을 확인하므로 D가 선택지 중 적절하다. Warfarin 단독으로 즉시 시작하지 않는다. 현행에서는 적합한 환자에게 DOAC도 흔히 우선 선택하며 치료기간은 유발인자·출혈위험 등에 맞춘다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Heparin→warfarin D는 유효하나 모든 DVT의 유일 표준 아님. VKA 선택 시 초기 중첩·INR 조건 명시.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7556153/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003780
