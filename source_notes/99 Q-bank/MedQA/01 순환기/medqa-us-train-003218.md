---
type: qbank
schema_version: 1
id: medqa-us-train-003218
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:75876927ff84c278834d2962218e7a70a7102e384635424f6df48fa8fe6d4747
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "acute limb ischemia"
  - "arterial embolism"
  - "catheter-directed thrombectomy"
  - "limb salvage"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDrj5nrp6Ug7Y-Q7IOJIChBY3V0ZSBBcnRlcmlhbCBPY2NsdXNpb24pLm1k
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2lsb3N0YXpvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9SaXZhcm94YWJhbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 남성이 한 시간 전 시작된 다리의 심한 통증과 저림으로 내원했다. 오른발이 차고 맥박이 없으며 감각이 떨어지고 발목을 잘 움직이지 못한다. 금기가 없어 정맥 비분획 헤파린을 시작했다. 다리를 살리기 위해 다음에 할 처치는?

## 선택지

A. 항응고만 유지하며 다음 날까지 관찰
B. 우선 경구 리바록사반으로 바꾸고 퇴원
C. 혈관팀에서 즉시 재혈관화를 시행하도록 준비
D. 보행운동으로 걷는 거리를 확인

## 해설

근력 저하를 동반한 급성 사지 허혈은 즉시 위협받는 사지에 해당할 수 있다. 헤파린은 혈전 진행을 막지만 혈류 자체를 회복시키지 못한다. 혈관팀이 지체 없이 재개통 방법을 결정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Patent foramen ovale의 특허난원공 오역 수정. 위협 사지 재관류 C와 즉시 heparin 병행을 구분.
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003218
- ACC/AHA 말초동맥질환 진료지침(2024): https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251
