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

비만한 37세 여성이 갑자기 왼쪽 팔과 다리의 근력저하가 생겨 내원했다. 최근 장거리 여행을 했고 경구피임약을 복용하며 오른쪽 하퇴는 붓고 붉고 압통이 있었다. 추가 평가에서 가장 가능성 높은 소견은?

## 선택지

A. 심실중격 결손
B. 경동맥 박리
C. 심방세동
D. 난원공 개존

## 해설

정맥혈전 위험인자와 일측 하퇴부종에 급성 국소 뇌신경결손이 동반되어 역설적 색전을 의심한다. PFO D를 통한 일시적 우좌단락으로 정맥 혈전이 동맥순환에 들어갈 수 있다. 환자에게 심부전이 제시된 것은 아니며 실제로 뇌영상·정맥/심장 평가로 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 본문에 없는 심부전 가정 제거. DVT와 뇌색전의 우좌단락 PFO D를 연결.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003904
