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

62세 여성이 장시간 비행 후 오른쪽 다리가 붓고 아프다. 압박 초음파에서 대퇴정맥 혈전이 확인됐다. 신기능은 정상이고 출혈 위험이나 사지 위협은 없다. 적절한 초기 치료는?

## 선택지

A. 탄력 압박 후 항응고 없이 추적 초음파만 시행한다
B. 저용량 아스피린을 시작한다
C. 항응고 없이 하대정맥 필터를 먼저 삽입한다
D. 치료 용량의 경구 아픽사반을 시작한다

## 해설

대퇴정맥을 침범한 근위부 심부정맥혈전증은 항응고가 필요하다. 아픽사반은 적합한 환자에서 헤파린을 먼저 투여하지 않아도 된다. 항응고를 할 수 있고 사지 위협이 없으면 필터나 혈전용해를 일률적으로 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Heparin→warfarin D는 유효하나 모든 DVT의 유일 표준 아님. VKA 선택 시 초기 중첩·INR 조건 명시.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7556153/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003780
- https://doi.org/10.3348/jksr.2016.75.4.233
- https://www.nice.org.uk/guidance/ng158/chapter/Recommendations
- 대한혈액학회 혈전지혈연구회, 정맥혈전색전증 치료 권고: https://pmc.ncbi.nlm.nih.gov/articles/PMC7987480/
