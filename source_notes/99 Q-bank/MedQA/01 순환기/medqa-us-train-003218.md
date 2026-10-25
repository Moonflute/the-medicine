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

전벽 심근경색, 말초동맥질환, 난원공개존 병력이 있는 65세 남성이 겨울에 인도에서 넘어져 발견되었다. 오른쪽 다리가 저리면서 동시에 아프고 얼음이나 눈에 미끄러진 것이 아니라 갑자기 넘어졌다고 한다. 아스피린, 심바스타틴, 실로스타졸을 복용하며 맥박은 불규칙하게 불규칙하다. 오른쪽 다리는 창백하고 발등동맥과 후경골동맥 맥박이 없으며 왼쪽은 2+이다. 오른쪽 다리의 가벼운 접촉과 날카로운 자극을 구별하지 못한다. 다음 중 오른쪽 다리의 생존 가능성을 가장 높일 처치는?

## 선택지

A. 경피적 혈관내 스텐트 삽입
B. 리바록사반
C. 카테터 혈전제거술 또는 혈전용해술
D. 헤파린

## 해설

감각소실·창백·무맥의 급성 사지허혈은 즉각적인 혈관외과 평가와 응급 재관류가 필요한 위협 사지이다. 선택지 중 C의 혈전제거/카테터 기반 재관류가 사지 생존을 직접 회복시키는 접근이다. 금기 없으면 평가 중 정맥 unfractionated heparin도 즉시 사용하지만 항응고만으로 재관류를 대체하지 않는다. 실제 방법과 혈전용해 적합성은 운동장애·허혈 정도·출혈 위험 및 신속성에 따라 정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Patent foramen ovale의 특허난원공 오역 수정. 위협 사지 재관류 C와 즉시 heparin 병행을 구분.
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003218
