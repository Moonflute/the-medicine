---
type: qbank
schema_version: 1
id: medqa-us-train-003904
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b97d2d542f2a521484653610f96368ef28813dd072792acd27e9cfcac00a1209
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "paradoxical embolism"
  - "patent foramen ovale"
  - "deep vein thrombosis"
  - "ischemic stroke"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
question_type: mechanism
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

37세 여성이 장거리 비행 뒤 오른쪽 종아리가 붓고, 이틀 뒤 갑자기 왼쪽 팔다리 힘이 빠졌다. 하지 정맥 초음파에서 근위부 심부정맥혈전이 확인됐고, 뇌 MRI에서 급성 색전성 뇌경색이 보인다. 정맥 혈전이 뇌동맥으로 들어갈 수 있는 통로는?

## 선택지

A. 우좌 단락이 없는 작은 심실중격결손
B. 혈류가 좌우로만 흐르는 동맥관개존
C. 좌심방이의 혈전
D. 일시적인 우좌 단락이 일어나는 난원공개존

## 해설

난원공이 남아 있으면 우심방 압력이 일시적으로 높아질 때 정맥 혈전이 좌심방을 거쳐 동맥순환으로 이동할 수 있다. 이를 역설적 색전이라 한다. 난원공개존만 발견됐다고 뇌경색의 원인으로 확정하지는 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 본문에 없는 심부전 가정 제거. DVT와 뇌색전의 우좌단락 PFO D를 연결.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003904
